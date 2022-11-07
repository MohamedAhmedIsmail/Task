<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', 'AdminController@login');
Route::post('/login', 'AdminController@authenticate')->name('login');
Route::post('/logout', 'AdminController@logout')->name('logout');
Route::middleware(['hasToken'])->group(function ()
{
    Route::get('/', 'DashboardController@index');
    Route::get('/allAdmins','AdminController@index');
    Route::get('createAdmin','AdminController@createAdmin');
    Route::post('createAdmin','AdminController@saveAdmin')->name('saveAdmin');

    Route::get('/allUsers','UserController@index');
    Route::get('createUser','UserController@createUser');
    Route::post('createUser','UserController@saveUser')->name('saveUser');

    Route::get('/categories','CategoryController@index');
    Route::get('/categories/create','CategoryController@createCategory');
    Route::post('/categories/save','CategoryController@saveCategory')->name('saveCategory');
    Route::get('/categories/edit/{id}','CategoryController@edit');
    Route::post('/categories/update','CategoryController@update')->name('updateCategory');
    Route::get('/categories/delete/{id}','CategoryController@delete');

    Route::get('/movies','MovieController@index');
    Route::get('/movies/create','MovieController@createMovie');
    Route::post('/movies/save','MovieController@saveMovie')->name('saveMovie');
    Route::get('/movies/edit/{id}','MovieController@edit');
    Route::post('/movies/update','MovieController@update')->name('updateMovie');
    Route::get('/movies/delete/{id}','MovieController@delete');

});
