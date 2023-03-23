import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

const UploadImage = ({ id, lebel, setState }) => {
  const [img, setImg] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let body = new FormData();
    body.set("key", "7e550a7fc902522e5934b0e3e9a410d8");
    body.append("image", img);
    axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    }).then((res) => {
      if (res.data.data.url) {
        setState(res.data.data.url);
        setDone(true);
      }
    });
  }, [img, setState]);

  return (
    <>
      <label for={id} class="form-label">
        {lebel}
        {done ? (
          <Badge pill bg="primary">
            {" "}
          </Badge>
        ) : (
          ""
        )}
      </label>
      <input
        type="file"
        class="form-control"
        id={id}
        onChange={(e) => setImg(e.target.files[0])}
      />
    </>
  );
};

export default UploadImage;
