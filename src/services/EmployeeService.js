import axios from 'axios';
import {env} from '../config/config';

const EMPLOYEE_API_BASE_URL = `${env.API_URL}/api/v1/employees`

class EmployeeService {

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL)
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee)
  }

  getEmplooyeeById(employeeId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`)
  }

  updateEmployee(employeeId, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee)
  }

  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`)
  }
}

export default new EmployeeService()