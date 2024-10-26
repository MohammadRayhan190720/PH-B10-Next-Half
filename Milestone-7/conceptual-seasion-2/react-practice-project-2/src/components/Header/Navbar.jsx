
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlinePriceCheck } from "react-icons/md";


const Navbar = ({ cartProduct,price }) => {
  return (
    <nav className="flex justify-between mt-5 items-center ">
      <div className="text-5xl">
        <p>Logo</p>
      </div>
      <div className="flex gap-3 text-2xl items-center">
        <p>Home</p>
        <p>Product</p>
        <p className="flex items-center gap-3 border px-3">
          {" "}
          <FaCartArrowDown />
          Cart-{cartProduct.length}
        </p>
        <p className="flex border border-red-400 items-center px-3">
          {" "}
          <MdOutlinePriceCheck />
          Price :$ {price}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;