import Heading from "../Home/Pages/Heading";

const Offer = () => {
  return (
    <div className="bg-[#913be2] px-32 py-4 flex justify-between items-center">
      <div className=" items-center">
        <Heading
          title={"Become A Gadgest Seller Today!"}
          subtitle={
            "Create a Gadgets seller account now and reach millions of customers!"
          }
        ></Heading>
      </div>
      <div>
        <div className="hero  min-h-screen">
          <div className="hero-content flex flex-col">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Mention that users will need to enter a username, email, or
                phone number along with a password to verify their identity.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
