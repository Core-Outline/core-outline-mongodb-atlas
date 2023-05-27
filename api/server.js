require('dotenv').config();
const { startServer, expressApp, mongo } = require('lib/index.js');

const app = expressApp();
mongo.connDB();
app.use('/listings', require('./listings/index.js'));

// app.use('/', async (req, res) => {
//   res.status(200).send('Welcome to Tripitaca Listings');
// });

startServer(app);
