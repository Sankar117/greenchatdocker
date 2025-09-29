# backend/Dockerfile

# Use Node.js LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install 

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (update if it's different)
EXPOSE 3000

# Start the app using npm script
CMD ["npm", "run", "dev"] 