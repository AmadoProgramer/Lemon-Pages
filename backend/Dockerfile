# 1️⃣ Imagen base
FROM node:20-alpine

# 2️⃣ Directorio de trabajo
WORKDIR /usr/src/app

# 3️⃣ Copiamos los archivos de dependencias primero
COPY package*.json ./

# 4️⃣ Instalamos dependencias
RUN npm install

# 5️⃣ Copiamos el resto del código
COPY . .

# 6️⃣ Compilamos TypeScript
RUN npm run build

# 7️⃣ Exponemos el puerto del servidor
EXPOSE 4000

# 8️⃣ Comando de ejecución
CMD ["node", "dist/index.js"]
