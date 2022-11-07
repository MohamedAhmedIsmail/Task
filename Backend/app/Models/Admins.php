<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use DateTimeInterface;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Admins extends Authenticatable implements JWTSubject
{
    use HasFactory,HasApiTokens,Notifiable;

    protected $fillable = ['email','name','mobile_phone','role', 'password', 'isActive'];
    protected $hidden = ['password'];
    protected $guard_name = 'web';


    public function scopeActive($query)
    {
        return $query->where('isActive', 1);
    }

    public function scopeNotActive($query)
    {
        return $query->where('isActive', 0);
    }

    public function scopeSuperAdmin($query)
    {
        return $query->where('isSuperAdmin', 1);
    }

    public function scopeNotSuperAdmin($query)
    {
        return $query->where('isSuperAdmin', 0);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d h:i A');
    }
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}
