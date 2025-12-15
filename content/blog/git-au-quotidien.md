---
title: 'Git au quotidien : les commandes que vous utiliserez vraiment'
description: 'Un guide pratique et décontracté des commandes Git du quotidien, expliquées avec des analogies simples pour enfin les retenir.'
cover: '/images/blog/git-daily.png'
category: 'Développement'
tags: ['Git', 'Workflow', 'Commandes Git', 'Développement']
date: '2025-12-14'
---

Une fois Git installé et compris dans les grandes lignes, une surprise attend souvent les débutants : **on utilise toujours les mêmes commandes**.

Pas besoin d’un grimoire magique. Git au quotidien, c’est une petite trousse à outils bien rodée. Voici les commandes essentielles, expliquées comme si Git était un collègue un peu maniaque, mais très organisé.

---

## `git status` – Le miroir de vérité

```bash
git status
```

Cette commande vous dit **où vous en êtes**.

> `git status`, c’est comme se regarder dans un miroir avant de sortir. On vérifie si tout est en ordre ou si quelque chose dépasse.

Elle vous indique :

* quels fichiers ont changé,
* lesquels sont prêts à être commités,
* lesquels sont encore ignorés par Git.

Réflexe sain : *avant toute action importante, un `git status`*.

---

## `git diff` – Le jeu des différences

```bash
git diff
```

Montre **ce qui a changé**, ligne par ligne.

> `git diff`, c’est le jeu des 7 différences entre votre code d’hier et celui d’aujourd’hui.

Très utile pour :

* vérifier ce que vous êtes sur le point de commit,
* éviter d’envoyer une ligne de debug oubliée.

---

## `git add` – Mettre dans le panier

```bash
git add fichier.js
git add .
```

Ajoute des changements à la zone de staging.

> `git add`, c’est faire ses courses. Mettre un produit dans le panier ne veut pas dire que vous l’avez payé.

Le paiement, c’est le commit.

### Mode malin

```bash
git add -p
```

Ici, Git vous demande morceau par morceau ce que vous voulez ajouter.

> C’est le caissier qui vous demande : « Celui-là aussi ? »

---

## `git commit` – La photo officielle

```bash
git commit -m "Fix: correction du calcul de TVA"
```

Enregistre définitivement les changements.

> Un commit, c’est une photo de famille. Une fois prise, on ne peut plus nier que cette coupe de cheveux a existé.

Bonnes pratiques :

* un commit = une intention claire,
* un message lisible par un humain fatigué.

---

## `git log` – Le journal intime

```bash
git log --oneline
```

Affiche l’historique des commits.

> `git log`, c’est le journal intime du projet. Tout y est consigné, même les décisions douteuses.

Astuce : ajoutez `--graph` pour visualiser les branches.

---

## `git stash` – Ranger sous le tapis (proprement)

```bash
git stash
git stash pop
```

Met de côté des changements temporairement.

> `git stash`, c’est ranger le bazar dans un tiroir avant que quelqu’un n’arrive.

Très pratique quand :

* vous devez changer de branche rapidement,
* votre travail n’est pas prêt à être commit.

---

## `git pull` – Se synchroniser

```bash
git pull origin main
```

Récupère les changements du dépôt distant.

> `git pull`, c’est comme dire : « Montre-moi ce que les autres ont fait pendant mon absence ».

À faire :

* avant de commencer une tâche,
* avant de pousser vos commits.

---

## `git push` – Envoyer au QG

```bash
git push origin ma-branche
```

Envoie vos commits vers le dépôt distant.

> `git push`, c’est envoyer votre travail au siège. Tant que ce n’est pas poussé, personne ne le voit.

Règle d’or : *si ce n’est pas poussé, ce n’est pas vraiment sauvegardé*.

---

## `git branch` – Les lignes parallèles

```bash
git branch
git branch feature/login
```

Liste ou crée des branches.

> Une branche, c’est une ligne temporelle alternative où vous pouvez faire n’importe quoi sans casser l’univers principal.

---

## `git switch` – Changer de réalité

```bash
git switch feature/login
```

Change de branche.

> `git switch`, c’est changer de voie sur l’autoroute. Même destination, autre trajectoire.

---

## `git merge` – Réunir les mondes

```bash
git merge feature/login
```

Fusionne une branche dans une autre.

> `git merge`, c’est réunir deux histoires parallèles pour n’en faire qu’une seule.

Parfois, Git demande de résoudre des conflits. Ce n’est pas une punition, juste une discussion à arbitrer.

---

## Le kit de survie du développeur Git

Si vous ne deviez retenir que ça, en cas d'incident :

```bash
# Tapez ces commandes en cas d'incident
git status
git add .
git commit -m "message clair"
git pull
git push

# Ensuite sortez de l'immeuble en courant vite vite vite
```

Avec ces commandes, vous pouvez déjà travailler sur 90 % des projets.

---

## Conclusion

Git peut sembler intimidant au début, mais au quotidien, il devient un réflexe. Comme conduire une voiture : au départ, on pense à chaque pédale. Ensuite, on avance sans y réfléchir.

Maîtrisez ces commandes, comprenez ce qu’elles font, et Git deviendra un allié fidèle plutôt qu’un monstre à apprivoiser.

Dans le prochain article, nous verrons comment **rattraper une erreur Git sans paniquer**. Oui, même après un mauvais commit.
