<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Attendance extends Model
{
    use HasFactory;
    protected $fillable = [
       'userid',
       'branchid',
       'am_in',
       'am_out',
       'pm_in',
       'pm_out',
       'am2_in',
       'am2_out',
       'pm2_in',
       'pm2_out',
       'date',
       'date2',
       'date3',
       'total',
     ];
   
     public function user(): BelongsTo
     {
         return $this->belongsTo(User::class, 'userid', 'id');
     }
}
