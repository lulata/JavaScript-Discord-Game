const mong = require("mongoose")
	Schema = mong.Schema;

var GuildSchema = Schema({
	name: String,
	leader: Array,
	members: Array
});

module.exports = GuildSchema;