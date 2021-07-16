module.exports = {
    name: `purge`,
    async run (client, message, args) {
          const clearargs = args[0]
        const amount = args.join(" ");
  
        if(!amount) return message.reply('inserisci un numero di messaggi da eliminare!')
  
        if(amount > 100) return message.reply(`Posso eliminare un massimo di 100 messaggi!`)
  
        if(amount < 1) return message.reply(`you must specify a sum of at least one message!`)
  
        await message.channel.messages.fetch({limit: amount}).then(messages => {message.channel.bulkDelete(messages)});
        message.channel.send(`Ho eliminato ${clearargs} messaggi.`).then(msg => msg.delete({timeout:5000}))
    }
  }