<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>
<br>

# API Venda de ingresso - Parceiros


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJs](https://nodejs.org/en) v22.2.0
- [NPM](https://www.npmjs.com/) 10.7.0
- [MySQL](https://www.mysql.com/) 8.0.30
- [Docker](https://www.docker.com/)
- [WSL2](https://learn.microsoft.com/pt-br/windows/wsl/install)
- [NestJS](https://nestjs.com/) - 10.3.2

## 💻 Projeto

Imersão [Full Cycle](https://fullcycle.com.br/) 21 - Primeiro projeto é um API me NestJS simulando a reserva de ingressos para show.
É aqui que se cadastra o evento, os lugares e se reserva os lugares;

Professor [Luiz Carlos](https://www.linkedin.com/in/argentinaluiz/).

## 🚀 Como Rodar

- Clone o projeto.
- Entre no repositório principal.
- Suba o docker usando o comando:
    ```bash
      $ docker composer up
    ```
- Entre no container do app:
    ```bash
      $ docker compose exec --user root app bash
    ```
- Instale as dependencias:
    ```bash
      $ npm install
    ```
- Roder as migrates:
    ```bash
      $ npm run migrate:partner1
    ```

    ```bash
      $ npm run migrate:partner2
    ```
- Roder cada partner separado:
    ```bash
      $ npm run start:dev -- partner1
    ```
  
    ```bash
      $ npm run start:dev -- partner2
    ```
- Teste a API rodando cada chamada do arquivo api.http.

## ↗ Rotas

- **`GET /events`**: Roda para ver todos os eventos

Retorna:
```
[
  {
    "id": "clxmauwxz0000sn3unou5r2kk",
    "name": "New Event 2",
    "description": "This is a new event",
    "date": "2024-06-20T00:00:00.000Z",
    "price": 222,
    "createdAt": "2024-06-19T20:42:37.511Z",
    "updatedAt": "2024-06-19T20:42:37.511Z"
  },
]
```

- **`POST /events`**: Rota para criar um evento

envia:
```
{
    "name": "New Event 2",
    "date": "2024-06-20T00:00:00",
    "description": "This is a new event",
    "price": 222
}
```

Retorna:
```
{
  "id": "clxmeojik00005o23x9u6171v",
  "name": "New Event 2",
  "description": "This is a new event",
  "date": "2024-06-20T00:00:00.000Z",
  "price": 222,
  "createdAt": "2024-06-19T22:29:38.636Z",
  "updatedAt": "2024-06-19T22:29:38.636Z"
}
```

- **`GET /events/:id`**: Roda para ver um evento

Retorna:
```
{
  "id": "clxmauwxz0000sn3unou5r2kk",
  "name": "New Event 2",
  "description": "This is a new event",
  "date": "2024-06-20T00:00:00.000Z",
  "price": 222,
  "createdAt": "2024-06-19T20:42:37.511Z",
  "updatedAt": "2024-06-19T20:42:37.511Z"
}
```

- **`PATCH /events/:id`**: Rota para alterar um evento

envia:
```
{
  "name": "New Event UPDATE1",
  "description": "teste"
}
```

Retorna:
```
{
  "id": "clxmeojik00005o23x9u6171v",
  "name": "New Event UPDATE1",
  "description": "teste",
  "date": "2024-06-20T00:00:00.000Z",
  "price": 222,
  "createdAt": "2024-06-19T22:29:38.636Z",
  "updatedAt": "2024-06-19T22:31:42.128Z"
}
```

- **`DELETE /events/:id`**: Rota para deletar um evento

- **`GET /events/:id/spots`**: Roda para ver todos os assentos de um evento

Retorna:
```
[
  {
    "id": "clxmauwxz0000sn3unou5r2kk",
    "name": "New Event 2",
    "description": "This is a new event",
    "date": "2024-06-20T00:00:00.000Z",
    "price": 222,
    "createdAt": "2024-06-19T20:42:37.511Z",
    "updatedAt": "2024-06-19T20:42:37.511Z"
  },
]
```

- **`POST /events/:id/spots`**: Rota para criar um assento para um evento

envia:
```

{
  "name": "A4"
}
```

Retorna:
```
{
  "id": "clxmetvky00025o23tzcujtxf",
  "name": "A4",
  "status": "available",
  "createdAt": "2024-06-19T22:33:47.554Z",
  "updatedAt": "2024-06-19T22:33:47.554Z",
  "eventId": "clxmeojik00005o23x9u6171v"
}
```

- **`GET /events/:id/spots/:id`**: Roda para ver um assento de um evento

Retorna:
```
{
  "id": "clxmetvky00025o23tzcujtxf",
  "name": "A4",
  "status": "available",
  "createdAt": "2024-06-19T22:33:47.554Z",
  "updatedAt": "2024-06-19T22:33:47.554Z",
  "eventId": "clxmeojik00005o23x9u6171v"
}
```

- **`PATCH /events/:id/spots/:id`**: Rota para alterar um assento de um evento

envia:
```
{
  "name": "New Spot UPDATE"
}
```

Retorna:
```
{
  "id": "clxmetvky00025o23tzcujtxf",
  "name": "New Spot UPDATE",
  "status": "available",
  "createdAt": "2024-06-19T22:33:47.554Z",
  "updatedAt": "2024-06-19T22:35:33.774Z",
  "eventId": "clxmeojik00005o23x9u6171v"
}
```

- **`DELETE /events/:id/spots/:id`**: Rota para deletar um assento de evento


- **`POST /events/:id/reserve`**: Rota para reservar assentos de um evento

envia:
```
{
  "spots": ["A1", "A2", "A3"],
  "ticket_kind": "full",
  "email": "teste@teste.com"
}
```

Retorna:
```
[
  {
    "id": "clxmezm7x00085o23t6u9duwx",
    "email": "teste@teste.com",
    "ticketKind": "full",
    "createdAt": "2024-06-19T22:38:15.353Z",
    "updatedAt": "2024-06-19T22:38:15.353Z",
    "spotId": "clxmezj2200045o23pmxya1qd"
  }
]
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.