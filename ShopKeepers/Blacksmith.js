const Discord = require('discord.js'),
	client = new Discord.Client(),
	items = require('../items/index'),
	config = require('./configB.json'),
	npc = require('../npcbases/index'),
	token = config.token,
	prefix = "@";


var dialog = ["Come check out my gear. It'll keep you safe as you fight.", "Plenty of stuff for you to buy adventurer."];

var itemstosell = [items.weapons.ironSword, items.armor.ironChest, items.armor.ironHelm, items.armor.ironGauntlets, items.armor.ironBoots];

var Marcus = new npc.shopkeeper("Blacksmith", dialog, itemstosell)

client.on('ready', () => {
	console.log("Shop is up and running.");
});

client.on('message', msg => {
	if (msg.content == prefix + "items") {
		Marcus.showitems(msg);
	};
	if (msg.content.startsWith(prefix + "buy")) {
		var itemname = msg.content.slice(5);
		Marcus.buying(itemname, msg);
	};
	if (msg.content.startsWith(prefix + "sell")) {
		var itemname = msg.content.slice(6);
		Marcus.selling(itemname, msg);
	}
});

client.login(token);
