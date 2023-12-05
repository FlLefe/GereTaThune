BEGIN;

INSERT INTO "user" ("email", "password", "firstname", "lastname", "birthyear", "role")
VALUES ('Florian@gmail.com', 'florian', 'Florian', 'Lefebvre', '2000-01-01', 'user'),
('Guillaume@gmail.com', 'guillaume', 'Guillaume', 'Comparet', '2000-01-01', 'user'),
('Matthieu@gmail.com', 'matthieu', 'Matthieu', 'Coutant', '2000-01-01', 'user'),
('geretonadmin@gmail.com', 'admin', 'admin', 'goodafternoon', '2000-01-01', 'admin'),
('adminflo@gmail.com', '$2b$10$F8OYg.RCb88k36joMTaxN.O274fUWM0ApOaa3/etpdMgl.yT8qQbK', 'flo', 'flo', '2000-01-01', 'user');

INSERT INTO "operation" ("name")
VALUES ('Débit'),
('Crédit'),
('Epargne');

INSERT INTO "category" ("name", "operation_id", "color")
VALUES ('Loyer', '1', 'AliceBlue'),
('Crédit voiture', '1', 'AntiqueWhite'),
('Assurance auto', '1', 'Aquamarine'),
('Courses alimentaires', '1', 'Blue'),
('Electricité', '1', 'BlueViolet'),
('Eau', '1', 'CadetBlue'),
('Frais animaux', '1', 'DarkKhaki'),
('Internet', '1', 'DarkOrchid'),
('Telephone', '1', 'Coral'),
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