import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import ShowSurv from '../components/ShowSurv.jsx'

class AsgnSur extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            Assigned:[],
            searchText:''
        }
    }
    componentWillReceiveProps(props)
    {
        if(props.emp_name)
        {
        let allP=props.emp_data[props.emp_name];
        let allS=props.surveys;
        allS=allS.filter(e=>{
          if(allP.includes(e.id))return true;
          else 
          return false;
        })
        console.log(allS);
        this.setState({searchText:'',Assigned:allS})
      }
    }
  render()
  {
    const handleSearch=(e)=>{
      let srv=this.state.Assigned;
      let sub=e.target.value.toLowerCase();
      for(let i = 0 ; i< srv.length; i++)
      {
        let txt=srv[i].title.toLowerCase();
        if(txt.includes(sub))
        {
          let t= srv[0];
          srv[0]=srv[i];
          srv[i]=t;
        }
      }
      for(let i = 0 ; i< srv.length; i++)
      {
        let txt=srv[i].title.toLowerCase();
        if(txt.startsWith(sub))
        {
          let t= srv[0];
          srv[0]=srv[i];
          srv[i]=t;
        }
      }
      this.setState({Assigned:srv,searchText:e.target.value})
    }
    return (
        <Fragment><h3 className='content is-large has-text-centered	'>ASSIGNED SURVEYS</h3>
        <div className="overtext has-background-white-bis">
            {this.state.Assigned.length?<Fragment><div className="control has-icons-right w-50">
            <input type='text' placeholder='Search' onChange={(e)=>{
              handleSearch(e)
}} className="input is-rounded" value={this.state.searchText}/>
            <span className="icon is-right">
            <i className="fas fa-search"></i>
            </span></div>{this.state.Assigned.map(e=><ShowSurv obj={e}></ShowSurv>)}</Fragment>:<p className='content has-text-centered mt-100 has-text-grey'>***No Data to display***</p>}
        </div>
        </Fragment>
    );
  }  
}
const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(AsgnSur);