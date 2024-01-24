import React from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input/Input";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
        />
        <Input
          id="username"
          type="text"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <Input
          id="email"
          type="email"
          placeholder="Email"
          defaultValue={currentUser.email}
        />
        <Input id="password" type="password" placeholder="Password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 font-medium cursor-pointer">
          Delete Account
        </span>
        <span className="text-red-700 font-medium cursor-pointer">
          Sign out
        </span>
      </div>
    </div>
  );
}
