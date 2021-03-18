<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Corcel\Models\User as WP_User;

class WpUser extends WP_User
{

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'post_author');
    }

}
