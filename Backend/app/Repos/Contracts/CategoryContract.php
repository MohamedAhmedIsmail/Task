<?php

namespace App\Repos\Contracts;

use App\Repos\Base\BaseRepoContract;

interface CategoryContract extends BaseRepoContract
{
    public function listCategories($request);
    public function createCategory(array $categoryDetails);
    public function edit($id);
    public function update($data,$id);
    public function deleteCategory($categoryId);
}
