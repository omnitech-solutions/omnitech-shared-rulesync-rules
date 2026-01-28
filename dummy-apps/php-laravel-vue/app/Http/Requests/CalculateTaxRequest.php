<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *      title="CalculateTaxRequest",
 *      description="Request body for tax calculation",
 *      type="object",
 *      required={"amount", "rate"}
 * )
 */
class CalculateTaxRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'amount' => 'required|numeric|min:0',
            'rate' => 'required|numeric|min:0|max:100',
        ];
    }

    /**
     * @OA\Property(
     *      property="amount",
     *      type="number",
     *      format="float",
     *      example=100.00,
     *      description="The monetary amount to tax"
     * )
     *
     * @OA\Property(
     *      property="rate",
     *      type="number",
     *      format="float",
     *      example=20.0,
     *      description="The tax rate percentage (0-100)"
     * )
     */
}