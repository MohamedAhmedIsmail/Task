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
            <th>Name</th>
            <th>Email</th>
            <th>created At</th>
        </tr>
        </thead>
        <tbody>
        <?php $c=1;?>
        @foreach($users as $user)
            <tr>
                <td>{{$c++}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{\Carbon\Carbon::createFromTimeString($user->created_at)}}</td>
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
