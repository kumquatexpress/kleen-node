FROM node:12.18.4

RUN apt-get update && apt-get install -y \
	rsync \
	libpq-dev \
	git \
	vim \
	redis-tools \
	mysql-client

RUN npm i -g pm2

COPY ./package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . /usr/src/app/
RUN npm run build

RUN echo 'alias sync="rsync -avzu --exclude=node_modules --exclude=database /src/* /usr/src/app"' >> ~/.bashrc
RUN echo 'alias mysqlsh="mysql --host=$MYSQL_HOST --user=$MYSQL_USER --port=$MYSQL_PORT --password=$MYSQL_PASSWORD $MYSQL_DATABASE"' >> ~/.bashrc
RUN echo 'alias redissh="redis-cli -h $REDIS_HOST -p $REDIS_PORT"' >> ~/.bashrc
CMD npm run dev

EXPOSE 3000
