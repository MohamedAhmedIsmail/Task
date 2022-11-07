<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class AdminToken extends Model
{
    use HasFactory;
    protected $fillable = ['userToken','admin_id'];
    public static function token(Admins $admins)
    {
        return self::where('admin_id',$admins->id)->first();
    }

    public function admin()
    {
        return $this->belongsTo(Admins::class);
    }

    public static function createToken($usertoken,Admins $admins)
    {
        $token = Str::random(20);
        
        if($usertoken != null)
        {
            $usertoken->deleteToken($usertoken);
        }
        
        AdminToken::create(['userToken' => $token,'admin_id' => $admins->id]);

        return $token;
    }

    public function deleteToken()
    {
        $this->delete();
        return $this;
    }
}
