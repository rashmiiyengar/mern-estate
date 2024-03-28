const path = require('path');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "zlib": require.resolve("browserify-zlib"),
          "querystring": require.resolve("querystring-es3"),
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "fs": false, // Exclude fs module
          "stream": require.resolve("stream-browserify"),
          "async_hooks": false, // Exclude async_hooks module
          "http": require.resolve("stream-http"),
          "net": false, // Exclude net module
          "url": require.resolve("url/"),
          "util": require.resolve("util/")
        }
      }
    }
  }
};
