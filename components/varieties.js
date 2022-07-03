import Link from "next/link";

export default function Variety() {
    return (
        <div>
            <nav className="mx-2 my-1 p-1 w-64 h-full bg-gray-200 rounded">
                <navbar>
                    <p className="text-center border-b-4 border-gray-500 bg-gray-300 p-1 rounded shadow-xl">Varieties</p>
                    <section className="flex flex-col text-center px-2 py-1">
                        
                            <a className="mt-1 py-1 border border-gray-200 bg-gray-100 hover:border-4 hover:border-blue-100 hover:bg-gray-300 rounded shadow-lg">
                                Royal
                            </a>
                        
                        
                            <a className="mt-1 py-1 border border-gray-200 bg-gray-100 hover:border-4 hover:border-blue-100 hover:bg-gray-300 rounded shadow-lg">
                                Golden
                            </a>
                        
                        
                            <a className="mt-1 py-1 border border-gray-200 bg-gray-100 hover:border-4 hover:border-blue-100 hover:bg-gray-300 rounded shadow-lg">
                                Red Delicious
                            </a>
                        
                        
                            <a className="mt-1 py-1 border border-gray-200 bg-gray-100 hover:border-4 hover:border-blue-100 hover:bg-gray-300 rounded shadow-lg">
                                Gale
                            </a>
                        
                        
                            <a className="mt-1 py-1 border border-gray-200 bg-gray-100 hover:border-4 hover:border-blue-100 hover:bg-gray-300 rounded shadow-lg">
                                Granny Smith
                            </a>
                        
                    </section>
                </navbar>
            </nav>
        </div>
    )
}