# Stage de build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage runtime (production)
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
EXPOSE 4000
CMD ["node", "dist/server.js"]
