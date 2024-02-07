import { useState } from "react";
import { useForm } from 'react-hook-form';
import Modal from "../PopupModal/PopupModal";

const GetUpdate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    if (!errors.email) { // Check if there are no errors for the email field
      handleModalOpen(); // Open the modal if email is valid
    }
  };

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
          <p className="text-center text-sm">
            Sign up for our mailing list and we will let you know when we{" "}
          </p>
          <p className="text-center text-sm mb-6">
            release new features or updates.
          </p>

          <div className="flex justify-center text-sm mt-5 mb-1"> 
          {(errors.email && errors.email.type === "required") && <span className="text-green-600 font-semibold">Email is required</span>}
  {(errors.email && errors.email.type === "pattern") && <span className="text-red-600 font-semibold">Invalid Email Address</span>}
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex justify-between  py-2 pr-2 pl-4  shadow-md bg-white rounded-3xl border-gray-800 border-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                className="outline-none text-sm w-[200px]"
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
                  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                />
               
               <button type="submit" className="rounded-3xl text-white   py-2 font-semibold px-4 text-sm bg-[#7C9C30]">
                  Subscribe
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default GetUpdate;
