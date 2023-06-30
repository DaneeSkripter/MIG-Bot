const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")
const userprofile = require("../models/userprofile")

new Command({
	name: 'deldata',
	description: 'Delete all data, that we store about you',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    run: async (ctx) => {
        const findProfile = await userprofile.findOne({ discordid: ctx.user.id})
        const embed = new Discord.EmbedBuilder
        embed.setColor("Random")
        if (!findProfile) {
            embed.setTitle("<:error:1122470917163982858> We don't have any data about you in our database.")
            ctx.reply({embeds: [embed], ephemeral: true})
        } else {
            const deleteProfile = await userprofile.findOneAndRemove({discordid: ctx.user.id})
            embed.setTitle("<:success:1122471252293079104> Your profile has been deleted from our database.")
            ctx.reply({embeds: [embed], ephemeral: true})
        }
    }
})