// import { useState } from "react";

const GetUpdate = () => {
//   const [email, setEmail] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//     setIsValid(validateEmail(e.target.value));
//   };

//   const validateEmail = (email) => {
//     // Regular expression for email validation
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

  return (
    <div id="subscribe">
      <div className="container mx-auto">
        <div className="pb-32 pt-10">
          <div className="flex justify-center gap-7 my-6">
            <h1 className="w-[70px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
            <h1 className="text-[28px] md:text-[40px] -mb-2 md:-mb-4 text-center font-bold">
              GET UPDATES
            </h1>
            <h1 className="w-[70px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
          </div>
          <p className=" text-center text-sm">
            Sign up for our mailing list and we will let you know when we{" "}
          </p>
          <p className=" text-center text-sm mb-6">
            release new features or updates.
          </p>

          {/* <div className="text-xs flex justify-center pb-2">
            {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
            </div> */}
          <div
            className="flex justify-between mb-3 p-2 w-80 shadow-md bg-white absolute left-[50%] rounded-3xl border-gray-800 border-1"
            style={{ transform: "translateX(-50%)" }}
          >
            <input
              type="email"
            //   value={email}
            //   onChange={handleChange}
            //   style={{ borderColor: isValid ? "green" : "red" }}
           
              className="border-none pl-4 focus:outline-none text-sm text-black  w-48"
              placeholder="Enter your mail"
            />
           
            <a
              className="cursor-pointer"
              href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-3xl text-white py-2 font-semibold px-4 text-sm bg-[#7C9C30]">
                Subscribe
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdate;
