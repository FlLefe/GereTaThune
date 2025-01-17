const { rateLimit } = require('express-rate-limit');

const rateLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = rateLimiter;