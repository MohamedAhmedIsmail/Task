<?php

namespace App\Repos\Contracts;

use App\Repos\Base\BaseRepoContract;

interface MovieContract extends BaseRepoContract
{
    public function listMovies($request);
    public function listMoviesCategory($id);
    public function createMovie(array $categoryDetails);
    public function edit($id);
    public function update($data,$id);
    public function deleteMovie($categoryId);
}
