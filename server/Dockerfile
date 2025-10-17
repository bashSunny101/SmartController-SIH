FROM node:18-alpine
WORKDIR /usr/src/app
# Copy only server package manifest first for faster rebuilds
COPY server/package*.json ./
RUN npm ci --production --silent
# Copy server source
COPY server/ ./
# Persist database by mounting host ./server/data to /usr/src/app
VOLUME ["/usr/src/app"]
ENV PORT=3000
EXPOSE 3000
CMD ["node", "index.cjs"]
