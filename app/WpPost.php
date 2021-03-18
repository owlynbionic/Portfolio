<?php

namespace App;

use App\Corcel\Models\Post as WP_Post;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WpPost extends WP_Post
{

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class, 'post_author');
    }

}
