<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Corcel\Models\Author as WPAuthor;

class Author extends WPAuthor
{

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'post_author');
    }
}
