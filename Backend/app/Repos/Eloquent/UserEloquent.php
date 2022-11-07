<?php

namespace App\Repos\Eloquent;

use App\Classes\Response;
use App\Models\User;
use App\Repos\Base\BaseRepoEloquent;
use App\Repos\Contracts\UserContract;
use Illuminate\Http\Response as ResponseCode;
use Illuminate\Support\Facades\DB;


class UserEloquent Extends BaseRepoEloquent implements UserContract
{
    /**
     * UserRepository constructor.
     *
     * @param User $role
     */
    public function __construct(User $user)
    {
        parent::__construct($user);
    }
    public function listUsers($request)
    {
        $limit = $request->has('limit') ? $request->limit : 10;
        $query = DB::table('users');

        if ($request->has('search') && !empty($request->search))
        {
            $query = $this->search($request,$query);
        }
        $admins = $query->orderBy('id', 'DESC')->paginate($limit);
        return $admins;
    }
    public function createUser(array $userDetails)
    {
        $userDetails['password'] = bcrypt($userDetails['password']);
        return $this->create($userDetails);
    }
    public function edit($id)
    {
        $user = $this->find($id);
        return ["user" => $user];
    }
    public function update($data, $id)
    {
        if (empty($data['password']))
        {
            unset($data['password']);
        }
        else
        {
            $data['password'] = bcrypt($data['password']);
        }
        $this->updateById($id,$data);
        return $response = new Response("Updated Successfully", ResponseCode::HTTP_OK);
    }
    public function deleteUser($userId)
    {
        $user = $this->find($userId);
        $user->delete();
        return $response = new Response("Deleted Successfully", ResponseCode::HTTP_OK);
    }

    public function search($request,$query)
    {
        $searchText = $request->search;
        $columns = ['name', 'email', 'birthdate'];

        foreach($columns as $column)
        {
            $query->orWhere($column, 'LIKE', '%' . $searchText . '%');
        }
        return $query;
    }
}
