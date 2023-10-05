<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\SelectedBreads;

class Recipes extends Model
{
    use HasFactory;
    protected $fillable = [
       'selected_breads_token',
       'selected_ingredients_id',
    ];
    protected $primaryKey = 'selected_breads_token';

    public function selectedBreads(): HasMany
    {
        return $this->hasMany(SelectedBreads::class,'token');
    }
    public function selectedIngredients(): HasMany
    {
        return $this->hasMany(SelectedIngredients::class,'token');
    }
    

}
