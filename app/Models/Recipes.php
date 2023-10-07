<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recipes extends Model
{
    use HasFactory;

    protected $fillable = [
        'selected_breads_token',
        'selected_ingredients_token',
        'target'
    ];

    protected $table = 'recipes';

    // Since you have a composite primary key, you should set $primaryKey as an array of the columns.
    protected $primaryKey = ['selected_breads_token', 'selected_ingredients_token'];

    public $incrementing = false;

    // Define the relationship with SelectedBreads model
    public function selectedBreads(): HasMany
    {
        return $this->hasMany(SelectedBreads::class, 'token', 'selected_breads_token');
    }

    // Define the relationship with SelectedIngredients model
    public function selectedIngredients(): HasMany
    {
        return $this->hasMany(SelectedIngredients::class, 'token', 'selected_ingredients_token');
    }

    public function ingredientsData(): BelongsTo
    {
        return $this->belongsTo(Ingredients::class, 'token', 'selected_ingredients_token');
    }
}
