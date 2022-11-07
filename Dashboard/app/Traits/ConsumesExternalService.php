<?php

namespace App\Traits;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;
trait ConsumesExternalService
{

    public function performRequest($method, $requestUrl, $formParams = [], $headers = [])
    {
        $client = new Client([
            'base_uri' => $this->baseUri,
        ]);
        try
        {
            $response = $client->request($method, $requestUrl, ['form_params' => $formParams, 'headers' => $headers]);
            return $response->getBody()->getContents();
        }
        catch(RequestException $e)
        {
            if ($e->hasResponse())
            {
                $message = Psr7\Message::toString($e->getResponse());
                $message = Psr7\Message::parseMessage($message);
                return $message;
            }
        }

    }
    public function performRequestMultiPart($method, $requestUrl, $headers = [],$multipart = [])
    {
        $client = new Client([
            'base_uri' => $this->baseUri,
        ]);
        try
        {
            $response = $client->request($method, $requestUrl, ['multipart' => $multipart, 'headers' => $headers]);
            return $response->getBody()->getContents();
        }
        catch(RequestException $e)
        {
            if ($e->hasResponse())
            {
                $message = Psr7\Message::toString($e->getResponse());
                $message = Psr7\Message::parseMessage($message);
                return $message;
            }
        }

    }
}
