import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

export const NavBar = ({ onSearch }) => {
  // Pass the search string value to Home parent component
  const handleSearch = (e) => onSearch(e.currentTarget[0].value);
  
  return (
    <Navbar className="bg-body-tertiary justify-content-between px-4">
      <Navbar.Brand href="#home">CSP Store</Navbar.Brand>
      <Form inline onChange={handleSearch}>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
      </Form>
    </Navbar>
  );
}