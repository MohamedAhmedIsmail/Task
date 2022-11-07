<?php

namespace App\Services;
use App\Traits\ConsumesExternalService;

class MoviesService
{
    use ConsumesExternalService;

    public $baseUri;

    public function __construct()
    {
        $this->baseUri = config('services.base_uri');
    }
    public function getCategories($header)
    {
        $response = $this->performRequest('GET', '/api/categories/list',NULL,$header);
        return $response;
    }
    public function getMovies($header)
    {
        $response = $this->performRequest('GET', '/api/movies/list',NULL,$header);
        return $response;
    }
    public function getMovie($id,$header)
    {
        $response = $this->performRequest('GET', '/api/movies/edit/'.$id, NULL,$header);
        return $response;
    }
    public function createMovie($data,$header)
    {
        $response = $this->performRequestMultiPart('POST', '/api/movies/add', $header,$data);
        return $response;
    }
    public function updateMovie($data,$header)
    {
        $response = $this->performRequestMultiPart('POST', '/api/movies/update/'.$data[0]['contents'], $header,$data);
        return $response;
    }
    public function deleteMovie($id,$header)
    {
        $response = $this->performRequest('POST', '/api/movies/delete/'.$id, NULL,$header);
        return $response;
    }
}
