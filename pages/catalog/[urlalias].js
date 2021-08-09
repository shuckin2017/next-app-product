import Layout from "../../components/Layout";

export default function Catalog({ products }) {
    
    const product = products.filter((el) => el.rid == "222");
    return (
        <Layout>
            <div className="w-full">
                {product.map((item) => {
                    return (
                        <div className="mt-3">
                            <div key={item.rname}>
                                <div className="text-2xl font-medium">{item.rname}</div>
                                {/* <div>{item.description}</div> */}
                            </div>
                            <div>
                                {item.goods.map((product) => {
                                    return (
                                        <div className="flex justify-between w-full bg-white px-6 py-3 mt-1 cursor-pointer hover:shadow">
                                            <div>{product.gid}</div>
                                            <div>{product.gname}</div>
                                            <div>{product.gprice} руб.</div>
                                            <div>{product.gcurrency} шт.</div>
                                            <div>{product.gprice * product.gcurrency} руб.</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
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
