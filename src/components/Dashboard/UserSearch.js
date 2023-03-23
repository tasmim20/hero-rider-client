import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const UserSearch = ({ users, setUsers2 }) => {
  const [search, setSearchText] = useState("");
  const handleSearch = () => {
    const searchResult = users.filter((item) =>
      Object.values(item).join("").includes(search)
    );
    setUsers2(searchResult);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default UserSearch;
