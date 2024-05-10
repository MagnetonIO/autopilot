import React, { FC, useState } from "react";
import commandPromptRobotImg from "assets/img/comand-prompt-robot-img.svg";
import commandPromptBtnIcon1 from "assets/img/command-prompt-btn-icon-1.svg";
import commandPromptBtnIcon2 from "assets/img/command-prompt-btn-icon-2.svg";
import commandPromptBtnIcon3 from "assets/img/command-prompt-btn-icon-3.svg";
import AutoPilotApi from "libs/autoPilotApi";

interface Props {
    handleResponse: (res: string) => void;
}

const AutopilotQuery: FC<Props> = ({ handleResponse }) => {
    type SubmitChangeEvent = React.KeyboardEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>;

    const [query, setQuery] = useState("");
    const [wait, setWait] = useState(true);

    const onHandleGo = async (event: SubmitChangeEvent) => {
        event.preventDefault();
        const result = await getResponse(query);
        handleResponse(result);
    };

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setQuery(value);
    };

    const getResponse = async (query: string) => {
        const autoPilotApi = new AutoPilotApi(window.__RUNTIME_CONFIG__.REACT_APP_API_URL || "");
        const { result, message } = await autoPilotApi.getResponseAsync("token", "query");

        setWait(false);

        if (result) {
            return message;
        }

        return null;
    };

    return (
        <>
            {/* <!-- command prompt wrapper --> */}
            <div className="command-prompt-wrap">
                <div className="command-prompt-robot-img">
                    <img src={commandPromptRobotImg} alt="icon" className="img-fluid " />
                </div>

                {/* <!-- input box --> */}
                <label className="input-command-prompt-label">
                    <input
                        type="text"
                        name="command-prompt-input"
                        className="input-command-prompt"
                        placeholder="Generate Causal Graph for Lung cancer data?"
                        value={query}
                        onChange={onHandleChange}
                    />
                    <div className="command-prompt-btn-icon-wrap">
                        <button>
                            <img src={commandPromptBtnIcon1} alt="Icon" className="img-fluid" />
                        </button>
                        <button>
                            <img src={commandPromptBtnIcon2} alt="Icon" className="img-fluid" />
                        </button>
                        <button>
                            <img src={commandPromptBtnIcon3} alt="Icon" className="img-fluid" />
                        </button>
                    </div>
                </label>
                {/* <!-- input box --> */}

                {/* <!-- Button --> */}
                <button className="command-prompt__button ff-hn-medium" onClick={onHandleGo}>
                    Go
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* eslint-disable max-len */}
                        <path
                            d="M10.7884 9.99997L6.95508 6.16664L7.83327 5.28845L12.5448 9.99997L7.83327 14.7115L6.95508 13.8333L10.7884 9.99997Z"
                            fill="white"
                        />
                    </svg>
                </button>
                {/* <!-- Button --> */}
            </div>
            {/* <!-- command prompt wrapper --> */}
        </>
    );
};

export default AutopilotQuery;
