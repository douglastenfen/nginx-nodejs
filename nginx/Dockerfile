FROM nginx:latest

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
  && apt-get install wget -y

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.7.0/dockerize-linux-amd64-v0.7.0.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.7.0.tar.gz \
  && rm dockerize-linux-amd64-v0.7.0.tar.gz


RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

CMD ["dockerize", "-wait", "tcp://app:3000", "-timeout", "30s", "nginx", "-g", "daemon off;"]