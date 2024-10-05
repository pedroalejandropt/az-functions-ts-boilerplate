import { HttpResponseInit } from "@azure/functions";

export const sendResponse = (status: number, body: string | object): HttpResponseInit => {
    return { status, body: typeof body === 'string' ? body : JSON.stringify(body) };
}

export const successResponse = (body: string | object): HttpResponseInit => {
    return sendResponse(200, body);
}

export const notFoundResponse = (body: string | object): HttpResponseInit => {
    return sendResponse(404, body);
}

export const missingParameterResponse = (body: string | object): HttpResponseInit => {
    return sendResponse(422, body);
}

export const errorResponse = (body: string | object): HttpResponseInit => {
    return sendResponse(500, body);
}