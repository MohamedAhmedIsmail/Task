@extends('layout.master')

@push('plugin-styles')
@endpush

@section('content')
    @if(\Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif
    <h2>Create New User</h2>
    <div class = "container">
        <form method="POST" action="{{route('saveUser')}}">
            @csrf
            <div class="row">
                <div class="form-group col-5">
                    <h5>Name</h5>
                    <input name="name" type = "text" class = "form-control" placeholder = "Enter first name" required>
                </div>
                <div class="form-group col-5">
                    <h5>Email</h5>
                    <input name="email"  type = "Email" class = "form-control" placeholder = "Enter Email" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-5">
                    <h5>Password</h5>
                    <input name="password" id="password" type = "password" class = "form-control" placeholder = "Enter Password" required>
                </div>
                <div class="form-group col-5">
                    <h5>Confirm Password</h5>
                    <input name="password_confirmation" id="confirm_password" type = "password" class = "form-control" placeholder = "Enter confirm Password" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-5">
                    <h5>Birthdate</h5>
                    <input name="birthdate" type = "date" class = "form-control" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-3">
                    <button class="btn btn-primary submit-btn btn-block">Create User</button>
                </div>
            </div>
        </form>
    </div>
@endsection

@push('plugin-scripts')
    <script>
        var password = document.getElementById("password")
            , confirm_password = document.getElementById("confirm_password");

        function validatePassword(){
            if(password.value != confirm_password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }

        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;
    </script>
@endpush

@push('custom-scripts')
@endpush
