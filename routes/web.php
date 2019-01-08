<?php

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

Route::get('/openApi3.yaml',function () {

    $openapi = \OpenApi\scan(base_path().'',['exclude'=>'vendor']);
    header('Content-Type: application/x-yaml');
    echo $openapi->toYaml();
});

Route::get('/openApi3.json',function () {

    $openapi = \OpenApi\scan(base_path().'',['exclude'=>'vendor']);
    header('Content-Type: application/json');
    echo $openapi->toJson();
});


Route::get('/', function () {
    return view('welcome');
});

Route::get('/{page?}-user', function () {
    return view('welcome');
});


Route::get('/users','UserController@index');
Route::get('/users/{id}','UserController@show');
Route::post('/users','UserController@store');
Route::patch('/users/{id}','UserController@update');
Route::delete('/users/{id}','UserController@destroy');

//Route::resource('users', 'UserController');