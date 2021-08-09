import CatalogList from "../components/CatalogList";
import Layout from "../components/Layout";

export default function Home({ catalog }) {
    return (
        <Layout>
            <section className="px-3 py-2 lg:py-8 w-full h-full">
                <div className="text-xl lg:text-2xl text-gray-400 font-medium flex items-start content-start">
                    <CatalogList catalog={catalog} />
                </div>
            </section>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(
        "https://datainlife.ru/junior_task/get_products.php"
    );
    const catalog = await res.json();

    return {
        props: {
            catalog,
        },
    };
};
