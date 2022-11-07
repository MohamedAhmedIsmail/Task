@extends('layout.master-mini')
@section('content')

<div class="content-wrapper d-flex align-items-center justify-content-center auth theme-one" style="background-image: url({{ url('assets/images/auth/login_1.jpg') }}); background-size: cover;">
  <div class="row w-100">
    <div class="col-lg-4 mx-auto">
      <div class="auto-form-wrapper">
        <form action="{{route('login')}}" method="POST" enctype="multipart/form-data">
            @csrf
          <div class="form-group">
            <label class="label">Admin Email</label>
            <div class="input-group">
              <input name="email" type="text" class="form-control" placeholder="Username" required>
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="mdi mdi-check-circle-outline"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="label">Password</label>
            <div class="input-group">
              <input name="password" type="password" class="form-control" placeholder="*********" required>
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="mdi mdi-check-circle-outline"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary submit-btn btn-block">Login</button>
          </div>
        </form>
      </div>
      <p class="footer-text text-center">copyright © 2020 Lebanongate. All rights reserved.</p>
    </div>
  </div>
</div>

@endsection
