import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register-ecmmerce app">
      <div className="w-full h-full flex justify-center items-center ">
        <h1 className="text-3xl font-roboto font-semibold py-6">Sign Up!</h1>
      </div>
      <section className="w-full flex justify-center ">
        <div className="w-[400px] flex justify-center shadow pt-10 bg-gray-300 rounded-md">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="phone"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Phone"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                required
                placeholder="address"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-violet-400 py-1 px-6 my-6 font-poppins font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
