<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectedIngredients extends Model
{
    use HasFactory;
    protected $fillable = [
        'raw_materials_id',
        'raw_materials',
        'token',
        'quantity',
        'bind'
    ];
    
}
