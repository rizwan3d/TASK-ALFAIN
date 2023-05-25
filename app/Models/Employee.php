<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    private $number_of_hours = 180;

    protected $fillable = [
        'full_name',
        'date_of_birth',
        'department_id',
        'position',
        'employee_type',
        'hourly_rate',
        'monthly_rate',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function getSalaryAttribute()
    {
        if ($this->employee_type === 'hourly') {
            // Calculate payment for hourly employees
            return $this->hourly_rate * $this->number_of_hours;
        } elseif ($this->employee_type === 'rate') {
            // Return the monthly rate for rate-based employees
            return $this->monthly_rate;
        }

        return 0; // Handle unsupported employee types or missing rates
    }
}
