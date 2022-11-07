<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $table = 'movies';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'description','rate','image', 'category_id','created_at', 'updated_at'];

    public function category()
    {
        return $this->belongsTo('App\Models\Category','category_id');
    }
}
