CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE cliente(
    nome CHAR(100),
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    id_email INT NOT NULL,
    id_emprestimo INT NOT NULL,
    email VARCHAR(200) NOT NULL,
    curso CHAR NOT NULL
)


USE biblioteca;
CREATE TABLE emprestimo(
    id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
    dt_emprestimo DATE NOT NULL,
    dt_entrega DATE NOT NULL
)

USE biblioteca;
CREATE TABLE livro(
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo CHAR NOT NULL,
    autor CHAR NOT NULL,
    ano_publicacao DATE NOT NULL
)

ALTER TABLE emprestimo
ADD CONSTRAINT fk_emprestimo_aluno
FOREIGN KEY (id_aluno)
REFERENCES aluno (id_aluno);

ALTER TABLE emprestimo
ADD CONSTRAINT fk_emprestimo_livro
FOREIGN KEY (id_livro)
REFERENCES livro (id_livro);










