SELECT * FROM cliente WHERE data_cadastro BETWEEN "2023-01-01" AND "2024-01-01"
    id_cliente /* BETWEEN*/ 10 AND 30
    id_cliente /* BETWEEN*/ "a" and "c"

/* atividade 1*/
use vendas_informatica;

SELECT * FROM produto WHERE data_cadastro BETWEEN "2024-03-01" and "2024-03-30";




/* atividade 2*/
use vendas_informatica;

SELECT nome_produto, marca, estoque, data_cadastro FROM produto WHERE data_cadastro BETWEEN "2024-01-01" and "2024-03-30";




/* atividade 3*/
use vendas_informatica;

SELECT * FROM cliente WHERE data_cadastro BETWEEN "2023-01-01" and "2023-01-30";





/* atividade 4*/
use vendas_informatica;

SELECT nome_cliente, email, cidade, estado, data_cadastro FROM cliente WHERE data_cadastro BETWEEN "2023-06-01" and "2023-06-15";




/* atividade 5*/
use vendas_informatica;

SELECT * FROM venda WHERE data_venda BETWEEN "2025-05-01" and "2025-05-30";




/* atividade 6*/
use vendas_informatica;

SELECT cliente.nome_cliente, venda.data_venda, venda.preco_unitario_venda, venda.forma_pagamento, venda.data_venda
FROM venda
INNER JOIN cliente
ON venda.id_cliente = cliente.id_cliente
WHERE data_venda BETWEEN "2025-12-24" and "2026-01-15";


/* atividade 7*/
use vendas_informatica;

SELECT cliente.nome_cliente, cliente.email, produto.nome_produto, produto.marca, produto.categoria, venda.forma_pagamento, venda.data_venda, venda.status_venda, venda.preco_unitario_venda
FROM venda
INNER JOIN cliente
ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto
ON venda.id_produto = produto.id_produto
WHERE data_venda BETWEEN "2025-12-1" and "2025-12-30"
AND status_venda = "cancelada" or status_venda = "concluída"
ORDER BY preco_unitario_venda DESC;
