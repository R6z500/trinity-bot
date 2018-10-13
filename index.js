const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require('fs');
var image = require('cloudinary');
var request = require('request');


var message_bvn = `:trident: Reliant à la team Trinity, Trinity est un serveur Fortnite qui regroupe bonne ambiance et bonne humeur .Si vous cherchez du monde pour jouer et pour vous amusez, vous avez trouvé le bon serveur! Voici ce que vous pouvez retrouver sur notre discord:


- :medal: Des tournois sont organisés en terrain de jeu ainsi qu'en game public, avec des récompenses à la clé. GROS TOURNOI SCRIM PUBLIC VENDREDI 19 OCTOBRE

- :heavy_check_mark: Une communauté active et bienveillante, avec laquel vous pourrez jouer.

- :loud_sound: De nombreux salons vocaux / textuels.

- :space_invader: Plusieurs bots ( musique, stats fortnite ...)

- :wrench: Nous recherchons du staff ( helper, modérateur ) de confiance.

- :trident: Une team composé de plusieurs line-up, qui recrute.
`
image.config({
  cloud_name: 'dcckygybv',
  api_key: '487846967248672',
  api_secret: 'j2PpWoIj456C1bHvrXgkHmwytEE',
});

bot.on("ready", function() {
    bot.user.setActivity('!trinity | Dev by R6', { type: 'PLAYING'});
    console.log("le bot est co !");
});
bot.on('guildMemberAdd', member => {
  console.log('Le joueur: ' + member.user.username + ' a rejoint le serveur !');
  member.guild.channels.find('id', "498150703189983232").setName("Membre: " + member.guild.members.filter(member => !member.user.bot).size)
  var role_bvn = member.guild.roles.find('name', "😶 Joueurs");
  member.addRole(role_bvn);
  member.send(message_bvn)
  member.guild.channels.find("name", "👶-salon_nouveaux-👶").send({
    embed: {
      color: 49850,
      title: "**Nouveau poséidon !**",
      url: "",
      description: 'Bienvenue **' + member.user.username + '** sur le discord de la Trinity :slight_smile:',
      timestamp: new Date(),
    }
  })
});

bot.on('guildBanAdd', (guild, user) => {
  guild.fetchAuditLogs({ type: 22 }).then(logs => {
    guild.channels.find("name", "👶-salon_nouveaux-👶").bulkDelete(1)
    var log = logs.entries.find('target', user);
    console.log('Le joueur: ' + log.target.username + ' a été banni !');
    member.guild.channels.find('id', "498150703189983232").setName("Membre: " + member.guild.members.filter(member => !member.user.bot).size)
    guild.channels.find("name", "👶-salon_nouveaux-👶").send({
      embed: {
        color: 16711684,
        title: "**Un membre a été banni.**",
        url: "",
        description: '**' + log.target.username + '** a couillé.',
        timestamp: new Date(),
      }
    })
  });
})

bot.on('guildMemberRemove', member => {
  console.log('Le joueur: ' + member.user.username + ' a quitté le serveur !');
  member.guild.channels.find('id', "498150703189983232").setName("Membre: " + member.guild.members.filter(member => !member.user.bot).size)
  member.guild.channels.find("name", "👶-salon_nouveaux-👶").send({
    embed: {
      color: 16777215,
      title: "**Un dieux est parti...**",
      url: "",
      description: '**' + member.user.username + '** a décidé de quitter le discord de la trinity :frowning:',
      timestamp: new Date(),
    }
  })
});

const events = {
  MESSAGE_REACTION_ADD: 'messageReactionAdd',
  MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
  if (!events.hasOwnProperty(event.t)) return;
  if(event.t == "MESSAGE_REACTION_ADD") {
    if(event.d.message_id == "493129975830937600") {
      if("📄" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', 'NotifFortniteNews')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("🛒" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', 'NotifFortniteShop')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("🔅" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆-100')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("💯" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+100')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("🚀" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+200')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("⚡" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+300')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("💥" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+500')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("🔥" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+1000')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("🏅" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '💥Battle Royale')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }if("⛰" == event.d.emoji.name) {
        role = bot.guilds.get(event.d.guild_id).roles.find('name', '⚡PvE')
        bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).addRole(role)
      }
    } 
    } else if(event.t == "MESSAGE_REACTION_REMOVE") {
      if(event.d.message_id == "493129975830937600") {
        if("📄" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', 'NotifFortniteNews')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("🛒" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', 'NotifFortniteShop')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("🔅" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆-100')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("💯" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+100')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("🚀" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+200')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("⚡" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+300')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("💥" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+500')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("🔥" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '🏆+1000')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("🏅" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '💥Battle Royale')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }if("⛰" == event.d.emoji.name) {
          role = bot.guilds.get(event.d.guild_id).roles.find('name', '⚡PvE')
          bot.guilds.get(event.d.guild_id).members.find('id', event.d.user_id).removeRole(role)
        }
      }
    }
});

bot.on("message", function(message) { 
        var sender = message.member.user.username
        var senderid = message.member.user.id
        if(!message.author.bot) {
    if(message.content.startsWith('!')){
        if(message.channel.id != "462750141384753162") {
            message.delete(100);
            message.channel.send({embed: {
                color: 13632027,
                author: {
                name: sender,
                icon_url: message.member.user.avatarURL
                },
                title: "Mauvais Salon ! ",
                url: "",
                description: "<@" + senderid + ">" + " Utilise le channel: <#462750141384753162> pour les commandes !",
                timestamp: new Date(),
                footer: {
                    text: "Dev par R6z_500",
                    icon_url: message.guild.iconURL
                }
            }
            }).then(message => message.delete(4000));
            } else {
                if(message.content.startsWith("!trinity")) {
                    message.channel.send({embed: {
                        "color": 65535,
                        "timestamp": new Date(),
                        "footer": {
                          "text": "Dev par R6z_500"
                        },
                        "author": {
                          "name": message.guild.name,
                          "icon_url": message.guild.iconURL
                        },
                        title: "Membre de la team:",
                        "fields": [
                          {
                            "name": "__**Chef/Admin trinity:**__",
                            "value": "Redy\nEypop\nOnyx\nSollyss"
                          },
                          {
                            "name": "__**Membre trinity Blue:**__",
                            "value": "Prigone\nRedy\nEypop\nOnyx\nSollyss"
                          },
                          {
                            "name": "__**Membre trinity Green:**__",
                            "value": "WiZex\nObvious\nSpoted13"
                          }
                        ]
                      }
                    });
                    
  
                }else if (message.content.startsWith("!shop")) {
                  var options = {
                    method: "GET",
                    url: `https://fnbr.co/api/shop`,
                    headers: {
                      'Cache-Control': 'no-cache',
                      'User-Agent': 'nodejs request',
                      'x-api-key': "098b96a5-8093-4c35-91be-e5d010dfbbb8",
                    }
                  }
                  request(options, (error, response, body) => {
                    shop = JSON.parse(body)
            
                    var now = new Date();
                    var hier = new Date();
                  
                    hier.setDate(now.getDate()-1)
                    var h_jour = hier.getDate();
                    var h_mois = hier.getMonth();
                  
                    var mois    = now.getMonth();
                    var jour    = now.getDate();
            
                    ftd_l = shop.data.featured.length
                    dly_l = shop.data.daily.length
                    console.log(ftd_l + " "+ dly_l)
                    var background
                    var x_pos
                    var y_pos
                    var t = {}
                    var item_ftrd = []
                    var featur_length;
                    if(ftd_l < 5 && dly_l < 10) {
                      console.log("cc")
                      background = "b_shop_p_p"
                    }else if(ftd_l > 5 && dly_l <= 10) {
                      background = "b_shop_g_p2"
                    } else if(ftd_l <= 5 && dly_l > 10) {
                      background = "b_shop_p_g"
                    }else if(ftd_l > 5 && dly_l > 10) {
                      background = "b_shop_g_g2"
                    }
            
                    if (background == "b_shop_g_p2") {
                    image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_fe' }, function(error, result){
                      for(var i = 0; i <= 9; i++) {
                        var item1 = "item_da_" + i
                        info = {
                          x_pos: 1107,
                          name: "any_shop",
                          y_pos: 963
                          
                        }
                        t[item1] = []
                        t[item1].push(info)
            
                        var item2 = "item_fe_" + i
                        info = {
                          x_pos: 1110,
                          name: "any_shop",
                          y_pos: 363
                          
                        }
                        t[item2] = []
            
                        t[item2].push(info)
            
                      }
                      var featur_length = result.resources.length;
                      console.log(result.resources.length)
                      for(var i =0; i < result.resources.length; i++) {
                        if(i == 0) {
                          x_pos = 70
                        } else if(i < 5){
                          x_pos = 70 + 250 * i + 10 * i
                        } else {
                          x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                        }
                        if(i < 5) {
                          y_pos = 123
                        } else {
                          y_pos = 383
                        }
                        var item = "item_fe_" + i
                        t[item] = []
                        info = {
                          x_pos: x_pos,
                          name: result.resources[i].public_id,
                          y_pos: y_pos
                        }
                        t[item].push(info)
                      }
                      image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_daily' }, function(error, result){
            
                        var daily_length = result.resources.length;
                        console.log(result.resources.length)
                        for(var i =0; i < result.resources.length; i++) {
                          if(i == 0) {
                            x_pos = 70
                          } else if(i < 5){
                            x_pos = 70 + 250 * i + 10 * i
                          } else {
                            x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                          }
                          if(i < 5) {
                            y_pos = 703
                          } else {
                            y_pos = 963
                          }
                          var item = "item_da_" + i
                          t[item] = []
                          info = {
                            x_pos: x_pos,
                            name: result.resources[i].public_id,
                            y_pos: y_pos
                          }
                          t[item].push(info)
                        }
            
                      img = JSON.stringify(image.image(background + ".png",
                      {
                        transformation: [
                          { overlay: JSON.stringify(t['item_fe_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_5']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_5']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_5']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_6']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_6']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_6']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_7']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_7']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_7']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_8']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_8']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_8']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_9']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_9']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_9']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_5']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_5']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_5']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_6']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_6']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_6']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_7']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_7']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_7']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_8']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_8']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_8']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_9']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_9']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_9']).split(':')[3].split('}')[0]}
                        
                        ]
                      })).split("'")[1]
                      message.channel.send({
                        file: img
                      })
                      });
                    });
                  } else if(background == 'b_shop_p_p'){
                    image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_fe' }, function(error, result){
                      for(var i = 0; i <= 9; i++) {
                        var item1 = "item_da_" + i
                        info = {
                          x_pos: 1107,
                          name: "any_shop",
                          y_pos: 691
                          
                        }
                        t[item1] = []
                        t[item1].push(info)
            
                        var item2 = "item_fe_" + i
                        info = {
                          x_pos: 1110,
                          name: "any_shop",
                          y_pos: 123
                          
                        }
                        t[item2] = []
            
                        t[item2].push(info)
            
                      }
                      var featur_length = result.resources.length;
                      console.log(result.resources.length)
                      for(var i =0; i < result.resources.length; i++) {
                        if(i == 0) {
                          x_pos = 70
                        } else if(i < 5){
                          x_pos = 70 + 250 * i + 10 * i
                        } else {
                          x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                        }
                        if(i < 5) {
                          y_pos = 123
                        } else {
                          y_pos = 383
                        }
                        var item = "item_fe_" + i
                        t[item] = []
                        info = {
                          x_pos: x_pos,
                          name: result.resources[i].public_id,
                          y_pos: y_pos
                        }
                        t[item].push(info)
                      }
                      image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_daily' }, function(error, result){
            
                        var daily_length = result.resources.length;
                        console.log(result.resources.length)
                        for(var i =0; i < result.resources.length; i++) {
                          if(i == 0) {
                            x_pos = 70
                          } else if(i < 5){
                            x_pos = 70 + 250 * i + 10 * i
                          } else {
                            x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                          }
                          if(i < 5) {
                            y_pos = 431
                          } else {
                            y_pos = 691
                          }
                          var item = "item_da_" + i
                          t[item] = []
                          info = {
                            x_pos: x_pos,
                            name: result.resources[i].public_id,
                            y_pos: y_pos
                          }
                          t[item].push(info)
                        }
            
                        var img = JSON.stringify(image.image(background + ".png",
                      {
                        transformation: [
                          { overlay: JSON.stringify(t['item_fe_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_5']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_5']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_5']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_6']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_6']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_6']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_7']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_7']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_7']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_8']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_8']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_8']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_9']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_9']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_9']).split(':')[3].split('}')[0]}
                        
                        ]
                      })).split("'")[1]
                      message.channel.send({
                        file: img
                      })
                      });
                    });
                  } else if(background == 'b_shop_g_g2'){
                    image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_fe' }, function(error, result){
                      for(var i = 0; i <= 14; i++) {
                        var item1 = "item_da_" + i
                        info = {
                          x_pos: 1100,
                          name: "any_shop",
                          y_pos: 1223
                          
                        }
                        t[item1] = []
                        t[item1].push(info)
            
                        var item2 = "item_fe_" + i
                        info = {
                          x_pos: 1110,
                          name: "any_shop",
                          y_pos: 383
                          
                        }
                        t[item2] = []
            
                        t[item2].push(info)
            
                      }
                      var featur_length = result.resources.length;
                      console.log(result.resources.length)
                      for(var i =0; i < result.resources.length; i++) {
                        if(i == 0) {
                          x_pos = 70
                        } else if(i < 5){
                          x_pos = 70 + 250 * i + 10 * i
                        } else{
                          x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                        } 
                        if(i < 5) {
                          y_pos = 123
                        } else {
                          y_pos = 383
                        }
                        var item = "item_fe_" + i
                        t[item] = []
                        info = {
                          x_pos: x_pos,
                          name: result.resources[i].public_id,
                          y_pos: y_pos
                        }
                        t[item].push(info)
                      }
                      image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_daily' }, function(error, result){
            
                        var daily_length = result.resources.length;
                        console.log(result.resources.length)
                        for(var i =0; i < result.resources.length; i++) {
                          if(i == 0) {
                            x_pos = 70
                          } else if(i < 5){
                            x_pos = 70 + 250 * i + 10 * i
                          } else if(i < 10){
                            x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                          } else {
                            x_pos = 70 + 250 * (i -10) + 10 * (i -10)
                          }
                          if(i < 5) {
                            y_pos = 703
                          } else if(i < 10){
                            y_pos = 963
                          }else {
                            y_pos = 1223
                          }
                          var item = "item_da_" + i
                          t[item] = []
                          info = {
                            x_pos: x_pos,
                            name: result.resources[i].public_id,
                            y_pos: y_pos
                          }
                          t[item].push(info)
                        }
            
                      img = JSON.stringify(image.image(background + ".png",
                      {
                        transformation: [
                          { overlay: JSON.stringify(t['item_fe_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_5']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_5']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_5']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_6']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_6']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_6']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_7']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_7']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_7']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_8']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_8']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_8']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_9']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_9']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_9']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_5']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_5']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_5']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_6']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_6']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_6']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_7']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_7']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_7']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_8']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_8']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_8']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_9']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_9']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_9']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_10']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_10']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_10']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_11']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_11']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_11']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_12']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_12']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_12']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_13']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_13']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_13']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_14']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_14']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_14']).split(':')[3].split('}')[0]}
                        ]
                      })).split("'")[1]
                      message.channel.send({
                        file: img
                      })
                      });
                    });
                  }else if(background == 'b_shop_p_g'){
                    image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_fe' }, function(error, result){
                      for(var i = 0; i <= 14; i++) {
                        var item1 = "item_da_" + i
                        info = {
                          x_pos: 1107,
                          name: "any_shop",
                          y_pos: 953
                          
                        }
                        t[item1] = []
                        t[item1].push(info)
            
                        var item2 = "item_fe_" + i
                        info = {
                          x_pos: 1110,
                          name: "any_shop",
                          y_pos: 123
                          
                        }
                        t[item2] = []
            
                        t[item2].push(info)
            
                      }
                      var featur_length = result.resources.length;
                      console.log(result.resources.length)
                      for(var i =0; i < result.resources.length; i++) {
                        if(i == 0) {
                          x_pos = 70
                        } else if(i < 5){
                          x_pos = 70 + 250 * i + 10 * i
                        } else if(i < 10){
                          x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                        } else {
                          x_pos = 70 + 250 * (i -10) + 10 * (i -10)
                        }
                        if(i < 5) {
                          y_pos = 123
                        } else {
                          y_pos = 383
                        }
                        var item = "item_fe_" + i
                        t[item] = []
                        info = {
                          x_pos: x_pos,
                          name: result.resources[i].public_id,
                          y_pos: y_pos
                        }
                        t[item].push(info)
                      }
                      image.v2.api.resources({ type: 'upload', prefix: 'shop_trans_daily' }, function(error, result){
            
                        var daily_length = result.resources.length;
                        console.log(result.resources.length)
                        for(var i =0; i < result.resources.length; i++) {
                          if(i == 0) {
                            x_pos = 70
                          } else if(i < 5){
                            x_pos = 70 + 250 * i + 10 * i
                          } else {
                            x_pos = 70 + 250 * (i -5) + 10 * (i -5)
                          }
                          if(i < 5) {
                            y_pos = 433
                          } else if(i < 10){
                            y_pos = 693
                          }else {
                            y_pos = 953
                          }
                          var item = "item_da_" + i
                          t[item] = []
                          info = {
                            x_pos: x_pos,
                            name: result.resources[i].public_id,
                            y_pos: y_pos
                          }
                          t[item].push(info)
                        }
            
                      img = JSON.stringify(image.image(background + ".png",
                      {
                        transformation: [
                          { overlay: JSON.stringify(t['item_fe_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_fe_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_fe_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_fe_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_0']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_0']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_0']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_1']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_1']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_1']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_2']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_2']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_2']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_3']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_3']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_3']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_4']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_4']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_4']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_5']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_5']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_5']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_6']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_6']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_6']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_7']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_7']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_7']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_8']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_8']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_8']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_9']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_9']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_9']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_10']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_10']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_10']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_11']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_11']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_11']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_12']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_12']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_12']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_13']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_13']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_13']).split(':')[3].split('}')[0]},
                          { overlay: JSON.stringify(t['item_da_14']).split('"')[5], width: 250, gravity: 'north_west', x: JSON.stringify(t['item_da_14']).split(':')[1].split(',')[0], y: JSON.stringify(t['item_da_14']).split(':')[3].split('}')[0]}
                        ]
                      })).split("'")[1]
                      message.channel.send({
                        file: img
                      })
                      });
                    });
                  }
                  })
                }
            }
        } 


        if(!message.author.bot) {
          if (!message.member.hasPermission('ADMINISTRATOR')) {
            if (message.content.includes("https://discord.gg/")) {
              message.delete(1);
              message.channel.send({
                embed: {
                  color: 13632027,
                  title: "Il est interdit de faire de la pub !",
                  url: "",
                  description: "",
                  timestamp: new Date(),
                }
              }).then(message => message.delete(4000));
            }
          }
        }
      }
  });

bot.login(process.env.TOKEN);
