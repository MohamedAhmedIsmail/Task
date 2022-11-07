<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryCreateRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public $categoryService;

    public function __construct(CategoryService $authorService)
    {
        $this->categoryService = $authorService;
    }
    public function index(Request $request)
    {
        $token = $request->session()->get('token');
        $response = $this->categoryService->getCategories(['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $categories = $response->data;
        return view('pages.admin-pages.Categories.index',compact('categories'));
    }
    public function createCategory()
    {
        return view('pages.admin-pages.Categories.create');
    }
    public function saveCategory(CategoryCreateRequest $request)
    {
        $request->validated();
        $token = $request->session()->get('token');
        $response = $this->categoryService->createCategory($request->all(),['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        return redirect('categories');
    }

    public function edit(Request $request,$id)
    {
        $token = $request->session()->get('token');
        $response = $this->categoryService->getCategory($id,['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $category = $response->category;

        return view('pages.admin-pages.Categories.edit',compact('category'));
    }

    public function update(CategoryUpdateRequest $request)
    {
        $request->validated();
        $token = $request->session()->get('token');
        $response = $this->categoryService->updateCategory($request->all(),['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        return redirect('categories');
    }

    public function delete(Request $request,$id)
    {
        $token = $request->session()->get('token');
        $response = $this->categoryService->deleteCategory($id,['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        return redirect('categories');
    }
}
