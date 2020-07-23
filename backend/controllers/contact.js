async function sendTelegram (ctx, next) {
  const data = ctx.request.body
  
  var contactInfo = JSON.parse(JSON.stringify(data))
  var message = ('Name: ' + contactInfo.data.name +
                 '\nEmail: ' + contactInfo.data.email +
                 '\nMessage: ' + contactInfo.data.message)


  var spawn = require("child_process").spawn,child;
  child = spawn("pwsh",["/home/liam/Documents/ResumeWebsite/backend/controllers/scriptForWebsite.ps1", '-message', message]);
  child.stdout.on("data",function(data){
  console.log("Powershell Data: " + data);
  });
  child.stderr.on("data",function(data){
      console.log("Powershell Errors: " + data);
  });
  child.on("exit",function(){
      console.log("Powershell Script finished");
  });
  child.stdin.end(); //end input

  ctx.response.status = 200;

  next()
}

module.exports = {
  sendTelegram
}
