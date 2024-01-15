import { Link } from "react-router-dom";
import Input from "../components/Input/Input";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <button className="p-3 bg-slate-700 text-white font-semibold rounded-lg my-3 uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="font-medium">Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 font-medium">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
