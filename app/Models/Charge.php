<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Charge extends Model
{
    use HasFactory;
    protected $fillable = [
       'branchid',
       'userid',
       'breadid',
       'quantity',
       'amount',
       'discription',
       'type',
       'date',
       'status'
    ];
    protected $primaryKey = 'userid';
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'userid',  'id');
    }
}
