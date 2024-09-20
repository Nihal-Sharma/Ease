const Page = ({}) => {
  return (
    <div className=" flex justify-center align-middle ">
      <div className="  flex flex-col text-center align-middle justify-between h-[60vh] rounded-lg border-[1px] content-center ">
        <div>
          <div className="bg-gradient-to-b from-purple-500 to-pink-500 text-center text-4xl p-2 mb-8">
            Login
          </div>
          <div className="p-1 mx-2 w-81 h-12 rounded mb-3">
            <input
              className="w-11/12 h-full rounded text-black px-2 "
              placeholder="E-mail"
            />
          </div>
          <div className="p-1 mx-2 w-81 h-12 rounded mb-10 ">
            <input
              className="w-11/12 h-full rounded text-black px-2"
              placeholder="Password"
              type="password"
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  font-medium rounded-lg  w-80  text-center mx-2 h-10 align-middle mb-4"
            >
              Login
            </button>
            <div className="w-96 ">New to ease Ai ? Create Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
