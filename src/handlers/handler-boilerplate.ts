import { HttpRequest, HttpResponseInit } from "@azure/functions";
import {
  errorResponse,
  missingParameterResponse,
  notFoundResponse,
  successResponse,
} from "../helpers/httpResponse";

export async function fetchAll(
  request: HttpRequest
): Promise<HttpResponseInit> {
  const ids = request.query.get("ids");
  try {
    const response = []; // TODO: get/list service call.
    if (response.length > 0) {
      return successResponse(response);
    }
    return notFoundResponse("Product(s) not found!");
  } catch (error) {
    return errorResponse("Error fetching products!");
  }
}

export async function fetchById(
  request: HttpRequest
): Promise<HttpResponseInit> {
  const id = request.query.get("id");
  if (!id) return missingParameterResponse("Id parameter is required");

  try {
    // TODO: get service call.
    return successResponse({ id: 1, title: 'example' });
  } catch (error) {
    return notFoundResponse("Value not found!");
  }
}

export async function create(
  request: HttpRequest
): Promise<HttpResponseInit> {
  try {
    const requestBody: any = await request.json();
    // TODO: post/create service call.
    return successResponse("Created");
  } catch (error) {
    console.error('ERROR:', error.message);
    return errorResponse("Error Creating");
  }
}

export async function update(
  request: HttpRequest
): Promise<HttpResponseInit> {
  try {
    const requestBody: any = await request.json();
    // TODO: update service call.
    return successResponse("Updated");
  } catch (error) {
    console.error('ERROR:', error.message);
    return errorResponse("Error Updating");
  }
}

export async function deleteById(
  request: HttpRequest
): Promise<HttpResponseInit> {
  try {
    const id = request.query.get("id");
    if (!id) return missingParameterResponse("Id parameter is required");
    // TODO: delete service call.
    return successResponse("Deleted");
  } catch (error) {
    console.error('ERROR:', error.message);
    return errorResponse("Error Deleting");
  }
}
