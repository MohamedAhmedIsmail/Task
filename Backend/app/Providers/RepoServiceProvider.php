<?php

namespace App\Providers;

use App\Repos\Base\BaseRepoContract;
use App\Repos\Base\BaseRepoEloquent;
use App\Repos\Contracts\AdminContract;
use App\Repos\Contracts\AuthContract;
use App\Repos\Contracts\CategoryContract;
use App\Repos\Contracts\MovieContract;
use App\Repos\Contracts\UserContract;
use App\Repos\Eloquent\AdminEloquent;
use App\Repos\Eloquent\AuthEloquent;
use App\Repos\Eloquent\CategoryEloquent;
use App\Repos\Eloquent\MovieEloquent;
use App\Repos\Eloquent\UserEloquent;
use Illuminate\Support\ServiceProvider;

class RepoServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BaseRepoContract::class,BaseRepoEloquent::class);
        $this->app->bind(AdminContract::class,AdminEloquent::class);
        $this->app->bind(AuthContract::class,AuthEloquent::class);
        $this->app->bind(CategoryContract::class,CategoryEloquent::class);
        $this->app->bind(UserContract::class,UserEloquent::class);
        $this->app->bind(MovieContract::class,MovieEloquent::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
