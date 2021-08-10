import React from "react";
import {
    ArrowLeftIcon,
    MinusSmIcon,
    PlusSmIcon,
    ShoppingCartIcon,
} from "@heroicons/react/solid";

export default function ItemCart({ product, onChange }) {
    const [isAdded, setAdded] = React.useState(false);
    const [isChecked, setChecked] = React.useState(false);

    const changeInputHandler = (e) => {
        setChecked(!isChecked);
    };

    return (
        <div
            className={
                isAdded
                    ? "flex justify-between w-full bg-gray-50 py-3 cursor-pointer  border-b-2"
                    : "flex justify-between w-full bg-white py-3 cursor-pointer  border-b-2 hover:bg-gray-50"
            }
            key={product.gid}
        >
            <div className="flex items-center justify-center w-full">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-blue-500 mr-6"
                        value=""
                        name="NAME"
                        onChange={onChange}
                    />
                    {product.gid}
                </label>
            </div>
            <div className="flex items-center justify-center w-full">
                {product.gname}
            </div>
            <div className="flex items-center justify-center w-full">
                {product.gprice} руб.
            </div>
            <div className="flex items-center justify-center w-full">
                {product.gcurrency} шт.
            </div>
            <div className="flex items-center justify-center w-full">
                <div className=" border-2 rounded-md flex items-center justify-center">
                    <button className="bg-blue-500 w-8 h-8 rounded text-white outline-none text-medium active:bg-blue-700 hover:bg-blue-600 transition-all">
                        <MinusSmIcon />
                    </button>

                    <div className="mx-2">
                        <input
                            className="outline-none flex items-center justify-center"
                            type="number"
                            min="1"
                            value=""
                            max={product.gcurrency}
                        />
                    </div>

                    <button className="bg-blue-500 w-8 h-8  text-white rounded outline-none text-medium active:bg-blue-700 hover:bg-blue-600 transition-all">
                        <PlusSmIcon />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                {product.gprice * product.gcurrency}
                .00 руб.
            </div>
            <div className="flex items-center justify-center w-full ">
                <button
                    className="outline-none"
                    onClick={() => setAdded(!isAdded)}
                >
                    <ShoppingCartIcon
                        className={
                            isAdded
                                ? "h-8 w-8 text-green-500 active:text-green-700 hover:text-green-600 transition-all"
                                : "h-8 w-8 text-blue-500 active:text-blue-700 hover:text-blue-600 transition-all"
                        }
                    />
                </button>
            </div>
        </div>
    );
}
