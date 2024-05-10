import React, { useEffect } from "react";
import crossRedIcon from "assets/img/cross-red-icon.svg";
import dashboardTreeImg from "assets/img/dashboard-tree-img.svg";
import AutopilotQuery from "components/ui/autopilotQuery/autopilotQuery";

const Home = () => {
    useEffect(() => {
        console.log("init");
    }, []);

    const handleResponse = (res: string) => {
        console.log(res);
    };

    return (
        <>
            {/* <!-- Content container /start --> */}
            <div className="main-container">
                {/* <!-- content wrapper --> */}
                <div className="content-wrapper">
                    <div className="w-100">
                        <div className="">
                            {/* <!-- Document tree img --> */}
                            <div className="document-tree-img">
                                <img src={dashboardTreeImg} alt="Tree img" className="img-fluid" />
                            </div>
                            {/* <!-- Document tree img --> */}
                            <AutopilotQuery handleResponse={handleResponse} />
                        </div>

                        <button id="gen_ai_button" className="d-block">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* eslint-disable max-len */}
                                <path
                                    d="M17.066 11.6469L16.7139 12L17.066 12.3531L20.2934 15.5895L19.59 16.2929L15.2971 12L19.59 7.70711L20.2934 8.41049L17.066 11.6469ZM15.5 16.5V17.5H3.5V16.5H15.5ZM12.5 11.5V12.5H3.5V11.5H12.5ZM3.5 6.5L15.5 6.5V7.5L3.5 7.5V6.5Z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                            Gen AI
                        </button>
                    </div>
                    {/* <!-- Gen AI Button --> */}

                    <div id="ai-recommendation-sidebar" className="d-none">
                        <button className="recommendation-sidebar-header" id="recommendation-sidebar-btn">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.066 11.6469L16.7139 12L17.066 12.3531L20.2934 15.5895L19.59 16.2929L15.2971 12L19.59 7.70711L20.2934 8.41049L17.066 11.6469ZM15.5 16.5V17.5H3.5V16.5H15.5ZM12.5 11.5V12.5H3.5V11.5H12.5ZM3.5 6.5L15.5 6.5V7.5L3.5 7.5V6.5Z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                            Elia (Role, Powered by Gen AI)
                        </button>

                        <div className="recommendation-sidebar-content">
                            <div className="sidebar-content-block">
                                <h3 className="ff-hn-medium">
                                    Gen AI Explanation
                                    <button className="close-btn">
                                        <img src={crossRedIcon} alt="Close" className="img-fluid" />
                                    </button>
                                </h3>
                                <ul>
                                    <li>Tumor Size reduced by 20% by increasing he dose</li>
                                    <li>PFS increased from 7 months to 16 months which shows clear improvement</li>
                                </ul>
                            </div>
                            <div className="sidebar-content-block">
                                <h3 className="ff-hn-medium">
                                    Gen AI Explanation
                                    <button className="close-btn">
                                        <img src={crossRedIcon} alt="Close" className="img-fluid" />
                                    </button>
                                </h3>
                                <ul>
                                    <li>Increase the Study Drug dose from 90 to 160 mg</li>
                                </ul>
                            </div>
                            {/* <!-- New recommendation badge --> */}
                            <div className="new-recommendation">
                                <button className="">New Recommendation</button>
                            </div>
                            {/* <!-- New recommendation badge --> */}
                            <div className="sidebar-content-block">
                                <h3 className="ff-hn-medium">
                                    Gen AI Recommendations
                                    <button className="close-btn">
                                        <img src={crossRedIcon} alt="Close" className="img-fluid" />
                                    </button>
                                </h3>
                                <ul>
                                    <li>Tumor Size reduced by 20% by increasing he dose</li>
                                    <li>PFS increased from 7 months to 16 months which shows clear improvement</li>
                                    <li>Increase the Study Drug dose from 90 to 160 mg</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Gen AI Button --> */}
                </div>
                {/* <!-- content wrapper --> */}
            </div>
            {/* <!-- Content container /end --> */}
        </>
    );
};

export default Home;
