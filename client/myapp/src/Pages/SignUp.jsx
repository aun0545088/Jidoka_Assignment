import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(register(form));
    alert("Signup successfully");
    navigate("/login");
  };
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <form onSubmit={handleForm} style={{ marginTop: "20px" }}>
        <Input
          type={"email"}
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        /><br/><br/>
        <Input
          type={"text"}
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        /><br/><br/>
        <Input
          type={"password"}
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        /><br/><br/>
        <Button type="submit" width={'100%'}>Signup</Button>
      </form>
    </div>
  );
};

export default SignUp;
