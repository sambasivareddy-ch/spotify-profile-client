# Step 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Set the environment variable for the Vite build process
ENV VITE_SERVER="https://spotify-siva-server.up.railway.app"

# Copy package.json and package-lock.json (or yarn.lock) for caching dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Step 2: Set up the production server
FROM nginx:alpine

# Set environment variable for Nginx (optional)
ENV VITE_SERVER="https://spotify-siva-server.up.railway.app"

# Copy the build files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 5173

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
