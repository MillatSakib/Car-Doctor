import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
        Checkout: {data.title}
      </div>
      <form>
        <div className="flex gap-4 my-4 justify-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="firstName"
              className="grow"
              placeholder="First Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Last Name" />
          </label>
        </div>
        <div className="flex gap-4 my-4 justify-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              name="phone"
              className="grow"
              placeholder="Phone Number"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="email" className="grow" placeholder="Email" />
          </label>
        </div>
        <div className="flex justify-center my-4">
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            className="btn btn-primary px-10"
            value="Checkout"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
