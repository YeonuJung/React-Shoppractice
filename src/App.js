import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Container, Navbar} from 'react-bootstrap'
function App() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" className = "nav-bar">
        <Container className = "container">
          <Navbar.Brand href="#home">Food market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Foods</Nav.Link>
            <Nav.Link href="#pricing">about us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <div className = "main-bg"></div>
    <div className = "main-items">
      <div className = "main-items-title">
        <h3 style = {{fontWeight : "900"}}>지금 가장 많이 담는 특가😉</h3>
        <p style = {{color : "gray"}}>Foodmarket 추천 특가템 최대 50%</p>
      </div>
      <div className = "items-container">
      <div className = "item1"></div>
      <div className = "item2"></div>
      <div className = "item3"></div>
      </div>
    </div>
    </>
  );
}

export default App;
