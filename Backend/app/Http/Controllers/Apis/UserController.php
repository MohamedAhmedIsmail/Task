<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Repos\Contracts\UserContract;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use ApiResponser;
    private $userRepository;

    public function __construct(UserContract $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function list(Request $request)
    {
        return $this->userRepository->listUsers($request);
    }

    public function create(UserCreateRequest $request)
    {
        $validatedData = $request->validated();
        $response = $this->userRepository->createUser($validatedData);
        return $response;
    }

    public function edit(Request $request, $id)
    {
        $response = $this->userRepository->edit($id);
        return $response;
    }

    public function update(UserUpdateRequest $request, $id)
    {
        $validatedData = $request->validated();
        $response = $this->userRepository->update($validatedData,$id);
        return $response->message;
    }

    public function delete($id)
    {
        $response = $this->userRepository->deleteUser($id);
        return $response->message;
    }
}
