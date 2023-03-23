import React from "react";
import Pagination from "react-bootstrap/Pagination";

const UserPagination = ({ page, setPage, pageTotal }) => {
  let active = page + 1;
  let items = [];
  for (let number = 1; number <= pageTotal; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPage(number - 1)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};

export default UserPagination;
