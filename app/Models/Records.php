<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Records extends Model
{
    use HasFactory;
    protected $fillable = [
        'branchid',
        'breadid',
        'bakerid',
        'salerid',
        'bread_name',
        'beginning',
        'new_production',
        'quantity',
        'remaining',
        'soldout',
        'bread_out',
        'total',
        'charge',
        'overs',
        'sales',
        'status',
        'remarks1',
        'remarks2',
        'date',
    ];

}