@extends('layout.master')

@push('plugin-styles')
@endpush

@section('content')
    @if(\Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif
    <h2>Create New Movie</h2>
    <div class = "container">
        <form method="POST" action="{{route('updateMovie')}}" enctype="multipart/form-data">
            @csrf
            <input type="hidden" name="id" value="{{$movie->id}}">
            <div class="row">
                <div class="form-group col-5">
                    <h5>Title</h5>
                    <input name="title" type = "text" class = "form-control" value="{{$movie->title}}" required>
                </div>
                <div class="form-group col-5">
                    <h5>Rate</h5>
                    <input name="rate"  type = "number" class = "form-control" value="{{$movie->rate}}" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-5">
                    <h5>description</h5>
                    <textarea name="description"  class ="form-control" required>{{$movie->description}}</textarea>
                </div>
                <div class="form-group col-5">
                    <h5>Category</h5>
                    <select class="form-control browser-default custom-select" name="category_id" required>
                        <option value="{{$movie->category->id}}">{{$movie->category->title}}</option>
                        @foreach($categories as $category)
                            <option value="{{$category->id}}">{{$category->title}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-5">
                    <h5>Image</h5>
                    <input name="image" type = "file" class = "form-control" required>
                    <img width="250" height="250" src="{{env('ImagePath')}}{{$movie->image}}">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-3">
                    <button class="btn btn-primary submit-btn btn-block">Create</button>
                </div>
            </div>
        </form>
    </div>
@endsection

@push('plugin-scripts')

@endpush

@push('custom-scripts')
@endpush
