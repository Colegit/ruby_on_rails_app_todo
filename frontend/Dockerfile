FROM node:18

# Set up the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app code into the container
COPY . ./

# Build the React app for production
RUN npm run build

# Clean up node_modules to reduce image size
RUN rm -rf node_modules

# Install 'serve' to serve the production build
RUN npm install -g serve

# Expose the port where the app will run
EXPOSE 3001

# Set the environment variable for the port
ENV PORT 3001

# Serve the production build using npm start
CMD ["npm", "start"]