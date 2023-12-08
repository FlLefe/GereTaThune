BEGIN;

INSERT INTO "user" ("email", "password", "firstname", "lastname", "birthyear", "role")
VALUES ('admin@gmail.com', '$2b$10$F8OYg.RCb88k36joMTaxN.O274fUWM0ApOaa3/etpdMgl.yT8qQbK', 'admin', 'admin', '2000-01-01', 'admin'),
('user@gmail.com', '$2b$10$F8OYg.RCb88k36joMTaxN.O274fUWM0ApOaa3/etpdMgl.yT8qQbK', 'user', 'user', '2000-01-01', 'user');


INSERT INTO "operation" ("name")
VALUES ('Débit'),
('Crédit'),
('Epargne');

INSERT INTO "category" ("name", "operation_id", "color")
VALUES ('Alimentation', '1', '#c8f4d5'),
('Logement', '1', '#bde0ff'),
('Transport', '1', '#c4f8ef'),
('Loisirs', '1', '#dbbdff'),
('Santé', '1', '#ffbdfd'),
('Assurances', '1', '#ffbdd6'),
('Divers', '1', '#ffddbd'),
('Salaire', '2', '#c8f4d5'),
('Prime', '2', '#bde0ff'),
('Prestations', '2', '#ffbdd6'),
('Revenus locatifs', '2', '#c4f8ef'),
('Divers', '2', '#ffddbd'),
('Epargne de sécurité', '3', '#c8f4d5'),
('Epargne retraite A', '3', '#bde0ff'),
('Epargne investie', '3', '#ffbdd6'),
('Epargne études', '3', '#c4f8ef'),
('Vacances', '3', '#ffbdfd'),
('Epargne santé', '3', '#dbbdff'),
('Divers', '3', '#ffddbd');

INSERT INTO "movement" ("type", "amount", "comment", "operation_id", "category_id", "user_id")
VALUES 
('Model', 1400, 'Achat de produits alimentaires', 2, 1, 1),
('Model', 1600, 'Paiement du loyer', 2, 2, 1),
('Model', 1200, 'Abonnement transports en commun', 2, 3, 1),
('Actif', 100, 'Dîner au restaurant', 1, 4, 1),
('Actif', 555, 'Achat de vêtements', 1, 5, 1),
('Actif', 555, 'Achat de produits de santé', 1, 6, 1),
('Actif', 555, 'Dépense diversifiée', 1, 7, 1),
('Model', 2000, 'Épargne mensuelle pour les vacances', 2, 13, 1),
('Model', 1500, 'Épargne santé mensuelle', 2, 14, 1),
('Actif', 300, 'Achat impulsif', 1, 7, 1),
('Actif', 450, 'Achat de livres', 1, 4, 1),
('Model', 1800, 'Épargne mensuelle pour les projets', 2, 13, 1),
('Actif', 700, 'Factures médicales imprévues', 1, 6, 1),
('Model', 2200, 'Prime exceptionnelle', 2, 9, 2),
('Model', 1700, 'Salaire mensuel', 2, 8, 2),
('Model', 1400, 'Prestations sociales', 2, 10, 2),
('Actif', 400, 'Achat de gadgets électroniques', 1, 12, 2),
('Actif', 1200, 'Épargne pour les études', 1, 11, 2),
('Actif', 1800, 'Dépense imprévue', 1, 7, 2),
('Model', 2000, 'Prime mensuelle', 2, 8, 2),
('Model', 1800, 'Salaire mensuel', 2, 9, 2),
('Model', 1300, 'Prestations sociales', 2, 10, 2),
('Actif', 300, 'Achat de mobilier', 1, 11, 2),
('Actif', 800, 'Achat de produits électroniques', 1, 12, 2),
('Actif', 2000, 'Épargne pour des vacances', 1, 13, 2),
('Actif', 1500, 'Épargne santé', 1, 14, 2),
('Actif', 550, 'Cadeau d''anniversaire', 1, 7, 2),
('Model', 2000, 'Épargne mensuelle pour la retraite', 2, 9, 2),
('Actif', 3000, 'Achat d''un nouvel ordinateur portable', 1, 12, 2);

END;