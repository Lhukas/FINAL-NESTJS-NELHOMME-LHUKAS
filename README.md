# PROJET NELHOMME LHUKAS

Dans cette partie du readme je vais vous expliquez comment importer mon projet etc.


## 1er étapes : Téléchargement du dépot
Bon je suppose que vous savez comment faire lol,
donc voila faut juste mettre le dépot sur votre machine


## 2ème étapes : Initialisation du projet

- il faut installer les `node_modules` avec `npm ci`
- Maintenant il faut lancer le serveur avec `npm run start:postgres`, moi de mon coté j'ai 
choisi postrgres avec Prisma


- Il y a juste 2 commande à faire pour prisma dans un terminal :
- - `npx prisma migrate dev --name init` : Crée et applique une nouvelle migration basée sur le schéma Prisma actuel et l'appelle "init"
- - `npx prisma migrate deploy` : Applique toutes les migrations en attente sur la base de données.

 Je suis vraiment désolé mais c'est prisma qui m'oblige. c'est la première fois que j'utilise prisma, j'ai cherché mais j'ai pas trouvé une manière de vous éviter de faire ces commandes. 


## 3ème étapes : Lancement des tests
Vous pouvez lancé maintenant les tests avec cette commande : `npm run test:e2e:postgres`
Normalement j'ai bien travaillé tous les tests passent les doigts dans le pif lol.




## J'ai laissé votre partie du readme en bas au cas ouuuuuu on sais jamais.












------------------------------------------------
# Évaluation finale
Pour ce test final vous allez être évalués sur votre maîtrise du framework NestJS. Ce projet, qui est une TodoList et qu'il vous faudra dupliquer (fork), contient un certain nombre de tests automatisés. Chacun d'entre eux couvre une fonctionnalité spécifique : création d'un utilisateur, création d'une tâche, vérification que le serveur renvoie une erreur dans tel ou tel cas etc.

🎯 **Votre objectif est simple :** faire passer tous ces tests en implémentant vous-mêmes ces fonctionnalités.

## Critères
Avant de rendre votre projet, vous devez vous assurer d'avoir respecté **4 critères obligatoires** :

### 🚀 Le projet fonctionne
* aucune erreur non gérée n'est jetée au runtime
* aucune erreur non gérée n'est jetée au compile time

| Contexte | Barème               |
| ------------- | -------------------- |
| Erreur au runtime       | -2 pts par erreur    |
| Erreur au compile time  | 0 immédiat           |


### 💾 Une BDD est utilisée
* une base de données relationnelle ou noSQL est utilisée
* un ORM est configuré dans le `DatabaseModule` et est utilisé

| Contexte | Barème    |
| ------------- | -------------------- |
| Pas de BDD    | -7 pts               |
| ORM différent de TypeORM et Mongoose | +2 pts |

### 🧹 Le code est clean
Votre code se doit d'être propre, compréhensible et convenablement segmenté.

| Contexte | Barème    |
| ------------- | -------------------- |
| les classes, méthodes, variables etc. sont mal nommées | -2 pts |
| le code contient des commentaires jugés inutiles | -2 pts |
| les contrôleurs contiennent autre chose que de la logique de validation/HTTP | -4 pts |
| les services contiennent autre chose que de la logique métier | -4 pts |

### 🚧 Pas de sur-configuration
Assurez-vous que je n'ai **aucune configuration supplémentaire à faire**, si ce n'est :

- d'installer les `node_modules` avec `npm ci`
- de lancer les tests avec le script npm approprié
- de lancer votre serveur avec le script npm approprié

| Contexte | Barème               |
| ------------- | -------------------- |
| `npm ci` ne fonctionne pas      | 0 immédiat   |
| le projet nécessite la moindre configuration supplémentaire | 0 immédiat |
| le script npm de lancement des tests n'est pas indiqué dans le readme  | -5 pts |
| le script npm de lancement du serveur n'est pas indiqué dans le readme  | -5 pts |

## Setup
### 🏗️ Initialisation
1. Si ce n'est pas déjà fait, [inscrivez-vous](https://github.com/join) sur GitHub
2. Faites un fork de ce repository selon ce qui est indiqué dans [la documentation](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?platform=windows)
3. Clonez le repository que vous venez de vous attribuer grâce au fork
4. Installez ses dépendances en utilisant la commande `npm ci`

### 💾 Base de données
Deux SGBD ont été contenairisés via Docker :
* PostgreSQL, pour du relationnel
* MongoDB, pour du noSQL

Cela vous permet à vous (et à moi) de ne pas avoir à les installer sur nos machines. Pour pouvoir utiliser ces SGBD contenairisés :
1. Installez [Docker Desktop](https://www.docker.com/products/docker-desktop/) sur votre machine
2. Lancez-le
3. Lorsque vous voudrez lancer votre serveur, utilisez le script npm de votre choix : `npm run start:mongodb` ou `npm run start:postgres` (ces scripts démarrent une base de données, puis lancent le serveur en watch mode)

Pour pouvoir communiquer avec votre base de données depuis votre projet NestJS, vous devrez configurer l'outil d'ORM de votre choix parmi :
* [TypeORM](https://docs.nestjs.com/techniques/database)
* [Mongoose](https://docs.nestjs.com/techniques/mongodb)
* [Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)
* [MikroORM](https://docs.nestjs.com/recipes/mikroorm)
* [Prisma](https://docs.nestjs.com/recipes/prisma)

### 🧪 Tests
Les tests utilisés pour vous noter sont localisés dans le dossier `test`. Considérez-les comme les spécifications du projet, vous n'aurez d'autre choix que de les respecter à la lettre.

🚨 **Il est interdit de modifier les tests.**

Pour lancer ces tests, utilisez le script npm de votre choix : `npm run test:e2e:mongodb` ou `npm run test:e2e:postgres` (ces scripts démarrent une base de données, puis lancent les tests e2e).

NB : Pour les besoins de cette évaluation, vous noterez peut-être que le code des tests e2e n'est pas spécialement clean. Ne faites pas ça chez vous.
