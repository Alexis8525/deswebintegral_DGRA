# La versión de node
FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Puerto a exponer
EXPOSE 3001

CMD ["node", "index.js"]