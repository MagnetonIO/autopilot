import React, { FC } from "react";
import adminImg from "assets/img/administrator-img.png";
import autoPilotOpenTabIcon from "assets/img/autopilot-open-tab-icon.svg";
import autoPilotTtabIcon from "assets/img/autopilot-tab-icon.svg";
import copilotOpenTabIcon from "assets/img/copilot-open-tab-icon.svg";
import copilotTabIcon from "assets/img/copilot-tab-icon.svg";
import logoImg from "assets/img/logo.svg";
import selfDriveOpenTabIcon from "assets/img/self-drive-open-tab-icon.svg";
import selfDriveTabIcon from "assets/img/self-drive-tab-icon.svg";
import tabActiveIcon from "assets/img/tab-active-icon.svg";

interface Props {}

const Header: FC<Props> = () => {
    return (
        <>
            <div className="header">
                <div className="nav">
                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <a href="index.html">
                            <img src={logoImg} alt="Logo" className="img-fluid" />
                        </a>
                    </div>

                    {/* <!-- Tab /start --> */}
                    <div className="tab-button-wrap-container">
                        {/* <!-- Background Shape --> */}
                        <div className="tab-btn-bg-shape"></div>
                        {/* <!-- Background Shape --> */}
                        <div className="tab-button-wrapper">
                            <button className="tab-button-class active" id="headerTab1" data-tab="header-tab-1">
                                <div className="active-icon">
                                    <img src={tabActiveIcon} alt="icon" className="img-fluid " />
                                </div>
                                <div className="tab-button-wrap ff-hn-medium">
                                    <div className="tab-btn-icon">
                                        <img src={autoPilotTtabIcon} alt="icon" className="img-fluid close-tab-icon" />
                                        <img
                                            src={autoPilotOpenTabIcon}
                                            alt="icon"
                                            className="img-fluid open-tab-icon"
                                        />
                                    </div>
                                    Autopilot
                                </div>
                            </button>
                            <button className="tab-button-class" id="headerTab2" data-tab="header-tab-2">
                                <div className="active-icon">
                                    <img src={tabActiveIcon} alt="icon" className="img-fluid second-icon" />
                                </div>
                                <div className="tab-button-wrap ff-hn-medium">
                                    <div className="tab-btn-icon">
                                        <img src={copilotTabIcon} alt="icon" className="img-fluid close-tab-icon" />
                                        <img src={copilotOpenTabIcon} alt="icon" className="img-fluid open-tab-icon" />
                                    </div>
                                    Copilot
                                </div>
                            </button>
                            <button className="tab-button-class" id="headerTab3" data-tab="header-tab-3">
                                <div className="active-icon">
                                    <img src={tabActiveIcon} alt="icon" className="img-fluid third-icon" />
                                </div>
                                <div className="tab-button-wrap ff-hn-medium">
                                    <div className="tab-btn-icon">
                                        <img src={selfDriveTabIcon} alt="icon" className="img-fluid close-tab-icon" />
                                        <img
                                            src={selfDriveOpenTabIcon}
                                            alt="icon"
                                            className="img-fluid open-tab-icon"
                                        />
                                    </div>
                                    Self-drive
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Tab /end --> */}

                    {/* <!-- Search and user --> */}
                    <div className="search-and-user">
                        <form action="#">
                            <input type="search" name="" id="" className="form-field header-search" />
                        </form>

                        {/* <!-- User Dropdown --> */}
                        <div className="user-hamburger-menu-wrap">
                            <button className="user-profile-img">
                                <img src={adminImg} alt="Profile image" />
                            </button>
                            {/* <!-- Mobile menu button --> */}
                            <button className="hamburger-btn" id="hamburger_button">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 5H20"
                                        stroke="#003F59"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 12H20"
                                        stroke="#003F59"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 19H20"
                                        stroke="#003F59"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {/* <!-- Mobile menu button --> */}
                        </div>
                        {/* <!-- User Dropdown --> */}
                    </div>
                    {/* <!-- Search and user --> */}
                </div>
            </div>
        </>
    );
};

export default Header;
