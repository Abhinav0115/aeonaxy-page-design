/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../../assets/images/paypal-logo.png";
import logoFull from "../../assets/images/paypal-full-logo.png";
import { SidebarWithBurgerMenu } from "../navbar/SidebarWithBurgerMenu";

const Navbar = () => {
    const [islogin, setIslogin] = useState(true);

    return (
        <div className="flex items-center border-b-2 min-h-20 max-h-20 w-full pl-1 pr-4 justify-between">
            {/* logo */}
            <div className="flex items-center gap-4 justify-between">
                <a href="/" className="block md:hidden rounded-xl">
                    <img
                        src={logoFull}
                        alt="Paypal Logo"
                        className="h-16 w-48 mx-2 border-0 "
                    />
                </a>
                <a href="/" className="hidden md:block rounded-xl">
                    <img
                        src={logo}
                        alt="Paypal Logo"
                        className="h-16 w-20 border-0 "
                    />
                </a>

                {/* links */}
                <div className=" hidden md:flex gap-4 font-semibold ">
                    <a
                        href="/"
                        className="rounded-xl hover:bg-gray-100 p-2 px-3"
                    >
                        Personal
                    </a>
                    <a
                        href="/"
                        className="rounded-xl hover:bg-gray-100 p-2 px-3"
                    >
                        Business
                    </a>
                    <a
                        href="/"
                        className="rounded-xl hover:bg-gray-100 p-2 px-3"
                    >
                        Developer
                    </a>
                    <a
                        href="/"
                        className="rounded-xl hover:bg-gray-100 p-2 px-3"
                    >
                        Help
                    </a>
                </div>
            </div>
            {/* button */}
            <div className="hidden md:flex gap-4">
                <a
                    href="/"
                    className="outline hover:bg-gray-100 rounded-full py-1 px-4 text-indigo-700 font-semibold"
                >
                    My Paypal
                </a>

                {islogin ? (
                    <a
                        href="/"
                        className="outline hover:bg-gray-100 rounded-full py-1 px-4 text-indigo-700 font-semibold"
                    >
                        Log out
                    </a>
                ) : (
                    <a
                        href="/"
                        className="outline hover:bg-gray-100 rounded-full py-1 px-4 text-indigo-700 font-semibold"
                    >
                        Log in
                    </a>
                )}
            </div>
            <div className="block md:hidden">
                <SidebarWithBurgerMenu islogin={islogin} />
            </div>
        </div>
    );
};

export default Navbar;
