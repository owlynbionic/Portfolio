<?php

/**
 * App\Corcel\PostMeta
 *
 */

namespace App\Corcel\Models\Meta;

use App\Corcel\Models\Collection\PostMetaCollection;
use App\Corcel\Models\CorcelModel;

class PostMeta extends CorcelModel
{
    protected $table = 'wp_postmeta';
    protected $primaryKey = 'meta_id';
    public $timestamps = false;
    protected $fillable = array('meta_key', 'meta_value', 'post_id');

    /**
     * Post relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo('Corcel\Models\Post');
    }

    /**
     * Override newCollection() to return a custom collection
     *
     * @param array $models
     * @return PostMetaCollection
     */
    public function newCollection(array $models = array())
    {
        return new PostMetaCollection($models);
    }
}
