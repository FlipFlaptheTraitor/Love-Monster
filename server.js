const path = require('path');
const routes = require('./controllers');
const express = require('express');
const session = require('express-session');
const io = require("socket.io")(3000)
const exphbs = require('express-handlebars');


const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const hbs = exphbs.create({});

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




//temp only for testing see chatapp for further info
const users = {}
//chat app 
io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name) 
  }) 
  socket.on('send-chat-message', message => {  
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] }) 
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})
sequelize.sync({ force: true }).then(() => {
   app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});