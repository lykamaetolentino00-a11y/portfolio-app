<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // Only these columns can be filled through create() and update()
    protected $fillable = [
        'title',
        'description',
        'category',
        'tools',
        'project_url',
        'repo_url',
        'image',
        'date_completed',
    ];

    protected function casts(): array
    {
        return [
            'date_completed' => 'date:Y-m-d',
        ];
    }
}
