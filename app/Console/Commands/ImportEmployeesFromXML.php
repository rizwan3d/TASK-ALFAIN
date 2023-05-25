<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use SimpleXMLElement;
use App\Models\Employee;

class ImportEmployeesFromXML extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:employees {file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import employees from an XML file';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $file = $this->argument('file');
        $xml = simplexml_load_file($file);

        foreach ($xml->employee as $employeeData) {
            $employee = new Employee();
            $employee->full_name = (string)$employeeData->full_name;
            $employee->date_of_birth = (string)$employeeData->date_of_birth;
            $employee->department = (string)$employeeData->department;
            $employee->position = (string)$employeeData->position;
            $employee->employee_type = (string)$employeeData->employee_type;
            $employee->hourly_rate = (float)$employeeData->hourly_rate;
            $employee->monthly_rate = (float)$employeeData->monthly_rate;

            $employee->save();
        }

        $this->info('Employees imported successfully.');
        return 0;
    }
}
