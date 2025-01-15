FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM httpd:2.4-alpine

ENV PORT=80

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
EXPOSE ${PORT}

CMD ["httpd-foreground"]
