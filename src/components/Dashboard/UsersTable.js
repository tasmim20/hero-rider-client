import React from "react";
import Table from "react-bootstrap/Table";

const UsersTable = ({ users, handleSelect }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, i) => (
          <tr key={user._id}>
            <td className="d-flex">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id={user._id}
                onChange={() => handleSelect(user._id)}
              />
              <label className="ps-5 form-check-label" for={user._id}>
                {i + 1}
              </label>
            </td>
            <td>{user?.fullName}</td>
            <td>{user?.email}</td>
            <td>{user?.phone}</td>
            <td>{user?.age}</td>
            <td>{user?.roll}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
