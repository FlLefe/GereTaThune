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
('Electricité', '1'),
('Salaire', '2');

INSERT INTO "movement" ("type", "amount", "operation_id", "category_id", "user_id")
VALUES ('Mensuel', 1400, 2, 2, 2),
('Mensuel', 1600, 2, 2, 3),
('Mensuel', 1200, 2, 2, 1),
('Ponctuel', 100, 1, 2, 2);

END;