---
title: 'Git pour les débutants : Comprendre et bien démarrer avec le contrôle de version'
description: 'Un guide clair et progressif pour comprendre Git, son utilité, son vocabulaire et les commandes essentielles pour débuter sereinement.'
cover: '/images/blog/git.png'
category: 'Développement'
tags: ['Git', 'Contrôle de Version', 'VCS', 'Développement']
date: '2025-12-13'
---

Dans le développement logiciel, le code change en permanence. On teste, on corrige, on ajoute, on casse, puis on répare. Quand on travaille à plusieurs, ces changements peuvent vite devenir chaotiques. C’est précisément pour dompter ce chaos que **Git** existe.

Cet article s’adresse aux **débutants**. L’objectif n’est pas de tout savoir, mais de **comprendre les bases**, le vocabulaire essentiel et le flux de travail le plus courant.


## 1. Git, c’est quoi exactement ?

Git est un **système de contrôle de version distribué** (DVCS), créé en 2005 par Linus Torvalds, le créateur de Linux.

En pratique, Git est un outil qui permet de :

* garder l’historique de toutes les modifications d’un projet,
* revenir en arrière sans stress,
* travailler à plusieurs sans se marcher dessus.


## 2. Le contrôle de version, expliqué simplement

Le **contrôle de version** consiste à conserver une trace de chaque évolution d’un fichier ou d’un projet.

Sans Git, beaucoup de débutants font ceci :

* `projet.doc`
* `projet_v2.doc`
* `projet_v2_final.doc`
* `projet_v2_final_vraiment_final.doc`

Cela fonctionne… jusqu’au jour où l’on ne sait plus :

* quelle version est la bonne,
* qui a modifié quoi,
* comment revenir à une version stable.

Git automatise tout cela : chaque changement important est enregistré, daté, documenté et récupérable.


## 3. Pourquoi Git est dit « distribué » ?

Avec Git, **chaque développeur possède une copie complète du projet**, historique inclus.

### Deux modèles à comparer

* **VCS centralisé** :
  * un seul serveur contient l’historique,
  * si le serveur tombe, tout le monde est bloqué.
  * chaque clone est une sauvegarde.

* **VCS distribué (Git)** :
  * chaque machine possède l’historique complet,
  * le travail peut continuer même hors ligne,
  * chaque clone est une sauvegarde.

C’est l’une des grandes forces de Git.


## 4. Pourquoi Git est indispensable aujourd’hui ?

Git est devenu un standard, car il répond à des besoins très concrets :

1. **Historique clair** : savoir qui a fait quoi, quand et pourquoi.
2. **Retour arrière instantané** : une erreur ? On revient à un état stable.
3. **Travail en équipe** : chacun avance sur sa partie sans bloquer les autres.
4. **Branches** : tester des idées sans risquer de casser le projet principal.


## 5. Les trois zones clés de Git

Avant les commandes, il faut comprendre comment Git organise le travail localement.

* **Le répertoire de travail (Working Directory)** : 
C’est votre dossier de projet tel que vous le voyez sur votre ordinateur. Vous y modifiez les fichiers.

* **La zone de staging (Index)** : C’est une zone intermédiaire. Vous y placez **uniquement** les changements que vous voulez enregistrer dans le prochain commit.

* **Le dépôt Git (Repository)** : C’est la base de données interne de Git. Elle contient l’historique complet du projet.

Un bon réflexe : **on ne commit jamais tout par réflexe, on choisit ce que l’on commit**.

## 6. Les commandes Git essentielles

### Initialiser un dépôt

Pour démarrer Git dans un dossier existant :

```bash
# Entrez dans votre dossier de projet
cd mon-super-projet

# Initialise un nouveau dépôt Git local
git init
```

### Cloner un dépôt existant

Pour récupérer un projet déjà hébergé (GitHub, GitLab…) :

```bash
# Clone le projet dans un nouveau dossier
git clone URL_DU_DEPOT

# Clone le projet dans un dossier existant
git clone https://github.com/mon-username/mon-projet.git
```

### Vérifier l’état du projet

```bash
git status
```

Cette commande indique :

* les fichiers modifiés,
* les fichiers non suivis,
* les fichiers prêts à être commités.

### Ajouter des fichiers au staging

Ajouter un fichier :

```bash
# Ajoute un fichier spécifique à la zone de staging
git add nom-du-fichier.js

# Ajoute tous les fichiers modifiés et non suivis
git add .
```

Mode interactif (recommandé pour apprendre) :

```bash
# Ajoute les fichiers modifiés et non suivis de façon interactive
git add -p
```

### Créer un commit

Un **commit** est une photo (sauvegarde) de l’état du projet à un instant donné.
Si tu veux paraitre plus stylé tu peux appeler ça un _snapshot_ 😉 au lieu de sauvegarde.

```bash
git commit -m "Ajout de la fonctionnalité de connexion"
```

Pour un message plus détaillé :

```bash
git commit -m "Ajout de la fonctionnalité de connexion" \
            -m "Création du formulaire et validation des champs"
```

### Consulter l’historique

```bash
# Affiche l'historique des commits
git log
```

Version compacte et lisible :

```bash
# Option plus compacte et graphique
git log --oneline --graph
```

## 7. Comprendre les branches

Une **branche** est une ligne de développement indépendante.

La branche principale s’appelle généralement `main` ou `master`.

Créer une branche permet de :

* développer une fonctionnalité,
* corriger un bug,
* expérimenter sans danger.

### Commandes utiles

| Commande              | Description               |
| --------------------- | ------------------------- |
| `git branch`          | Liste les branches        |
| `git branch nom-de-ma-branche`      | Crée une branche          |
| `git checkout nom-de-ma-branche`    | (Ancienne méthode) Change de branche         |
| `git switch nom-de-ma-branche`      | (Nouvelle méthode) Change de branche         |
| `git checkout -b nom-de-ma-branche` | Crée et change de branche |
| `git branch -d nom-de-ma-branche`   | Supprime une branche      |

## 8. Travailler avec un dépôt distant

Un dépôt distant est une version du projet hébergée en ligne.

Par convention, le dépôt principal s’appelle **origin**.

### Commandes essentielles

| Commande                  | Rôle                      |
| ------------------------- | ------------------------- |
| `git remote -v`           | Liste les dépôts distants |
| `git push origin branche` | Envoie les commits        |
| `git pull origin branche` | Récupère et fusionne      |
| `git fetch`               | Récupère sans fusionner   |

## 9. Exemple de workflow quotidien

1. Se mettre à jour :

```bash
git switch main
git pull origin main
```

2. Créer une branche :

Généralement on crée une branche pour développer une fonctionnalité ou corriger un bug.
* Quand il s'agit de corriger un bug, on utilise souvent le prefixe `fix`.
* Quand il s'agit de développer une fonctionnalité, on utilise souvent le prefixe `feat`.

```bash
git checkout -b feature/nouvelle-galerie
```

3. Modifier le code (Code, code, code...)

4. Vérifier l’état :

```bash
git status
```

5. Stager les changements :

```bash
git add .
```

6. Commiter :

```bash
git commit -m "feat: ajout de la galerie d’images"
```

7. Envoyer le travail :

```bash
git push origin feature/nouvelle-galerie
```

La fusion finale se fait via une **Pull Request** sur la plateforme d’hébergement.

## Conclusion

Git n’est pas seulement un outil, c’est une **assurance tranquillité**. Il protège votre travail, structure la collaboration et rend les erreurs réversibles.

En maîtrisant les bases, vous posez une fondation solide pour tous vos projets futurs.

---

## Ressources pour aller plus loin

* Documentation officielle : [https://git-scm.com](https://git-scm.com)
* GitHub : [https://github.com](https://github.com)
* GitLab : [https://gitlab.com](https://gitlab.com)
* Bitbucket : [https://bitbucket.org](https://bitbucket.org)
