FROM node:latest
LABEL version="1.0"
LABEL email="ionut.pirva@gmail.com"
LABEL maintainer="Ionut Pirva"

# Create app directory
RUN mkdir -p /app
WORKDIR /app
# Install app dependencies
COPY package.json /app/
RUN npm install && npm audit fix
# Bundle app source
COPY app.js /app
EXPOSE 3000
CMD [ "npm", "start" ]
