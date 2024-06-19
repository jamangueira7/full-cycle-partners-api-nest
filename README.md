<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>
<br>

# API Contavel


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

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.