/* ativivade 1*/

DELETE FROM cliente 
WHERE id_cliente = 5;

DELETE FROM cliente
WHERE estado = "SC";

DELETE FROM produto
WHERE marca = "LG";

DELETE FROM produto
WHERE id_produto IN = (3, 5, 10);

DELETE FROM venda 
WHERE desconto_percentual = 0;

DELETE FROM venda
WHERE status_venda = "Cancelada";