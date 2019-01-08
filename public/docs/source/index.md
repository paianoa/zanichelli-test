---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost:8000/docs/collection.json)

<!-- END_INFO -->

#general
<!-- START_89966bfb9ab533cc3249b91a9090d3dc -->
## Display a list of the users.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/users" 
```

```javascript
const url = new URL("http://localhost:8000/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "code": 200,
    "message": "Success",
    "data": [
        {
            "id": 4,
            "name": "Jessica Jones",
            "password": "pass",
            "email": "andrea@paiano.org"
        },
        {
            "id": 5,
            "name": "Andra Bianchi",
            "password": "pass",
            "email": "andrea@bianchi.com"
        },
        {
            "id": 6,
            "name": "Andra Rossi",
            "password": "passrossi",
            "email": "andrea@rossi.com"
        }
    ]
}
```
> Example response (400):

```json
[]
```
> Example response (500):

```json
[]
```

### HTTP Request
`GET users`


<!-- END_89966bfb9ab533cc3249b91a9090d3dc -->

<!-- START_b1c8bdc8cc374e78081d5db97aacfeb1 -->
## Display a user.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/users/{id}" 
```

```javascript
const url = new URL("http://localhost:8000/users/{id}");

    let params = {
            "id": "1",
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "code": 200,
    "message": "Successfully Retrieved",
    "data": {
        "id": 4,
        "name": "Jessica Jones",
        "password": "pass",
        "email": "andrea@paiano.org"
    }
}
```
> Example response (404):

```json
{
    "message": "Model not found"
}
```

### HTTP Request
`GET users/{id}`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    id |  required  | The id of the user.

<!-- END_b1c8bdc8cc374e78081d5db97aacfeb1 -->

<!-- START_57a8a4ba671355511e22780b1b63690e -->
## Create a new user

> Example request:

```bash
curl -X POST "http://localhost:8000/users"     -d "name"="paiano" \
    -d "email"="andrea@paiano.org" \
    -d "password"="newpass" 
```

```javascript
const url = new URL("http://localhost:8000/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

let body = JSON.stringify({
    "name": "paiano",
    "email": "andrea@paiano.org",
    "password": "newpass",
})

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "code": 200,
    "message": "Successfully created",
    "data": {
        "id": 4,
        "name": "Jessica Jones",
        "password": "pass",
        "email": "andrea@paiano.org"
    }
}
```
> Example response (400):

```json
[]
```
> Example response (500):

```json
[]
```

### HTTP Request
`POST users`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    name | string |  required  | The new name of the user.
    email | string |  required  | The new email of the user.
    password | string |  required  | The new password of the user.

<!-- END_57a8a4ba671355511e22780b1b63690e -->

<!-- START_b1e003a65e1fa2a5cd816d57cc7b9c84 -->
## Update a user

> Example request:

```bash
curl -X PATCH "http://localhost:8000/users/{id}"     -d "name"="paiano" \
    -d "email"="andrea@paiano.org" \
    -d "password"="newpass" 
```

```javascript
const url = new URL("http://localhost:8000/users/{id}");

    let params = {
            "id": "1",
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

let body = JSON.stringify({
    "name": "paiano",
    "email": "andrea@paiano.org",
    "password": "newpass",
})

fetch(url, {
    method: "PATCH",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "code": 200,
    "message": "Successfully Updated",
    "data": {
        "id": 1,
        "name": "Jessica Jones",
        "password": "pass",
        "email": "andrea@paiano.org"
    }
}
```
> Example response (404):

```json
[]
```
> Example response (400):

```json
[]
```
> Example response (500):

```json
[]
```

### HTTP Request
`PATCH users/{id}`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    name | string |  required  | The new name of the user.
    email | string |  required  | The new email of the user.
    password | string |  required  | The new password of the user.
#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    id |  required  | The id of the user.

<!-- END_b1e003a65e1fa2a5cd816d57cc7b9c84 -->

<!-- START_a32e1781d3beccb9337796c796d1f14e -->
## Delete a user

> Example request:

```bash
curl -X DELETE "http://localhost:8000/users/{id}" 
```

```javascript
const url = new URL("http://localhost:8000/users/{id}");

    let params = {
            "id": "1",
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "code": 200,
    "message": "Successfully Deleted",
    "data": {
        "id": 1,
        "name": "Jessica Jones",
        "password": "pass",
        "email": "andrea@paiano.org"
    }
}
```
> Example response (404):

```json
[]
```
> Example response (500):

```json
[]
```

### HTTP Request
`DELETE users/{id}`

#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    id |  required  | The id of the user

<!-- END_a32e1781d3beccb9337796c796d1f14e -->


