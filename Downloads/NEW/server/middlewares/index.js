const applyCors = require('./cors');
const applyRateLimiter = require('./rateLimiter');
const applySentry = require('./sentry');
const applyHelmet = require('./helmet');
const applyJson = require('./json');
const applyMorgan = require('./morgan');

module.exports = function(app) {
  applyCors(app);
  applyRateLimiter(app);
  applySentry(app);
  applyHelmet(app);
  applyJson(app);
  applyMorgan(app);
};
