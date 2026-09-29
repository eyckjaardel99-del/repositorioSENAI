insert int cliente(nome, email, dt_nasc)
    values("michael Jackson", "M.jackson@gmail.com", "1920-03-22");

insert int cliente(nome,email, dt_nasc)
    values("joardson", "joardson@gmail.com", "2009-06-05");

INSERT INT cliente(nome, email, dt_nasc)
    VALUES("julios", "mh.gatinha@gmail.com", "1967-03-22");

SELECT * FROM cliente;



CREATE TABLE cliente(
    id_cliente int AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR FOREIGN KEY,


use db_senai;

insert into(id_produto, id_cliente, data_entrada)
    values()