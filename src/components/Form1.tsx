import { useForm } from "react-hook-form";
import Logo from "../assets/logo_sparepal_2.png";

type FormData = {
  company_name: string;
  tin_number: string;
  license_number: string;
  code: string;
  subgroup_code: string;
  date_registered: Date;
  renewed_licence_date: Date;
  legal_status: string;
  Business_description: string;
  subgroup_description: string;
};
function Form() {
  const form = useForm<FormData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="bg-color-1 sm:p-7 flex flex-col gap-10">
      <div className="flex sm:flex-row flex-col justify-evenly items-center relative">
        <img src={Logo} alt="Logo" className="md:w-48 sm:w-36 w-20 h-full sm:absolute left-0 " />
        <h1 className="md:text-4xl sm:text-2xl text-lg font-bold align-middle">Company Information</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl sm:p-20 p-5 shadow-black shadow-lg bg-white"
      >
        <div className=" grid sm:grid-cols-2 grid-cols- grid-cols-1  gap-3">
          <div className="flex flex-col ">
            <label htmlFor="company_name" className="font-bold mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              placeholder="Enter Company Name"
              className="input border-2 pl-3"
              {...register("company_name", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.company_name?.message}</p>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="date_registered" className="font-bold mb-1">
              Date Registered
            </label>
            <input
              type="date"
              id="date_registered"
              placeholder=""
              className="input border-2 pl-3"
              {...register("date_registered", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.date_registered?.message}</p>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="tin_number" className="font-bold mb-1">
              TIN Number
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="tin_number"
              placeholder="Enter Tin Number"
              {...register("tin_number", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.tin_number?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="renewed_licence_date " className="font-bold mb-1">
              Renewed Licence Date
            </label>
            <input
              type="date"
              className="input border-2 pl-3"
              id="renewed_licence_date"
              {...register("renewed_licence_date", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.renewed_licence_date?.message}</p>
          </div>
          <div className="flex flex-col  self-end">
            <label htmlFor="license_number " className="font-bold mb-1">
              License Number
            </label>
            <input
              className="input border-2 pl-3"
              type="text"
              id="license_number"
              placeholder="Enter License Number"
              {...register("license_number", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.license_number?.message}</p>
          </div>
          <div className=" self-end max-w-[491px]">
            <select
              id="legal_status"
              className="w-full h-[56px] border-2"
              {...register("legal_status", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Legal Status
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col self-end">
            <label htmlFor="code" className="font-bold">
              Code
            </label>
            <input
              type="text"
              className="input border-2 pl-3"
              placeholder="Enter Description Code"
              id="code"
              {...register("code", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.code?.message}</p>
          </div>
          <div className=" self-end max-w-[491px]">
            <label htmlFor="Business_description"></label>

            <select
              className="w-full h-[56px] border-2"
              id="Business_description"
              {...register("Business_description", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Business Description
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="subgroup_code" className="font-bold mb-1">
              Sub-Group Code
            </label>
            <input
              type="text"
              className="input border-2 pl-3"
              placeholder="Enter Subgroup Code"
              id="subgroup_code"
              {...register("subgroup_code", {
                required: "This field is required",
              })}
            />
            <p className="error">{errors.subgroup_code?.message}</p>
          </div>

          <div className=" max-w-[491px] self-end">
            <select
              className="w-full h-[56px] border-2"
              id="subgroup_description"
              {...register("subgroup_description", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Sub-Group Description:
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

export default Form;
