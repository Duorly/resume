---
title: 'SQL au quotidien : les requêtes que vous utiliserez vraiment'
description: 'Un guide de survie pour ne plus avoir peur de la console SQL. Les commandes essentielles pour filtrer, trier et trouver ce que vous cherchez.'
cover: '/images/blog/sql-daily.png'
category: 'Développement'
tags: ['SQL', 'Productivité', 'Backend', 'Développement']
date: '2026-01-11'
---

Les cours de SQL vous apprennent à construire des bases de données complexes. Mais dans la vraie vie de développeur, 90% du temps, on veut juste **vérifier une info rapidement**.

"Est-ce que mon utilisateur a bien été créé ?", "Pourquoi cette commande n'a pas de prix ?", "Combien de comptes sont actifs ?".

Pour cela, pas besoin d'être un DBA certifié. Voici votre trousse à outils de survie.

---

## `LIMIT` – L'échantillon prudent

```sql
SELECT * FROM orders LIMIT 5;
```

Si votre table fait 10 millions de lignes, faire un `SELECT *` sans `LIMIT`, c'est comme essayer de boire à la lance à incendie.

> **Règle d'or :** Toujours commencer par un `LIMIT` quand on découvre une table. Ça évite de faire planter son client SQL (ou le serveur).

---

## `ORDER BY` – Mettre de l'ordre

```sql
SELECT * FROM users ORDER BY created_at DESC;
```

Par défaut, l'ordre des résultats est... imprévisible.
`DESC` (descendant) est votre meilleur ami pour voir les **derniers** éléments créés (les plus récents).

> Pour voir les nouveaux inscrits, c'est la commande réflexe.

---

## `DISTINCT` – L'anti-doublon

```sql
SELECT DISTINCT country FROM users;
```

Vous voulez savoir quels sont les pays présents dans votre base, sans voir "France" apparaître 5000 fois ? `DISTINCT` ne garde que les valeurs uniques.

> C'est le "Set" du SQL.

---

## `LIKE` – La recherche floue

```sql
SELECT * FROM products WHERE name LIKE '%café%';
```

Vous ne connaissez pas le nom exact ? Le `%` est un joker qui remplace "n'importe quoi".
* `%café` : finit par café
* `café%` : commence par café
* `%café%` : contient café (n'importe où)

> Indispensable quand on cherche "ce bug bizarre sur le produit dont le nom ressemble à..."

---

## `IS NULL` – Chercher le vide

```sql
SELECT * FROM users WHERE phone_number IS NULL;
```

**Piège classique :** On ne peut pas écrire `WHERE phone = NULL`. En SQL, `NULL` n'est pas une valeur, c'est l'absence de valeur. On ne peut pas être "égal" à l'absence. On "est" l'absence.

> Utilisez `IS NOT NULL` pour faire l'inverse (chercher ceux qui ont bien un numéro).

---

## `IN` – La liste VIP

```sql
SELECT * FROM orders WHERE status IN ('PENDING', 'PAID', 'SHIPPING');
```

Fini les `WHERE status = '...' OR status = '...' OR ...`.
Propre, net et lisible.

---

## `COUNT` – Le compteur rapide

```sql
SELECT COUNT(*) FROM users;
```

Combien j'ai d'utilisateurs ? Pas besoin de les récupérer et de compter les lignes dans votre tête.

---

## Le kit de survie complet

Vous cherchez le dernier utilisateur "Jean" qui s'est inscrit mais qui n'a pas encore validé son email ?

```sql
SELECT * 
FROM users 
WHERE pseudo LIKE '%Jean%' 
  AND email_verified_at IS NULL 
ORDER BY created_at DESC 
LIMIT 1;
```

Avec ça, vous couvrez l'immense majorité de vos besoins quotidiens de débogage et de vérification.

Pas besoin de plus compliqué pour être efficace.
