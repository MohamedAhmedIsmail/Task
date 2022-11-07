<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovieCreateRequest;
use App\Http\Requests\MovieUpdateRequest;
use App\Services\MoviesService;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public $movieService;

    public function __construct(MoviesService $authorService)
    {
        $this->movieService = $authorService;
    }
    public function index(Request $request)
    {
        $token = $request->session()->get('token');
        $response = $this->movieService->getMovies(['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $movies = $response;
        return view('pages.admin-pages.Movies.index',compact('movies'));
    }
    public function createMovie(Request $request)
    {
        $token = $request->session()->get('token');
        $response = $this->movieService->getCategories(['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $categories = $response->data;
        return view('pages.admin-pages.Movies.create',compact('categories'));
    }
    public function saveMovie(MovieCreateRequest $request)
    {
        $request->validated();
        $token = $request->session()->get('token');
        $data['title'] = $request['title'];
        $data['description'] = $request['description'];
        $data['rate'] = $request['rate'];
        $data['category_id'] = $request['category_id'];
        $movieData = $this->getData($data);
        $movieData[] = $this->getImageData($request['image']);

        $this->movieService->createMovie($movieData,['Authorization'=>'Bearer '.$token]);
        return redirect('movies');
    }

    public function edit(Request $request,$id)
    {
        $token = $request->session()->get('token');
        $response = $this->movieService->getMovie($id,['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $movie = $response->movie;

        $response = $this->movieService->getCategories(['Authorization'=>'Bearer '.$token]);
        $response = json_decode($response);
        $categories = $response->data;


        return view('pages.admin-pages.Movies.edit',compact('movie','categories'));
    }

    public function update(MovieUpdateRequest $request)
    {
        $request->validated();
        $token = $request->session()->get('token');
        $data['id'] = $request['id'];
        $data['title'] = $request['title'];
        $data['description'] = $request['description'];
        $data['rate'] = $request['rate'];
        $data['category_id'] = $request['category_id'];
        $movieData = $this->getData($data);
        $movieData[] = $this->getImageData($request['image']);
        $this->movieService->updateMovie($movieData,['Authorization'=>'Bearer '.$token]);
        return redirect('movies');
    }

    public function delete(Request $request,$id)
    {
        $token = $request->session()->get('token');
        $this->movieService->deleteMovie($id,['Authorization'=>'Bearer '.$token]);
        return redirect('movies');
    }

    public function getData($data)
    {
        foreach($data as $key=>$value)
        {
            $multipart['name'] = $key;
            $multipart['contents'] = $value;
            $result[] = $multipart;
        }
        return $result;
    }

    public function getImageData($image)
    {
        $image_path = $image->getPathname();
        $image_mime = $image->getmimeType();
        $image_org  = $image->getClientOriginalName();
        $multlipart['name'] = 'image';
        $multlipart['contents']  = fopen($image_path, 'r');
        $multlipart['Mime-Type'] = $image_mime;
        $multlipart['filename']  = $image_org;
        return $multlipart;
    }
}
