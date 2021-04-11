<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::apiResource("alltasks" , "\App\Http\Controllers\TaskController@getData");
    //$data = \App\Todo::all();
    //return response()->json(["tasks" => $data]);

/*

Route::apiResource("alltasks" , function(Request $request){
    $data = Request::all();
    return response()->json(["data" => $data]);
});
*/

//Route::apiResource("alltasks", "TaskController");
Route::group(["middleware" => ["api"]], function(){
    Route::resource("alltasks", "TaskController", ["except" => ["create", "edit" ]]);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
