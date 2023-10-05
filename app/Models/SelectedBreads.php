<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectedBreads extends Model
{
    use HasFactory;
    protected $fillable = [
        'bread_id',
        'bread_name',
        'token'
     ];
}
