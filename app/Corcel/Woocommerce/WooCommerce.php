<?php
declare(strict_types=1);

namespace App\Corcel\Woocommerce;

use App\Corcel\Models\Option;

class WooCommerce
{
    /**
     * The shop currency.
     *
     * @var  string|null
     */
    private static $currency;

    /**
     * Get the shop currency.
     *
     * @return  string
     */
    public static function currency(): string
    {
        if (self::$currency === null) {
            self::$currency = Option::get('woocommerce_currency');
        }

        return self::$currency;
    }
}
