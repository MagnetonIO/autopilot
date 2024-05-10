import { ResultError } from "libs/models/requestResult";

export interface AutoPilotResult {
    result: boolean;
    message: string;
    errors: ResultError[];
}
