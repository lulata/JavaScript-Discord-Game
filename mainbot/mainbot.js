const Discord = require("discord.js"),
	client = new Discord.Client(),
	config = require('./config.json'),
	token = config.token,
	prefix = '&';

var npc = require('../npcbases/index.js');
var overSeer = new npc.main("overSeer");

client.login(token);

client.on('ready', () => {
	console.log("I am working master");
	setInterval(uphp, 180000)
});

client.on('guildMemberAdd', member => {
	member.sendMessage(member.user + ' Welcome to ' + member.guild.name + ' hope you enjoy the beta check the gettingstarted channel');
	member.addRole('297187240071659520');
});

// setInterval(battletime, 30000);

var Challenger;
var Defender;
var yes;
var no;
var duelmsg;
var User = overSeer.User;

function uphp() {
    User.find(function(err, user) {
        for (u = 0; u < user.length; u++) {
            var hpmaxm = user[u].maxhp;
            user[u].hp += 1;
            if (user[u].hp > hpmaxm) {
                user[u].hp = hpmaxm;
            }
         }
    });
}

function battletime(msg) {
	if (msg) {
		overSeer.battling(msg.channel, msg.author);
	}
	client.guilds.forEach(Forsaken => {
		if (Forsaken.id == 296681619933102080) {
			Forsaken.channels.forEach(channel => {
				if (channel.id == 296730991853174795) {
					Forsaken.roles.forEach(Plains => {
						if (Plains.id == 297187308719833099) {
							Plains.members.array(members => {
								members.Random(FIGHT => {
									overSeer.battling(channel, FIGHT);
								})
							})
						}
					})
				}
			})
		}

	})
}

client.on('messageReactionAdd', function(MR, user) {
	if (overSeer.duelmsg) {
		if (user.id == overSeer.Defender.id && MR.emoji.name == 'yes') {
			overSeer.AcceptDuel(overSeer.duelmsg, overSeer.Defender, overSeer.Challenger);
		}
	}
	if (overSeer.duelmsg) {
		if (user.id == overSeer.Defender.id && MR.emoji.name == '🚫') {
			overSeer.DeclineDuel(overSeer.duelmsg, overSeer.Defender, overSeer.Challenger);
		}
	}
})

client.on('message',async msg => {
	if (msg.content.startsWith(prefix + 'create guild')) {
		var guildname = msg.content.slice(13);
		overSeer.createGuild(msg, guildname);
	}
	if (msg.content.startsWith(prefix + 'invite')) {
		overSeer.guildInvite(msg);
	}
	if (msg.content == prefix + "create char") {
		overSeer.createChar(msg);
	}
	if (msg.content.startsWith(prefix + 'equipp')) {
		overSeer.equipp(msg);
	}
	if (msg.content.startsWith(prefix + 'equipped')) {
		overSeer.equipped(msg);
	}
	if (msg.content == prefix + 'inventory') {
		overSeer.inventory(msg);
	}
	if (msg.content.startsWith(prefix + 'info')) {
		overSeer.info(msg);
	}
	if (msg.content == prefix + 'bless') {
		overSeer.blessing(msg);
	}
	if (msg.content.startsWith(prefix + 'duel')) {
		overSeer.duel(msg);// '🚫'
	}
	if (msg.content == prefix + 'battle me') {
		battletime(msg);
	}
	if (msg.content.startsWith(prefix + 'steal')) {
		overSeer.steal(msg);
	}
	if (msg.content.startsWith(prefix + 'lvlstat')) {
		var statchoice = msg.content.slice(9);
		overSeer.lvlstat(msg, statchoice);
	}
})
