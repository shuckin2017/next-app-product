import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

import Link from "next/link";
import ItemCart from "../../components/ItemCart/ItemCart";

export default function Catalog({ products }) {
    const basketState = [
        { gid: 1, gname: "K01-P", gprice: 8377, qcurrency: 5, isCard: true },
    ];

    const [isChecked, setChecked] = React.useState(false);
    const [isAddedItemCart, setAddedItemCart] = React.useState(basketState);

    const changeInputHandler = (e) => {
        setChecked(true);
    };

    const router = useRouter();

    const { rid } = router.query;
    const product = products.filter((el) => el.rid == rid);
    return (
        <Layout>
            <section className="w-full container mx-auto mb-32">
                {product.map((item) => {
                    return (
                        <div className="mt-3 " key={item.rname}>
                            <div className="my-6 flex justify-between">
                                <div>
                                    <div className="text-2xl font-medium ">
                                        {item.rname}
                                    </div>
                                    <div>
                                        <span>Каталог</span>{" "}
                                        <span>{item.rname}</span>
                                    </div>
                                </div>
                                <div>
                                    {isChecked ? (
                                        <Link href="/basket">
                                            <button className="py-2 px-4 rounded border-2 outline-none bg-blue-500  transition-all text-white  font-medium hover:bg-blue-600 active:bg-blue-600">
                                                Добавить в корзину{" "}
                                                {isChecked.length}
                                            </button>
                                        </Link>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between w-full border-b-2">
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2  w-full">
                                    ID
                                </div>
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2 w-full">
                                    Наименование
                                </div>
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2 w-full">
                                    Цена
                                </div>
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2 w-full">
                                    Наличие
                                </div>
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2 w-full">
                                    Количество
                                </div>
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2 w-full">
                                    Сумма
                                </div>
                                <div className="text-xl text-gray-500 flex items-center justify-center font-medium bg-white px-2 py-2 w-full"></div>
                            </div>
                            <div>
                                {item.goods.map((product) => {
                                    return (
                                        <ItemCart
                                            product={product}
                                            onChange={changeInputHandler}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(
        `https://datainlife.ru/junior_task/get_products.php`
    );
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
};
