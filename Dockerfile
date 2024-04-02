FROM node:lts

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
  && apt-get install wget -y

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.7.0/dockerize-linux-amd64-v0.7.0.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.7.0.tar.gz \
  && rm dockerize-linux-amd64-v0.7.0.tar.gz

USER node
WORKDIR /home/node/app

COPY src/ /home/node/app/
COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "app.js"]
