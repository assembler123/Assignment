import React,{Component} from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
class Header extends Component
{
    constructor()
    {
        super();
        this.state={
            date:new Date(),
            showCalendar:false
        }
    }
  render()
  {
    return (
  <Container fluid style={{padding:"15px 25px",background:"#4dc2f8"}}>
    <Row>
        <Col><h1 className='text-center text-white'>Notes</h1>
            <Button className="float-right btn-light" onClick={
                ()=>{
                    this.setState({
                        ...this.state,
                        showCalendar:!this.state.showCalendar
                    })
                }}><b>{this.state.date.toDateString()}</b></Button>
            <div style={{position:'absolute',display:this.state.showCalendar?"block":"none",left: '100%',transform: 'translate(-100%, 15%)',zIndex:'2'}}>

                <Calendar onChange={(date)=>{this.setState({date:date,showCalendar:false});this.props.changeDate(date)}} value={this.state.date}></Calendar>
            </div>
        </Col>
    </Row>
  </Container>
    );
  }  
}
const mapStateToProps=(state)=>{
    return state;
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeDate:(date)=>{
            dispatch({
                type:'CHANGE_DATE',
                payload:date
            })
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);