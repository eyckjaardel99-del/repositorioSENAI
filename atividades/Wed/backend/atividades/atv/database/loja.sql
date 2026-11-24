-- Cria o banco de dados caso ele ainda nao exista.
CREATE DATABASE IF NOT EXISTS loja
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Seleciona o banco que recebera a tabela.
USE loja;

-- Cria a tabela de produtos.
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    cescricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insere alguns produtos de exemplo.
INSERT INTO produtos (nome, cescricao, preco) VALUES
('Teclado', 'Teclado USB', 89.90),
('Mouse', 'Mouse optico', 49.90),
('Monitor', 'Monitor 24 polegadas', 799.90);