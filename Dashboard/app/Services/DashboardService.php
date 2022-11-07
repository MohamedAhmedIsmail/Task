<?php

namespace App\Services;
use App\Traits\ConsumesExternalService;

class DashboardService
{
    use ConsumesExternalService;

    public $baseUri;

    public function __construct()
    {
        $this->baseUri = config('services.base_uri');
    }
    public function getUsers($header)
    {
        $response = $this->performRequest('GET', '/api/users',NULL,$header);
        return $response;
    }

}
