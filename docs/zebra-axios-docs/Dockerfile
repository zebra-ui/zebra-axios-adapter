FROM node:18.18.0
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /zebra-axios-docs-docker
COPY .output/  /zebra-axios-docs-docker/
WORKDIR /zebra-axios-docs-docker
EXPOSE 3021
CMD ["node","./server/index.mjs"]