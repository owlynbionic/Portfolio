<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Corcel\Models\Author as WP_Author;

class WpAuthor extends WP_Author
{

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'post_author');
    }
}
