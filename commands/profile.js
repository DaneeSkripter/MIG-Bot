const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")
const userprofile = require("../models/userprofile")

new Command({
	name: 'profile',
	description: 'Show users profile',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        new Argument({
            name: "user",
            description: "User to show his profile",
            type: ArgumentType.USER,
            required: true
        })
    ],
	run: async (ctx) => {
        const user = ctx.arguments.getUser("user")
        const profile = await userprofile.findOne({discordid: user.id})
        const embed = new Discord.EmbedBuilder
        embed.setTitle(`${user.username}'s profile`)
        let profiles = ""
        if (!profile) {
            profiles = "<:error:1122470917163982858> User's profile is empty."
        } else {
        if (profile.minecraftusername) {
            profiles = `${profiles}\n<:minecraft:1122462846811390053> Minecraft: ${profile.minecraftusername}`
        } if (profile.wotusername) {
            profiles = `${profiles}\n<:wot:1122464725582745720> World Of Tanks: ${profile.wotusername}`
        }  if (profile.lolusername) {
            profiles = `${profiles}\n<:lol:1122466144540950588> League Of Legends: ${profile.lolusername}`
        } if (profile.fortniteusername) {
            profiles = `${profiles}\n<:fortnite:1122466893014519889> Fortnite: ${profile.fortniteusername}`
        } if (profile.wowusername) {
            profiles = `${profiles}\n<:wow:1122467632000536697> World Of Warcraft: ${profile.wowusername}`
        } if (profiles == "") {
            profiles = "<:error:1122470917163982858> User's profile is empty."
        }
    }
        embed.setDescription(profiles)
        embed.setColor("Random")
        embed.setFooter({ text: "⚠️: The usernames listed above may not actually belong to this user." })
        ctx.reply({embeds: [embed]})
	}
});