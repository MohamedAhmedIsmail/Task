@extends('layout.master')

@push('plugin-styles')
@endpush

@section('content')
    @if(\Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif
    <table id="myTable" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rate</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>created At</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <?php $c=1;?>
        @foreach($movies as $movie)
            <tr>
                <td>{{$c++}}</td>
                <td>{{$movie->title}}</td>
                <td>{{$movie->rate}}</td>
                <td>{{$movie->description}}</td>
                <td>{{$movie->category->title}}</td>
                <td><img src="{{env('ImagePath')}}{{$movie->image}}"></td>
                <td>{{\Carbon\Carbon::createFromTimeString($movie->created_at)}}</td>
                <td>
                    <a class="btn btn-primary" href="{{url('movies/edit/'.$movie->id)}}">Edit</a>
                    <a class="btn btn-danger" href="{{url('movies/delete/'.$movie->id)}}">Delete</a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection

@push('plugin-scripts')
    <script>
        $(document).ready( function () {
            var table = $('#myTable').DataTable({
                "scrollX": true,
            });
        });
    </script>
@endpush

@push('custom-scripts')
@endpush
