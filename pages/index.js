import { useState } from "react";
import CatalogList from "../components/CatalogList";
import CatalogSection from "../components/CatalogSection";
import Layout from "../components/Layout";

export default function Home({ catalog }) {
  return (
    <Layout>
      <section className="px-3 py-2 lg:py-8 w-full h-full">
        <div className="flex items-start content-start w-full">
          {catalog.length === 0 ? (
            <h3>Каталог пуст</h3>
          ) : (
            <div className=" container mx-auto">
              <div className="aside">
                <CatalogSection catalog={catalog} />
              </div>
              <div className="catalog ">
                <CatalogList catalog={catalog} />
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://datainlife.ru/junior_task/get_products.php");
  const catalog = await res.json();

  return {
    props: {
      catalog,
    },
  };
};
