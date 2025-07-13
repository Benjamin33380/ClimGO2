# Configuration de la base de données MongoDB avec Prisma

## Étapes de configuration

### 1. Créer un compte MongoDB Atlas
- Aller sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Créer un compte gratuit
- Créer un nouveau cluster

### 2. Configurer les variables d'environnement
Créer un fichier `.env` à la racine du projet avec :

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/climgo?retryWrites=true&w=majority"
```

Remplacer :
- `username` : votre nom d'utilisateur MongoDB
- `password` : votre mot de passe MongoDB
- `cluster` : l'URL de votre cluster MongoDB

### 3. Générer le client Prisma
```bash
npx prisma generate
```

### 4. Synchroniser la base de données
```bash
npx prisma db push
```

## Modèle de données

Le modèle `ContactRequest` contient :
- `id` : Identifiant unique (ObjectId MongoDB)
- `prenom` : Prénom du contact
- `nom` : Nom du contact  
- `adresse` : Adresse (optionnel)
- `ville` : Ville ou code postal (optionnel)
- `email` : Email du contact
- `telephone` : Numéro de téléphone (optionnel)
- `message` : Message du contact
- `createdAt` : Date de création
- `updatedAt` : Date de dernière modification
- `status` : Statut de la demande (nouveau, lu, traité, fermé)

## API Endpoints

### POST /api/contact
Créer une nouvelle demande de contact

### GET /api/contact
Récupérer toutes les demandes de contact (pour l'administration)

## Utilisation

Le formulaire de contact sur `/contact` utilise automatiquement l'API pour enregistrer les demandes en base de données. 