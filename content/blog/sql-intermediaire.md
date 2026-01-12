---
title: 'SQL Intermédiaire : Joins, Agrégations et Sous-requêtes'
description: 'Passez à la vitesse supérieure avec SQL. Apprenez à croiser vos données, faire des statistiques et optimiser vos requêtes.'
cover: '/images/blog/sql-intermediate.png'
category: 'Développement'
tags: ['SQL', 'Base de données', 'Backend', 'Avancé']
date: '2026-01-12'
---

Vous maîtrisez le `SELECT * FROM users` ? Bravo, vous avez fait le premier pas. Mais la vraie puissance du SQL se révèle quand on commence à poser des questions complexes à nos données.

Comment savoir combien d'utilisateurs ont commandé ce mois-ci ? Quel est le panier moyen ? Quels produits n'ont jamais été vendus ?
Pour répondre à cela, il faut aller plus loin que le simple CRUD. Bienvenue dans le niveau 2.

## 1. Les Joins avancés

Dans l’article précédent, nous avons vu le `JOIN` (souvent appelé `INNER JOIN`). Il ne garde que les résultats qui correspondent dans les *deux* tables. Mais parfois, on veut tout garder, même s'il n'y a pas de correspondance.

### LEFT JOIN (Le plus utile)
Il garde **toutes** les lignes de la table de *gauche* (celle du `FROM`), même si la table de *droite* n'a pas de correspondance (on aura alors des `NULL`).

**Exemple :** Lister tous les utilisateurs, et leurs commandes s'ils en ont.

```sql
SELECT users.pseudo, orders.id as order_id
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```
*Si Jean n'a jamais commandé, il apparaîtra quand même, avec `NULL` dans la colonne `order_id`.*

### RIGHT JOIN
C'est l'inverse : on garde tout ce qu'il y a à *droite*. En pratique, on l'utilise rarement car on peut presque toujours le réécrire en `LEFT JOIN` en inversant les tables.

## 2. Les Agrégations (Grouper les données)

Souvent, on ne veut pas les données brutes, mais des **statistiques**.

### GROUP BY
Permet de regrouper les lignes qui ont la même valeur.

**Exemple :** Combien de commandes par utilisateur ?

```sql
SELECT user_id, COUNT(*) as total_commandes
FROM orders
GROUP BY user_id;
```

### Les fonctions d'agrégation courantes
* `COUNT(*)` : Compte le nombre de lignes.
* `SUM(column)` : Fait la somme.
* `AVG(column)` : Calcule la moyenne.
* `MAX(column)` / `MIN(column)` : Maximum et Minimum.

**Exemple concret :** Le chiffre d'affaires total par mois.

```sql
SELECT MONTH(created_at) as mois, SUM(total_price) as chiffre_d_affaires
FROM orders
GROUP BY MONTH(created_at);
```

### HAVING (Le WHERE des agrégations)
On ne peut pas utiliser `WHERE` sur un résultat d'agrégation. On utilise `HAVING`.

**Exemple :** Garder uniquement les utilisateurs ayant fait au moins 3 commandes.

```sql
SELECT user_id, COUNT(*) as total
FROM orders
GROUP BY user_id
HAVING total >= 3;
```

## 3. Les Sous-requêtes (Subqueries)

Parfois, une seule requête ne suffit pas... ou alors il faut une requête *dans* la requête.

**Exemple :** Trouver les utilisateurs qui ont dépensé plus que la moyenne.

1. On calcule la moyenne.
2. On filtre ceux qui sont au-dessus.

```sql
SELECT pseudo, total_spent
FROM users
WHERE total_spent > (SELECT AVG(total_spent) FROM users);
```
*La partie entre parenthèses est exécutée en premier.*

## 4. L’Indexation : Penser à la performance

Quand votre table `users` aura 1 million de lignes, un simple `SELECT * FROM users WHERE email = '...'` peut devenir très lent si la base doit scanner chaque ligne une par une.

C'est là qu'intervient l'**Index**. C'est comme le sommaire d'un livre : il permet à la base de savoir exactement où chercher sans tout lire.

```sql
CREATE INDEX idx_users_email ON users(email);
```

**Règle d'or :** Mettez des index sur les colonnes que vous utilisez souvent dans vos `WHERE` et vos `JOIN`. Mais attention, trop d'index ralentissent les `INSERT` et `UPDATE` (car il faut mettre à jour le sommaire à chaque fois).

## Conclusion

Avec les **JOINS**, les **agrégations** et les **sous-requêtes**, vous pouvez extraire presque n'importe quelle information de vos données. C'est ce qui différencie un développeur qui "bricole" d'un développeur qui maîtrise son backend.

Prochaine étape ? Les transactions et l'optimisation avancée !
