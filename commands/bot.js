const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")

new Command({
	name: 'bot',
	description: 'Show bot stats',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async (ctx) => {
        const embed = new Discord.EmbedBuilder
        embed.setColor("Random")
        embed.setTitle("Bot status")
        embed.addFields(
            {name: "📂 Servers", value: ctx.client.guilds.cache.size.toString(), inline: true},
            {name: "👥 Users", value: ctx.client.users.cache.size.toString(), inline: true},
            {name: "📃 Version", value: "v1.0.0-beta.1", inline: true},
            {name: "👤 Developer", value: "<@525704336869687316>", inline: true},
        )
        ctx.reply({embeds: [embed]})
    }
});