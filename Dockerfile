# === Builder Stage ===
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Install dependencies in a clean and reliable way
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build Next.js app
RUN npm run build

# === Production Stage ===
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src 

# Set ownership of the .next directory
RUN chown -R appuser:appgroup /app/.next

# Switch to the non-root user
USER appuser

# Expose port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]