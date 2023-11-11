<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchSelecta extends Model
{
    use HasFactory;
    protected $fillable = [
       'branchid',
       'selectaid',
       'product_name',
       'quantity',
       'price',
       'warning',
     ];
 
}
