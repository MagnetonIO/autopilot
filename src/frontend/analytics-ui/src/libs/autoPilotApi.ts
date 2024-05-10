import { AutoPilotResult } from "./models/autopilot";
import myJson from "./test.json";

export default class AutoPilotApi {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getResponseAsync = async (token: string, query: string): Promise<AutoPilotResult> => {
        const request = this.apiUrl;

        try {
            // const response = await fetch(request, {
            //     method: "GET",
            //     mode: "cors",
            //     headers: {
            //         //Authorization: "Bearer " + token,
            //         Accept: "text/html,application/xhtml+xml,application/xml;",
            //     },
            // });

            const json = JSON.parse(JSON.stringify(myJson));
            console.log(json);
            // if (response.ok) {
            //     return {
            //         result: true,
            //         message: json,
            //         errors: [],
            //     };
            // }

            return {
                result: true,
                message: json,
                errors: [],
            };
        } catch (error) {
            return {
                result: false,
                message: this.statusMessage(0),
                errors: [],
            };
        }
    };

    statusMessage = (code: number): string => {
        switch (code) {
            case 401:
                return "Invalid password";
            default:
                return "System is unavailable";
        }
    };
}
