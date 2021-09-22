const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'bot token';
const prefix = "|";

client.on('ready', () => {
  console.log('Boss is awake!');
});


var f1Boss;
var bossFight = false;
var fighters = party.members;

function newBoss() {
var f1Boss [
  hp = 20000,
  dmg = 130;
];
startFight(msg, enemies);
}

function startFight(msg, enemies) {
  const embed = new Discord.RichEmbed()
  .setTitle("So HAHAAHAHA. You dare to battle me? Feel my anger!")
  channel.sendEmbed(embed)
  .then(( => {
    channel.awaitMessages(response => response.content.toLowerCase().startsWith('attack') , {
      attacking(channel, fighters, attack);
    })
  }))
}

function attacking(channel, fighters, attack) {
  let weapon;
  let dmgdone;
  attack = attack.toLowerCase();
  for (w = 0, w < user.equipped.length; w++) {
    if (user.equipped[w].type == "Weapon") {
      weapon = user.equipped[w];
    }
  }
  if (attack == 'attack 1') {
    dmgdone = user.moves.move1.dmg + weapon.dmg;
    f1Boss.hp -= dmgdone;
    var attacker = msg.author.username;
    if (boss.hp <= 0) {
      channel.sendMessage("You have defeated me! But I will come back soon!");
      loot(enemy, user, channel);
      return;
    }
    channel.sendMessage(attacker + ", You did " + dmgdone "dmg");
    defending(channel, fighters, defend);
  }
  if (attack == 'attack 2') {
    dmgdone = user.moves.move2.dmg + weapon.dmg;
    f1Boss.hp -= dmgdone;
    var attacker = msg.author.username;
    if (boss.hp <= 0) {
      channel.sendMessage("You have defeated me! But I will come back soon!");
      loot(enemy, user, channel);
      return;
    }
    channel.sendMessage(attacker + ", You did " + dmgdone "dmg");
    defending(channel, fighters, defend);
  }
  if (attack == 'attack 3') {
    dmgdone = user.moves.move3.dmg + weapon.dmg;
    f1Boss.hp -= dmgdone;
    var attacker = msg.author.username;
    if (boss.hp <= 0) {
      channel.sendMessage("You have defeated me! But I will come back soon!");
      loot(enemy, user, channel);
      return;
    }
    channel.sendMessage(attacker + ", You did " + dmgdone "dmg");
    defending(channel, fighters, defend);
  }
  if (attack == 'attack 4') {
    dmgdone = user.moves.move4.dmg + weapon.dmg;
    f1Boss.hp -= dmgdone;
    var attacker = msg.author.username;
    if (boss.hp <= 0) {
      channel.sendMessage("You have defeated me! But I will come back soon!");
      loot(enemy, user, channel);
      return;
    }
    channel.sendMessage(attacker + ", You did " + dmgdone "dmg");
    defending(channel, fighters, defend);
  }
}

function defending(channel, fighters, defend) {
  fighters.hp -= boss.dmg;
  channel.sendMessage("The boss just did his attack and did " + boss.dmg + "dmg");
  attacking(channel, fighters, attack);
}

client.on('message', (message) => {
  if (channel.name == "BossArea") {
  if (msg.content.toLowerCase() == prefix + "fight boss 1") {
    bossFight = true;
  }
if (bossFight) {
newBoss();
} }
});
