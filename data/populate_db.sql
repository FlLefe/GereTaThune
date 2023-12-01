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

INSERT INTO "category" ("name", "operation_id", "color")
VALUES ('Loyer', '1', 'purple'),
('Crédit voiture', '1', 'green'),
('Assurance auto', '1', 'blue'),
('Rente', '2', 'red'),
('Loto', '2', 'darkgrey'),
('Salaire', '2', 'green'),
('Etrennes', '2', 'green'),
('Livret A', '3', 'green'),
('PEL', '3', 'green'),
('Assurance vie', '3', 'green'),
('Crypto', '3', 'green');

INSERT INTO "movement" ("type", "amount", "comment", "operation_id", "category_id", "user_id")
VALUES ('Mensuelle', 1400,'essaiCommentaire1', 2, 2, 2),
('Mensuelle', 1600,'essaiCommentaire1', 2, 2, 3),
('Mensuelle', 1200,'essaiCommentaire1', 2, 2, 1),
('Ponctuelle', 100,'essaiCommentaire1', 1, 2, 2),
('Ponctuelle', 555, 'essaiCommentaire1', 1, 2, 4),
('Ponctuelle', 555, 'essaiCommentaire2', 1, 2, 4),
('Ponctuelle', 555, 'essaiCommentaire3', 1, 2, 4);

END;