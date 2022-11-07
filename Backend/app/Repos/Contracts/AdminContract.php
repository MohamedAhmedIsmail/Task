<?php

namespace App\Repos\Contracts;

use App\Repos\Base\BaseRepoContract;

interface AdminContract extends BaseRepoContract
{
    public function login();
    public function logout();
    public function listAdmins($request);

}
