import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
const severAddr='http://localhost:3000'
class Submit extends Component
{
  render()
  {
    return (this.props.emp_name?<button className="button is-success" onClick={e=>
    {axios.post(severAddr+'/api/saveData',{emp_data:this.props.emp_data}).then(res=>{if(res.status)alert("Success! please check the console of backend")});}}>Done</button>:null);
  }  
}
const mapStateToProps=(state)=>{
  return state;
}
const mapDispatchToProps=(dispatch)=>{
  return {};
}
export default connect(mapStateToProps,mapDispatchToProps)(Submit);