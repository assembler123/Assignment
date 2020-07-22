import React,{Component} from 'react';
import { Table, Col,Button,Modal,FormGroup,Form} from 'react-bootstrap';
import {connect} from 'react-redux';
class ShowNotes extends Component
{
    constructor()
    {
        super();
        this.state={
            show:false
        }
    }
  render()
  {
    return (
        <Col md={{span:6,offset:2}}><h4 className='text-center text-dark text-center'>Notes</h4>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {this.props.showNotes.map(e=>(<tr>
                <td>{e.title}</td>
                <td>{e.date.toLocaleString().split(',')[0]}</td>
                <td><Button variant="warning" onClick={()=>{
                    this.setState({show:true,obj:{
                        id:e.id,
                        date:e.date,
                        title:e.title,
                        content:e.content,
                    }})
                }}>Edit</Button></td>
                </tr>))}
            </tbody>
            
        </Table>
        {this.state.show?<Modal show={this.state.show} onHide={e=>{this.setState({show:false})}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <FormGroup>
                <Form.Label for="title1">Title</Form.Label>
                <Form.Control type="text" name="title" id="title1" value={this.state.obj.title} onChange={e=>{
                    let obj = this.state.obj;
                    obj.title = e.target.value; 
                    this.setState({
                        ...this.state,
                        obj:obj,
                    });
                }} />
            </FormGroup>

            <FormGroup>
                <Form.Label for="content1">Content</Form.Label>
                <Form.Control as="textarea" rows={4} id="content1" value={this.state.obj.content} onChange={e=>{
                    let obj = this.state.obj;
                    obj.content = e.target.value; 
                    this.setState({
                        ...this.state,
                        obj:obj,
                    });
                }}/>
            </FormGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e=>{this.setState({show:false})}}>Discard</Button>
          <Button variant="primary" onClick={e=>{
              this.props.editNote({object:this.state.obj});
              this.setState({
                  show:false
              })
          }}>Save Changes</Button>
        </Modal.Footer>
        </Modal>:null}
        </Col>
    );
  }  
}
const mapStateToProps=(state)=>{    
    return state;
}
const mapDispatchToProps=(dispatch)=>{
    return {

        editNote:(param)=>{
            dispatch({
                type:'EDIT_NOTE',
                payload:param
            })
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowNotes);