<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    // GET /  ->  the public portfolio page, with the projects from the database
    public function index()
    {
        return Inertia::render('Portfolio', [
            'projects' => Project::orderByDesc('date_completed')->get(),
        ]);
    }
}
