# Backend

## Install

```Shell
npx create-strapi-app ig-backend --quickstart
```

## Collection

> Post

- image | `single media`
- description | `rich text`
- likes | `interger`
- author | `relatoin` user has many post

## Roles & Permision

> Public

- find
- findOne
- create
- delete
- update

## Methode

> Create

```Js
let formData = new FormData();
formData.append("data", JSON.stringify({ description }));
formData.append("files.image", file);

let res = await fetch(`${url}/posts`, {
  method: "POST",
  body: formData,
});

let data = await res.json();
```

> Update

```Js
let res = await fetch(`${url}/posts/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.Stringify({ description })
})

let data = await res.json()
```

> Delete

```Js
let res = await fetch(`${url}/posts/${id}`, {
  method: 'DELETE'
})

let data = await res.json()
```

> Read

```Js
const res = await fetch(`${url}/posts`);
const data = await res.json();
```

## Auth

> Login

```Js
let res = await fetch(`${url}/auth/local/`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    identifier: email,
    password
  }),
});
```
