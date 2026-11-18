use vendas_informatica;
select * from produto;
----///----
use vendas_informatica;
select nome_produto, marca, categoria from produto;

----///----
use vendas_informatica;
select nome_produto, categoria, preco_unitario, data_cadastro, marca
from produto
ORDER BY marca asc;

----///----
use vendas_informatica;
select nome_produto, estoque, data_cadastro, marca
from produto
ORDER BY data_cadastro asc;
----///----
use vendas_informatica;
select * from cliente;

----///----
use vendas_informatica;
select nome_cliente, email, cidade, estado
from cliente;
----///----
use vendas_informatica;
select nome_cliente, cidade, estado
from cliente
order by estado asc;

----///----
use vendas_informatica;
select nome_cliente, email, estado, data_cadastro
from cliente
order by data_cadastro;
----///----
use vendas_informatica;
select * from venda;

----///----
USE vendas_informatica;

SELECT produto.nome_produto, cliente.nome_cliente, produto.preco_unitario, data_venda, forma_pagamento
FROM produto
INNER JOIN venda
ON venda.id_produto = produto.id_produto
INNER JOIN cliente 
ON cliente.id_cliente = venda.id_cliente;


----///----
use vendas_informatica;
select produto.nome_produto, data_venda, quantidade, status_venda
from produto
INNER JOIN venda
ON venda.id_produto = produto.id_produto;

----///----
use vendas_informatica;
select produto.nome_produto,produto.preco_unitario, forma_pagamento
forom produto
INNER JOIN venda
ON venda.id_produto = produto.id_produto
WHERE forma_pagamento ="PIX" or forma_pagamento="Boleto";
----///----
use vendas_informatica;
select cliente.nome_cliente, produto.nome_produto, data_venda, quantidade
from produto 
INNER JOIN venda
ON venda.id_produto = produto.id_produto
INNER JOIN cliente
on venda.id_cliente = cliente.id_cliente;


----///----
use vendas_informatica;
select produto.nome_produto, desconto_percentual, forma_pagamento, data_venda
from produto
INNER JOIN venda
on venda.id_produto = produto.id_produto
ORDER BY data_venda asc;

----///----
use vendas_informatica;
select produto.nome_produto, cliente.nome_cliente, desconto_percentual, forma_pagamento
FROM venda
INNER JOIN produto
ON venda.id_produto = produto.id_produto
INNER JOIN cliente
ON venda.id_cliente = venda.id_cliente
ORDER BY forma_pagamento ASC;

----///----
use vendas_informatica;
select cliente.nome_cliente, cliente.email, produto.nome_produto, produto.marca, produto.categoria, forma_pagamento, status_venda, preco_unitario_venda
FROM venda
INNER JOIN cliente
on venda.id_cliente = cliente.id_cliente
INNER JOIN produto
on venda.id_produto = produto.id_produto
WHERE status_venda ="Concluída" or status_venda ="Cancelada"
ORDER BY preco_unitario_venda asc;


------////------
use vendas_informatica;

update cliente
set cidade ="senailandia"
WHERE estado in("DF","ES");

------////------
use vendas_informatica;
update cliente
set data_cadastro="2026-01-01"
WHERE cidade in("Manaus");


------////------
use vendas_informatica;
update cliente
set nome_cliente="Michaeil jackson" 
WHERE id_cliente = 10;


------////------
use vendas_informatica;
update produto
set nome_produto = "notebook lenovo ideapad 7"
WHERE id_produto = 1;


------////------
use vendas_informatica;
update produto
set preco_unitario = 4999.99
WHERE marca="Dell";
------////------
use vendas_informatica;
update venda
SET desconto_percentual = 0.01
WHERE quantidade = 2;


