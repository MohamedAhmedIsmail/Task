<?php

namespace App\Repos\Eloquent;

use App\Classes\Response;
use App\Models\Category;
use App\Repos\Base\BaseRepoEloquent;
use App\Repos\Contracts\CategoryContract;
use Illuminate\Http\Response as ResponseCode;
use Illuminate\Support\Facades\DB;


class CategoryEloquent Extends BaseRepoEloquent implements CategoryContract
{
    /**
     * UserRepository constructor.
     *
     * @param Category $role
     */
    public function __construct(Category $category)
    {
        parent::__construct($category);
    }
    public function listCategories($request)
    {
        $limit = $request->has('limit') ? $request->limit : 10;
        $query = DB::table('categories');

        if ($request->has('search') && !empty($request->search))
        {
            $query = $this->search($request,$query);
        }
        $categories = $query->orderBy('id', 'DESC')->paginate($limit);
        return $categories;
    }
    public function createCategory(array $categoryDetails)
    {
        return $this->create($categoryDetails);
    }
    public function edit($id)
    {
        $category = $this->find($id);
        return ["category" => $category];
    }
    public function update($data, $id)
    {
        $this->updateById($id,$data);
        return $response = new Response("Updated Successfully", ResponseCode::HTTP_OK);
    }
    public function deleteCategory($CategoryId)
    {
        $category = $this->find($CategoryId);
        $category->delete();
        return $response = new Response("Deleted Successfully", ResponseCode::HTTP_OK);
    }

    public function search($request,$query)
    {
        $searchText = $request->search;
        $columns = ['title'];
        foreach($columns as $column)
        {
            $query->orWhere($column, 'LIKE', '%' . $searchText . '%');
        }
        return $query;
    }
}
