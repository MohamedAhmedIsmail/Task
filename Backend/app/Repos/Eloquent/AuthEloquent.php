<?php

namespace App\Repos\Eloquent;

use App\Classes\Response;
use App\Models\Admins;
use App\Repos\Base\BaseRepoEloquent;
use App\Repos\Contracts\AuthContract;
use Illuminate\Http\Response as ResponseCode;
use Illuminate\Support\Facades\Auth;


class AuthEloquent Extends BaseRepoEloquent implements AuthContract
{
    /**
     * UserRepository constructor.
     *
     * @param Admins $role
     */
    public function __construct(Admins $admin)
    {
        parent::__construct($admin);
    }
    public function userLogin($requestedData)
    {

        if(Auth::attempt($requestedData))
        {
            $authUser = Auth::user();
            return $response = new Response(['data'=>$this->getUserData($authUser)],ResponseCode::HTTP_OK);
        }
        else
        {
            return $response = new Response("البيانات لا تتطابق مع سجلاتن", ResponseCode::HTTP_UNAUTHORIZED, ['error' => ['Unauthenticated.']]);
        }
    }
    public function Login($requestData)
    {

        if(Auth::attempt($requestData))
        {
            $authUser = Auth::user();
            if ($authUser->isActive == 0)
            {
                $authUser->tokens()->delete();
                Auth::logout();
                return $response = new Response("Can't log in", ResponseCode::HTTP_UNAUTHORIZED, ['error' => ['Not active.']]);
            }
            return $response = new Response(['data'=>$this->getUserData($authUser)],ResponseCode::HTTP_OK);
        }
        else
        {
            return $response = new Response("البيانات لا تتطابق مع سجلاتن", ResponseCode::HTTP_UNAUTHORIZED, ['error' => ['Unauthenticated.']]);

        }
    }
    public function Logout()
    {
        if (auth()->check())
        {
            auth()->user()->tokens()->delete();
            Auth::logout();
        }
        return $response = new Response("تم تسجيل الخروج بنجاح", ResponseCode::HTTP_OK);
    }
   public function refresh()
   {
       $admin = Auth::user();
       $admin->tokens()->delete();
       return $this->getUserData($admin);
   }
   public function getUserData($authUser)
   {
       $data['id'] = $authUser->id;
       $data['name'] = $authUser->name;
       $data['email'] = $authUser->email;
       $data['mobile_phone'] = $authUser->mobile_phone;
       $data['isActive'] = $authUser->isActive;
       $data['isSuperAdmin'] = $authUser->isSuperAdmin;
       $data['token'] = 'Bearer ' . $authUser->createToken($authUser->name)->plainTextToken;
       return $data;
   }

}
