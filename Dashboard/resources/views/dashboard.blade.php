@extends('layout.master')

@section('content')
    @if(\Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif


@endsection

@push('plugin-scripts')
    <script src="{{URL::asset("/assets/plugins/chartjs/chart.min.js")}}"></script>
    <script src="{{URL::asset("/assets/plugins/jquery-sparkline/jquery.sparkline.min.js")}}"></script>
@endpush

@push('custom-scripts')
    <script src="{{URL::asset("/assets/js/dashboard.js")}}"></script>
@endpush
