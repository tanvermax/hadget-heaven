import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { getStoredCartList } from "../MainLayout/addtoDB";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";
import tickmar from './../../../photo/tick-mark.png'
const Cart = () => {
  const [showlist, setShowlist] = useState([]);
  const cartproduct = useLoaderData();

  useEffect(() => {
    const storedcartlist = getStoredCartList();
    const storedcartlistInt = storedcartlist.map((id) => parseInt(id));

    const cartlist = cartproduct.filter((cart) =>
      storedcartlistInt.includes(parseInt(cart.id))
    );
    setShowlist(cartlist);
  }, [cartproduct]);

  const totalCost = showlist
    .reduce((acc, product) => acc + parseFloat(product.price), 0)
    .toFixed(2);

  return (
    <>
      <div className="flex justify-between px-32 py-5">
        <div>
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="text-xl  flex gap-5 items-center">
          <h1 className="text-2xl  font-semibold">
            Total Cost :{totalCost} ${" "}
          </h1>
          <button className="border-fuchsia-600 font-medium flex items-center gap-2 border-[2px] p-3 rounded-[30px] dropdown">
            Sort Price{" "}
            <HiMiniAdjustmentsVertical className="text-fuchsia-600 " />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="border-fuchsia-600 font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 border-[2px] p-3 rounded-[30px] "
          >
            Purchase{" "}
          </button>
        </div>
      </div>
      <div className="border-2 rounded-xl p-5 mx-36">
        {showlist.map((gedget) => (
          <Card key={gedget.id} gedget={gedget}></Card>
        ))}
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box items-center mx-auto text-center">
            <img src={tickmar} className="w-[200px] mx-auto" alt="" />
          <h3 className="font-bold text-lg">Payment Successfully</h3>
          <p className="py-4">Thanks for purchasing. Total:2449.96</p>
          <div className="modal-action mr-48 ">
            <form method="dialog mx-auto text-center">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mx-auto">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Cart;
