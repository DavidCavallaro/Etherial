const Discord = require('discord.js');

module.exports = {
  name: `kick`,
  async run (client, message, args) {
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Non puoi fare questo comando! Non hai il permesso di "Espellere membri".`)
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`Non puoi fare questo comando! Non hai il permesso di "Espellere membri".`)

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send(`${message.author}, inserisci un utente.`);

    if(!member) return message.channel.send(`Non ho trovato nessun utente con questo nome.`);
    if(!member.kickable) return message.channel.send(`Non posso espellere questo utente. Potrebbe avere un ruolo più alto del mio o potrei non avere i permessi necessari.`);

    if(member.id === message.author.id) return message.channel.send(`Non puoi kickarti da solo!`);

    let reason = args.slice(1).join(" ");

    if(reason === undefined) reason = `Non specificato`;

    member.kick(reason)
    .catch(err => {
      if(err) return message.channel.send(`:x: Qualcosa è andato storto...`)
    })
				
		const toKick = message.mentions.members.first() || bot.users.cache.find(toBan => toBan.tag === args.slice(1).join(" "))|| await bot.fetchUser(args[1])
        
		toKick.send(`Sei stato espulso da **${message.guild.name}** da **${message.author}** per **${reason}**.`)
        message.channel.send(`${member} è stato espulso. Motivo: ${reason}`);
    message.author.send(kickembedmod);
		message.guild.members.kick(toKick)
  }
}