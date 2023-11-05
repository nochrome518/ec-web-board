export interface BackendSuccessResponseWithoutData {
    message: string;
    statusCode: number;
    success: boolean
}

export interface BackendSuccessResponseWithData {
    message: string;
    data: any;
    statusCode: number;
    success: boolean
}
  