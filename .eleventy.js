module.exports = function (config) {

  config.addPassthroughCopy("src/js");
  
  config.setBrowserSyncConfig({
    https: {
      key: "etc/localhost.key",
      cert: "etc/localhost.crt"
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };
};
