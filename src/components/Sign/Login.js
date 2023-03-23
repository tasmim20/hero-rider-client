import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import RegModal from "./RegModal";

const Login = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const onSubmit = (data) => {
    signIn(data.email, data.password).then((res) => {
      if (res.user.email) {
        navigate("/profile");
      }
    });
  };

  return (
    <div
      className="d-flex w-100 justify-content-center  align-items-center"
      style={{
        height: "100svh",
      }}
    >
      <div className="form-signin m-auto border py-5 px-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <span
              className="text-primary"
              onClick={() => setModalShow(true)}
              style={{ cursor: "pointer" }}
            >
              Create an account?
            </span>
          </Form.Group>

          <RegModal show={modalShow} onHide={() => setModalShow(false)} />
          <Button type="submit" variant="secondary" size="sm">
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
