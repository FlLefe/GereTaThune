BEGIN;

INSERT INTO "user" ("email", "password", "firstname", "lastname", "age", "role")
VALUES ('Florian@gmail.com', 'florian', 'Florian', 'Lefebvre', '28', 'user'),
('Guillaume@gmail.com', 'guillaume', 'Guillaume', 'Comparet', '30', 'user'),
('Matthieu@gmail.com', 'matthieu', 'Matthieu', 'Coutant', '35', 'user'),
('geretonadmin@gmail.com', 'admin', 'admin', 'goodafternoon', '80', 'admin');

END;