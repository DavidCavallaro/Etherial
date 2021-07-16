module.exports = async (client) => {
    console.log(`${client.user.username}#${client.user.discriminator} è online e operativo in ${client.guilds.cache.size} server con ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} utenti.`);
    
  
      let status = [
          {name: `e!help per info`, type: 'PLAYING'},
          {name: `essere schiavizzato`, type: 'PLAYING'}
      ]
      function setStatus(){
          let randomStatus = status[Math.floor(Math.random()*status.length)]
          client.user.setPresence({activity: randomStatus})
      }
      setStatus();
      setInterval(() => setStatus(), 20000)
  };