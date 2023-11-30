BEGIN;

INSERT INTO "user" ("email", "password", "firstname", "lastname", "age", "role")
VALUES ('Florian@gmail.com', 'florian', 'Florian', 'Lefebvre', '28', 'user'),
('Guillaume@gmail.com', 'guillaume', 'Guillaume', 'Comparet', '30', 'user'),
('Matthieu@gmail.com', 'matthieu', 'Matthieu', 'Coutant', '35', 'user'),
('geretonadmin@gmail.com', 'admin', 'admin', 'goodafternoon', '80', 'admin');

INSERT INTO "operation" ("name")
VALUES ('Débit'),
('Crédit'),
('Epargne');

INSERT INTO "category" ("name", "operation_id")
VALUES ('Loyer', '1'),
('Crédit voiture', '1'),
('Assurance auto', '1'),
('Rente', '2'),
('Loto', '2'),
('Salaire', '2'),
('Etrennes', '2'),
('Livret A', '3'),
('PEL', '3'),
('Assurance vie', '3'),
('Crypto', '3');

INSERT INTO "movement" ("type", "amount", "operation_id", "category_id", "user_id")
VALUES ('Mensuelle', 1400, 2, 2, 2),
('Mensuelle', 1600, 2, 2, 3),
('Mensuelle', 1200, 2, 2, 1),
('Ponctuelle', 100, 1, 2, 2);

END;