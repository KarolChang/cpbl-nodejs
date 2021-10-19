const todayGame = require('./modules/todayGame')

module.exports = app => {
  app.use('/todayGame', todayGame)
  app.use('/', (req, res) => res.render('todayGame'))
}