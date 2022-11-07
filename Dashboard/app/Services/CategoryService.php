<?php

namespace App\Services;
use App\Traits\ConsumesExternalService;

class CategoryService
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
    public function getCategory($id,$header)
    {
        $response = $this->performRequest('GET', '/api/categories/edit/'.$id, NULL,$header);
        return $response;
    }
    public function createCategory($data,$header)
    {
        $response = $this->performRequest('POST', '/api/categories/add', $data,$header);
        return $response;
    }
    public function updateCategory($data,$header)
    {
        $response = $this->performRequest('POST', '/api/categories/update/'.$data['id'], $data,$header);
        return $response;
    }
    public function deleteCategory($id,$header)
    {
        $response = $this->performRequest('POST', '/api/categories/delete/'.$id, NULL,$header);
        return $response;
    }
}
