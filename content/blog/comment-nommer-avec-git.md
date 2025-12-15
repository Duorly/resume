---
title: 'Conventions de nommage Git : parler le même langage'
description: 'Un guide simple et concret pour bien nommer ses branches, commits et tags Git, avec des règles claires et des analogies faciles à retenir.'
cover: '/images/blog/git-naming.png'
category: 'Développement'
tags: ['Git', 'Naming', 'Workflow', 'Bonnes pratiques']
date: '2025-12-15'

ogImage:
  component: BlogOgImage
  props:
    title: "Conventions de nommage Git : parler le même langage"
    description: "Un guide simple et concret pour bien nommer ses branches, commits et tags Git, avec des règles claires et des analogies faciles à retenir."
    image: "/images/blog/git-naming.png"
---

Dans un projet, le vrai chaos ne vient pas toujours du code. Il vient souvent des **noms**.

Branches obscures, commits mystérieux, tags incompréhensibles… Git peut vite ressembler à un grenier mal étiqueté.

Bonne nouvelle : avec quelques **conventions simples**, Git devient lisible, prévisible et presque agréable à parcourir.


## Pourquoi les conventions de nommage sont cruciales

Nommer correctement dans Git, c’est :

* comprendre un projet sans ouvrir le code,
* collaborer sans poser dix questions,
* éviter les erreurs coûteuses.

> Git sans conventions, c’est un supermarché sans rayons. Tout est là, mais bonne chance pour trouver le lait.

## 1. Nommer les branches Git

Une branche doit répondre immédiatement à une question simple :

> **Pourquoi cette branche existe-t-elle ?**

### Structure recommandée

```text
type/description-courte
```

### Les types de branches les plus courants

| Type              | Utilisation                      |
| ----------------- | -------------------------------- |
| `feature` ou `feat`         | Nouvelle fonctionnalité          |
| `fix` ou `bugfix` | Correction de bug                |
| `hotfix`          | Correction urgente en production |
| `chore`           | Tâches techniques                |
| `refactor`        | Refactorisation                  |
| `docs`            | Documentation                    |
| `test`            | Tests                            |

### Exemples concrets

```bash
# Fonctionnalité de connexion utilisateur
feat/login-utilisateur

# Correction de bug de calcul de TVA
fix/calcul-tva

# Correction urgente en production d'une erreur de paiement
hotfix/paiement-500-error

# Refactorisation de l'API d'authentification
refactor/api-authentication
```

> Une branche bien nommée, c’est une étiquette sur une boîte. Avant même de l’ouvrir, on sait ce qu’il y a dedans.

## 2. Ce qu’il faut éviter dans les noms de branches

❌ Mauvais exemples :

```bash
# Test
test

# Nouvelle branche
new-branch

# Correction de bug
fix123

# Branche de nebel
branche-nebel
```

Pourquoi c’est mauvais :

* aucune intention claire,
* impossible à comprendre dans trois mois,
* inutile pour un collègue.

Règle simple : *si un inconnu ne comprend pas la branche, alors elle a été mal nommée*.

## 3. Nommer ses commits correctement

Un commit raconte **une action**, pas une histoire entière.

### Bonne structure de message

```text
type: action claire
```

### Types de commit courants

| Type       | Signification                   |
| ---------- | ------------------------------- |
| `feat`     | Nouvelle fonctionnalité         |
| `fix`      | Correction de bug               |
| `docs`     | Documentation                   |
| `style`    | Formatage (sans impact logique) |
| `refactor` | Refactorisation                 |
| `test`     | Ajout ou modification de tests  |
| `chore`    | Tâches techniques               |

### Exemples efficaces

```bash
# Ajout du formulaire de connexion
git commit -m "feat: ajout du formulaire de connexion"

# Correction du calcul de remise
git commit -m "fix: correction du calcul de remise"

# Simplification du service auth
git commit -m "refactor: simplification du service auth"

# Mise à jour du README
git commit -m "docs: mise à jour du README"
```

> Un commit bien nommé, c’est un titre de journal. On comprend l’essentiel sans lire l’article.

## 4. Les commits à ne plus jamais faire

❌ Exemples classiques :

```bash
# Fix
git commit -m "fix"

# Test
git commit -m "test"

# Update
git commit -m "update"

# WIP
git commit -m "wip"

# Ok
git commit -m "ok"
```

Pourquoi c’est dangereux :

* inutilisable dans l’historique,
* impossible à auditer,
* honteux six mois plus tard.

Astuce : *si vous avez honte du message, recommencez-le*. A moins de vouloir devenir le cauchemar de votre équipe 😈.

## 5. Nommer les tags Git

Les **tags** servent à marquer des versions importantes.

### Convention la plus utilisée

```text
# MAJEUR : version majeure, incompatible avec les versions antérieures
# MINEUR : version mineure, compatible avec les versions antérieures
# PATCH : version patch, compatible avec les versions antérieures

vMAJEUR.MINEUR.PATCH
```

Exemples :

```text
v1.0.0
v1.2.3
v2.0.0
```

> Un tag, c’est une balise kilométrique sur l’autoroute du projet. Il indique précisément où vous êtes passé.

## 6. Branches principales : une convention simple

* `main` : version stable et déployable
* `develop` (optionnel) : intégration continue des features (fonctionnalités)

Règle d’or :

> **On ne commit jamais directement sur `main`.**

## 7. Convention = contrat d’équipe

Les conventions ne servent à rien si elles ne sont pas partagées.

Bonnes pratiques :

* documenter les règles dans le README,
* utiliser des templates de commit,
* automatiser avec des outils (commitlint, hooks).

> Une convention Git, c’est le code de la route. On peut l’ignorer… jusqu’au premier accident.

## Conclusion

Bien nommer dans Git, ce n’est pas du perfectionnisme. C’est du **respect pour votre futur vous** et pour vos collègues.

Des branches claires, des commits lisibles et des tags cohérents transforment Git en carte lisible plutôt qu’en labyrinthe.

Dans le prochain article, nous verrons comment **corriger ses erreurs Git sans paniquer**, même après un mauvais commit ou un mauvais merge.
