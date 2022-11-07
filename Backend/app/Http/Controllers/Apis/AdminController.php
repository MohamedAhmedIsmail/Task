<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminCreateRequest;
use App\Http\Requests\AdminUpdateRequest;
use App\Repos\Contracts\AdminContract;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    use ApiResponser;
    private $adminRepository;

    public function __construct(AdminContract $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }

    public function list(Request $request)
    {
        return $this->adminRepository->listAdmins($request);
    }

   public function login()
   {
       return $this->adminRepository->login();
   }

   public function logout()
   {
       return $this->adminRepository->logout();
   }
}
