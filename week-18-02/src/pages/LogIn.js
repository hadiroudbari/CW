export default function LogIn() {
  return (
    <div className="h-full flex items-center justify-center text-white ">
      <form
        action=""
        className="flex flex-col items-start text-left justify-start p-5 bg-input-gray rounded-md gap-2 font-bold w-7/12"
      >
        <h3 className="font-bold text-lg">Log In</h3>
        <button className="flex text-center items-center gap-2 border w-full justify-center py-2  rounded-md">
          <ion-icon name="logo-google"></ion-icon>
          Log In with Google
        </button>
        <hr className="border-gray-400  w-full" />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="w-full border rounded-md p-2 bg-input-gray"
          type="text"
          placeholder="Enter Your Email "
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="w-full border rounded-md p-2 bg-input-gray"
          type="text"
          placeholder="At least 8 characters"
        />

        <label htmlFor="checkbox" className="flex gap-2 my-2">
          <input id="checkbox" type="checkbox" />
          Remember Me
        </label>
        <button className="w-full bg-input-yellow py-2 rounded-md">
          Log In
        </button>
        <hr className="w-full border-gray-400" />
        <div className="flex flex-col items-center w-full gap-1">
          <p className="text-center">Don't have an account?</p>

          <a href="" className="text-light-yellow font-extrabold">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
