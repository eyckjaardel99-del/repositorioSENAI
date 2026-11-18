SELECT * FROM cliente WHERE nome_cliente LIKE "A%"; /* seleciona com o comeco "A"*/
                                                /* "%A" <-- seleciona com final "A"*/
                                                /* "%jose%" <-- seleciona com nome "jose" */

-------///---------

/*atividade 1*/
use vendas_informatica;

SELECT * FROM produto WHERE nome_produto LIKE "D%";

/*atividade 2*/

use vendas_informatica;

SELECT nome_produto, marca, estoque FROM produto WHERE marca LIKE "%E";


/*atividade 3*/
use vendas_informatica;

SELECT nome_produto, preco_unitario, marca, estoque FROM produto WHERE nome_produto LIKE "%Gamer%";


/*atividade 4*/

use vendas_informatica;

SELECT * FROM cliente WHERE nome_cliente LIKE "%barbosa%";


/*atividade 5*/

use vendas_informatica;

SELECT cliente.nome_cliente, venda.data_venda, venda.preco_unitario_venda, venda.forma_pagamento  
FROM cliente

INNER JOIN venda
    ON venda.id_cliente = cliente.id_cliente
WHERE nome_cliente LIKE "c%";


/*atividade 6*/

use vendas_informatica;

SELECT produto.nome_produto, produto.preco_unitario ,venda.id_venda, venda.forma_pagamento
FROM produto
INNER JOIN venda
    ON venda.id_produto = produto.id_produto

WHERE nome_produto LIKE "%polegada%"
AND forma_pagamento = "pix" or forma_pagamento = "boleto";

/*atividade 7*/

use vendas_informatica;

SELECT produto.nome_produto, cliente.nome_cliente, venda.desconto_percentual, venda.forma_pagamento, venda.status_venda
FROM produto
INNER JOIN venda
    ON venda.id_produto = produto.id_produto
INNER JOIN cliente
    ON venda.id_cliente = cliente.id_cliente

WHERE nome_produto LIKE "%placa%"
    OR nome_produto LIKE "%notebook%"
    OR nome_cliente LIKE "%Ana%"

ORDER BY forma_pagamento ASC;
