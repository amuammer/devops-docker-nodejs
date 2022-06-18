FROM reactnativecommunity/react-native-android
RUN mkdir /app
workdir /app
COPY . /app
RUN npm install

EXPOSE 80

CMD ["node", "/app/server.js"]
