<?php

namespace App\Http\Controllers;

use App\Services\DashboardService;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public $dashboardService;

    public function __construct(DashboardService $authorService)
    {
        $this->dashboardService = $authorService;
    }
    public function index(Request $request)
    {
        $token = $request->session()->get('token');

        return view('dashboard');
    }
}
