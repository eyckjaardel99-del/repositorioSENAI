DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora;

USE locadora;

CREATE TABLE usuarios(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    CPF varchar(14) NOT NULL UNIQUE,
    email VARCHAR(80) NOT NULL UNIQUE,
    senha VARCHAR(20) NOT NULL
);


CREATE TABLE filmes(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    idioma VARCHAR(20) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE locacoes(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_locacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_devolucao TIMESTAMP NULL,
    id_filme INT,
    id_usuario INT,
    CONSTRAINT fk_filme_locacoes FOREIGN KEY (id_filme) REFERENCES filmes(id),
    CONSTRAINT fk_usuario_locacoes FOREIGN KEY (id_usuario) REFERENCES usuarios(id)

);

INSERT INTO usuarios VALUES 
(DEFAULT, "Fulano De Tal",
"123.456.333.00", "Detal@gmail.com", "1234" ),

(DEFAULT, "Fulano De Tal",
"123.456.789.00", "fulano@gmail.com", "1234" );

INSERT INTO filmes VALUES
(DEFAULT, "matrix", "Portugues", 3),
(DEFAULT, "It", "ingles", 2);