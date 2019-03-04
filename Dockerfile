from alpine:3.8

RUN apk add --no-cache yarn

WORKDIR /home

ADD static static
ADD view view
ADD src src
ADD main.js .
ADD package.json .
ADD yarn.lock .

RUN yarn install