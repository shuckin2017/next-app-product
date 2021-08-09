import Link from "next/link";

export default function BasketCard() {
  return (
    <section className="sticky bottom-0 left-0 z-10 bg-white w-full shadow-xl">
      <div className="container mx-auto">
        <div className="flex items-center h-full py-4 justify-between">
          <div className="flex items-center justify-center text-2xl text-blue-500 font-medium">
            Товаров в корзине 1 — 70 000 руб
          </div>
          <div>
            <Link href="/basket">
              <button className="py-2 px-4 rounded border-2 outline-none  transition-all text-blue-500 border-blue-500 font-medium hover:text-white hover:bg-blue-500 active:bg-blue-600">
                Перейти в корзину
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
