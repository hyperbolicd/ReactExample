import React, { Component } from 'react'
import { withRouter } from '../util/withRouter'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.router.params.id,
      employee: {}
    }
  }

  componentDidMount() {
    EmployeeService.getEmplooyeeById(this.state.id).then(res => {
      this.setState({
        employee: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'> View Employee Details </h3>
          <div className='card-body'>
            <div className='row'>
              <label className='col'>Employee First Name: </label>
              <div className='col'>{this.state.employee.firstName}</div>
            </div>
            <div className='row'>
              <label className='col'>Employee Last Name: </label>
              <div className='col'>{this.state.employee.lastName}</div>
            </div>
            <div className='row'>
              <label className='col'>Employee Email Address: </label>
              <div className='col'>{this.state.employee.emailId}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewEmployeeComponent)