async function sendTelegram (ctx, next) {
  const data = ctx.request.body

  // send telegram here

  next()
}

module.exports = {
  sendTelegram
}
