/*atividade 1*/ 
INSERT INTO cliente(nome_cliente, email, cidade, estado, data_cadastro)
values ("Ruberto Sesiano", "ruber.sesi@gmail.com","jaguariuna", "Sao Paulo", 2026/10/28);

/* atividade 2*/
INSERT INTO produto(nome_produto,categoria, marca, preco_unitario, estoque, ativo, data_cadastro )
    VALUES("Mause Pad 5Pol", "Acessorios", "Lumix", 59.98, 35, 1, 2026/10/28 );

/* ATIVIDADE 3*/
INSERT INTO venda(id_produto, id_cliente, data_venda, quantidade, desconto_percentual, forma_pagamento, status_venda)
    VALUES( 21, 101, 2026/10/21, 10, 1.33, "PIX", "Concluida");

