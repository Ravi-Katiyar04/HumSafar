# User Authentication API Documentation

## Register User
**Endpoint:** `/users/register`
**Method:** POST

### Request Body
```json
{
  "fullName": {
    "firstName": "string",    // Required, minimum 3 characters
    "lastName": "string"      // Optional, minimum 3 characters
  },
  "email": "string",         // Required, valid email format
  "password": "string"       // Required, minimum 6 characters
}
```

### Response
#### Success (200 OK)
```json
{
  "token": "jwt_token_string",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "_id": "user_id"
  }
}
```

#### Error Codes
- 400: Bad Request (Validation errors)
- 500: Internal Server Error

## Login User
**Endpoint:** `/users/login`
**Method:** POST

### Request Body
```json
{
  "email": "string",     // Required, valid email format
  "password": "string"   // Required, minimum 6 characters
}
```

### Response
#### Success (200 OK)
```json
{
  "token": "jwt_token_string",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "_id": "user_id"
  }
}
```

#### Error Codes
- 400: Bad Request (Validation errors)
- 404: Not Found (Invalid email or password)
- 500: Internal Server Error

## Get User Profile
**Endpoint:** `/users/profile`
**Method:** GET

### Headers
```
Authorization: Bearer <jwt_token>
```
or Token should be present in cookies

### Response
#### Success (200 OK)
```json
{
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "_id": "user_id"
  }
}
```

#### Error Codes
- 401: Unauthorized (Invalid or missing token)
- 404: User not found
- 500: Internal Server Error

## Logout User
**Endpoint:** `/users/logout`
**Method:** GET

### Headers
```
Authorization: Bearer <jwt_token>
```
or Token should be present in cookies

### Response
#### Success (200 OK)
```json
{
  "message": "Logout successfully"
}
```

#### Error Codes
- 401: Unauthorized (Invalid or missing token)
- 500: Internal Server Error

Note: After logout, the token will be blacklisted and can't be used again for authentication.
