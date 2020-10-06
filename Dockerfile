FROM node:12.18.4

RUN apt-get update && apt-get install -y \
	rsync \
	libpq-dev \
	git \
	vim \
	redis-tools \
	mysql-client

RUN npm i -g gulp pm2

RUN echo 'alias sync="rsync -avzu --exclude=node_modules --exclude=database /src/* /usr/src/app"' >> ~/.bashrc
EXPOSE 3000
