# La versión de node
FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Puerto a exponer
EXPOSE 3002

CMD ["node", "index.js"]