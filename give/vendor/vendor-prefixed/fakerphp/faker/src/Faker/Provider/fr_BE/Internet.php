<?php
/**
 * @license MIT
 *
 * Modified by impress-org on 22-August-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Give\Vendors\Faker\Provider\fr_BE;

class Internet extends \Give\Vendors\Faker\Provider\Internet
{
    protected static $freeEmailDomain = ['gmail.com', 'hotmail.com', 'yahoo.com', 'advalvas.be'];
    protected static $tld = ['com', 'net', 'org', 'be'];
}
