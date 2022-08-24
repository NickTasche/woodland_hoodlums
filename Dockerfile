FROM node:16.15-alpine3.14
RUN mkdir -p /app
WORKDIR /app
COPY Woodland-Test .
RUN npm install
EXPOSE 8081
CMD ["node","index.js"]
