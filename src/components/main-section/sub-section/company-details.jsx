import { HiCreditCard } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";

const CompanyDetails = () => {
    return (
        <div className="text-black flex flex-col gap-8">
            <div>
                <div className="font-medium text-md">
                    Donate to PayPal Giving Fund
                </div>
                <h1 className="text-4xl">Figures of Speech Theatre</h1>
            </div>
            <div className="space-y-4">
                <div className="rounded-2xl py-1 bg-sky-200 w-fit px-2">
                    Arts & Culture
                </div>
                <div className="font-semibold text-lg">
                    Freeport, ME
                    <br />
                    EIN: 01-0432620
                </div>
            </div>
            <div className="flex gap-5 items-center ">
                <a
                    href="/"
                    className="rounded-full bg-[#f6f5ef] hover:border hover:border-gray-300 w-12 h-12 flex items-center justify-center"
                >
                    <HiCreditCard className="w-7 h-7 text-indigo-600" />
                </a>
                <a
                    href="/"
                    className="bg-[#f6f5ef] hover:border hover:border-gray-300 rounded-full w-12 h-12 flex items-center justify-center"
                >
                    <FcLike className="w-7 h-7" />
                </a>
            </div>
            <div className=" space-y-3">
                <div className="font-medium text-md leading-normal">
                    Figures of Speech Theatre creates and tours visionary works
                    of performance forged at the intersection of poetry, music,
                    sculpture and dance. The company has toured all over the
                    world - from Sofia, Bulgaria to Tokyo, Japan, to Lima, Peru.
                    Besides performing at venues such as the Kennedy Center, the
                    Smithsonian Institution, and the New Victory Theatre on
                    Broadway, the company retains a strong commitment to
                    teaching and performing throughout its home state of Maine.
                </div>
                <div className="text-sm font-medium">
                    Source: PayPal Giving Fund charity profile
                </div>
                <div className="text-sm">
                    The info in this profile is provided and managed by the
                    charities themselves.
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
