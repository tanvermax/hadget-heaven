import { HiMiniAdjustmentsVertical } from "react-icons/hi2";

const Cart = () => {
    return (
        <>
        <div className="flex justify-between px-32 py-5">
            <div>
                <h1 className="text-2xl font-bold">Cart</h1>
            </div>
            <div className="text-xl  flex gap-5 items-center">
                <h1 className="text-2xl  font-semibold">Total Cost : 12000$ </h1>
                <button className="border-fuchsia-600 font-medium flex items-center gap-2 border-[2px] p-3 rounded-[30px] dropdown">Sort Price <HiMiniAdjustmentsVertical className="text-fuchsia-600 " /></button>
                <button className="border-fuchsia-600 font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 border-[2px] p-3 rounded-[30px] ">Purchase </button>
            </div>
        </div>
        <div className="border-2 rounded-xl p-5 mx-36">
            <h2>hlw</h2>
        </div>
        </>
    );
};

export default Cart;