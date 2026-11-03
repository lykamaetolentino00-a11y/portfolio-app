<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    // The only categories a project may have (also used by the form's dropdown)
    public const CATEGORIES = ['web', 'design', 'school'];

    // GET /projects  ->  list of all projects
    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::orderByDesc('date_completed')->get(),
            'success' => session('success'), // flash message after create/update/delete
        ]);
    }

    // GET /projects/create  ->  empty form
    public function create()
    {
        return Inertia::render('Projects/Create', [
            'categories' => self::CATEGORIES,
        ]);
    }

    // POST /projects  ->  validate, save, redirect
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate($this->rules(), $this->messages());

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        Project::create($data);

        return redirect()
            ->route('projects.index')
            ->with('success', 'Project added successfully.');
    }

    // GET /projects/{project}/edit  ->  form filled with the current values
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project,
            'categories' => self::CATEGORIES,
        ]);
    }

    // PUT /projects/{project}  ->  validate, update, redirect
    public function update(Request $request, Project $project): RedirectResponse
    {
        // Passing $project lets the unique rule ignore this record's own title
        $data = $request->validate($this->rules($project), $this->messages());

        if ($request->hasFile('image')) {
            // A new image was uploaded: remove the old file, keep the new path
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            $data['image'] = $request->file('image')->store('projects', 'public');
        } else {
            // No new image: keep the one we already have
            unset($data['image']);
        }

        $project->update($data);

        return redirect()
            ->route('projects.index')
            ->with('success', 'Project updated successfully.');
    }

    // DELETE /projects/{project}  ->  remove the record and its image file
    public function destroy(Project $project): RedirectResponse
    {
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }

        $project->delete();

        return redirect()
            ->route('projects.index')
            ->with('success', 'Project deleted successfully.');
    }

    /**
     * Validation rules shared by store() and update().
     */
    private function rules(?Project $project = null): array
    {
        return [
            'title' => [
                'required',
                'string',
                'min:3',
                'max:100',
                Rule::unique('projects', 'title')->ignore($project?->id),
            ],
            'description' => ['required', 'string', 'min:20', 'max:500'],
            'category' => ['required', Rule::in(self::CATEGORIES)],
            'tools' => ['required', 'string', 'max:150'],
            'project_url' => ['nullable', 'url', 'max:255'],
            'repo_url' => ['nullable', 'url', 'max:255'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'date_completed' => ['required', 'date', 'before_or_equal:today'],
        ];
    }

    /**
     * Custom error messages (they replace Laravel's default wording).
     */
    private function messages(): array
    {
        return [
            'title.required' => 'Please give your project a title.',
            'title.unique' => 'You already have a project with this title.',
            'description.min' => 'Describe your project in at least 20 characters.',
            'category.in' => 'Choose Web, Design, or School.',
            'project_url.url' => 'Enter a full link, like https://example.com.',
            'repo_url.url' => 'Enter a full link, like https://github.com/you/repo.',
            'image.image' => 'The file must be an image.',
            'image.mimes' => 'Only JPG, PNG, or WEBP images are allowed.',
            'image.max' => 'The image must not be larger than 2 MB.',
            'image.uploaded' => 'The image must not be larger than 2 MB.',
            'date_completed.before_or_equal' => 'The completion date cannot be in the future.',
        ];
    }
}
