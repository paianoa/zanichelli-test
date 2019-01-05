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
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#general
<!-- START_89966bfb9ab533cc3249b91a9090d3dc -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/users"     -d "forever"="false" 
```

```javascript
const url = new URL("http://localhost:8000/users");

    let params = {
            "user_id": "9",
            "room_id": "BeH46psdXdrUetC5",
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

let body = JSON.stringify({
    "forever": "",
})

fetch(url, {
    method: "GET",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
[
    {
        "id": 1,
        "name": "Georgiana Koepp",
        "email": "romaguera.doyle@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "fjHbuCMJdP",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 2,
        "name": "Noemi Heller",
        "email": "larkin.marley@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "3m1Hu9LIZX",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 3,
        "name": "Robert Haag",
        "email": "zora.quigley@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "7NzhU1mxnY",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 4,
        "name": "Lilliana Langosh",
        "email": "mayer.jessika@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "iDdHuhChFy",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 5,
        "name": "Jerrod Grimes",
        "email": "karianne.gaylord@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "BIf0ue1v4M",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 6,
        "name": "Mr. Alan Kub I",
        "email": "rico20@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "XYmH3jFIfC",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 7,
        "name": "Raphaelle Moen DVM",
        "email": "kuhic.michale@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "ldpVEntVBI",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 8,
        "name": "Dina Schneider",
        "email": "dayton.armstrong@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "zUAdWIcjMR",
        "created_at": "2019-01-05 12:34:39",
        "updated_at": "2019-01-05 12:34:39"
    },
    {
        "id": 9,
        "name": "Mr. Jaleel Stehr DVM",
        "email": "susan67@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "sKhm85nTmS",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 10,
        "name": "Roslyn Klein",
        "email": "hruecker@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "p8rrQEDWtO",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 11,
        "name": "Janelle Kuhlman",
        "email": "vwiza@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "OLlxef2StS",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 12,
        "name": "Sheila Block V",
        "email": "elinore43@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "zEvEasWJIk",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 13,
        "name": "Mose McDermott",
        "email": "west.aiyana@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "hlgVP2RGsc",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 14,
        "name": "Mr. Johnathon Kulas",
        "email": "dario19@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "RlyDZOIhxU",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 15,
        "name": "Shaina Rodriguez DDS",
        "email": "kprohaska@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "wEVrHbLC66",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 16,
        "name": "Dr. Mike Block PhD",
        "email": "aliya08@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "IcvtsMm90I",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 17,
        "name": "Colby Wunsch",
        "email": "legros.ena@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "tEqOgTDJVi",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 18,
        "name": "Norma Goldner",
        "email": "betty73@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "wkpUlVgfSI",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 19,
        "name": "Karolann Berge",
        "email": "korey67@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "tIpUz5bs4i",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 20,
        "name": "Prof. Elenor Lind DDS",
        "email": "tyler.braun@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "YR8cIRxJq3",
        "created_at": "2019-01-05 12:34:40",
        "updated_at": "2019-01-05 12:34:40"
    },
    {
        "id": 21,
        "name": "Prof. Baron Brown I",
        "email": "jorge.bahringer@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "MR5e4HjXFX",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 22,
        "name": "Maximo Rowe",
        "email": "ephraim.bartoletti@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "ZgiL8zwuA8",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 23,
        "name": "Waylon Balistreri",
        "email": "sabina.hamill@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "6tB3YztrN5",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 24,
        "name": "Shany Kling",
        "email": "xlynch@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "rBgL6NTZvz",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 25,
        "name": "Ms. Augusta Hills Jr.",
        "email": "tressie87@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "8BNhuFVjmG",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 26,
        "name": "Leonard Littel",
        "email": "runolfsdottir.penelope@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "qdQFYJndEu",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 27,
        "name": "Kyra Langworth",
        "email": "marielle.gorczany@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "mJelMtIHnZ",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 28,
        "name": "Timmothy Hermiston",
        "email": "blabadie@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "vKaTOqKjoL",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 29,
        "name": "Georgianna Grant",
        "email": "sadie53@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "u7QssZOuaC",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 30,
        "name": "Viva Rempel",
        "email": "zgottlieb@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "TbErBY1h85",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 31,
        "name": "Muhammad Herzog I",
        "email": "ruecker.guido@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "JK9HfaTZRs",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 32,
        "name": "Elizabeth Jerde",
        "email": "darlene.daugherty@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "SboLE2w1u3",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 33,
        "name": "Alvera Bartoletti",
        "email": "kuphal.lonny@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "8IvUCC4I5I",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 34,
        "name": "Junius Kirlin",
        "email": "lolita.mann@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "LMcJ0qurOX",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 35,
        "name": "Leslie Johnston",
        "email": "desmond.hammes@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "qf3K0SZLAX",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 36,
        "name": "Dr. Carmine Jerde",
        "email": "asha81@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "vBSmqCu0jX",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 37,
        "name": "Annette Bruen IV",
        "email": "gottlieb.aron@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "oIkHsmRTKM",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 38,
        "name": "Katarina Monahan",
        "email": "margarita05@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "Z14RyI0aBI",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 39,
        "name": "Miss Lera Aufderhar V",
        "email": "hodkiewicz.xzavier@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "cvj7s1T0Vv",
        "created_at": "2019-01-05 12:34:41",
        "updated_at": "2019-01-05 12:34:41"
    },
    {
        "id": 40,
        "name": "Mr. Werner Hand Jr.",
        "email": "jayne92@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "vaxFvxDoRL",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 41,
        "name": "Emilia Pagac",
        "email": "darius.hill@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "16Z1Cs8EhF",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 42,
        "name": "Ulices Connelly",
        "email": "wiegand.dorcas@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "EdnReJhEbg",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 43,
        "name": "Danyka Strosin",
        "email": "jbernier@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "CQ0fBUIWka",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 44,
        "name": "Antonette Robel",
        "email": "vemmerich@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "IOl7lg12e5",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 45,
        "name": "Giovanni Lind",
        "email": "osborne.bednar@example.net",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "okT9H7Ap5S",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 46,
        "name": "Camila Yost",
        "email": "dane16@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "9hkYF2RaOU",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 47,
        "name": "Prof. Myrtie Dietrich",
        "email": "osteuber@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "mLIfxF0O6N",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 48,
        "name": "Dallas Considine",
        "email": "brielle.pfannerstill@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "aGGsKV8su2",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 49,
        "name": "Louisa Ruecker",
        "email": "ctorphy@example.com",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "dFnrVhhXhe",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    },
    {
        "id": 50,
        "name": "Jacynthe Mayer",
        "email": "mollie86@example.org",
        "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
        "remember_token": "3IzhjRSuJD",
        "created_at": "2019-01-05 12:34:42",
        "updated_at": "2019-01-05 12:34:42"
    }
]
```

### HTTP Request
`GET users`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    forever | boolean |  optional  | Whether to ban the user forever.
#### Query Parameters

Parameter | Status | Description
--------- | ------- | ------- | -----------
    user_id |  optional  | int required The id of the user.
    room_id |  optional  | string The id of the room.

<!-- END_89966bfb9ab533cc3249b91a9090d3dc -->

<!-- START_57a8a4ba671355511e22780b1b63690e -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/users"     -d "request"="{name:&quot;andrae&quot;, email:&quot;andrea@paino.org&quot;, password=&quot;asdf&quot;}" 
```

```javascript
const url = new URL("http://localhost:8000/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

let body = JSON.stringify({
    "request": "{name:&quot;andrae&quot;, email:&quot;andrea@paino.org&quot;, password=&quot;asdf&quot;}",
})

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST users`

#### Body Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    request | string |  optional  | The id of the room.

<!-- END_57a8a4ba671355511e22780b1b63690e -->

<!-- START_5693ac2f2e21af3ebc471cd5a6244460 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/users/{user}" 
```

```javascript
const url = new URL("http://localhost:8000/users/{user}");

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
null
```

### HTTP Request
`GET users/{user}`


<!-- END_5693ac2f2e21af3ebc471cd5a6244460 -->

<!-- START_9c6e6c2d3215b1ba7d13468e7cd95e62 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/users/{user}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/users/{user}/edit");

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
    "id": 1,
    "name": "Georgiana Koepp",
    "email": "romaguera.doyle@example.com",
    "password": "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm",
    "remember_token": "fjHbuCMJdP",
    "created_at": "2019-01-05 12:34:39",
    "updated_at": "2019-01-05 12:34:39"
}
```

### HTTP Request
`GET users/{user}/edit`


<!-- END_9c6e6c2d3215b1ba7d13468e7cd95e62 -->

<!-- START_7fe085c671e1b3d51e86136538b1d63f -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/users/{user}" 
```

```javascript
const url = new URL("http://localhost:8000/users/{user}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT users/{user}`

`PATCH users/{user}`


<!-- END_7fe085c671e1b3d51e86136538b1d63f -->

<!-- START_a948aef61c80bf96137d023464fde21f -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/users/{user}" 
```

```javascript
const url = new URL("http://localhost:8000/users/{user}");

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


### HTTP Request
`DELETE users/{user}`


<!-- END_a948aef61c80bf96137d023464fde21f -->


