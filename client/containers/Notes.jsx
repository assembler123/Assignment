import React,{Component,Fragment} from 'react';
import Header from '../components/Header.jsx'
import AddNotes from '../components/AddNotes.jsx'
import { Container, Row ,Col} from 'react-bootstrap';
import ShowNotes from '../components/ShowNotes.jsx';
class Notes extends Component
{
  render()
  {
    return (
        <Fragment><Header/>
        <Container>
          <Row className="mt-3">
            <AddNotes></AddNotes>
            <ShowNotes></ShowNotes>
          </Row>
        </Container>
        </Fragment>
    );
  }  
}
export default Notes;