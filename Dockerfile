# Usando a imagem oficial do Node.js
FROM node:22.14-alpine 

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos importantes para a construção
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código do projeto
COPY . .

# Expor a porta padrão do Vite (se necessário)
EXPOSE 5173

# Comando para rodar o projeto
CMD ["npm", "run", "dev", "--", "--host"]

