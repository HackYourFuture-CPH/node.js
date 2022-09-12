# API

## `GET /api/snippets`

Return all non-private snippets together with some information about the user. Example response:

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

## `GET /api/snippets/:id`

Return a single snippet. Example response:

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

**Not found:** we respond with a 404 if the snippet with the given ID cannot be found.
