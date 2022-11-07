<?php

namespace App\Services;
use App\Traits\ConsumesExternalService;

class UserService
{
    use ConsumesExternalService;

    public $baseUri;

    public function __construct()
    {
        $this->baseUri = config('services.base_uri');
    }
    public function getAllUsers($header)
    {
        $response = $this->performRequest('GET', '/api/users/list',NULL,$header);
        return $response;
    }
    public function createUser($data,$header)
    {
        $response = $this->performRequest('POST', '/api/users/add', $data,$header);
        return $response;
    }
}
