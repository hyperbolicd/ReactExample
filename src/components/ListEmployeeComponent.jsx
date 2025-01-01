import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../util/withRouter';

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data })
    })
  }

  addEmployee() {
    this.props.router.navigate("/add-employee/_add")
  }

  editEmployee(id) {
    this.props.router.navigate(`/add-employee/${id}`)
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then(res => {
      this.setState({
        employees: this.state.employees.filter(
          employee => employee.id != id
        )
      })
    })
  }

  viewEmployee(id) {
    this.props.router.navigate(`/view-employee/${id}`)
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Employees List</h2>
        <div className='col-auto mr-auto'>
          <button className='btn btn-primary' onClick={this.addEmployee} style={{ marginBottom: "20px" }}> Add Employee </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(
                  employee =>
                    <tr key={employee.id}>
                      <td> {employee.firstName}</td>
                      <td> {employee.lastName}</td>
                      <td> {employee.emailId}</td>
                      <td>
                        <button onClick={() => this.editEmployee(employee.id)} className='btn btn-info'>Update</button>
                        <button onClick={() => this.deleteEmployee(employee.id)} className='btn btn-warning' style={{ marginLeft: "10px" }}>Delete</button>
                        <button onClick={() => this.viewEmployee(employee.id)} className='btn btn-secondary' style={{ marginLeft: "10px" }}>View</button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(ListEmployeeComponent)