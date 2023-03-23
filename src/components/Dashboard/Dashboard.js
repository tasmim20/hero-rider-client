import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UserFilter from "./UserFilter";
import UserPagination from "./UserPagination";
import UserSearch from "./UserSearch";
import UsersTable from "./UsersTable";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [pageTotal, setPageTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [seletion, setSeletion] = useState([]);

  const size = 2;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users?page=${page}&size=${size}`)
      .then((res) => {
        setUsers(res.data.result);
        setUsers2(res.data.result);
        setPageTotal(Math.ceil(res.data.count / size));
      });
  }, [page]);

  const handleSelect = (id) => {
    if (!seletion?.includes(id)) {
      setSeletion([...seletion, id]);
    } else {
      const newSelect = seletion.filter((item) => item !== id);
      setSeletion(newSelect);
    }
  };
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-around">
        <UserSearch users={users} setUsers2={setUsers2} />
        <UserFilter users={users} setUsers2={setUsers2} />
      </div>
      <UsersTable users={users2} handleSelect={handleSelect} />
      <UserPagination page={page} setPage={setPage} pageTotal={pageTotal} />
    </Container>
  );
};

export default Dashboard;
