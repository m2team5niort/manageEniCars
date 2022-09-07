module.exports = {
    trailingSlash: true,
    api: {
        bodyParser: false,
    },
    env: {
        CLOUDFRONT_URL: process.env.CLOUDFRONT_URL,
      }
}