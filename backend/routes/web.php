<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CatagoryController;
use App\Http\Controllers\BillController;

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

Route::get('/', function () {
    return view('welcome');
});
//เรียกtoken
Route::get('/token', function () {
    return csrf_token();
});
// สินค้า
Route::get('/product', [ProductController::class, 'index']);
Route::get('/product/search/{name}', [ProductController::class, 'search']);
Route::get('/product/searchCatagory/{id}', [ProductController::class, 'showFitterCatagory']);
Route::get('/product/{id}', [ProductController::class, 'show']);
Route::post('/product/add', [ProductController::class, 'add']);
Route::put('/product/{id}/update', [ProductController::class, 'update']);
Route::put('/product/{id}/delete', [ProductController::class, 'del']);

//หมวดหมู่
Route::get('/catagory', [CatagoryController::class, 'index']);
Route::get('/catagory/{id}', [CatagoryController::class, 'show']);
Route::post('/catagory/add', [CatagoryController::class, 'add']);
Route::put('/catagory/{id}/update', [CatagoryController::class, 'update']);
Route::put('/catagory/{id}/delete', [CatagoryController::class, 'del']);

//รายละเอียดบิล
Route::get('/bill', [BillController::class, 'showbill']);
Route::get('/billDetail/{bill_id}', [BillController::class, 'showbilldetail']);
Route::get('/billDetail/add', [BillController::class, 'addbilldetail']);

//บิลปัจจุบัน
Route::delete('/billCurrent/{id}/delete', [BillController::class, 'delBillCurrent']);
Route::post('/billCurrent/add', [BillController::class, 'addBillCurrent']);
Route::get('/billCurrent', [BillController::class, 'showbillcurrent']);
Route::get('/billLast', [BillController::class, 'showlastbill']);
Route::get('/billCurrent/price', [BillController::class, 'showtotalprice']);
Route::put('/billCurrent/{id}/update', [BillController::class, 'updateBillCurrent']);
