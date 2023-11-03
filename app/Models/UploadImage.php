<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UploadImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'expenses_id',
        'file_name',
        'date',
    ];
   
}
