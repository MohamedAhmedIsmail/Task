<?php

namespace App\Repos\Contracts;

use App\Repos\Base\BaseRepoContract;

interface AuthContract extends BaseRepoContract
{
    public function userLogin($requestData);
    public function Login($requestData);
    public function Logout();
    public function refresh();
    public function getUserData($authUser);
}
