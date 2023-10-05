<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ingredients extends Model
{
    use HasFactory;
    protected $fillable = [
        'selected_ingredients_token',
        'code',
        'target',
     ];
     
    protected $primaryKey = 'selected_ingredients_token';
    
    public function selectedIngredients(): HasMany
    {
        return $this->hasMany(SelectedIngredients::class,'token');
    }
    
}
