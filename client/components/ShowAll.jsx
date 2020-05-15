import React,{Component} from 'react';
import {connect} from 'react-redux';
class ShowAll extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      obj:this.props.obj
    }
  }
  componentWillReceiveProps(props)
  {
    this.setState({obj:props});
  }
  render()
  {
    return (<div className='card mb-30 m-10'>
    <div className='card-header'>
      <p className='card-header-title'>{this.props.obj.title}</p>
    </div>
    <div className='card-content'>
      <p className='content'>{this.props.obj.desc}</p>
      <p className='content is-small has-text-grey-light'><b>Date created: </b> {this.props.obj.date}</p>
    </div>
    <div className='card-footer'>
    <a class="card-footer-item has-background-primary	has-text-white-ter	" onClick={()=>{this.props.Assign(this.props.obj.id)}}><i class="fas fa-plus-circle"> Assign</i> </a>
    </div>
  </div>);
  }  
}
const mapStateToProps=(state)=>{
  return state;
}
const mapDispatchToProps=(dispatch)=>{
  return {
    Assign:(task_id)=>{
      dispatch({type:"ADD_TO_ASSIGN",payload:task_id})
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowAll);