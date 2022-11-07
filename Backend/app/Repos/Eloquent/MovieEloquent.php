<?php

namespace App\Repos\Eloquent;

use App\Classes\Response;
use App\Models\Movie;
use App\Repos\Base\BaseRepoEloquent;
use App\Repos\Contracts\MovieContract;
use Illuminate\Http\Request;
use Illuminate\Http\Response as ResponseCode;
use Illuminate\Support\Facades\DB;


class MovieEloquent Extends BaseRepoEloquent implements MovieContract
{
    /**
     * UserRepository constructor.
     *
     * @param Movie $role
     */
    public function __construct(Movie $movie)
    {
        parent::__construct($movie);
    }
    public function listMovies($request)
    {
        $movies =$this->with('category')->get();
        return $movies;
    }
    public function listMoviesCategory($id)
    {
        return $this->where('category_id',$id)->get();
    }
    public function createMovie(array $movieDetails)
    {
        if(isset($movieDetails['image'])) {
            $imagePath = $this->saveImage($movieDetails['image']);
            $movieDetails['image'] = $imagePath;
        }

        return $this->create($movieDetails);
    }
    public function edit($id)
    {
        $movie = $this->with('category')->where('id',$id)->first();
        return ["movie" => $movie];
    }
    public function update($data, $id)
    {
        if(isset($data['image'])) {
            $imagePath = $this->saveImage($data['image']);
            $data['image'] = $imagePath;
        }
        $this->updateById($id,$data);
        return $response = new Response("Updated Successfully", ResponseCode::HTTP_OK);
    }
    public function deleteMovie($movieId)
    {
        $movie = $this->find($movieId);
        $movie->delete();
        return $response = new Response("Deleted Successfully", ResponseCode::HTTP_OK);
    }

    public function search($request,$query)
    {
        $searchText = $request->search;
        $columns = ['title','rate','description'];
        foreach($columns as $column)
        {
            $query->orWhere($column, 'LIKE', '%' . $searchText . '%');
        }
        return $query;
    }
    public function saveImage($image)
    {
        $request = new Request();
        $request->image = $image;
        if(!is_string($image))
        {
        if($request->image)
        {

                $input['image'] = '/assets/movieImages/' . time() . '.' . $request->image->getClientOriginalName();
                $destinationPath = public_path('assets/movieImages');
                $image = $request->image;
                $image->move($destinationPath, $input['image']);
            }

        return $photo_path = '/assets/movieImages/' . time() . '.' . $request->image->getClientOriginalName();
        }
    }
}
