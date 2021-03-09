<?php

/**
 * Corcel\CommentBuilder
 *
 */

namespace App\Corcel\Models\Builder;

use Illuminate\Database\Eloquent\Builder;

class CommentBuilder extends Builder
{
    /**
     * Where clause for only approved comments
     *
     * @return CommentBuilder
     */
    public function approved()
    {
        return $this->where('comment_approved', 1);
    }

}
