import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import UploadImage from "../../Shared/UploadImage";

const RegLearner = () => {
  const [profile, setProfile] = useState("");
  const [nid, setNid] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!(data.password == data.confirmPassword) || !profile || !nid) {
      alert("Please enter correct information");
      return;
    }
    const newData = {
      ...data,
      roll: "learner",
      profilePhoto: profile,
      nidPhoto: nid,
    };
    createUser(newData.email, newData.password).then(() => {
      updateUser({
        displayName: newData.fullName,
        photoURL: newData.profilePhoto,
      }).then(() => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/users`, newData)
          .then((res) => {
            if (res.data.insertedId) {
              alert("user added successfully");
              navigate("/packages");
            }
          });
      });
    });
  };
  return (
    <div className="d-flex w-100 justify-content-center mt-5">
      <div className="form-signin w-50 border py-5 px-3">
        <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-0">Learner informartion</h3>
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
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Vehicle Type
            </label>
            <select
              id="inputState"
              class="form-select"
              {...register("vehicleType", { required: true })}
            >
              <option selected value="Car">
                Choose...
              </option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
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

export default RegLearner;
