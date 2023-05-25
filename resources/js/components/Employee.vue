<template>
  <div class="container">

    <h1 class="mt-3">Employee List</h1>

    <!-- Filter by Department -->
    <div class="form-group mt-3">
      <label for="department-filter">Filter by Department:</label>
      <select id="department-filter" class="form-control" v-model="departmentFilter" @change="applyFilters">
        <option value="">All</option>
        <option v-for="department in departments" :value="department.id">{{ department.name }}</option>
      </select>
    </div>

    <!-- Employee Table -->
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Date of Birth</th>
          <th>Department</th>
          <th>Position</th>
          <th>Employee Type</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.full_name }}</td>
          <td>{{ employee.date_of_birth }}</td>
          <td><router-link :to="getDepartmentlink(employee.department.id)">{{ employee.department.name }}</router-link></td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.employee_type }}</td>
          <td>{{ employee.salary }}</td>
          <td>
            <button @click="editEmployee(employee.id)" class="btn btn-primary btn-sm">Edit</button>
            <button @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Per Page Dropdown -->
    <div class="form-group">
      <label for="per-page">Per Page:</label>
      <select id="per-page" class="form-control" v-model="perPage" @change="applyFilters">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>

    <!-- Pagination Buttons -->
    <div class="mt-3">
      <button @click="previousPage" :disabled="currentPage === 1" class="btn btn-secondary">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-secondary">Next</button>
    </div>

    <h2 v-if="selectedEmployee">Edit Employee</h2>
    <form v-if="selectedEmployee" @submit.prevent="updateEmployee" class="mt-3">
  <div class="form-group">
    <label for="full_name">Full Name:</label>
    <input type="text" id="full_name" v-model="selectedEmployee.full_name" class="form-control" required>
  </div>

  <div class="form-group">
    <label for="date_of_birth">Date of Birth:</label>
    <input type="date" id="date_of_birth" v-model="selectedEmployee.date_of_birth" class="form-control" required>
  </div>

  <div class="form-group">
    <label for="department">Department:</label>
    <select id="department" v-model="selectedEmployee.department_id" class="form-control" required>
      <option v-for="department in departments" :value="department.id">{{ department.name }}</option>
    </select>
  </div>

  <div class="form-group">
    <label for="position">Position:</label>
    <input type="text" id="position" v-model="selectedEmployee.position" class="form-control" required>
  </div>

  <div class="form-group">
    <label for="employee_type">Employee Type:</label>
    <select id="employee_type" v-model="selectedEmployee.employee_type" class="form-control" required>
      <option value="hourly">Hourly</option>
      <option value="rate">Rate</option>
    </select>
  </div>

  <div class="form-group" v-if="selectedEmployee.employee_type === 'hourly'">
    <label for="hourly_rate">Hourly Rate:</label>
    <input type="number" id="hourly_rate" v-model="selectedEmployee.hourly_rate" class="form-control">
  </div>

  <div class="form-group" v-if="selectedEmployee.employee_type === 'rate'">
    <label for="monthly_rate">Monthly Rate:</label>
    <input type="number" id="monthly_rate" v-model="selectedEmployee.monthly_rate" class="form-control">
  </div>

  <button type="submit" class="btn btn-primary mt-3" v-if="selectedEmployee">Update</button>
  <button @click="cancelEdit" class="btn btn-secondary mt-3" v-if="selectedEmployee">Cancel</button>
</form>

    <h2>Add Employee</h2>
    <form @submit.prevent="createEmployee" class="mt-3">
      <div class="form-group">
        <label for="full_name">Full Name:</label>
        <input type="text" id="full_name" v-model="newEmployee.full_name" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="date_of_birth">Date of Birth:</label>
        <input type="date" id="date_of_birth" v-model="newEmployee.date_of_birth" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="department">Department:</label>
        <select id="department" v-model="newEmployee.department_id" class="form-control" required>
          <option v-for="department in departments" :value="department.id">{{ department.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="position">Position:</label>
        <input type="text" id="position" v-model="newEmployee.position" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="employee_type">Employee Type:</label>
        <select id="employee_type" v-model="newEmployee.employee_type" class="form-control" required>
          <option value="hourly">Hourly</option>
          <option value="rate">Rate</option>
        </select>
      </div>

      <div class="form-group" v-if="newEmployee.employee_type === 'hourly'">
        <label for="hourly_rate">Hourly Rate:</label>
        <input type="number" id="hourly_rate" v-model="newEmployee.hourly_rate" class="form-control">
      </div>

      <div class="form-group" v-if="newEmployee.employee_type === 'rate'">
        <label for="monthly_rate">Monthly Rate:</label>
        <input type="number" id="monthly_rate" v-model="newEmployee.monthly_rate" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary mt-3">Add</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      employees: [],
      departments: [],
      departmentFilter: '',
      perPage: 10,
      currentPage: 1,
      totalPages: 1,
      selectedEmployee: null,
      newEmployee: {
        full_name: '',
        date_of_birth: '',
        department_id: '',
        position: '',
        employee_type: 'hourly',
        hourly_rate: null,
        monthly_rate: null,
      },
    };
  },
  created() {
    // Fetch initial data based on route params
    this.departmentFilter = this.$route.params.department || '';
    this.currentPage = parseInt(this.$route.query.page) || 1;
  },
  watch: {
    '$route.query': {
      handler() {
        // Update data based on route params changes
        this.departmentFilter = this.$route.params.department || '';
        this.currentPage = parseInt(this.$route.query.page) || 1;
        this.getEmployees();
      },
      immediate: true,
    },
  },
  mounted() {
    this.getEmployees();
    this.getDepartments();
  },
  methods: {
    getDepartmentlink(departmentName) {
      return {
        name: 'employeesWihtDepartment',
        params: {
          department: departmentName
        }
      };
    },
    getEmployees() {
      // Make an API request to fetch employees
      axios.get('/api/employees', {
        params: {
          department: this.departmentFilter,
          perPage: this.perPage,
          page: this.currentPage
        }
      })
        .then(response => {
          this.employees = response.data.data;
          this.currentPage = response.data.current_page;
          this.totalPages = response.data.last_page;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDepartments() {
      // Make an API request to fetch departments
      axios.get('/api/departments')
        .then(response => {
          this.departments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    applyFilters() {
      this.currentPage = 1;
      this.getEmployees();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getEmployees();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getEmployees();
      }
    },
    createEmployee() {
      // Make an API request to create a new employee
      axios.post('/api/employees', this.newEmployee)
        .then(response => {
          this.employees.push(response.data);
          this.resetNewEmployee();
        })
        .catch(error => {
          console.log(error);
        });
    },
    editEmployee(id) {
      // Find the employee with the given ID
      this.selectedEmployee = this.employees.find(employee => employee.id === id);
    },
    updateEmployee() {
      // Make an API request to update the selected employee
      axios.put(`/api/employees/${this.selectedEmployee.id}`, this.selectedEmployee)
        .then(response => {
          const index = this.employees.findIndex(employee => employee.id === this.selectedEmployee.id);
          this.employees[index] = response.data;
          this.cancelEdit();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteEmployee(id) {
      // Make an API request to delete the employee with the given ID
      axios.delete(`/api/employees/${id}`)
        .then(() => {
          this.employees = this.employees.filter(employee => employee.id !== id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancelEdit() {
      this.selectedEmployee = null;
    },
    resetNewEmployee() {
      this.newEmployee = {
        full_name: '',
        date_of_birth: '',
        department: '',
        position: '',
        employee_type: 'hourly',
        hourly_rate: null,
        monthly_rate: null,
      };
    },
  },
};
</script>
  