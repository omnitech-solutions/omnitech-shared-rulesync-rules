<?php

namespace App\Http\Controllers;

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Taxes API",
 *      description="API for calculating taxes",
 *      @OA\Contact(
 *          email="admin@example.com"
 *      )
 * )
 *
 * @OA\Server(
 *      url="http://localhost:8000",
 *      description="Demo API Server"
 * )
 */
abstract class Controller
{
    //
}
