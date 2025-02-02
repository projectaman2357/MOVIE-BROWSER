import React, { useState, useContext, useEffect, useRef } from "react";
import { getAuth, updateProfile, signOut } from "firebase/auth";
import { db } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import { AuthContext } from "../Context/UserContext";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Profile() {
  const { User } = useContext(AuthContext);

  const [profilePic, setProfilePic] = useState("");
  const [userName, setUserName] = useState("");
  const [isUserNameChanged, setIsUserNameChanged] = useState(false);
  const [isMyListUpdated, setisMyListUpdated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (User != null) {
      setProfilePic(User.photoURL);
    }
  }, [User]);

  function notify() {
    toast.success("Profile Updated Successfully");
  }

  const changeUserName = (e) => {
    e.preventDefault();
    if (isUserNameChanged && userName !== "") {
      const auth = getAuth();
      updateProfile(auth.currentUser, { displayName: userName })
        .then(() => notify())
        .catch((error) => alert(error.message));
    }
  };

  const SignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <motion.div
        className="flex h-screen justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%), url(${WelcomePageBanner})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {isMyListUpdated && <Toaster />}
        <motion.div
          className="bg-[#000000bf] p-6 md:p-12 rounded-lg shadow-xl border border-gray-700"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-6 text-center">
            Edit Your Profile
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <motion.img
              className="h-28 w-28 rounded-full cursor-pointer mb-4 md:mr-10 border-4 border-gray-500 shadow-md"
              src={
                profilePic ||
                "https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
              }
              alt="Profile"
              whileHover={{ scale: 1.1 }}
            />
            <div className="w-full md:w-auto text-center md:text-left">
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                  setIsUserNameChanged(true);
                }}
                className="block w-full rounded-md bg-gray-900 text-white border-gray-600 p-2 mb-4 md:mb-6 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={User ? User.displayName : "Enter your name"}
              />
              <h1 className="text-white text-lg bg-gray-800 p-2 rounded mb-3">
                {User ? User.email : ""}
              </h1>
              <h1 className="text-white text-lg p-2 rounded">
                Unique ID: {User ? User.uid : ""}
              </h1>
            </div>
          </div>
          {/* Buttons Section */}
          <div className="flex justify-center mt-6 space-x-4">
            <motion.button
              onClick={SignOut}
              className="bg-red-700 text-white font-medium px-6 py-3 rounded-md shadow-lg transition-all duration-300 hover:bg-red-800 hover:scale-105 focus:ring-2 focus:ring-red-500"
              whileHover={{ scale: 1.1 }}
            >
              Sign Out
            </motion.button>
            <motion.button
              onClick={changeUserName}
              className="bg-green-700 text-white font-medium px-6 py-3 rounded-md shadow-lg transition-all duration-300 hover:bg-green-800 hover:scale-105 focus:ring-2 focus:ring-green-500"
              whileHover={{ scale: 1.1 }}
            >
              Save and Continue
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Profile;
