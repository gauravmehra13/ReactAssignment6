import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

function FillExample() {
  return (
    



    <Nav  fill variant="light" bg="light" defaultActiveKey="/home" >
      <Nav.Item>
        <NavLink to="/home" className={"text-decoration-none mt-2 h2"}>Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Student" className={"text-decoration-none mt-2  h2"}>Students</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/ContactUs" className={"text-decoration-none mt-2 h2"}>ContactUs</NavLink>
      </Nav.Item>
     
    </Nav>
   
   
  );
}

export default FillExample;