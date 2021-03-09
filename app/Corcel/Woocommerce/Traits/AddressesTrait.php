<?php
declare(strict_types=1);

namespace App\Corcel\Woocommerce\Traits;

use App\Corcel\Woocommerce\Support\BillingAddress;
use App\Corcel\Woocommerce\Support\ShippingAddress;

/**
 * @property BillingAddress  $billing_address
 * @property ShippingAddress  $shipping_address
 */
trait AddressesTrait
{
    /**
     * Initialize trait.
     *
     * @return  void
     */
    protected function initializeAddressesTrait(): void
    {
        $this->appends = array_merge($this->appends, [
            'billing_address',
            'shipping_address',
        ]);
    }

    /**
     * Get the billing address attribute.
     *
     * @return  BillingAddress
     */
    protected function getBillingAddressAttribute(): BillingAddress
    {
        return new BillingAddress($this);
    }

    /**
     * Get the shipping address attribute.
     *
     * @return  ShippingAddress
     */
    protected function getShippingAddressAttribute(): ShippingAddress
    {
        return new ShippingAddress($this);
    }
}
