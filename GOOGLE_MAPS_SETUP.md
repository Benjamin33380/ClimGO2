# Configuration Google Maps API

## Étape 1 : Créer une clé API Google Maps

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API "Maps JavaScript API"
4. Allez dans "Identifiants" > "Créer des identifiants" > "Clé API"
5. Copiez la clé API générée

## Étape 2 : Configurer la clé dans votre projet

1. Créez un fichier `.env.local` à la racine de votre projet
2. Ajoutez votre clé API :

```bash
NEXT_PUBLIC_GOOGLE_API_KEY=votre_cle_api_google_maps_ici
```

## Étape 3 : Restreindre la clé API (Recommandé)

1. Dans Google Cloud Console, cliquez sur votre clé API
2. Dans "Restrictions d'application", sélectionnez "Sites web HTTP"
3. Ajoutez vos domaines autorisés :
   - `localhost` (pour le développement)
   - `votre-domaine.com` (pour la production)

## Étape 4 : Redémarrer le serveur

```bash
npm run dev
```

## Dépannage

### Erreur "InvalidKeyMapError"
- Vérifiez que la clé API est correctement copiée
- Assurez-vous que l'API "Maps JavaScript API" est activée
- Vérifiez les restrictions de domaine

### Erreur "Multiple API calls"
- La carte se charge maintenant correctement sans doublon

### Erreur "Clé API manquante"
- Vérifiez que le fichier `.env.local` existe
- Vérifiez que la variable `NEXT_PUBLIC_GOOGLE_API_KEY` est définie 