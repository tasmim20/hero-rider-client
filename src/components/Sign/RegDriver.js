import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import UploadImage from "../../Shared/UploadImage";

const RegDriver = () => {
  const [namePlate, setNamePlate] = useState("");
  const [profile, setProfile] = useState("");
  const [nid, setNid] = useState("");
  const [driving, setDriving] = useState("");

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    if (
      !(data.password == data.confirmPassword) ||
      !profile ||
      !nid ||
      !driving ||
      !namePlate
    ) {
      alert("Please enter correct information");
      return;
    }
    const newData = {
      ...data,
      roll: "rider",
      profilePhoto: profile,
      nidPhoto: nid,
      drivingLicense: driving,
      vehicleNamePlate: namePlate,
    };
    createUser(newData.email, newData.password)
      .then(() => {
        updateUser({
          displayName: newData.fullName,
          photoURL: newData.profilePhoto,
        });
      })
      .then(() => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/users`, newData)
          .then((res) => {
            if (res.data.insertedId) {
              alert("user added successfully");
              navigate("/profile");
            }
          });
      });
  };
  return (
    <div className="d-flex w-100 justify-content-center my-5">
      <div className="form-signin w-50 border py-5 px-3">
        <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-0">Rider informartion</h3>
          <hr />
          {/* name */}
          <div class="col-md-6">
            <label for="name" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              {...register("fullName", { required: true })}
            />
          </div>
          {/* email  */}
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              {...register("email", { required: true })}
            />
          </div>

          {/* age */}
          <div class="col-md-4">
            <label for="age" class="form-label">
              Age
            </label>
            <input
              type="number"
              placeholder="20"
              class="form-control"
              id="age"
              {...register("age", { required: true })}
            />
          </div>
          {/* phone  */}
          <div class="col-md-4">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="number"
              placeholder="+880"
              class="form-control"
              id="phone"
              {...register("phone", { required: true })}
            />
          </div>
          {/* area  */}
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Area
            </label>
            <select
              id="inputState"
              class="form-select"
              {...register("area", { required: true })}
            >
              <option selected value="not provide">
                Choose...
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="CTG">CTG</option>
              <option value="Rangpur">Rangpur</option>
            </select>
          </div>
          {/* pass  */}
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              class="form-control"
              id="inputPassword4"
              {...register("password", { required: true })}
            />
          </div>
          {/* confirm pass  */}
          <div class="col-md-6">
            <label for="con-pass" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              class="form-control"
              id="con-pass"
              {...register("confirmPassword", { required: true })}
            />
          </div>
          {/* address  */}

          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              {...register("address", { required: true })}
            />
          </div>
          {/* profile */}
          <div class="col-4">
            <UploadImage
              id={"profile"}
              lebel="Profile Photo"
              setState={setProfile}
            />
          </div>
          {/* nid */}
          <div class="col-4">
            <UploadImage id={"nid"} lebel="NID Photo " setState={setNid} />
          </div>
          {/* driving */}
          <div class="col-4">
            <UploadImage
              id={"driving"}
              lebel="Driving Lisence Photo "
              setState={setDriving}
            />
          </div>
          <br />
          <h3 className="mb-0">Car informartion</h3>
          <hr />
          {/* name  */}
          <div class="col-md-4">
            <label for="vahicle-name" class="form-label">
              Vehicle Name
            </label>
            <input
              type="text"
              placeholder="Jaguar"
              class="form-control"
              id="vahicle-name"
              {...register("vahicleName", { required: true })}
            />
          </div>
          {/* model  */}
          <div class="col-md-4">
            <label for="car" class="form-label">
              Vehicle Model
            </label>
            <input
              type="text"
              placeholder="Jaguar 1"
              class="form-control"
              id="model"
              {...register("vehicleModel", { required: true })}
            />
          </div>
          {/* name -plate  */}
          <div class="col-4">
            <UploadImage
              id={"nameplate"}
              lebel="Name Plate Photo"
              setState={setNamePlate}
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegDriver;
