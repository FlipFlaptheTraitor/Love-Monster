const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const express = require('express');
const session = require('express-session');
const io = require("socket.io")

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const sess = {
   secret: 'Super secret secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
     db: sequelize
   })
 };

const app = express()
.get('/cool', (req, res) => res.send(cool()));
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});