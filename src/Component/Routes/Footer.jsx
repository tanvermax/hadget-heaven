const Footer = () => {
  return (
    <>
    <div className="py-5">
      <h1 className="py-2 text-4xl font-bold text-center">Gadget Heaven</h1>
      <p className="py-2  text-center text-base font-medium">Leading the way in cutting-edge technology and innovation.</p>
    </div>
    <hr />
    <footer className="footer px-32 text-[#09080F99] text-base grid-cols-3 p-10 mx-auto">
      <nav className="mx-auto text-center">
        <h6 className="text-xl text-black mx-auto font-bold">Services</h6>

        <a className="link link-hover mx-auto">Product Support</a>
        <a className="link link-hover mx-auto">Order tracking</a>
        <a className="link link-hover mx-auto">Shipping & Delivery</a>
        <a className="link link-hover mx-auto">Returns</a>
      </nav>
      <nav className="mx-auto">
        <h6 className="text-xl text-black mx-auto font-bold">Company</h6>
        <a className="link link-hover mx-auto">About us</a>
        <a className="link link-hover mx-auto">Career</a>
        <a className="link link-hover mx-auto">Conact</a>
        
      </nav>
      <nav className="mx-auto">
        <h6 className="text-xl text-black mx-auto font-bold">Legal</h6>
        <a className="link link-hover mx-auto">Terms of use</a>
        <a className="link link-hover mx-auto">Privacy policy</a>
        <a className="link link-hover mx-auto">Cookie policy</a>
      </nav>
    </footer>
    </>

  );
};

export default Footer;
