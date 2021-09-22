const mongoose = require("mongoose"),
	UserSchema = require('./schemas/user'),
	GuildSchema = require('./schemas/guild'),
	config = require('./config.json');

mongoose.connect(config.url);
var User = mongoose.model("users", UserSchema);
var Guild = mongoose.model("guilds", GuildSchema);

class npc {
	constructor(name, dialog) {
		this.name = name;
		this.dialog = dialog;
		this.User = User;
		this.Guild = Guild;
	}
	rdialog() {
		this.tts = this.dialog[Math.floor(Math.random() * this.dialog.length)];
		return this.tts;
	}
}

module.exports = npc;
