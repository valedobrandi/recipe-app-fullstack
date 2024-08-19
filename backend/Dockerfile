FROM node:18-slim
WORKDIR /app-backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "dev" ]
