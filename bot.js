const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '#test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
});


client.login(process.env.NTI1NDc0MjA2MDM3ODM1Nzg2.Dv3J5g.z0g8fyZ3wVDK9QYifzSgziTAjug); 
client2.login(process.env.NTI1NDg3MDA3MDE5ODI3MjI3.Dv5alQ.2zH7Y24LDn1JO7UtSpLMvQx011I2); 
client3.login(process.env.NTI1NjMwNjg2NDMxMDE5MDEx.Dv5bnA.Z9EeLc3FAfoK5bXgw6meUZgi9DA3); 
client4.login(process.env.NTI1NjMxNTk5NjAyMzAyOTk3.Dv5cUQ.htmmVTNYjaaxwUYiztEv4hctBng4); 
