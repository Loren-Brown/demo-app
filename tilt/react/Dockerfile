# Use the latest LTS version of Node.js image
FROM node:latest
 
# Set the working directory inside the container
WORKDIR /usr/src/app
 
# Copy package.json and yarn.lock.json
ADD ./demo-react-app/package.json .
ADD ./demo-react-app/yarn.lock .

# Install dependencies
# RUN yarn install
 
# Copy the rest of your application files
ADD ./demo-react-app/ .
 
# ENTRYPOINT [ "node", "/app/index.js" ]
# CMD ["yarn", "dev"]