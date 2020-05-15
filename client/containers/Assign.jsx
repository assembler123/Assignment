import React,{Component,Fragment} from 'react';
import AllSur from './AllSur.jsx';
import AsgnSur from './AsgnSur.jsx';
import SelectEmp from '../components/SelectEmp.jsx';
import {connect} from 'react-redux';
import axios from 'axios';
const serverAddr = 'http://127.0.0.1:3000'
import Submit from '../components/Submit.jsx'
class Assign extends Component
{
  componentDidMount()
  {
    axios.get(serverAddr+'/api/getSurveys').then(res=>this.props.setEmpData(res.data)).catch(e=> null);
  }
  render()
  {
    return (
      <Fragment> 
      <div className='columns has-text-centered'>
      <div className='column is-full m-10'>
      <SelectEmp></SelectEmp>
      </div>
      </div>
      <div className='columns'>
      <div className='column is-4 is-offset-1'>
      <AllSur></AllSur>
      </div>
      <div className='column is-4 is-offset-2'>
      <AsgnSur></AsgnSur>
      </div>
      </div>
      <div className='columns'>
        <div className='column is-full m-10 has-text-centered'>
          <Submit/>
        </div>
      </div>
      </Fragment>
    );
  }  
}
const mapStateToProps=(state)=>{
  return state;
}
const mapDispatchToProps=(dispatch)=>{
  return {
    setEmpData:(param)=>dispatch({type:'SET_INIT_DATA',payload:param})
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Assign);