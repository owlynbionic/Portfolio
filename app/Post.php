<?php

namespace App;

use App\Corcel\Models\Post as WPPost;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends WPPost
{

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class, 'post_author');
    }

}
