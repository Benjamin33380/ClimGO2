# Système d'Administration ClimGo

## 🚀 Installation et Configuration

### 1. Synchronisation de la base de données

```bash
# Synchroniser le schéma Prisma avec la base de données
npx prisma db push

# Générer le client Prisma
npx prisma generate
```

### 2. Initialisation de la base de données

```bash
# Créer l'admin initial et les données de test
node scripts/init-db.js
```

### 3. Variables d'environnement

Ajoutez ces variables dans votre fichier `.env` :

```env
# Base de données
DATABASE_URL="mongodb://localhost:27017/climgo"

# JWT
JWT_SECRET="votre-secret-jwt-super-securise-changez-en-production"

# SMTP pour les alertes de sécurité
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="votre-email@gmail.com"
SMTP_PASS="votre-mot-de-passe-app"
```

## 🔐 Authentification

### Identifiants par défaut

- **Email :** admin@climgo.fr
- **Mot de passe :** admin123

### Accès à l'administration

- **Page de connexion :** `/admin/login`
- **Dashboard :** `/admin/dashboard`

## 🛡️ Système de Sécurité

### Protection Anti-Bruteforce

Le système inclut une protection avancée contre les attaques par force brute :

- **Limite :** 3 tentatives de connexion
- **Blocage :** 5 minutes après dépassement
- **Fingerprinting :** Identification unique des utilisateurs
- **Alertes :** Notifications par email en cas d'attaque

### Fonctionnalités de sécurité

1. **Fingerprinting avancé**
   - IP, User-Agent, Headers
   - Navigateur, OS, Device
   - Canvas et WebGL fingerprinting

2. **Sessions sécurisées**
   - Tokens JWT avec expiration
   - Sessions en base de données
   - Nettoyage automatique des sessions expirées

3. **Alertes en temps réel**
   - Notifications par email
   - Logs détaillés des tentatives
   - Interface d'administration des alertes

## 📊 Structure de la Base de Données

### Modèles principaux

#### Admin
```prisma
model Admin {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  password  String
  name      String
  role      String   @default("admin")
  isActive  Boolean  @default(true)
  lastLogin DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  articles  Article[]
  sessions  AdminSession[]
}
```

#### Article
```prisma
model Article {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  content     String
  slug        String   @unique
  imageUrl    String?
  excerpt     String?
  published   Boolean  @default(false)
  
  metaTitle     String?
  metaDesc      String?
  metaKeywords  String?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  adminId     String   @db.ObjectId
  admin       Admin    @relation(fields: [adminId], references: [id])
  comments    Comment[]
  ratings     Rating[]
}
```

#### BruteforceAttempt
```prisma
model BruteforceAttempt {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  ip        String
  userAgent String
  fingerprint String
  sessionId String?
  attempts  Int      @default(0)
  isBlocked Boolean  @default(false)
  blockedUntil DateTime?
  lastAttempt DateTime @default(now())
  
  headers   Json?
  browser   String?
  os        String?
  device    String?
  language  String?
  timezone  String?
  screenSize String?
  colorDepth Int?
  pixelRatio Float?
  canvasFingerprint String?
  webglFingerprint String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 API Endpoints

### Authentification

#### POST `/api/admin/login`
Connexion admin avec protection anti-bruteforce

**Body :**
```json
{
  "email": "admin@climgo.fr",
  "password": "admin123"
}
```

**Réponse :**
```json
{
  "success": true,
  "admin": {
    "id": "...",
    "email": "admin@climgo.fr",
    "name": "Administrateur ClimGo",
    "role": "super_admin"
  },
  "token": "jwt-token"
}
```

#### POST `/api/admin/logout`
Déconnexion et suppression de session

#### GET `/api/admin/verify`
Vérification d'authentification

**Headers :**
```
Authorization: Bearer <jwt-token>
```

## 📝 Blog

### Fonctionnalités

1. **Page principale** (`/blog`)
   - Liste des articles publiés
   - Design responsive
   - Pagination (à implémenter)

2. **Article individuel** (`/blog/[slug]`)
   - Contenu HTML complet
   - Métadonnées SEO dynamiques
   - Boutons de partage social
   - Navigation retour

### Gestion des articles

- **Création/Édition** via l'interface admin
- **Publication/Dépublier** avec toggle
- **SEO** : titres, descriptions, mots-clés personnalisés
- **Images** : URLs d'images de couverture
- **Slugs** : URLs propres et SEO-friendly

## 🎨 Interface d'Administration

### Dashboard (`/admin/dashboard`)

- **Vue d'ensemble** des fonctionnalités
- **Navigation** vers les différentes sections
- **Statistiques** rapides
- **Actions** principales

### Sections disponibles

1. **Articles** (`/admin/articles`)
   - Liste, création, édition, suppression
   - Gestion des statuts (publié/brouillon)
   - SEO et métadonnées

2. **Contacts** (`/admin/contacts`)
   - Demandes de contact
   - Gestion des statuts
   - Export des données

3. **Sécurité** (`/admin/security`)
   - Tentatives de bruteforce
   - Alertes de sécurité
   - Logs d'activité

4. **Statistiques** (`/admin/stats`)
   - Analytics du site
   - Performance
   - Rapports

5. **Paramètres** (`/admin/settings`)
   - Configuration générale
   - SMTP et emails
   - Sécurité

## 🚀 Déploiement

### Production

1. **Variables d'environnement**
   - Changez `JWT_SECRET`
   - Configurez SMTP
   - Utilisez une base de données MongoDB en production

2. **Sécurité**
   - HTTPS obligatoire
   - Headers de sécurité
   - Rate limiting

3. **Monitoring**
   - Logs des tentatives de bruteforce
   - Alertes par email
   - Surveillance des sessions

### Développement

```bash
# Installer les dépendances
npm install

# Synchroniser la base de données
npx prisma db push

# Initialiser les données
node scripts/init-db.js

# Démarrer le serveur de développement
npm run dev
```

## 🔒 Bonnes Pratiques de Sécurité

1. **Mots de passe**
   - Changez le mot de passe par défaut
   - Utilisez des mots de passe forts
   - Activez la 2FA si possible

2. **JWT**
   - Changez le secret en production
   - Utilisez des secrets longs et complexes
   - Surveillez l'expiration des tokens

3. **Base de données**
   - Sauvegardes régulières
   - Accès sécurisé
   - Monitoring des connexions

4. **SMTP**
   - Utilisez des comptes dédiés
   - Configurez SPF/DKIM
   - Surveillez les alertes

## 📞 Support

Pour toute question ou problème :

1. Vérifiez les logs de l'application
2. Consultez la documentation Prisma
3. Vérifiez la configuration SMTP
4. Testez la connexion à la base de données

Le système est maintenant prêt à être utilisé en production avec toutes les fonctionnalités de sécurité avancées ! 