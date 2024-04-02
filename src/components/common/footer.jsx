// import React from "react";
import paypalLogo from "../../assets/images/paypal-full-logo.png";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <div className="mb-12 flex flex-col gap-14 py-4">
            <a href="/" className="pl-0 md:pl-5 mx-auto md:mx-0">
                <img
                    src={paypalLogo}
                    alt="Paypal full logo"
                    className="w-48 h-16"
                />
            </a>
            <div className="px-0 md:px-5 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center font-semibold gap-10">
                    <div className="flex gap-4 flex-col md:flex-row items-center">
                        <a href="/">Help</a>
                        <a href="/">Contact</a>
                        <a href="/">Fees</a>
                        <a href="/">Security</a>
                        <a href="/">Apps</a>
                        <a href="/">Shop</a>
                        <a href="/">Enterprise</a>
                        <a href="/">Partners</a>
                    </div>
                    <div className="flex">
                        <a href="/">
                            <LiaFlagUsaSolid className="text-red-600 w-8 h-8" />
                        </a>
                    </div>
                </div>
                <hr className="border border-gray-400" />
                <div className="flex flex-col lg:flex-row justify-between items-center font-semibold gap-10">
                    <div className="flex gap-4 flex-col md:flex-row items-center">
                        <a href="/">About</a>
                        <a href="/">Newsroom</a>
                        <a href="/">Jobs</a>
                        <a href="/">Investor Relations</a>
                        <a href="/">Values in Action</a>
                        <a href="/">Public Policy</a>
                        <a href="/">Sitemap</a>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row items-center">
                        <a href="/">© 1999-2021</a>
                        <a href="/">Accessibility</a>
                        <a href="/">Privacy</a>
                        <a href="/">Cookies</a>
                        <a href="/">Legal</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
