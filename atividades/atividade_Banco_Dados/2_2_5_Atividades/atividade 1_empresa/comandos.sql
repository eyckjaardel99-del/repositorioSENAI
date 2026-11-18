CREATE DATABASE DB_EMPRESA;


USE DB_EMPRESA;


CREATE TABLE empresa(
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT, 
    id_produto INT,
)

USE DB_EMPRESA;
CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome CHAR NOT NULl,
    id_telefone INT,
    id_email INT
)

USE DB_EMPRESA;
CREATE TABLE telefone(
    id_telefone INT PRIMARY KEY AUTO_INCREMENT,
    telefone INT NOT NULl
)

USE DB_EMPRESA;
CREATE TABLE email(
    id_email INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR NOT NULL
)

USE DB_EMPRESA;
CREATE TABLE produto(
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome CHAR NOT NULL,
    preco FLOAT NOT NULL,
    quantidade INT NOT NULl
)

ALTER TABLE cliente
ADD CONSTRAINT fk_cliente_telefone
FOREIGN KEY (id_telefone)
REFERENCES telefone (id_telefone);

ALTER TABLE cliente
ADD CONSTRAINT fk_cliente_email
FOREIGN KEY (id_email)
REFERENCES email (id_email);

ALTER TABLE empresa
ADD CONSTRAINT fk_empresa_cliente
FOREIGN KEY (id_cliente)
REFERENCES cliente (id_cliente);

ALTER TABLE empresa
ADD CONSTRAINT fk_empresa_produto
FOREIGN KEY (id_produto)
REFERENCES produto (id_produto);




