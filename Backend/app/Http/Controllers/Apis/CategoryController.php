<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryCreateRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Repos\Contracts\CategoryContract;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use ApiResponser;
    private $categoryRepository;

    public function __construct(CategoryContract $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function list(Request $request)
    {
        return $this->categoryRepository->listCategories($request);
    }

    public function create(CategoryCreateRequest $request)
    {
        $validatedData = $request->validated();
        $response = $this->categoryRepository->createCategory($validatedData);
        return $response;
    }

    public function edit(Request $request, $id)
    {
        $response = $this->categoryRepository->edit($id);
        return $response;
    }

    public function update(CategoryUpdateRequest $request, $id)
    {
        $validatedData = $request->validated();
        $response = $this->categoryRepository->update($validatedData,$id);
        return $response->message;
    }

    public function delete($id)
    {
        $response = $this->categoryRepository->deleteCategory($id);
        return $response->message;
    }
}
