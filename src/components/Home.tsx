import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
    return (
        <div className="bg-black text-white">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-black">
                <div className="text-2xl font-bold text-red-500">
                    <span className="text-green-500">N</span>/
                    <span className="text-yellow-500">a</span>#
                    <span className="text-blue-500">i</span>/&gt;
                    <span className="text-red-500">n</span>_g
                </div>
                <nav className="space-x-8">
                    <Link href="#" className="text-white hover:text-blue-500">
                        HOME
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-500">
                        ABOUT
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-500">
                        PORTFOLIO
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-500">
                        ASSESSMENTS
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex min-h-screen mx-20 mt-12 justify-between">
                <div className="w-[47%]">
                    <div>
                        <h1 className="text-5xl font-bold text-blue-500">
                            Naing Htet Htun
                        </h1>
                        <h2 className="text-2xl font-semibold mt-4">
                            MERN Stack Developer
                        </h2>
                        <div className="border-b-4 border-blue-500 w-16 mx-auto mt-2"></div>
                        <p className="mt-4 text-gray-400">
                            Building digital experiences that matter. Unshaken by fear and
                            always ready to conquer challenges.
                        </p>
                        <div className="mt-6 space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Let&apos;s Work Together
                            </button>
                            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
                                View Portfolio
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex mt-12 space-x-8">
                        {[
                            { value: "1 +", label: "Years Experience" },
                            { value: "14 +", label: "Projects Completed" },
                            { value: "10 +", label: "Happy Clients" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg text-center"
                            >
                                <h3 className="text-3xl font-bold text-blue-500">
                                    {item.value}
                                </h3>
                                <p className="mt-2 text-gray-400">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-[47%]">
                    <Image
                        alt="A computer screen displaying code"
                        src={'/images/homePage.png'}
                        width={600}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </main>
        </div>
    );
}

export default Home;
