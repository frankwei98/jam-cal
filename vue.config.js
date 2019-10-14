module.exports = {
  productionSourceMap: false,
  pwa: {
    msTileColor: '#68E591',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
