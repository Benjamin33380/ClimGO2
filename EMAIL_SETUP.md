# Configuration Email pour ClimGO

## Configuration SMTP OVH

Pour que le formulaire de contact fonctionne, vous devez créer un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Configuration SMTP pour OVH
SMTP_USER=contact@climgo.fr
SMTP_PASSWORD=VotrMotDePasseIci
```

## Instructions de configuration

1. **Créer le fichier `.env.local`** :
   ```bash
   touch .env.local
   ```

2. **Ajouter les variables d'environnement** :
   ```env
   SMTP_USER=contact@climgo.fr
   SMTP_PASSWORD=le_vrai_mot_de_passe_de_votre_email
   ```

3. **Obtenir le mot de passe** :
   - Connectez-vous à votre espace client OVH
   - Allez dans la section "Emails"
   - Trouvez l'email `contact@climgo.fr`
   - Utilisez le mot de passe configuré pour cet email

## Configuration SMTP OVH

L'API utilise les paramètres suivants pour OVH :
- **Serveur SMTP** : `ssl0.ovh.net`
- **Port** : `465`
- **Sécurité** : `SSL/TLS`
- **Authentification** : Nom d'utilisateur et mot de passe

## Fonctionnalités

- ✅ Envoi d'emails HTML formatés
- ✅ Validation des champs requis
- ✅ Gestion des erreurs
- ✅ Messages de confirmation
- ✅ Email de réponse automatique configuré
- ✅ Format responsive pour les emails

## Test

Une fois configuré, testez le formulaire de contact sur votre site pour vérifier que les emails arrivent bien à `contact@climgo.fr`. 