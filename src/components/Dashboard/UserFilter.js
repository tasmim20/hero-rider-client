import React from "react";
import { Form } from "react-bootstrap";

const UserFilter = ({ users, setUsers2 }) => {
  const handleFilter = (field) => {
    if (field == "low") {
      const newUsers = users.filter(
        (item) => parseInt(item.age) >= 18 && parseInt(item.age) <= 25
      );
      setUsers2(newUsers);
    } else if (field == "high") {
      const newUsers = users.filter(
        (item) => parseInt(item.age) >= 26 && parseInt(item.age) <= 30
      );
      setUsers2(newUsers);
    } else {
      setUsers2([...users]);
    }

    // setUsers2(searchResult);
  };
  return (
    <div>
      <Form.Select size="md" onChange={(e) => handleFilter(e.target.value)}>
        <option value="">Option select ...</option>
        <option value="low">18-25</option>
        <option value="high">26-30</option>
      </Form.Select>
    </div>
  );
};

export default UserFilter;
