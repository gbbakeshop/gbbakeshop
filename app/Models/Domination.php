<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Domination extends Model
{
    use HasFactory;
    protected $fillable = [
        'branchid',
        'bills',
        'pcs',
        'total',
        'date',
    ];
    
}
