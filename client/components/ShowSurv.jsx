import React,{Component} from 'react';
import {connect} from 'react-redux';
class ShowSurv extends Component
{
  render()
  {
    return (<div className='card mb-30 m-10 '>
      <div className='card-header'>
        <p className='card-header-title'>{this.props.obj.title}</p>
      </div>
      <div className='card-content'>
        <p className='content'>{this.props.obj.desc}</p>
        <p className='content is-small has-text-grey-light'><b>Date created: </b> {this.props.obj.date}</p>
      </div>
      <div className='card-footer'>
      <a class="card-footer-item has-background-danger	has-text-white-ter" onClick={()=>this.props.remove(this.props.obj.id)}><i className="fas fa-trash-alt "> Remove</i></a>

      </div>
    </div>);
  }  
}
const mapStateToProps=(state)=>{
  return state;
}
const mapDispatchToProps=(dispatch)=>{
  return {
    remove:(task_id)=>{
      dispatch({type:'REMOVE_FROM_ASSIGN',payload:task_id})
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowSurv
);