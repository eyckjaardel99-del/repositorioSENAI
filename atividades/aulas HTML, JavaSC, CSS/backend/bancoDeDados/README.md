# Controle de inventario
## projeto de inventario, com registros mantidos de forma manual.
 - dados.json
 ```json
[
    {
        "id":1,
        "nome":"banana",
        "unidade": "kg",
        "precoUnitario":2.55,
        "quantidade":2

        
    },
    {
       "id":2,
        "nome":"repolho",
        "unidade": "unidade",
        "precoUnitario":4.9,
        "quantidade":3
    },
    {
        "id":3,
        "nome":"manga",
        "unidade": "kg",
        "precoUnitario":12.5,
        "quantidade":1
    }
]
```




- para rodar nescessita dos arquivos do projeto, junto do node_modules.
## tecnologias utilizadas: 
- VsCode 
- Thunder Client
- git(envio).
- javaScript
- Node.js
- JSON

## Passos para executar:
- 1 Clone o repositório
- 2 Abra com VsCode e em um teminal CMD ou BASH didige:
```
npm install express(node_modules)
npm run dev
```
- 3 Teste as rotas com a extensão **Thunder Client** do *VsCode*

## rotas:
```
Post servidor: http://localhost:3000/
Get servidor: http://localhost:3000/
Put servidor: http://localhost:3000/:id
Delete servidor: http://localhost:3000/:id
```
## exemplo de requisições:
- create put: http://localhost:3000/:id(1)
- Corpo
```json
    "nome":"melancia",
    "unidade": "kg",
    "precoUnitario":2.55,
    "quantidade":2
```
- antes
```json
    {
        "id":1,
        "nome":"banana",
        "unidade": "kg",
        "precoUnitario":2.55,
        "quantidade":2

        
    }
```
- resposta(depois)
```json
    {
        "id":1,
        "nome":"melancia",
        "unidade": "kg",
        "precoUnitario":2.55,
        "quantidade":2

        
    }
```
## teste thunder client vscode
![teste01](.\bancoDeDados\Captura de tela 2026-09-29 095226.png")
