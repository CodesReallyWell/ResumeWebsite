const dotenv = require("dotenv").config({path: '../backend/.env'})

function envVarManager(){
  const key = process.env.TELEGRAM_KEY
  const id = process.env.CHAT_ID

  envVars = {
    key : key,
    id  : id
  }

  return envVars
}

async function sendTelegram (ctx, next) {

  const data = ctx.request.body
  
  var contactInfo = JSON.parse(JSON.stringify(data))
  var message = ('Name: ' + contactInfo.data.name +
                 '\nEmail: ' + contactInfo.data.email +
                 '\nMessage: ' + contactInfo.data.message)

  envVars = envVarManager()

  // Telegrambot logic here
  var TelegramBot = require('telegrambot')
  var api = new TelegramBot(envVars.key)

  api.invoke('sendMessage', { chat_id: envVars.id, text: message }, function (err, errmessage) {
    if (err) throw err;
    console.log(errmessage);
})

  ctx.response.status = 200;

  next()
}

module.exports = {
  sendTelegram
}
