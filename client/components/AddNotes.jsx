import React,{Component} from 'react';
import { Form, FormGroup, Col,Button } from 'react-bootstrap';
import {connect} from 'react-redux';
class AddNotes extends Component
{
    constructor()
    {
        super();
        this.state={
            title:'',
            content:''
        }
    }
  render()
  {
    return (
        <Col md={{span:4,offset:0}}><h4 className='text-center text-white'>Add New Note</h4>
        <Form>
            <FormGroup>
                <Form.Label for="title">Title</Form.Label>
                <Form.Control type="text" name="title" id="title" placeholder="Enter Title" value={this.state.title} onChange={e=>{
                    this.setState({
                        ...this.state,
                        title:e.target.value,
                    });
                }} />
            </FormGroup>

            <FormGroup>
                <Form.Label for="content">Content</Form.Label>
                <Form.Control as="textarea" rows={4} id="content" placeholder="Enter Content" value={this.state.content} onChange={e=>{
                    this.setState({
                        ...this.state,
                        content:e.target.value,
                    });
                }} />
            </FormGroup>
            <Button variant="primary" type="submit" onClick={e=>{
                e.preventDefault();
                this.props.addNote({title:this.state.title,content:this.state.content});
                this.setState({title:'',content:''})
            }}>Submit</Button>
        </Form>
        </Col>
    );
  }  
}
const mapStateToProps=(state)=>{
    return state;
}
const mapDispatchToProps=(dispatch)=>{
    return {

        addNote:(param)=>{
            dispatch({
                type:'ADD_NOTE',
                payload:param
            })
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNotes);