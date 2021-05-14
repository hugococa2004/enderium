const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Loggé comme ${client.user.tag} !`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.channel.send('pong');
    
  }
});
var prefix = ('/')
client.on('message', message => {
   
    if (message.content === prefix + 'avatar') {
      message.reply('Voici votre avatar')
      message.channel.send(message.author.displayAvatarURL());
      message.channel.send(`(*si votre avatar ne s'affiche pas correctement, veuillez cliquer sur le slien ci-dessus*)`)
    }
    if(message.content.startsWith(prefix + "ping")) {
      const ping = Discord.MessageEmbed.createdTimestamp - message.createdTimestamp

      

      let embed = new Discord.MessageEmbed()
    .setTitle("Enderiumbot | Ping")
    .setThumbnail("https://cdn.discordapp.com/attachments/833271778964668456/842476723752796180/logo.png")
    .addField("Ping du bot",`${Math.floor(message.createdTimestamp - message.createdTimestamp)} ms`)
    .addField("Ping de L'API",`${Math.round(message.client.ws.ping)} ms`)

    .setColor("BLUE")
    .setFooter("Dev by HugoCraft_ | autre commandes recommandés /ng - /avatar", "https://cdn.discordapp.com/avatars/302494609945395200/8af67d1f4bdd74478379d77724f2a84f.png?size=128")
    .setTimestamp()
    message.channel.send(embed);
    }

  });
    client.on('message', async message => {
      // Voice only works in guilds, if the message does not come from a guild,
      // we ignore it
      if (!message.guild) return;
      
      
      if (message.content === prefix + 'play') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('https://streaming.nationsglory.fr//NGRadio');
            message.channel.send(':ng:RADIO');
            let embed = new Discord.MessageEmbed()
    .setTitle("Enderiumbot | play")
    .setDescription('🎵 Vous écouter la station :ng:RADIO 🎵\n (*Pour stopper la radio faite* `/stop`*.*)')
    .setThumbnail("https://cdn.discordapp.com/attachments/833271778964668456/842410983145340948/9k.png")

    .setColor("GREEN")
    .setFooter("Dev by HugoCraft_ | autre commandes recommandés /help - /avatar", "https://cdn.discordapp.com/avatars/302494609945395200/8af67d1f4bdd74478379d77724f2a84f.png?size=128")
    .setTimestamp()
    message.channel.send(embed);
    
           
        } else {
          message.channel.send('```ERREUR ❌```\n `Vous avez besoin de rejoindre un salon vocal !`');
        }
      }
        if (message.content === prefix + 'stop') {
          // Only try to join the sender's voice channel if they are in one themselves
          if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.disconnect();
            message.reply("à demandé d'arrêté la diffusion")
          }
        }
      });



client.login();