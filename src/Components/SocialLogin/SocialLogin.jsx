import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // console.log(googleSignin);
  const handleGoogleSignIn = () => {
    googleSignin().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="px-8 my-5 ">
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <button onClick={handleGoogleSignIn} className="btn text-xl ">
          Google
          <FaGoogle className="text-xl"></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
