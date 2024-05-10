import React, { FC, ReactNode, Fragment } from "react";
import Header from "components/ui/header/header";
import Sidebar from "components/ui/sidebar/sidebar";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Fragment>
            <Header />

            {/* <!-- container wrapper /Start --> */}
            <div className="" id="tab-contents">
                <div id="header-tab-1" className="header-tab-content active">
                    <div className="header-tab-content-inner-wrap">
                        <Sidebar />
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;
