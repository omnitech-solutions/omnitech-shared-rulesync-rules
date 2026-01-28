<?php

namespace App\Http\Controllers;

use App\Http\Requests\CalculateTaxRequest;
use Illuminate\Http\JsonResponse;
use OpenApi\Annotations as OA;

class TaxController extends Controller
{
    /**
     * @OA\Post(
     *      path="/api/taxes/calculate",
     *      operationId="calculateTax",
     *      tags={"Taxes"},
     *      summary="Calculate tax amount",
     *      description="Returns the tax amount and total based on input",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CalculateTaxRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(
     *              @OA\Property(property="amount", type="number", format="float", example=100.00),
     *              @OA\Property(property="rate", type="number", format="float", example=20.0),
     *              @OA\Property(property="tax_amount", type="number", format="float", example=20.00),
     *              @OA\Property(property="total_amount", type="number", format="float", example=120.00)
     *          )
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation error"
     *      )
     * )
     */
    public function calculate(CalculateTaxRequest $request): JsonResponse
    {
        $amount = (float) $request->input('amount');
        $rate = (float) $request->input('rate');

        $taxAmount = $amount * ($rate / 100);
        $totalAmount = $amount + $taxAmount;

        return response()->json([
            'amount' => $amount,
            'rate' => $rate,
            'tax_amount' => round($taxAmount, 2),
            'total_amount' => round($totalAmount, 2),
        ]);
    }
}