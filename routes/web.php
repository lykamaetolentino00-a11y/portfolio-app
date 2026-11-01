<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Public portfolio page
Route::get('/', [PortfolioController::class, 'index'])->name('home');

// CRUD for projects: index, create, store, edit, update, destroy
// (show is not used, so it is left out)
Route::resource('projects', ProjectController::class)->except(['show']);
