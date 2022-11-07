<?php

namespace App\Repos\Eloquent;

use App\Classes\Response;
use App\Models\Admins;
use App\Repos\Base\BaseRepoEloquent;
use App\Repos\Contracts\AdminContract;
use Illuminate\Http\Response as ResponseCode;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class AdminEloquent Extends BaseRepoEloquent implements AdminContract
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
    public function listAdmins($request)
    {
        $admins = $this->all();
        return $admins;
    }

    public function login()
    {

        $credentials = request(['email', 'password']);
        if (! $token = auth()->guard('admins')->attempt($credentials)) {
            return response()->json(['error' => 'Email Or Password not correct'], 401);
        }

        return $this->respondWithToken($token);
    }
    public function logout()
    {
        auth()->guard('admins')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    public function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user'=> auth()->guard('admins')->user()
        ]);
    }
}
