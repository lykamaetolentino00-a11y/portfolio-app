<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'title' => 'Mobile Application UI Design',
            'description' => 'A mobile application interface design project focused on organized layouts, intuitive navigation, and user-friendly screens for different application features.',
            'category' => 'design',
            'tools' => 'Figma',
            'image' => 'projects/project-mobile-ui.png',
            'date_completed' => '2026-10-09',
        ]);

        Project::create([
            'title' => 'Personal Portfolio Website',
            'description' => 'A personal portfolio website to showcase my background, skills, academic projects, and contact information. It gave me practical experience in front-end web development.',
            'category' => 'web',
            'tools' => 'HTML, Tailwind CSS, JavaScript',
            'image' => 'projects/project-portfolio.png',
            'date_completed' => '2026-05-08',
        ]);

        Project::create([
            'title' => '3D Modeling and Animation',
            'description' => 'A 3D design project that explores modeling, lighting, materials, and animation while developing creativity and understanding of 3D visualization.',
            'category' => 'design',
            'tools' => 'Blender',
            'image' => 'projects/project-3d.png',
            'date_completed' => '2026-10-09',
        ]);
    }
}
