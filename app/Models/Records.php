<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Records extends Model
{
    use HasFactory;
    protected $fillable = [
        'branchid',
        'breadid',
        'bakerid',
        'sellerid',
        'bread_name',
        'price',
        'beginning',
        'new_production',
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
    protected $primaryKey = 'breadid';
    public function getBreads(): BelongsTo
    {
        return $this->belongsTo(Breads::class, 'breadid', 'id');
    }

}