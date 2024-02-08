import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../component/PopupModal/PopupModal";
import Heading from "../Heading/Heading";


const GetUpdate3D = () => {

  // const [getMail, setMail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  const singInFunc = async (email) => {
    try {
      const signInData = {
        email: email,
        project: "The KOW Company",
      };

      const response = await fetch(
        "https://api1.retouched.ai/api/2023-02/insert-subscribe",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "bearer " + "p_k_hKqzczG8QEAdqdy0h5OMOO0ngQ4nawou",
          },
          body: JSON.stringify(signInData),
        }
      );

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const onSubmit = async (formData) => {
    try {
      const email = formData.email;
      await singInFunc(email);
      setModalOpen(true);
    } catch (error) {
      console.error("Failed to subscribe:", error);
    }
    handleModalOpen();

  }
  return (
    <div id="subscribe">

<Heading
        className="md:pt-12 "
        titleClassName="w-[500px]"
        title="GET UPDATES"
      />
      <div className="container mx-auto">
        <div className="pb-20 pt-10">
      
          <p className="text-center text-sm">
            Sign up for our mailing list and we will let you know when we{" "}
          </p>
          <p className="text-center text-sm mb-6">
            release new features or updates.
          </p>

          <div className="flex justify-center text-sm mt-5 mb-1">
            {errors.email && errors.email.type === "required" && (
              <span className="text-green-600 font-semibold">
                Email is required
              </span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="text-red-600 font-semibold">
                Invalid Email Address
              </span>
            )}
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex justify-between  py-2 pr-2 pl-4  shadow-md bg-white rounded-3xl border-gray-800 border-1">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="outline-none text-sm w-[200px]"
              type="text"
              autoComplete="off"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid Email Address",
                },
              })}
            />
           
            <button
              type="submit"
              className="rounded-3xl text-white py-2 font-semibold px-4 text-sm bg-[#99C196]"
            >
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

export default GetUpdate3D;
