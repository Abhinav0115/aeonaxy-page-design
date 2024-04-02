

import PropTypes from "prop-types";

const CompanyBasic = ({ banner, logo }) => {
    CompanyBasic.defaultProps = {
        banner: "",
        logo: "",
    };

    CompanyBasic.propTypes = {
        banner: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    };

    return (
        <div className="">
            <div className="relative">
                <img
                    src={banner}
                    alt=""
                    className="w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-t-2xl"
                />
                <div className="absolute bg-gray-50 rounded-full shadow-md flex items-center justify-center  h-24 w-24 md:h-32 md:w-32 left-5 -bottom-11 md:-bottom-16">
                    <img
                        src={logo}
                        alt=""
                        className="aspect-square md:w-24 w-16"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanyBasic;
