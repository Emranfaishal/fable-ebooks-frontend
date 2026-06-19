import { ArrowUpCircle, Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="mt-20">
            {/* Newsletter */}
            <div className="bg-pink-500 py-16 text-center text-white">
                <h2 className="text-4xl font-bold">
                    Get your first discount!
                </h2>

                <p className="mt-3 text-white/90">
                    Subscribe to our newsletter and get 15% discount code
                </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-16">

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Logo */}
                    <div>
                        <h2 className="text-4xl font-bold">
                            <span className="text-pink-500">Book</span>
                            <span className="text-black">Buddy</span>
                        </h2>
                    </div>

                    {/* Browse */}
                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">
                            Browse
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li>Categories</li>
                            <li>Authors</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">
                            Social
                        </h3>

                        <div className="space-y-4">
                            <FaFacebook />
                            <span className="block text-xl">𝕏</span>
                            <FaInstagram />
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-600">
                            <p>+994-50-290-44-96</p>
                            <p>bookbuddy@gmail.com</p>
                            <p>
                                Baku, Mikayıl Müşfiq küç 1c,
                                Badamdar qəs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}