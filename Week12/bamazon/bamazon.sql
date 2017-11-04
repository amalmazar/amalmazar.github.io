DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE pets (
id INT NOT NULL AUTO_INCREMENT,
pet-type VARCHAR(45) NULL,
price DECIMAL(10,2),
stock_quantity DECIMAL(10,2)
)

INSERT INTO pets (pet-type, price, stock_quantity)
VALUES ("dog", 150, 2), ("cat", 10.99, 2), ("bird", 69.99, 2), ("fish", 7.00, 2);