## Installation

Please make sure you have the latest version of Composer and XAMPP or WAMP server.

1- Clone project files into your local machine 
``` bash
git clone git@github.com:MDeeee/Tenants.git
```

2- Go to tenants folder
``` bash
cd Tenants
```

3- Create a database named 'tenants' 

4- Import tenants.sql file into your database (located in database folder)

5- Install Laravel dependencies
``` bash
composer install
```

6- Create storage symbolic link
``` bash
php artisan storage:link
```

7- Run your server
``` bash
php artisan serve
```

Note: This application can run from any place in your local machine using the 'php artisan serve' command OR you can copy the project files to WAMP or XAMPP server folder and run your server.
