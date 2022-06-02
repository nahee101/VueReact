import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import {faCamera} from '@fortawesome/free-solid-svg-icons'

const gridStyle = {
  backgroundColor: 'yellow'
}

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Container style={gridStyle}>
        <Row>
          <Col sm={8} md={4}>
            <FontAwesomeIcon icon={faCamera} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
