USE vendas_informatica;

SELECT * FROM cliente;
SELECT * FROM produto;
SELECT * FROM venda;

SELECT nome_clinte, cidade, estado
FROM cliente;

SELECT nome_clinte, cidade, estado
FROM cliente WHERE ="MG";
---------///----------
USE vendas_informatica;

SELECT* FROM cliente
WHERE estado="MG";

--------///----------

USE vendas_informatica;

SELECT* FROM cliente
WHERE estado="MG" or estado ="RJ";

SELECT * from produto
WHERE marca IN("lenovo", "acer", "dell");

SELECT * FROM venda
WHERE forma_pagamento IN("PIX", "Boleto");

---------///----------

USE vendas_informatica;
SELECT * FROM venda
WHERE forma_pagamento IN("PIX", "Boleto") AND quantidade > 2;

---------///----------
USE vendas_informatica;
SELECT * FROM venda
WHERE forma_pagamento IN("PIX", "Boleto") AND quantidade > 2
ORDER BY marca asc;

--- ASC(de A ao Z)
--- ou DESC(invertido, Z ao A)

---------///----------

USE vendas_informatica;

SELECT cliente.nome_cliente, venda.forma_pagamento
FROM cliente
INNER JOIN venda
ON venda.id_cliente = cliente.id_cliente;
-----///-------

USE vendas_informatica;

SELECT produto.nome_produto, cliente.nome_cliente 
FROM produto
INNER JOIN venda
ON venda.id_produto = produto.id_produto
INNER JOIN cliente 
ON cliente.id_cliente = venda.id_cliente;


