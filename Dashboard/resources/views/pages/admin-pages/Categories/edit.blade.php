@extends('layout.master')

@push('plugin-styles')
@endpush

@section('content')
    @if(\Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif
    <h2>Create New Category</h2>
    <div class = "container">
        <form method="POST" action="{{route('updateCategory')}}">
            @csrf
            <input type="hidden" name="id" value="{{$category->id}}">
            <div class="row">
                <div class="form-group col-5">
                    <h5>Title</h5>
                    <input name="title" type = "text" class = "form-control" value="{{$category->title}}" required>
                </div>

            </div>
            <div class="row">
                <div class="form-group col-3">
                    <button class="btn btn-primary submit-btn btn-block">Edit</button>
                </div>
            </div>
        </form>
    </div>
@endsection

@push('plugin-scripts')

@endpush

@push('custom-scripts')
@endpush
