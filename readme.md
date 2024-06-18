# API de Contatos 📇

API RESTful para gerenciar contatos, utilizando Node.js, Express, Sequelize, dotenv e MySQL.

## Configuração do Ambiente 🛠️

1. Instale o Node.js se ainda não tiver:
   - [Node.js](https://nodejs.org/)

2. Clone o projeto e instale as dependências:
   ```bash
   git clone https://github.com/seu-usuario/api-contatos.git
   cd api-contatos
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias, como as credenciais do banco de dados.

4. Execute as migrações para criar as tabelas no banco de dados:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Estrutura da API 🌐

A API segue a arquitetura MVC (Model-View-Controller) para melhor organização do código:

- **models/**: Define os modelos Sequelize para as entidades (por exemplo, Contato).
- **controllers/**: Lida com a lógica da aplicação e faz a ponte entre os modelos e as rotas.
- **routes/**: Define as rotas da API usando Express.

## Funcionalidades CRUD 📝

### Contatos

- **POST /contatos**: Cria um novo contato.
- **GET /contatos**: Lista todos os contatos.
- **GET /contatos/:id**: Retorna um contato específico por ID.
- **PUT /contatos/:id**: Atualiza um contato existente.
- **DELETE /contatos/:id**: Exclui um contato existente.

### Exemplos de Uso no Postman 🚀

1. **Criar um novo contato**:
   - Método: POST
   - URL: `http://localhost:3000/contatos`
   - Body (JSON):
     ```json
     {
       "nome": "Fulano de Tal",
       "email": "fulano@example.com",
       "telefone": "123456789"
     }
     ```

2. **Listar todos os contatos**:
   - Método: GET
   - URL: `http://localhost:3000/contatos`

3. **Atualizar um contato**:
   - Método: PUT
   - URL: `http://localhost:3000/contatos/:id`
   - Body (JSON):
     ```json
     {
       "nome": "Novo Nome",
       "email": "novoemail@example.com",
       "telefone": "987654321"
     }
     ```

4. **Excluir um contato**:
   - Método: DELETE
   - URL: `http://localhost:3000/contatos/:id`

ões são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

## Licença 📄

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

