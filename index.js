const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'process.env.token';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!로벅스 재고') {
    message.reply('준비중');
  }
});

client.login(token);