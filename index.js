require("dotenv").config();
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const { RichEmbed  } = require('discord.js');
const config = require("./config.json");

const client = new Client();
client.commands = new Collection();
client.queue = new Map()
client.config = {
  	prefix: process.env.PREFIX,
	  prefix: 'e!'
}

fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Evento caricato: "+eventName)
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Comando caricato: "+commandName)
  });
});


//benvenuto
client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("503190685118103574");
  let channel = await client.channels.cache.get("707324440752685106");
  if (guild != member.guild) { }
  else {

    channel.send(`Welcome ${member.user}! <a:wel:804839830029991936><a:come:804839830290825266>\n・<:moon:850673878748626966> ₊ ˚ <#713071877282725939>!\nㆍ<:fiocco:814250048904101959> ₊˚ <#707143154297602108>!`);
  }
});

client.login(process.env.TOKEN)
