import { useForm } from "react-hook-form";
import Logo from "../assets/logo_sparepal_2.png";

type FormData = {
  Region: string;
  Woreda: string;
  house_number: string;
  Capital: string;
  subgroup_code: string;
  Zone: string;
  Kebele: string;
  business_phone: string;
  site_id: string;
};
function AddressForm() {
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
          Company Detail Address
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl sm:p-20 p-5 shadow-black shadow-lg bg-white"
      >
        <div className=" grid sm:grid-cols-2 grid-cols- grid-cols-1  gap-3">
          <div className=" max-w-[491px] self-end">
            <select
              className="w-full h-[56px] border-2"
              id="Region"
              {...register("Region", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Region
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className=" max-w-[491px] self-end">
            <select
              className="w-full h-[56px] border-2"
              id="Zone"
              {...register("Zone", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Zone
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className=" max-w-[491px] self-end">
            <select
              className="w-full h-[56px] border-2"
              id="Woreda"
              {...register("Woreda", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Woreda
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className=" max-w-[491px] self-end">
            <select
              className="w-full h-[56px] border-2"
              id="Kebele"
              {...register("Kebele", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Kebele
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col  self-end">
            <label htmlFor="house_number " className="font-bold mb-1">
              House Number
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="house_number"
              placeholder="Enter House Number"
              {...register("house_number", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.house_number?.message}</p>
          </div>
          <div className="flex flex-col  self-end">
            <label htmlFor="business_phone " className="font-bold mb-1">
              Business Phone Number
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="business_phone"
              placeholder="Enter House Business Phone Number"
              {...register("business_phone", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.house_number?.message}</p>
          </div>
          <div className="flex flex-col self-end">
            <label htmlFor="Capital" className="font-bold">
              Capital
            </label>
            <input
              type="text"
              className="input border-2 pl-3"
              placeholder="Enter Description Code"
              id="Capital"
              {...register("Capital", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.Capital?.message}</p>
          </div>
          <div className=" self-end max-w-[491px]">
            <label htmlFor="Business_description"></label>

            <select
              className="w-full h-[56px] border-2"
              id="site_id"
              {...register("site_id", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Site ID
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
        <div className="w-full mt-10 flex items-end justify-end">
          <button
            type="submit"
            className="bg-color-1 p-1 text-white font-bold rounded-lg w-20"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
