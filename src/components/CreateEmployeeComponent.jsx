import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../util/withRouter';

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.router.params.id,
      firstName: '',
      lastName: '',
      emailId: ''
    }

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id !== '_add') {
      EmployeeService.getEmplooyeeById(this.state.id).then((res) => {
        const employee = res.data
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId
        })
      })
    }
  }

  updateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId
    }
    console.log('employee => ' + JSON.stringify(employee))
    EmployeeService.updateEmployee(this.state.id, employee).then(res => {
      this.props.router.navigate('/employees')
    })
  }

  cancel = (event) => {
    event.preventDefault();
    this.props.router.navigate('/')
  }

  saveOrUpdateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId
    }
    console.log('employee => ' + JSON.stringify(employee))

    if (this.state.id === '_add') {
      EmployeeService.createEmployee(employee).then(res => {
        this.props.router.navigate('/employees')
      })
    } else {
      EmployeeService.updateEmployee(this.state.id, employee).then(res => {
        this.props.router.navigate('/employees')
      })
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value })
  }

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value })
  }

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value })
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className='text-center'>Add Employee</h3>
    } else {
      return <h3 className='text-center'>Update Employee</h3>
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3'>
              {
                this.getTitle()
              }
              <div className='card-body'>
                <form>
                  <div className='mb-3'>
                    <label>First Name: </label>
                    <input placeholder='First Name' name='firstName' className='form-control'
                      value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                  </div>
                  <div className='mb-3'>
                    <label>Last Name: </label>
                    <input placeholder='Last Name' name='lastName' className='form-control'
                      value={this.state.lastName} onChange={this.changeLastNameHandler} />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='label-emailId'>Email Address: </label>
                    <input type='email' placeholder='Email Address' name='emailId' id='label-emailId' className='form-control'
                      value={this.state.emailId} onChange={this.changeEmailHandler} />
                  </div>
                  <button className='btn btn-success' onClick={this.saveOrUpdateEmployee}>Save</button>
                  <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateEmployeeComponent)