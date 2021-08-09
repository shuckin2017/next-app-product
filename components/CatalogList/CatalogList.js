import Link from "next/link";
export default function CatalogList({ catalog }) {
    return (
        <section>
            <div>
                {catalog.map((product) => {
                    return (
                        <Link
                            href={`/catalog/${product.urlalias}?query=${product.rid}`}
                            key={product.rid}
                        >
                            <div className="w-full bg-white px-6 py-3 mt-2 cursor-pointer hover:shadow">
                                <div className="flex-1 text-blue-900 cursor-pointer">
                                    + {product.rname}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
