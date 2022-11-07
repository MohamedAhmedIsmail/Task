<?php

function jsonResponse($data = [], $code = 200, $message = 'done') {
    $code = getCode($code);
    return response()->json([
        'status_code' => $code,
        'message' => $message,
        'data' => $data,
    ], $code);
}

function jsonNotFoundResponse($code = 404, $message = 'Not found!') {
    $code = getCode($code);
    return response()->json([
        'status_code' => $code,
        'message' => $message,
    ], $code);
}

function jsonErrorResponse($code = 400, $message = 'Something went wrong!') {
    $code = getCode($code);
    return response()->json([
        'status_code' => $code,
        'message' => $message,
    ], $code);
}


function getCode($code) {
    return ($code >= 100 && $code < 600) ? $code : 500;
}


function logError($ex) {
    return $ex->getMessage().' at file: '.$ex->getFile().' at line: '.$ex->getLine();
}
