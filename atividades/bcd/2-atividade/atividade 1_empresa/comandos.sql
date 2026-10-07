CREATE DATABASE DB_EMPRESA;


USE DB_EMPRESA;


CREATE TABLE empresa(
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT, 
    id_produto 
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


