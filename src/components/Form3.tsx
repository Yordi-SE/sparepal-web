import { useForm } from "react-hook-form";
import Logo from "../assets/logo_sparepal_2.png";

type FormData = {
  maganer_full_name: string;
  manager_phone: string;
  last_name: string;
};
function ManagerForm() {
  const form = useForm<FormData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="bg-color-1 sm:p-7 flex flex-col gap-10">
      <div className="flex sm:flex-row flex-col justify-evenly items-center relative">
        <img
          src={Logo}
          alt="Logo"
          className="md:w-48 sm:w-36 w-20 h-full sm:absolute left-0 "
        />
        <h1 className="md:text-4xl sm:text-2xl text-lg font-bold align-middle">
          Company’s Manager Detail
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl sm:p-20 p-5 shadow-black shadow-lg bg-white"
      >
        <div className=" grid sm:grid-cols-2 grid-cols- grid-cols-1  gap-3">
          <div className="flex flex-col  self-end">
            <label htmlFor="maganer_full_name " className="font-bold mb-1">
              Manager Full Name
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="maganer_full_name"
              placeholder="Enter Manager Full Name"
              {...register("maganer_full_name", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.maganer_full_name?.message}</p>
          </div>
          <div className="flex flex-col  self-end">
            <label htmlFor="last_name " className="font-bold mb-1">
              Last Name
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="last_name"
              placeholder="Enter Last Name"
              {...register("last_name", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.last_name?.message}</p>
          </div>
          <div className="flex flex-col  self-end">
            <label htmlFor="manager_phone " className="font-bold mb-1">
              Manager Phone Number
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="manager_phone"
              placeholder="Enter Manager Phone Number"
              {...register("manager_phone", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.manager_phone?.message}</p>
          </div>
        </div>
        <div className="w-full mt-10 flex items-end justify-end">
          <button
            type="submit"
            className="bg-color-1 p-1 text-white font-bold rounded-lg w-20"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManagerForm;
