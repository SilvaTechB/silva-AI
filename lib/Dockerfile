FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/mouricedevs/Gifted-Md /root/Gifted

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force

# Install dependencies
WORKDIR /root/Gifted
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["node","./lib/version.js" ]
