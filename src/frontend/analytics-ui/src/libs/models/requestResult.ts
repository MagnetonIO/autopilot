export interface ResultError {
    source: string;
    details: string[] | string;
}

export default interface RequestResult {
    result: boolean;
    statusCode: number;
    message: string;
    data?: any[];
    errors: ResultError[];
}

export interface RequestResultData {
    result: boolean;
    statusCode: number;
    data: any[];
    errors: ResultError[];
}

export interface RequestResultDataWithMessage {
    result: boolean;
    message: string;
    statusCode: number;
    data: any[];
    errors: ResultError[];
}
