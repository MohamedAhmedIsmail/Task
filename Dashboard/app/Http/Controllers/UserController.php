<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public $userService;

    public function __construct(UserService $authorService)
    {
        $this->userService = $authorService;
    }
    public function index(Request $request)
    {
        $token = $request->session()->get('token');
        $response = $this->userService->getAllUsers(['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $users = $response->data;
        return view('pages.admin-pages.User.allUsers',compact('users'));
    }
    public function createUser()
    {
        return view('pages.admin-pages.User.createUser');
    }
    public function saveUser(UserCreateRequest $request)
    {
        $request->validated();
        $token = $request->session()->get('token');
        $response = $this->userService->createUser($request->all(),['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $user = $response;
        return redirect('allUsers');
    }
}
