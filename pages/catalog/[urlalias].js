import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import {
  ArrowLeftIcon,
  MinusSmIcon,
  PlusSmIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

export default function Catalog({ products }) {
  const router = useRouter();

  const { rid } = router.query;
  const product = products.filter((el) => el.rid == rid);
  return (
    <Layout>
      <section className="w-full container mx-auto mb-32">
        {product.map((item) => {
          return (
            <div className="mt-3 " key={item.rname}>
              <div className="my-6">
                <div className="text-2xl font-medium ">{item.rname}</div>
                <div>
                  <span>Каталог</span> <span>{item.rname}</span>
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
                    <div className="flex justify-between w-full bg-white py-3 cursor-pointer  border-b-2 hover:bg-gray-50">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            class="form-checkbox h-5 w-5 text-blue-500 mr-6"
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
                              value="1"
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
                        <button>
                          <ShoppingCartIcon className="h-8 w-8 text-blue-500 active:text-blue-700 hover:text-blue-600 transition-all" />
                        </button>
                      </div>
                    </div>
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
  const res = await fetch(`https://datainlife.ru/junior_task/get_products.php`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

