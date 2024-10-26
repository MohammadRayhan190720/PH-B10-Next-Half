

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-5 items-center ">
      <div className="text-5xl">
        <p>Logo</p>
      </div>
      <div className="flex gap-3 text-2xl items-center">
        <p>Home</p>
        <p>Product</p>
        <p>Cart-1</p>
        <p>Price :0$</p>
      </div>
    </nav>
  );
};

export default Navbar;