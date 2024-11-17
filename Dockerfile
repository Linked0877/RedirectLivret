# Étape 1 : Construction de l'application Angular
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /REDIRECTLIVRET

# Copier les fichiers package pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular pour la production
RUN npm run build --prod

# Étape 2 : Configuration de Nginx pour servir l'application
FROM nginx:stable-alpine

# Copier les fichiers de l'application Angular construite dans Nginx
COPY --from=build /REDIRECTLIVRET/dist/redirectlivret/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le fichier de configuration personnalisé de Nginx (facultatif)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour le trafic HTTP
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
