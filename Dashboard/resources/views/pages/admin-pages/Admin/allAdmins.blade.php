@extends('layout.master')

@push('plugin-styles')
@endpush

@section('content')
    @if(\Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif
    @if(isset($message))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <ul class="p-0 m-0" style="list-style: none;">
                {{ $message }}
            </ul>
        </div>
    @endif
    @if(count($errors) > 0 )
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <ul class="p-0 m-0" style="list-style: none;">
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>
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
        @foreach($admins as $admin)
            <tr>
                <td>{{$c++}}</td>
                <td>{{$admin->name}}</td>
                <td>{{$admin->email}}</td>
                <td>{{\Carbon\Carbon::createFromTimeString($admin->created_at)}}</td>
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
