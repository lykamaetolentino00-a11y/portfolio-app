<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Lyka Tolentino's public portfolio (the projects come from the database)
Route::get('/', [PortfolioController::class, 'index'])->name('home');

// Rachel Anne Bulwag's portfolio. It has no database content,
// so a direct Inertia route is enough (no controller needed).
Route::inertia('/bulwag', 'Bulwag')->name('bulwag');

// CRUD for projects: index, create, store, edit, update, destroy
// (show is not used, so it is left out)
Route::resource('projects', ProjectController::class)->except(['show']);
