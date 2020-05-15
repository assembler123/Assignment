import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
const serverAddr = 'http://127.0.0.1:3000'

class SelectEmp extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      emp_list:[],
      opt:null
    }
  }
  componentDidMount()
  {
    axios.get(serverAddr+'/api/getAllEmp').then(res=>this.setState({emp_list:res.data}));
  }
  render()
  {
    return (<div className='select'>
      <select onChange={e=>{this.setState({...this.state,opt:e.target.value})
      ;this.props.changeEmp(e.target.value);}} className='is-focused'>
        <option disabled={this.state.opt}> SELECT EMPLOYEE NAME</option>
        {this.state.emp_list.map(e=><option value={e}>{e}</option>)}
      </select>
    </div>);
  }  
}
const mapStateToProps=(state)=>{
  return state;
}
const mapDispatchToProps=(dispatch)=>{
  return {
    changeEmp:(Emp_name)=>{
      dispatch({type:'CHANGE_EMP_NAME',payload:Emp_name})
    }}}
export default connect(mapStateToProps,mapDispatchToProps)(SelectEmp);