const path = require('path');
const http = require('http');
const routes = require('./controllers');
const express = require('express');
const session = require('express-session');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users');
const app = express()
const server = http.createServer(app);
const io = socketio(server);
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
​
const sess = {
   secret: 'Super secret secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
     db: sequelize
   })
 };
​
​
​
​
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
​
app.use(routes);
​
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
​
//chat app
​
​
const botName = 'LoveBot';
​
io.on('connection', socket => {
socket.on('joinRoom', ({username, room})=> {
const user = userJoin(socket.id, username, room);
  socket.join(user.room);
​
  //Welcomse user
  socket.emit('message', formatMessage( botName, 'Welcome to Love Monster Chat'));
​
// //broudcast when a user connects
//   socket.broudcast.to(user.room)
//   .emit('message', formatMessage( botName,`${user.username} has joined the chat`));
// io.to(user.room).emit('roomUsers', {
//   room: user.room,
//   users: getRoomUsers(user.room)
// });
});
//listens for chatmsg
socket.on('chatMessage', msg => {
  const user = getCurrentUser(socket.id);
​
  io.to(user.room).
  emit('message', formatMessage( user.username, msg));
});
//emits when a client disconnects
socket.on('dissconect', () => {
  const user = userLeave(socket.id);
​
  if(user){
    io.to(user.room)
    .emit('message', formatMessage( botName, `${user.username} has left the chat`));
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  }
 
});
});
​
const PORT = process.env.PORT || 3001;
​
sequelize.sync({ force: false }).then(() => {
   server.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});