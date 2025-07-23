# 🎛️ Panel d'Administration ClimGo - Documentation Complète

## 📋 Vue d'ensemble

Le panel d'administration ClimGo offre une interface complète pour gérer le contenu du site, les demandes de contact et la sécurité.

## 🔐 Authentification

### Système de Connexion
- **Route** : `/admin/login`
- **Protection** : JWT + Sessions
- **Bruteforce Protection** : Blocage après 3 tentatives (5 minutes)
- **Fingerprinting** : IP, User-Agent, Headers, Browser, OS, Device

### Sécurité
- **JWT Tokens** avec expiration
- **Sessions** en base de données
- **Protection anti-bruteforce** avancée
- **Alertes email** automatiques

## 📊 Dashboard Principal

### Accès
- **URL** : `/admin/dashboard`
- **Authentification** requise
- **Interface** : Responsive avec Tailwind CSS

### Sections Disponibles
1. **Articles** - Gestion du blog
2. **Demandes de Contact** - Gestion des contacts
3. **Sécurité** - Monitoring des tentatives de bruteforce

## 📝 Gestion des Articles

### Interface
- **URL** : `/admin/articles`
- **Fonctionnalités** :
  - Liste des articles avec statuts
  - Création d'articles avec éditeur markdown
  - Modification d'articles existants
  - Suppression d'articles
  - Prévisualisation en temps réel

### Éditeur Markdown
- **Librairie** : `@uiw/react-md-editor`
- **Fonctionnalités** :
  - Édition en temps réel
  - Prévisualisation
  - Support des images
  - Tables, listes, liens
  - Code highlighting

### Champs d'Article
- **Titre** (obligatoire)
- **Contenu** en markdown (obligatoire)
- **Slug** (génération automatique)
- **Extrait** (optionnel)
- **Image** (URL)
- **Statut** (publié/brouillon)
- **SEO** : Titre, Description, Mots-clés

## 📧 Gestion des Contacts

### Interface
- **URL** : `/admin/contacts`
- **Fonctionnalités** :
  - Liste des demandes de contact
  - Gestion des statuts (nouveau, lu, traité, fermé)
  - Détails complets des demandes
  - Réponse par email intégrée
  - Suppression des demandes

### Statuts de Contact
- **Nouveau** : Demande non lue
- **Lu** : Demande consultée
- **Traité** : Réponse envoyée
- **Fermé** : Dossier clos

### Informations Capturées
- Nom et prénom
- Email et téléphone
- Adresse et ville
- Message complet
- Horodatage

## 🔒 Sécurité et Monitoring

### Interface
- **URL** : `/admin/security`
- **Fonctionnalités** :
  - Monitoring des tentatives de bruteforce
  - Statistiques en temps réel
  - Déblocage manuel des IP
  - Suppression des tentatives
  - Détails techniques complets

### Statistiques
- **Total** des tentatives
- **Bloqués** actuellement
- **Aujourd'hui** : Tentatives du jour
- **Cette semaine** : Tentatives récentes

### Informations Techniques
- **IP** de l'attaquant
- **Fingerprint** unique
- **Navigateur** et OS
- **User-Agent** complet
- **Horodatage** des tentatives

## 🛠️ API Routes

### Articles
```
GET    /api/admin/articles          - Lister les articles
POST   /api/admin/articles          - Créer un article
GET    /api/admin/articles/[id]     - Récupérer un article
PUT    /api/admin/articles/[id]     - Modifier un article
DELETE /api/admin/articles/[id]     - Supprimer un article
```

### Contacts
```
GET    /api/admin/contacts          - Lister les contacts
PUT    /api/admin/contacts/[id]     - Modifier le statut
DELETE /api/admin/contacts/[id]     - Supprimer un contact
```

### Sécurité
```
GET    /api/admin/security/attempts           - Lister les tentatives
DELETE /api/admin/security/attempts/[id]      - Supprimer une tentative
POST   /api/admin/security/attempts/[id]/unblock - Débloquer une IP
```

### Authentification
```
POST   /api/admin/login             - Connexion
POST   /api/admin/logout            - Déconnexion
GET    /api/admin/verify            - Vérifier le token
```

## 📱 Interface Utilisateur

### Design
- **Framework** : Tailwind CSS
- **Responsive** : Mobile-first
- **Thème** : Moderne et professionnel
- **Couleurs** : Bleu ClimGo (#1E40AF)

### Composants
- **Loading** : Spinners animés
- **Modals** : Détails et confirmations
- **Forms** : Validation en temps réel
- **Tables** : Tri et filtrage
- **Notifications** : Succès/Erreurs

## 🔧 Configuration

### Variables d'Environnement
```env
# Base de données
DATABASE_URL="mongodb://..."

# JWT
JWT_SECRET="votre-secret-jwt"

# Email (pour les alertes)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="votre-email@gmail.com"
SMTP_PASS="votre-mot-de-passe"
ADMIN_EMAIL="admin@climgo.fr"
```

### Base de Données
- **ORM** : Prisma
- **Base** : MongoDB
- **Modèles** : Admin, Article, ContactRequest, BruteforceAttempt

## 🚀 Déploiement

### Prérequis
1. **Node.js** 18+
2. **MongoDB** configuré
3. **Variables d'environnement** définies

### Installation
```bash
npm install
npx prisma db push
npm run build
npm start
```

### Scripts Utiles
```bash
# Initialiser la base
node scripts/init-db.js

# Générer le client Prisma
npx prisma generate

# Pousser le schéma
npx prisma db push
```

## 📈 Fonctionnalités Avancées

### Protection Anti-Bruteforce
- **Détection** : Fingerprinting avancé
- **Blocage** : 3 tentatives = 5 minutes
- **Alertes** : Email automatique
- **Monitoring** : Interface dédiée

### Gestion des Articles
- **SEO** : Métadonnées complètes
- **Markdown** : Éditeur professionnel
- **Images** : Support des URLs
- **Statuts** : Brouillon/Public

### Monitoring
- **Logs** : Tentatives de connexion
- **Stats** : Temps réel
- **Alertes** : Email automatiques
- **Historique** : Traçabilité complète

## 🎯 Utilisation

### Première Connexion
1. Accéder à `/admin/login`
2. Utiliser les identifiants par défaut
3. Changer le mot de passe

### Gestion Quotidienne
1. **Dashboard** : Vue d'ensemble
2. **Articles** : Créer/modifier le contenu
3. **Contacts** : Répondre aux demandes
4. **Sécurité** : Surveiller les tentatives

### Maintenance
- **Sauvegardes** : Base de données
- **Logs** : Monitoring des erreurs
- **Mises à jour** : Dépendances
- **Sécurité** : Audit régulier

## 🔍 Dépannage

### Erreurs Courantes
- **Token expiré** : Re-connexion requise
- **Base de données** : Vérifier la connexion
- **Email** : Configurer SMTP
- **Markdown** : Vérifier la syntaxe

### Logs
- **Console** : Erreurs JavaScript
- **Serveur** : Logs Next.js
- **Base** : Requêtes Prisma
- **Email** : Tentatives d'envoi

---

## ✅ Système Complet

Le panel d'administration ClimGo est maintenant **100% fonctionnel** avec :

- ✅ **Authentification sécurisée**
- ✅ **Gestion des articles avec markdown**
- ✅ **Gestion des contacts**
- ✅ **Monitoring de sécurité**
- ✅ **Interface moderne et responsive**
- ✅ **API complète et sécurisée**

Le système est prêt pour la production ! 🚀 