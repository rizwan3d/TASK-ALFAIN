<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => 'required|string',
            'date_of_birth' => 'required|date',
            'department_id' => [
                'required',
                'integer',
                Rule::exists('departments', 'id'),
            ],
            'position' => 'required|string',
            'employee_type' => 'required|in:hourly,rate',
            'hourly_rate' => 'required_if:employee_type,hourly',
            'monthly_rate' => 'required_if:employee_type,rate',
        ];
    }
}
