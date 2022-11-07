<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Http\Requests\MovieCreateRequest;
use App\Http\Requests\MovieUpdateRequest;
use App\Repos\Contracts\MovieContract;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    use ApiResponser;
    private $movieRepository;

    public function __construct(MovieContract $movieRepository)
    {
        $this->movieRepository = $movieRepository;
    }

    public function list(Request $request)
    {
        return $this->movieRepository->listMovies($request);
    }
    public function listMoviesCategory(Request $request,$id)
    {
        return $this->movieRepository->listMoviesCategory($id);
    }
    public function getMovie(Request $request,$id)
    {
        return $this->movieRepository->listMoviesCategory($id);
    }
    public function create(MovieCreateRequest $request)
    {
        $validatedData = $request->validated();
        $response = $this->movieRepository->createMovie($validatedData);
        return $response;
    }

    public function edit(Request $request, $id)
    {
        $response = $this->movieRepository->edit($id);
        return $response;
    }

    public function update(MovieUpdateRequest $request, $id)
    {
        $validatedData = $request->validated();
        $response = $this->movieRepository->update($validatedData,$id);
        return $response->message;
    }

    public function delete($id)
    {
        $response = $this->movieRepository->deleteMovie($id);
        return $response->message;
    }
}
