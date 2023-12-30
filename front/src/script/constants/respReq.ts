const BASE_URL = 'http://localhost:3000/';

enum PARTIAL_URL {
  BICYCLE = 'bicycle',
}

enum REQUEST_METHODS {
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum RESPONSE_STATUS {
  Ok = 200,
  Created = 201,
  Deleted = 204,
  ServerError = 500,
}

export { BASE_URL, PARTIAL_URL, REQUEST_METHODS, RESPONSE_STATUS };
