FROM node:20-alpine

WORKDIR /app

# Copy package metadata from the repository root
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source files
COPY backend ./backend

WORKDIR /app/backend

EXPOSE 5000

CMD ["node", "server.js"]
