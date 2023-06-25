const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")

new Command({
	name: 'help',
	description: 'Show all commands',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async (ctx) => {
        const embed = new Discord.EmbedBuilder
        embed.setColor("Random")
        embed.setTitle("Help")
        embed.setDescription("**/profile** - Show specific user profile\n**/setusername** - Add/Change your game username in profile\n**/delusername** - Delete game username from your profile\n**/bot** - Show info about bot")
        ctx.reply({embeds: [embed]})
    }
});