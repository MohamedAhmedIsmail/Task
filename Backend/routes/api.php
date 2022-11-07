<?php

use Illuminate\Support\Facades\Route;
Route::post('/admin/login','App\Http\Controllers\Apis\AdminController@login');
Route::group(['middleware' => 'admins',
], function ($router) {

    Route::prefix('admins')->group(function () {
        Route::post('/logout',         'App\Http\Controllers\Apis\AdminController@logout');
        Route::get('/list',         'App\Http\Controllers\Apis\AdminController@list');
    });

    Route::prefix('users')->group(function () {
        Route::get('/list',         'App\Http\Controllers\Apis\UserController@list');
        Route::post('/add',         'App\Http\Controllers\Apis\UserController@create');

    });
    Route::prefix('categories')->group(function () {
        Route::post('/add',         'App\Http\Controllers\Apis\CategoryController@create');
        Route::get('/edit/{id}',    'App\Http\Controllers\Apis\CategoryController@edit');
        Route::post('/update/{id}', 'App\Http\Controllers\Apis\CategoryController@update');
        Route::post('/delete/{id}', 'App\Http\Controllers\Apis\CategoryController@delete');
    });

});
// Common Routes
Route::group(['middleware' => ['api','admins'],
], function ($router) {
    Route::prefix('movies')->group(function () {
        Route::get('/list',         'App\Http\Controllers\Apis\MovieController@list');
        Route::get('/list/{category_id}','App\Http\Controllers\Apis\MovieController@listMoviesCategory');
        Route::post('/add',         'App\Http\Controllers\Apis\MovieController@create');
        Route::get('/edit/{id}',    'App\Http\Controllers\Apis\MovieController@edit');
        Route::post('/update/{id}', 'App\Http\Controllers\Apis\MovieController@update');
        Route::post('/delete/{id}', 'App\Http\Controllers\Apis\MovieController@delete');
    });
    Route::prefix('categories')->group(function () {
        Route::get('/list',         'App\Http\Controllers\Apis\CategoryController@list');
    });
});
Route::group(['middleware' => 'api',
], function ($router) {
    Route::post('login', 'App\Http\Controllers\Apis\AuthUserController@login');
    Route::post('signup', 'App\Http\Controllers\Apis\AuthUserController@signup');
});
