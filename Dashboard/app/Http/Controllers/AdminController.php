<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdminAuthRequest;
use App\Services\AdminService;
use App\Services\DashboardService;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public $adminService;

    public function __construct(AdminService $authorService)
    {
        $this->adminService = $authorService;
    }
    public function login()
    {
        return view('pages.admin-pages.login');
    }
    public function authenticate(AdminAuthRequest $request)
    {
        $request->validated();
        $response = $this->adminService->login($request->all());
        if(isset($response['body']))
        {
            $error = json_decode($response['body']);
            return redirect()->back()->with('message',$error->error);
        }
        $response = json_decode($response);
        $this->saveToken($request,$response);
        if (session()->has('token'))
        {
            return redirect('/');
        }
        return redirect('login')->with('error', 'Oppes! You have entered invalid credentials');
    }
    public function logout(Request $request)
    {
        $token = $request->session()->get('token');
        $this->adminService->logout(['Authorization'=>'Bearer '.$token]);
        $request->session()->flush();
        return redirect('login')->with('Success', 'Logout Successfully');
    }
    public function index(Request $request,$message=NULL)
    {
        $token = $request->session()->get('token');
        $response = $this->adminService->getAllAdmins(['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $admins = $response;
        return view('pages.admin-pages.Admin.allAdmins', compact('admins'));
    }

    public function saveToken($request,$response)
    {
        $request->session()->put('id', $response->user->id);
        $request->session()->put('name', $response->user->name);
        $request->session()->put('email', $response->user->email);
        $request->session()->put('token', $response->access_token);
    }

}
