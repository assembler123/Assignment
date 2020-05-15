import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import ShowAll from '../components/ShowAll.jsx'
class AllSur extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchText:'',
            surveys:[]
        }
    }
    componentWillReceiveProps(props)
    {
      
      if(props.emp_name)
      {
        let allP=props.emp_data[props.emp_name];
        let allS=props.surveys;
        allS=allS.filter(e=>{
          if(allP.includes(e.id))return false;
          else 
          return true;
        })
        console.log(allS);
        this.setState({searchText:'',surveys:allS})
      }
    }
  render()
  {
    const handleSearch=(e)=>{
      let srv=this.state.surveys;
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
        // console.log(reg)
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
      this.setState({surveys:srv,searchText:e.target.value})
    }
    return (<Fragment>
        <h3 className='content is-large has-text-centered	'>ALL SURVEYS</h3>
        <div className="overtext has-background-white-bis	">
        {this.state.surveys.length?<Fragment><div className="control has-icons-right w-50">
            <input type='text' placeholder='Search' onChange={(e)=>{
              handleSearch(e);
}} className="input is-rounded" value={this.state.searchText}/>
            <span className="icon is-right">
            <i className="fas fa-search"></i>
            </span></div>
        {this.state.surveys.map(e=><ShowAll obj={e} ></ShowAll>)}
        </Fragment>
        :<p className='content has-text-centered has-text-grey mt-100	'>***No Data to display***</p>}
        </div>
    </Fragment>);
  }  
}
const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(AllSur);