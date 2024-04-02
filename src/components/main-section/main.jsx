import { useState } from "react";

// icons
import { HiArrowLeft } from "react-icons/hi2";

// images
import logo from "../../assets/images/company-logo-2.png";
import banner from "../../assets/images/banner.jpg";
import tax from "../../assets/images/tax.png";
import safe from "../../assets/images/safe.png";
import money from "../../assets/images/money.png";

// sub sections components of main section
import PayPalCharitiesDetails from "./sub-section/main-last";
import PayPalDonationSide from "./sub-section/donation-side";
import CompanyDetails from "./sub-section/company-details";
import CompanyBasic from "./sub-section/main-first";

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCopy = () => {
        const url = "https://www.paypal.com/US/fundraiser/charity/1279469";
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
    };

    const handleAmountChange = (e) => {
        if (e.target.value < 0) {
            setAmount(0);
        } else {
            setAmount(e.target.value);
        }
    };

    return (
        <>
            <div className="mx-8 sm:mx-16 md:mx-20 lg:mx-32">
                <a
                    href="/"
                    className="flex ml-2 items-center gap-2 my-2 font-semibold text-indigo-700 hover:text-indigo-600"
                >
                    <HiArrowLeft className="size-5" />
                    Donate with PayPal
                </a>
            </div>
            <div className="mx-8 sm:mx-16 md:mx-20 lg:mx-32 mt-2 grid grid-cols-1 items-center justify-center gap-28">
                {/* 1 */} {/* CompanyBasic component */}
                <CompanyBasic banner={banner} logo={logo} />
                {/* 2 */}{" "}
                {/* CompanyDetails and PayPalDonationSide components */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* CompanyDetails component */}
                    <CompanyDetails />

                    {/* PayPalDonationSide component */}
                    <PayPalDonationSide
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                        isOpen={isOpen}
                        handleAmountChange={handleAmountChange}
                        handleCopy={handleCopy}
                        handleOpen={handleOpen}
                        amount={amount}
                    />
                </div>
            </div>
            {/* 3 */} {/* PayPalCharitiesDetails component */}
            <PayPalCharitiesDetails tax={tax} money={money} safe={safe} />
        </>
    );
};

export default Main;
