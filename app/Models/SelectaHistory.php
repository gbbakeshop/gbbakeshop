<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SelectaHistory extends Model
{
    use HasFactory;
    protected $fillable = [
        'branchid',
        'userid',
        'message',
        'date'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'userid','id');
    }
}
