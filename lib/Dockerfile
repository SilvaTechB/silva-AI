# Don't change this [ /GiftedTech/ ] name!
# Change from below link, else bot will not work!


FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/mouricedevs/gifted-new /root/Gifted

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Gifted/node_modules

# Install dependencies
WORKDIR /root/Gifted
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
