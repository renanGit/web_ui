const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000,
  helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
  },
}));

app.use(history());
app.use(serveStatic(__dirname + '/dist/spa'));
app.listen(port);
