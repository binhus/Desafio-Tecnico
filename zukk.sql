DROP DATABASE IF EXISTS Zukk;
CREATE DATABASE IF NOT EXISTS Zukk;

USE Zukk;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY `email_un` (email)
);

CREATE TABLE IF NOT EXISTS clients (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(150) NOT NULL,
    neighborhood VARCHAR(50) NOT NULL,
    state VARCHAR(20) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	email VARCHAR(100) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY `email_un` (email)
);

INSERT INTO users (id, name, email, password, cep) VALUES
    ('1', 'admin', 'admin@admin.com.br', '123456', '88047210'),
    ('2', 'testuser', 'user@test.com', 'test123', '88047001');

INSERT INTO clients (id, name, address, neighborhood, state, phone, email, cep) VALUES
    ('1', 'Robson', 'rua dos peixes', 'jardim Dourado', 'Santa Catarina', 48996387342, 'eng.robsonwilli@gmail.com', 88047210),
    ('2', 'teste', 'rua dos tubarões', 'jardim Verde', 'São Paulo', 48996387342, 'test@test.com', 88047215);

