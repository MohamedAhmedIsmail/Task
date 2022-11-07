<?php
namespace App\Classes;
class Response
{
    public $message;
    public $status;
    public $error;

    public function __construct($message,$status,$error=null)
    {
        $this->message = $message;
        $this->status = $status;
        $this->error = $error;
    }
}

