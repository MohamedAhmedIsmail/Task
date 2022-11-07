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
            <th>created At</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <?php $c=1;?>
        @foreach($categories as $category)
            <tr>
                <td>{{$c++}}</td>
                <td>{{$category->title}}</td>
                <td>{{\Carbon\Carbon::createFromTimeString($category->created_at)}}</td>
                <td>
                    <a class="btn btn-primary" href="{{url('categories/edit/'.$category->id)}}">Edit</a>
                    <a class="btn btn-danger" href="{{url('categories/delete/'.$category->id)}}">Delete</a>
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
