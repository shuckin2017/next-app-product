import Link from "next/link";
export default function CatalogList({ catalog }) {
    return (
      <section className="w-full">
        {catalog.map((product) => {
          return (
            <Link
              href={`/catalog/${product.urlalias}?rid=${product.rid}`}
              key={product.rid}
            >
              <divv className="w-full bg-white px-6 py-3 mt-2 cursor-pointer hover:shadow text-xl text-gray-400 font-medium grid ">
                <div className="flex-1 text-blue-900 cursor-pointer flex justify-between">
                  <div>{product.rname}</div>
                  <div className="text-gray-400 ml-4">
                    {product.goods.length}
                  </div>
                </div>
              </divv>
            </Link>
          );
        })}
      </section>
    );
}
