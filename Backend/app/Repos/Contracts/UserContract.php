<?php

namespace App\Repos\Contracts;

use App\Repos\Base\BaseRepoContract;

interface UserContract extends BaseRepoContract
{
    public function listUsers($request);
    public function createUser(array $adminDetails);
    public function edit($id);
    public function update($data,$id);
    public function deleteUser($adminId);
}
