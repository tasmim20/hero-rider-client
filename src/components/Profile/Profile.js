import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const [hero, setHero] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/profile?email=${user?.email}`)
        .then((res) => {
          setHero(res.data);
        });
    }
  }, [user?.email]);
  return (
    <Container
      className="d-flex w-100 align-items-center"
      style={{
        height: "90svh",
      }}
    >
      <Card className="w-100">
        <Card.Header>Rider Profile</Card.Header>
        <Card.Body>
          <Card.Title>{hero.fullName}</Card.Title>
          <figcaption className="blockquote-footer">{hero.role}</figcaption>

          <Image src={hero.profilePhoto} />
        </Card.Body>
        <Card.Footer className="text-muted">Hero Rider</Card.Footer>
      </Card>
    </Container>
  );
};

export default Profile;
