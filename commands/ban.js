const Discord = require('discord.js');

module.exports = {
  name: `ban`,
  async run (client, message, args) {
  	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Non puoi fare questo comando! Non hai il permesso di "Bannare membri".`)
  	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`Non puoi fare questo comando! Non hai il permesso di "Bannare membri".`)
  	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  	if(!args[0]) return message.channel.send(`${message.author}, specificato un utente.`);
    if(!member) return message.channel.send(`Non ho trovato utenti con questo nome.`);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Non posso bannare questo utente. Potrebbe avere un ruolo più alto del mio o potrei non avere i permessi necessari`);
    if(member.id === message.author.id) return message.channel.send(`Non puoi bannarti!`);
    let reason = args.slice(1).join(" ");
    if(reason === undefined) reason = `Non specificato`;
    member.ban(reason)
		const toBan = message.mentions.members.first() || bot.users.cache.find(toBan => toBan.tag === args.slice(1).join(" "))|| await bot.fetchUser(args[1])
		toBan.send(`Sei stato bannato da **${message.guild.name}** da **${message.author}** per **${reason}**.`)
    message.channel.send(`${member} è stato bannato, che peccato. Motivo: ${reason}`);
    message.author.send(banembedmod);
		message.guild.members.ban(toBan)
  }
}