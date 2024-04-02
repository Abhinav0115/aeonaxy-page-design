import React from "react";

const PayPalCharitiesDetails = ({ tax, safe, money }) => {
    return (
        <div className="flex flex-col gap-8 mb-10 border-none text-center md:text-left ">
            <div className="bg-[#f6f5ec] px-24 mt-10 py-8 flex flex-col gap-8">
                <h1 className="text-2xl font-semibold ">
                    PayPal helps your gifts do more good
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
                    <div className=" leading-loose">
                        <img
                            src={safe}
                            alt=""
                            className="w-24 h-24 mb-4 mx-auto md:mx-0"
                        />
                        <div>
                            <h1 className="font-bold text-md">
                                Safe and secure donations
                            </h1>
                            <p className="text-sm">
                                Charities are in good standing so you can donate
                                more securely.
                            </p>
                        </div>
                    </div>
                    <div className=" leading-loose">
                        <img
                            src={money}
                            alt=""
                            className="w-36 h-24 mb-4 mx-auto md:mx-0"
                        />
                        <div className="">
                            <h1 className="font-bold text-md">
                                No transaction fees
                            </h1>
                            <p className="text-sm">
                                Help charities pay less in fees and do more with
                                your donation.
                            </p>
                        </div>
                    </div>
                    <div className=" leading-loose">
                        <img
                            src={tax}
                            alt=""
                            className="w-24 h-20 mb-4 mx-auto md:mx-0"
                        />
                        <div>
                            <h1 className="font-bold text-md">
                                Receive a tax receipt
                            </h1>
                            <p className="text-sm">
                                A record of your kindness is sent right to your
                                email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-10 md:mx-24 text-sm text-left font-medium lead tracking-wide shadow-none border-none">
                PayPal covers all transaction fees. You&apos;re donating to
                PayPal Giving Fund, a 501(c)(3) charity,{" "}
                <span className="text-indigo-500 font-bold">
                    subject to its terms.{" "}
                </span>
                Donations can take
                <span className="text-indigo-500 font-bold">up to 45 days</span>
                to get to your chosen charity. It&apos;s rare, but if{" "}
                <span className="text-indigo-500 font-bold">
                    we can&apos;t send your money to this charity
                </span>
                , we&apos;ll ask you to recommend another. If we can&apos;t
                reach you, we&apos;ll send it to a similar charity and keep you
                updated. Your donation is typically tax-deductible in the US.
                <br />
                The logos on this site and descriptions under &quot;About this
                charity&quot; are provided by and managed by the charities
                themselves.
            </div>
        </div>
    );
};

export default PayPalCharitiesDetails;
