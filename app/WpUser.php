<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Corcel\Models\User as WP_User;

class WpUser extends WP_User
{

    public function posts(): HasOne
    {
        return $this->HasOne(WpAuthor::class, 'post_author');
    }

}
