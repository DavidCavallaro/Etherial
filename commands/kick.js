const Discord = require('discord.js');

module.exports = {
  name: `kick`,
  async run (client, message, args) {
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You cannot execute this command! You don\'t have the necessary permissions!`)
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`You cannot execute this command! You don\'t have the necessary permissions!`)

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send(`${message.author}, please specify a user to perform the action on.`);

    if(!member) return message.channel.send(`I can\'t find this user. I\'m sorry.`);
    if(!member.kickable) return message.channel.send(`I cannot ban this user. He may have a higher role than mine or I may not have the necessary permissions.`);

    if(member.id === message.author.id) return message.channel.send(`You can\'t kick yourself!`);

    let reason = args.slice(1).join(" ");

    if(reason === undefined) reason = `Not specified`;

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