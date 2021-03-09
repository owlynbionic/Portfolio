<?php
/**
 * Created by PhpStorm.
 * User: Studio
 * Date: 17/3/4
 * Time: 上午9:19
 */
namespace App\Http\Controllers\WordPress;

use App\Corcel\Models\User as User;

class UserController extends User
{

    /*
     * For testing User model
     * */
    public function index()
    {
        $users = User::all(); // using the 'wordpress' connection
        var_dump( $users[0] -> attributes );
    }
}
