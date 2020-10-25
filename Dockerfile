FROM node:12
WORKDIR /node-express     
COPY package*.json ./      
RUN npm install
COPY . .
CMD [ "node", "index.js" ]