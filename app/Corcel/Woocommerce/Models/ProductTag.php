<?php
declare(strict_types=1);

namespace App\Corcel\Woocommerce\Models;

use App\Corcel\Models\Taxonomy;

class ProductTag extends Taxonomy
{
    /**
     * The taxonomy slug.
     *
     * @var  string
     */
    protected $taxonomy = 'product_tag';
}
