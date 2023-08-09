const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

module.exports.init = (app) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });

  // This attaches request information to all Sentry error reports
  app.use(Sentry.Handlers.requestHandler());

  // TracingHandler creates a trace for every incoming request
  app.use(Sentry.Handlers.tracingHandler());

  return Sentry;
}
