CREATE DATABASE examen_final;
USE examen_final;

CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    Genero VARCHAR(255) NOT NULL,
    Fecha_Nacimiento DATE NOT NULL,
    Estado ENUM('Activo', 'Inactivo') NOT NULL,
    value INT NOT NULL
);

CREATE TABLE Transacciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Cliente_id INT,
    Fecha_creacion DATE NOT NULL,
    Fecha_actualizacion DATE NOT NULL,
    Usuario VARCHAR(150) NOT NULL,
    Estado ENUM('Activo', 'Inactivo') NOT NULL,
    value INT NOT NULL,
    FOREIGN KEY (Cliente_id) REFERENCES Clientes(id)
);

INSERT INTO Clientes (Name, Apellido, Genero, Fecha_Nacimiento, Estado, value) VALUES
('Juan', 'Perez', 'Masculino', '1980-01-01', 'Activo', 100),
('Maria', 'Gomez', 'Femenino', '1990-02-02', 'Inactivo', 200);

INSERT INTO Transacciones (Cliente_id, Fecha_creacion, Fecha_actualizacion, Usuario, Estado, value) VALUES
(1, '2023-01-01', '2023-01-02', 'admin', 'Activo', 150),
(2, '2023-02-01', '2023-02-02', 'user', 'Inactivo', 250);