# Configuration du Blog ClimGo

## Structure du Blog

Le blog est composé de deux pages principales :

1. **Page principale du blog** (`/blog`) - Affiche la liste de tous les articles publiés
2. **Page d'article individuel** (`/blog/[slug]`) - Affiche le contenu complet d'un article

## Configuration Prisma

### Modèle Article

Le modèle Article dans `prisma/schema.prisma` contient les champs suivants :

```prisma
model Article {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  content     String
  slug        String   @unique
  imageUrl    String?
  excerpt     String?
  published   Boolean  @default(false)
  
  // Métadonnées SEO
  metaTitle     String?
  metaDesc      String?
  metaKeywords  String?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations (à implémenter)
  adminId     String   @db.ObjectId
  admin       Admin    @relation(fields: [adminId], references: [id])
  comments    Comment[]
  ratings     Rating[]
}
```

### Modèles manquants

Pour que le blog fonctionne complètement, il faut ajouter les modèles suivants au schéma Prisma :

```prisma
model Admin {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  name      String
  articles  Article[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@map("admins")
}

model Comment {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  content   String
  author    String
  email     String
  approved  Boolean  @default(false)
  articleId String   @db.ObjectId
  article   Article  @relation(fields: [articleId], references: [id])
  createdAt DateTime @default(now())
  
  @@map("comments")
}

model Rating {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  rating    Int      // 1-5 étoiles
  articleId String   @db.ObjectId
  article   Article  @relation(fields: [articleId], references: [id])
  createdAt DateTime @default(now())
  
  @@map("ratings")
}
```

## Fonctionnalités

### Page principale du blog (`/blog`)

- Affichage en grille des articles publiés
- Image de couverture (optionnelle)
- Titre, extrait et date de publication
- Lien "Lire la suite" vers l'article complet
- Design responsive (mobile, tablette, desktop)
- Message si aucun article n'est disponible

### Page d'article individuel (`/blog/[slug]`)

- Contenu complet de l'article avec formatage HTML
- Image principale (optionnelle)
- Métadonnées SEO dynamiques
- Date de publication et de mise à jour
- Boutons de partage social (Facebook, Twitter, LinkedIn)
- Navigation retour vers le blog
- Design responsive

### SEO et Métadonnées

- Titre personnalisé pour chaque article
- Description personnalisée
- Mots-clés personnalisés
- Open Graph pour les réseaux sociaux
- URLs propres avec slugs

## Utilisation

### Créer un article

1. Ajouter les modèles manquants au schéma Prisma
2. Exécuter `npx prisma db push` pour synchroniser la base de données
3. Créer un article via l'interface d'administration (à développer) ou directement en base

### Structure d'un article

```javascript
{
  title: "Titre de l'article",
  content: "<p>Contenu HTML de l'article...</p>",
  slug: "titre-de-larticle",
  imageUrl: "https://example.com/image.jpg", // optionnel
  excerpt: "Résumé de l'article...", // optionnel
  published: true,
  metaTitle: "Titre SEO personnalisé", // optionnel
  metaDesc: "Description SEO personnalisée", // optionnel
  metaKeywords: "mots,clés,seo", // optionnel
  adminId: "ID_de_l_admin" // requis
}
```

## Styles CSS

Les styles pour le blog sont définis dans `app/globals.css` :

- Classes `.prose` pour le formatage du contenu
- Classes `.line-clamp-*` pour tronquer le texte
- Couleurs cohérentes avec le thème ClimGo (#03144a)

## Prochaines étapes

1. Ajouter les modèles manquants au schéma Prisma
2. Créer une interface d'administration pour gérer les articles
3. Implémenter le système de commentaires
4. Ajouter un système de notation
5. Créer des catégories d'articles
6. Ajouter une recherche d'articles
7. Implémenter la pagination pour de nombreux articles 