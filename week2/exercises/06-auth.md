# API

Now we can move onto adding authentication for the API. You will have to modify the routes you already created in `api/snippets.js`.

## Authentication

The token is used to authenticate certain requests by setting the `Authorization` header, like so:

`Authorization: token xyz`

The "xyz" part is the token value that you can look up and find in the `users.token` column.

## Routes

See below for details about authentication and the response expectations.

### `POST /api/snippets`

**Authenticated access:** if the user has provided a valid token, we go ahead and insert a new row into the `snippets` table.

Ideally you should try to validate the request and make sure it has
- a non-empty `title`
- a non-empty `contents`
- `is_private` is optional

**Invalid authentication:** if the user has provided an invalid token or no token at all, we respond with a 403 Forbidden:

```json
{
    "error": "Not authorized"
}
```

### `GET /api/snippets`

**Anonymous access:** if there is no `Authorization` header, this should return all non-private snippets together with some information about the user. Example response:

```json
[
    {
        "id": 1,
        "created_at": "...",
        "title": "avg.js",
        "contents": "console.log('1')",
        "is_private": false,
        "user": {
            "id": 1,
            "first_name": "Orhan",
            "last_name": "Toy"
        }
    }
]
```

**Authenticated access:** if the user has provided a valid token, we return _all_ snippets belonging to that user. Example response:

```json
[
    {
        "id": 1,
        "created_at": "...",
        "title": "avg.js",
        "contents": "console.log('1')",
        "is_private": true,
        "user": {
            "id": 1,
            "first_name": "Orhan",
            "last_name": "Toy"
        }
    }
]
```

**Invalid authentication:** if the user has provided an invalid token, we respond with a 403 Forbidden response:

```json
{
    "error": "Not authorized"
}
```

### `GET /api/snippets/:id`

This endpoint should just return the snippet with the given ID:

```json
{
    "id": 1,
    "created_at": "...",
    "title": "avg.js",
    "contents": "console.log('1')",
    "is_private": true,
    "user": {
        "id": 1,
        "first_name": "Orhan",
        "last_name": "Toy",
    }
}
```

**Invalid authentication:** if the user has provided an invalid token, we respond with a 403 Forbidden response:

```json
{
    "error": "Not authorized"
}
```

**Not found:** we respond with a 404 if the snippet with the given ID cannot be found.

---

It is left as an optional exercise to add the following routes:
- `PUT /api/snippets/:id` to update a snippet
- `DELETE /api/snippets/:id` to delete a snippet

Also, it could be a good idea to deny the request if the user making the request is not confirmed
