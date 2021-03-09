<?php

namespace App\Corcel\Models;

/**
 * Author model
 *
 */

class Author extends CorcelModel {

    protected $table = 'users';
    protected $primaryKey = 'ID';
    protected $hidden = ['user_pass'];


    /**
     * Posts relationship
     *
     * @return App\Corcel\Models\Collection\PostMetaCollection
     */
    public function posts() {

        return $this->hasMany('Corcel\Models\Post', 'post_author');
    }
}

?>
