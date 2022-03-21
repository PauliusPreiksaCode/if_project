<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\startuolis_effect;

class startuolis_button extends Model
{
    use HasFactory;

    public function Effect()
    {
        return $this->hasMany(startuolis_effect::class, 'id');
    }
}
