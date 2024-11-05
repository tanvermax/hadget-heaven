const Heading = ({ title, subtitle }) => {
  return (
    <div className="mt-10  flex flex-col justify-between items-center">
      <h1 className="text-center py-5 text-white  mx-auto font-bold text-6xl">{title}</h1>
      <p className="text-center py-5 text-white px-28 mx-auto text-xl">{subtitle}</p>
    </div>
  );
};

export default Heading;
