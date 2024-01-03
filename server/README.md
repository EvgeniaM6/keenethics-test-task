# Server usage

## Bicycle

### GET

to get all bicycles

- Method: `GET`
- URL: `/bicycle`
- response body:
```
[
    {
        _id: string;
        __v: number;
        id: string;
        type: string;
        name: string;
        color: string;
        wheelSize: number;
        price: number;
        description: string;
        status: string;
    }
]
```

---

to get bicycle by id

- Method: `GET`
- URL: `/bicycle/{bicycleId}`
- response body:
```
{
    _id: string;
    __v: number;
    id: string;
    type: string;
    name: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: string;
}
```

---
### POST

to create record about new bicycle and store it in database

- Method: `POST`
- URL: `/bicycle`
- request body:
```
{
    id: string;
    type: string;
    name: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: string;
}
```
- response body:
```
{
    _id: string;
    __v: number;
    id: string;
    type: string;
    name: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: string;
}
```

---
### PUT

to update existing bicycle

- Method: `PUT`
- URL: `/bicycle/{bicycleId}`
- request body:
```
{
    id: string;
    type: string;
    name: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: string;
}
```
- response body:
```
{
    _id: string;
    __v: number;
    id: string;
    type: string;
    name: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: string;
}
```

---
### DELETE

to delete existing bicycle from database

- Method: `DELETE`
- URL: `/bicycle/{bicycleId}`

---

## Statistics

### GET

to get stats on bicycles (number of bicycles, number of available bicycles, number of booked bicycles, average price of a bicycle)

- Method: `GET`
- URL: `/stats`
- response body:
```
{
  total: number;
  available: number;
  booked: number;
  averagePrice: number;
}
```

Errors on the server side that occur during the processing of a request are handled and processed correctly (server answers with `status code` **500**)
