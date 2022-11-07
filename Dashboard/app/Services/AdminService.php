<?php

namespace App\Services;
use App\Traits\ConsumesExternalService;

class AdminService
{
    use ConsumesExternalService;

    public $baseUri;

    public function __construct()
    {
        $this->baseUri = config('services.base_uri');
    }

    public function login($data){
        $response = $this->performRequest('POST', '/api/admin/login', $data);
        return $response;
    }
    public function logout($header)
    {
        $response = $this->performRequest('POST', '/api/admins/logout',NULL,$header);
        return $response;
    }
    public function getAllAdmins($header)
    {
        $response = $this->performRequest('GET', '/api/admins/list',NULL,$header);
        return $response;
    }

}
