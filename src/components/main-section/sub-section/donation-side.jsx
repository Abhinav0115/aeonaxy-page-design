import { FaFacebook, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import PropTypes from "prop-types";

const PayPalDonationSide = ({
    handleOpen,
    handleAmountChange,
    handleCopy,
    isChecked,
    setIsChecked,
    isOpen,
    amount,
}) => {
    PayPalDonationSide.defaultProps = {
        handleOpen: () => {},
        handleAmountChange: () => {},
        handleCopy: () => {},
        isChecked: false,
        setIsChecked: () => {},
        isOpen: false,
        amount: 0,
    };

    PayPalDonationSide.propTypes = {
        handleOpen: PropTypes.func.isRequired,
        handleAmountChange: PropTypes.func.isRequired,
        handleCopy: PropTypes.func.isRequired,
        isChecked: PropTypes.bool.isRequired,
        setIsChecked: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
        amount: PropTypes.number,
    };
    return (
        <div className="md:ml-10 md-0 flex flex-col gap-8">
            <div className="">
                <div className="grid grid-cols-2  sm:grid-cols-3 gap-4 items-center justify-center">
                    <button className="py-4 px-auto bg-white rounded-lg border-2 border-gray-100 shadow-lg hover:bg-gray-100 hover:border-gray-200">
                        $25
                    </button>
                    <button className="py-4 px-auto bg-white rounded-lg border-2 border-gray-100 shadow-lg hover:bg-gray-100 hover:border-gray-200">
                        $50
                    </button>
                    <button className="py-4 px-auto bg-white rounded-lg border-2 border-gray-100 shadow-lg hover:bg-gray-100 hover:border-gray-200">
                        $100
                    </button>
                    <button className="py-4 px-auto bg-white rounded-lg border-2 border-gray-100 shadow-lg hover:bg-gray-100 hover:border-gray-200">
                        $200
                    </button>
                    <button
                        onClick={handleOpen}
                        className="py-4 px-auto bg-white rounded-lg border-2 border-gray-100 shadow-lg hover:bg-gray-100 hover:border-gray-200"
                    >
                        Other
                    </button>
                </div>
                {isOpen && (
                    <input
                        type="number"
                        name=""
                        value={amount}
                        onChange={(e) => handleAmountChange(e)}
                        id=""
                        className="bg-gray-100 w-full mt-4 text-md p-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
                    />
                )}
            </div>
            <div className="flex gap-4 flex-col">
                <div className="flex gap-4 items-center">
                    <input
                        type="checkbox"
                        name=""
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        id=""
                        className="w-5 h-5"
                    />
                    <span className="font-bold text-md  ">
                        Share my name and email with this charity.
                    </span>
                </div>
                <div>
                    <button className="rounded-full font-medium bg-indigo-600 px-6 p-2 text-lg text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
                        Donate Now
                    </button>
                </div>
            </div>
            <ul className="list-disc md:ml-5 ml-0 pl-4 md:pl-0">
                <li>PayPal covers all transaction fees.</li>
                <li>
                    You&apos;re donating to PayPal Giving Fund, a 501(c)(3)
                    charity,{" "}
                    <span className="cursor-pointer text-indigo-500 font-semibold">
                        subject to its terms.
                    </span>
                </li>
                <li>
                    Donations can take{" "}
                    <span className="cursor-pointer text-indigo-500 font-semibold">
                        up to 45 days{" "}
                    </span>
                    to get to your chosen charity. It&apos;s rare, but{" "}
                    <span className="cursor-pointer text-indigo-500 font-semibold">
                        if we can&apos;t send your money to this charity
                    </span>
                    , we&apos;ll ask you to recommend another.
                </li>
                <li>
                    If we can&apos;t reach you, we&apos;ll send it to a similar
                    charity and keep you updated. Your donation is typically
                    tax-deductible in the US.
                </li>
            </ul>
            <div className="rounded-lg border border-gray-500 flex flex-col items-center justify-center">
                <div className="my-5 flex flex-col gap-5 w-full">
                    <h1 className="text-xl font-bold text-center">
                        Share and inspire others
                    </h1>
                    <div className="flex items-center justify-center gap-10">
                        <a
                            href="/"
                            className="rounded-full bg-[#f8f5e9] hover:border hover:border-gray-300 w-11 h-11 flex items-center justify-center"
                        >
                            <FaFacebook className="h-7 w-7 text-indigo-500" />
                        </a>
                        <a
                            href="/"
                            className="rounded-full bg-[#f6f5ef] hover:border hover:border-gray-300 w-11 h-11 flex items-center justify-center"
                        >
                            <FaTwitter className="h-6 w-6 text-indigo-500" />
                        </a>
                        <a
                            href="/"
                            className="rounded-full bg-[#f6f5ef] hover:border hover:border-gray-300 w-11 h-11 flex items-center justify-center"
                        >
                            <HiMail className="h-7 w-7 text-indigo-500" />
                        </a>
                    </div>
                    {/* TODO: Add social media share links */}
                    <div className="bg-[#f6f5ef] mx-4 pl-2 pr-6 sm:pr-4 sm:pl-3 rounded-sm p-2 items-center justify-center h-32 grid grid-cols-4 gap-3 ">
                        <a className=" break-all col-span-3 px-2" href="/">
                            https://www.paypal.com/US/fundraiser/charity/1279469
                        </a>
                        <button
                            onClick={handleCopy}
                            className="text-lg bg-white rounded-full text-indigo-600 font-semibold p-1 min-w-16 hover:bg-gray-100 outline outline-indigo-600"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayPalDonationSide;
