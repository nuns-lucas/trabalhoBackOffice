# Etapa 1: build do back-office (Vite)
FROM node:20-alpine as build-backoffice
WORKDIR /app/back-office
COPY back-office/ .
RUN npm install && npm run build

# Etapa 2: build da PWA (Vue CLI)
FROM node:20-alpine as build-pwa
WORKDIR /app/pwa
COPY pwa/ .
RUN npm install
RUN chmod +x node_modules/.bin/vue-cli-service
RUN npm run build


# Etapa 3: montar imagem final com Nginx
FROM nginx:stable-alpine as production
COPY docker/default.conf /etc/nginx/conf.d/default.conf

# Copiar front-office diretamente
COPY front-office/ /usr/share/nginx/html/front-office/

# Copiar builds do back-office e pwa
COPY --from=build-backoffice /app/back-office/dist /usr/share/nginx/html/back-office/
COPY --from=build-pwa /app/pwa/dist /usr/share/nginx/html/pwa/
