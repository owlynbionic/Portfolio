<?php

namespace App\Corcel\Models;

use \Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Support\Facades\Config;

abstract class CorcelModel extends Eloquent
{

    function __construct(){
    	if(!empty(Config::get('corcel.connection'))){
    		$this->connection = Config::get('corcel.connection');
    	}

    	parent::__construct();
    }
}
