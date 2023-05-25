"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Employee_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Employee.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Employee.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
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
        monthly_rate: null
      }
    };
  },
  created: function created() {
    // Fetch initial data based on route params
    this.departmentFilter = this.$route.params.department || '';
    this.currentPage = parseInt(this.$route.query.page) || 1;
  },
  watch: {
    '$route.query': {
      handler: function handler() {
        // Update data based on route params changes
        this.departmentFilter = this.$route.params.department || '';
        this.currentPage = parseInt(this.$route.query.page) || 1;
        this.getEmployees();
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    this.getEmployees();
    this.getDepartments();
  },
  methods: {
    getDepartmentlink: function getDepartmentlink(departmentName) {
      return {
        name: 'employeesWihtDepartment',
        params: {
          department: departmentName
        }
      };
    },
    getEmployees: function getEmployees() {
      var _this = this;
      // Make an API request to fetch employees
      axios.get('/api/employees', {
        params: {
          department: this.departmentFilter,
          perPage: this.perPage,
          page: this.currentPage
        }
      }).then(function (response) {
        _this.employees = response.data.data;
        _this.currentPage = response.data.current_page;
        _this.totalPages = response.data.last_page;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getDepartments: function getDepartments() {
      var _this2 = this;
      // Make an API request to fetch departments
      axios.get('/api/departments').then(function (response) {
        _this2.departments = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    applyFilters: function applyFilters() {
      this.currentPage = 1;
      this.getEmployees();
    },
    previousPage: function previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getEmployees();
      }
    },
    nextPage: function nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getEmployees();
      }
    },
    createEmployee: function createEmployee() {
      var _this3 = this;
      // Make an API request to create a new employee
      axios.post('/api/employees', this.newEmployee).then(function (response) {
        _this3.employees.push(response.data);
        _this3.resetNewEmployee();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editEmployee: function editEmployee(id) {
      // Find the employee with the given ID
      this.selectedEmployee = this.employees.find(function (employee) {
        return employee.id === id;
      });
    },
    updateEmployee: function updateEmployee() {
      var _this4 = this;
      // Make an API request to update the selected employee
      axios.put("/api/employees/".concat(this.selectedEmployee.id), this.selectedEmployee).then(function (response) {
        var index = _this4.employees.findIndex(function (employee) {
          return employee.id === _this4.selectedEmployee.id;
        });
        _this4.employees[index] = response.data;
        _this4.cancelEdit();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteEmployee: function deleteEmployee(id) {
      var _this5 = this;
      // Make an API request to delete the employee with the given ID
      axios["delete"]("/api/employees/".concat(id)).then(function () {
        _this5.employees = _this5.employees.filter(function (employee) {
          return employee.id !== id;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cancelEdit: function cancelEdit() {
      this.selectedEmployee = null;
    },
    resetNewEmployee: function resetNewEmployee() {
      this.newEmployee = {
        full_name: '',
        date_of_birth: '',
        department: '',
        position: '',
        employee_type: 'hourly',
        hourly_rate: null,
        monthly_rate: null
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Employee.vue?vue&type=template&id=99aa15ce&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Employee.vue?vue&type=template&id=99aa15ce& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("h1", {
    staticClass: "mt-3"
  }, [_vm._v("Employee List")]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt-3"
  }, [_c("label", {
    attrs: {
      "for": "department-filter"
    }
  }, [_vm._v("Filter by Department:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.departmentFilter,
      expression: "departmentFilter"
    }],
    staticClass: "form-control",
    attrs: {
      id: "department-filter"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.departmentFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.applyFilters]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("All")]), _vm._v(" "), _vm._l(_vm.departments, function (department) {
    return _c("option", {
      domProps: {
        value: department.id
      }
    }, [_vm._v(_vm._s(department.name))]);
  })], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table mt-3"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.employees, function (employee) {
    return _c("tr", {
      key: employee.id
    }, [_c("td", [_vm._v(_vm._s(employee.full_name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(employee.date_of_birth))]), _vm._v(" "), _c("td", [_c("router-link", {
      attrs: {
        to: _vm.getDepartmentlink(employee.department.id)
      }
    }, [_vm._v(_vm._s(employee.department.name))])], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(employee.position))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(employee.employee_type))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(employee.salary))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-primary btn-sm",
      on: {
        click: function click($event) {
          return _vm.editEmployee(employee.id);
        }
      }
    }, [_vm._v("Edit")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger btn-sm",
      on: {
        click: function click($event) {
          return _vm.deleteEmployee(employee.id);
        }
      }
    }, [_vm._v("Delete")])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "per-page"
    }
  }, [_vm._v("Per Page:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "form-control",
    attrs: {
      id: "per-page"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.applyFilters]
    }
  }, [_c("option", {
    attrs: {
      value: "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "100"
    }
  }, [_vm._v("100")])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      disabled: _vm.currentPage === 1
    },
    on: {
      click: _vm.previousPage
    }
  }, [_vm._v("Previous")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      disabled: _vm.currentPage === _vm.totalPages
    },
    on: {
      click: _vm.nextPage
    }
  }, [_vm._v("Next")])]), _vm._v(" "), _vm.selectedEmployee ? _c("h2", [_vm._v("Edit Employee")]) : _vm._e(), _vm._v(" "), _vm.selectedEmployee ? _c("form", {
    staticClass: "mt-3",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateEmployee.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "full_name"
    }
  }, [_vm._v("Full Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.full_name,
      expression: "selectedEmployee.full_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "full_name",
      required: ""
    },
    domProps: {
      value: _vm.selectedEmployee.full_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedEmployee, "full_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "date_of_birth"
    }
  }, [_vm._v("Date of Birth:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.date_of_birth,
      expression: "selectedEmployee.date_of_birth"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "date_of_birth",
      required: ""
    },
    domProps: {
      value: _vm.selectedEmployee.date_of_birth
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedEmployee, "date_of_birth", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "department"
    }
  }, [_vm._v("Department:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.department_id,
      expression: "selectedEmployee.department_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "department",
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedEmployee, "department_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.departments, function (department) {
    return _c("option", {
      domProps: {
        value: department.id
      }
    }, [_vm._v(_vm._s(department.name))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "position"
    }
  }, [_vm._v("Position:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.position,
      expression: "selectedEmployee.position"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "position",
      required: ""
    },
    domProps: {
      value: _vm.selectedEmployee.position
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedEmployee, "position", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "employee_type"
    }
  }, [_vm._v("Employee Type:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.employee_type,
      expression: "selectedEmployee.employee_type"
    }],
    staticClass: "form-control",
    attrs: {
      id: "employee_type",
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedEmployee, "employee_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "hourly"
    }
  }, [_vm._v("Hourly")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "rate"
    }
  }, [_vm._v("Rate")])])]), _vm._v(" "), _vm.selectedEmployee.employee_type === "hourly" ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "hourly_rate"
    }
  }, [_vm._v("Hourly Rate:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.hourly_rate,
      expression: "selectedEmployee.hourly_rate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "hourly_rate"
    },
    domProps: {
      value: _vm.selectedEmployee.hourly_rate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedEmployee, "hourly_rate", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.selectedEmployee.employee_type === "rate" ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "monthly_rate"
    }
  }, [_vm._v("Monthly Rate:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedEmployee.monthly_rate,
      expression: "selectedEmployee.monthly_rate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "monthly_rate"
    },
    domProps: {
      value: _vm.selectedEmployee.monthly_rate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedEmployee, "monthly_rate", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.selectedEmployee ? _c("button", {
    staticClass: "btn btn-primary mt-3",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Update")]) : _vm._e(), _vm._v(" "), _vm.selectedEmployee ? _c("button", {
    staticClass: "btn btn-secondary mt-3",
    on: {
      click: _vm.cancelEdit
    }
  }, [_vm._v("Cancel")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("h2", [_vm._v("Add Employee")]), _vm._v(" "), _c("form", {
    staticClass: "mt-3",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createEmployee.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "full_name"
    }
  }, [_vm._v("Full Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.full_name,
      expression: "newEmployee.full_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "full_name",
      required: ""
    },
    domProps: {
      value: _vm.newEmployee.full_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newEmployee, "full_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "date_of_birth"
    }
  }, [_vm._v("Date of Birth:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.date_of_birth,
      expression: "newEmployee.date_of_birth"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "date_of_birth",
      required: ""
    },
    domProps: {
      value: _vm.newEmployee.date_of_birth
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newEmployee, "date_of_birth", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "department"
    }
  }, [_vm._v("Department:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.department_id,
      expression: "newEmployee.department_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "department",
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.newEmployee, "department_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.departments, function (department) {
    return _c("option", {
      domProps: {
        value: department.id
      }
    }, [_vm._v(_vm._s(department.name))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "position"
    }
  }, [_vm._v("Position:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.position,
      expression: "newEmployee.position"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "position",
      required: ""
    },
    domProps: {
      value: _vm.newEmployee.position
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newEmployee, "position", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "employee_type"
    }
  }, [_vm._v("Employee Type:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.employee_type,
      expression: "newEmployee.employee_type"
    }],
    staticClass: "form-control",
    attrs: {
      id: "employee_type",
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.newEmployee, "employee_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "hourly"
    }
  }, [_vm._v("Hourly")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "rate"
    }
  }, [_vm._v("Rate")])])]), _vm._v(" "), _vm.newEmployee.employee_type === "hourly" ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "hourly_rate"
    }
  }, [_vm._v("Hourly Rate:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.hourly_rate,
      expression: "newEmployee.hourly_rate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "hourly_rate"
    },
    domProps: {
      value: _vm.newEmployee.hourly_rate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newEmployee, "hourly_rate", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.newEmployee.employee_type === "rate" ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "monthly_rate"
    }
  }, [_vm._v("Monthly Rate:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newEmployee.monthly_rate,
      expression: "newEmployee.monthly_rate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "monthly_rate"
    },
    domProps: {
      value: _vm.newEmployee.monthly_rate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newEmployee, "monthly_rate", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary mt-3",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Add")])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Full Name")]), _vm._v(" "), _c("th", [_vm._v("Date of Birth")]), _vm._v(" "), _c("th", [_vm._v("Department")]), _vm._v(" "), _c("th", [_vm._v("Position")]), _vm._v(" "), _c("th", [_vm._v("Employee Type")]), _vm._v(" "), _c("th", [_vm._v("Salary")]), _vm._v(" "), _c("th", [_vm._v("Actions")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Employee.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Employee.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Employee_vue_vue_type_template_id_99aa15ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=99aa15ce& */ "./resources/js/components/Employee.vue?vue&type=template&id=99aa15ce&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/components/Employee.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_99aa15ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _Employee_vue_vue_type_template_id_99aa15ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Employee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Employee.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Employee.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Employee.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Employee.vue?vue&type=template&id=99aa15ce&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Employee.vue?vue&type=template&id=99aa15ce& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_99aa15ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_99aa15ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_99aa15ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=template&id=99aa15ce& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Employee.vue?vue&type=template&id=99aa15ce&");


/***/ })

}]);