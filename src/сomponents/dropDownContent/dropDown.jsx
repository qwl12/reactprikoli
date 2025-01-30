import Dropdown from 'react-bootstrap/Dropdown';



function DropdownList() {
    
  return (
    
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        дропдаун
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Первое</Dropdown.Item> <br />
        <Dropdown.Item href="#/action-2">Второе</Dropdown.Item> <br />
        <Dropdown.Item href="#/action-3">Третье</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;