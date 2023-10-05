<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchRawMaterials extends Model
{
    use HasFactory;
    protected $fillable = [
        'branchid',
        'raw_materials',
        'raw_materials_id',
        'quantity',
        'bind',
        'warning',
     ];
   
}
