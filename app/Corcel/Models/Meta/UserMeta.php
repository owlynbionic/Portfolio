<?php

namespace App\Corcel\Models\Meta;

use App\Corcel\Models\User;

/**
 * Class UserMeta
 *
 * @package Corcel\Model\Meta
 * @author Mickael Burguet <www.rundef.com>
 * @author Junior Grossi <juniorgro@gmail.com>
 */
class UserMeta extends Meta
{
    /**
     * @var string
     */
    protected $table = 'wp_usermeta';

    /**
     * @var string
     */
    protected $primaryKey = 'umeta_id';

    /**
     * @var array
     */
    protected $fillable = ['meta_key', 'meta_value', 'user_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
