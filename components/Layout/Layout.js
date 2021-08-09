import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col items-center h-full border bg-gray-200 lg:mx-auto ">
            <Head>
                <title>Каталог товара</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="flex items-center justify-center px-5 py-3 bg-blue-500 w-full text-white font-medium text-2xl shadow-lg sticky top-0 left-0 z-10">
                <div className="flex container justify-between">
                    <Link href="/">
                        <div className="cursor-pointer"> Каталог товара</div>
                    </Link>
                </div>
            </header>
            <main className="flex flex-col items-center w-full flex-1 container ">
                {children}
            </main>
            <footer className="flex items-center justify-center w-full border-t bg-blue-500 px-5 py-3 text-white">
                <a
                    className="flex items-center justify-center"
                    href="https://anteytech.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Shuckin.io
                </a>
            </footer>
        </div>
    );
}
