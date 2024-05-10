import React, { FC } from "react";

interface Props {}

const Sidebar: FC<Props> = () => {
    return (
        <>
            {/* <!-- Sidebar -/start --> */}
            <div className="sidebar-wrap">
                <ul id="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <a href="index.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 17V13Z" fill="#002552" />
                                <path d="M7 17V13" stroke="#002552" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12 17V7" stroke="#002552" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M17 17V11" stroke="#002552" strokeWidth="1.5" strokeLinecap="round" />
                                {/* eslint-disable max-len */}
                                <path
                                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                    stroke="#002552"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="self-drive.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 8C15.4183 8 19 6.65685 19 5C19 3.34315 15.4183 2 11 2C6.58172 2 3 3.34315 3 5C3 6.65685 6.58172 8 11 8Z"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 12C3 13.5299 6.05369 14.7923 10 14.9768"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M11 22C6.58172 22 3 20.6569 3 19V5M19 5V11"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 20.7143V22M17 20.7143C15.8432 20.7143 14.8241 20.1461 14.2263 19.2833M17 20.7143C18.1568 20.7143 19.1759 20.1461 19.7737 19.2833M14.2263 19.2833L13.0004 20.0714M14.2263 19.2833C13.8728 18.773 13.6667 18.1597 13.6667 17.5C13.6667 16.8403 13.8727 16.2271 14.2262 15.7169M19.7737 19.2833L20.9996 20.0714M19.7737 19.2833C20.1272 18.773 20.3333 18.1597 20.3333 17.5C20.3333 16.8403 20.1273 16.2271 19.7738 15.7169M17 14.2857C18.1569 14.2857 19.1761 14.854 19.7738 15.7169M17 14.2857C15.8431 14.2857 14.8239 14.854 14.2262 15.7169M17 14.2857V13M19.7738 15.7169L21 14.9286M14.2262 15.7169L13 14.9286"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>
                        {/* <!-- Submenu tooltip --> */}
                        <div className="submenu-tooltip">
                            <div className="submenu-tooltip-inner">
                                <h6 className="submenu-tooltip__heading ff-hn-medium">Data Processing</h6>
                                <ul>
                                    <li>
                                        <a href="#">Data Source</a>
                                    </li>
                                    <li>
                                        <a href="#">Overview</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Submenu tooltip --> */}
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="define-observed-data.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 11V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2H11.4706C7.47752 2 5.48098 2 4.24049 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.24049 20.8284C5.48098 22 7.47751 22 11.4706 22H12"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path d="M8 7H16H8Z" fill="#404040" />
                                <path d="M8 7H16" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8 12H13H8Z" fill="#404040" />
                                <path d="M8 12H13" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
                                <path
                                    d="M21 20.6471V17C21 15.5706 19.6569 14 18 14C16.3431 14 15 15.5706 15 17V20.5C15 21.2797 15.7326 22 16.6364 22C17.5401 22 18.2727 21.2797 18.2727 20.5V17.7647"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="causal-discovery.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.8988 19.9288L22 22M21.1083 17.0459C21.1083 19.2805 19.2932 21.0919 17.0541 21.0919C14.8151 21.0919 13 19.2805 13 17.0459C13 14.8114 14.8151 13 17.0541 13C19.2932 13 21.1083 14.8114 21.1083 17.0459Z"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="causal-graph.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path d="M7 4H8" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M7 7H11" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
                                <path
                                    d="M5 20C6.07093 18.053 7.52279 13.0189 10.3063 13.0189C12.2301 13.0189 12.7283 15.4717 14.6136 15.4717C17.8572 15.4717 17.387 10 21 10"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        {/* <!-- Submenu tooltip --> */}
                        <div className="submenu-tooltip">
                            <div className="submenu-tooltip-inner">
                                <h6 className="submenu-tooltip__heading ff-hn-medium">Causal Graphs</h6>
                                <ul>
                                    <li>
                                        <a href="#">Lungcancer 01</a>
                                    </li>
                                    <li>
                                        <a href="#">Lungcancer 01</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Submenu tooltip --> */}
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="causal-modeling.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535M17 19.5C17 20.8807 15.8807 22 14.5 22C13.1193 22 12 20.8807 12 19.5V4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C18.6569 4.5 20 5.84315 20 7.5C20 8.06866 19.8418 8.60037 19.567 9.0535M17 19.5C17 18.6821 16.6072 17.9559 16 17.4998M19.567 9.0535C19.2105 9.64121 18.6579 10.0967 18 10.3293"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        {/* <!-- Submenu tooltip --> */}
                        <div className="submenu-tooltip">
                            <div className="submenu-tooltip-inner">
                                <h6 className="submenu-tooltip__heading ff-hn-medium">Causal Modeling</h6>
                                <ul>
                                    <li>
                                        <a href="#">Model 01</a>
                                    </li>
                                    <li>
                                        <a href="#">Model 02</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Submenu tooltip --> */}
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="causal-ai.html">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.25 4.75L17 7H15M18.5 4.75C18.5 5.16421 18.8358 5.5 19.25 5.5C19.6642 5.5 20 5.16421 20 4.75C20 4.33579 19.6642 4 19.25 4C18.8358 4 18.5 4.33579 18.5 4.75Z"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.25 19.25L17 17H15M18.5 19.25C18.5 18.8358 18.8358 18.5 19.25 18.5C19.6642 18.5 20 18.8358 20 19.25C20 19.6642 19.6642 20 19.25 20C18.8358 20 18.5 19.6642 18.5 19.25Z"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.25 12H15M18.5 12C18.5 12.4142 18.8358 12.75 19.25 12.75C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25C18.8358 11.25 18.5 11.5858 18.5 12Z"
                                    stroke="#404040"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        {/* <!-- Submenu tooltip --> */}
                        <div className="submenu-tooltip">
                            <div className="submenu-tooltip-inner">
                                <h6 className="submenu-tooltip__heading ff-hn-medium">Causal Intelligence</h6>
                                <ul>
                                    <li>
                                        <a href="#">Scenario 01</a>
                                    </li>
                                    <li>
                                        <a href="#">Scenario 02</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Submenu tooltip --> */}
                    </li>
                </ul>
            </div>
            {/* <!-- Sidebar -/end --> */}
        </>
    );
};

export default Sidebar;
