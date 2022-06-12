# build stage
FROM node:14.17.6 as build-stage
WORKDIR /
COPY . .

RUN yarn
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=build-stage /build/. /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]