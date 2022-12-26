# API simples em Next e React
Projeto feito com React.js + Next.js + Typescript


### Instalação
`npm install`

### Para rodar o projeto
`npm run dev`

### Para testar
Acesse `https://resttesttest.com/` 

### Para trazer todos usuários 
Utilize o método 'GET' com Endpoint 'http://localhost:3000/api/users'

### Para trazer apenas um usuário
Utilize o método 'GET' com Endpoint 'http://localhost:3000/api/users?seachId=1'
searchId é o id do usuário ao qual se quer fazer a consulta, são válidos numeros de 1-20.

### Para adicionar um novo usuário
Utilize o método 'POST' com Endpoint 'http://localhost:3000/api/users'
Escolha adicionar parâmetros
1º parâmetro digite 'name' em Parameter Name -> e digite o 'nome escolhido' em Parameter Value. 
2º adicione outro parâmetro
3º parâmetro digite 'lastname' em Parameter Name -> e digite o 'sobrenome escolhido' em Parameter Value. 