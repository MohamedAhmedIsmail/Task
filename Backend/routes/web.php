<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\Telegram\TelegramBotController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

Route::get('{any}', function () {
        return view('welcome');
})->where('any', '^((?!updated-activity|updated-messages).)*$');


