const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")
const userprofile = require("../models/userprofile")

new Command({
	name: 'setusername',
	description: 'Add/Change your game username to profile',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        new Argument({
            name: "game",
            description: "Choose game",
            type: ArgumentType.STRING,
            choices: [
                {
                    name: "Minecraft",
                    value: "minecraft",
                },
                {
                    name: "World of Tanks",
                    value: "wot"
                },
                {
                    name: "League of Legends",
                    value: "lol"
                },
                {
                    name: "Fortnite",
                    value: "fortnite"
                },
                {
                    name: "World of Warcraft",
                    value: "wow"
                }
            ],
            required: true
        }),
        new Argument({
            name: "username",
            description: "Your username",
            type: ArgumentType.STRING,
            required: true
        })
    ],
    run: async (ctx) => {
        const game = ctx.arguments.getString("game")
        const username = ctx.arguments.getString("username")
        const findProfile = await userprofile.findOne({ discordid: ctx.user.id})
        const embed = new Discord.EmbedBuilder
        embed.setColor("Random")
        if (findProfile) {
            if (game == "minecraft") {
            const updateProfile = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { minecraftusername : username})
            embed.setTitle(`<:success:1122471252293079104> Your Minecraft username ${username} has been added to your profile!`)
            ctx.reply({embeds: [embed], ephemeral: true})
            } else if (game == "wot") {
                const updateProfile = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { wotusername : username})
                embed.setTitle(`<:success:1122471252293079104> Your World of Tanks username ${username} has been added to your profile!`)
                ctx.reply({embeds: [embed], ephemeral: true})
            } else if (game == "lol") {
                const updateProfile = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { lolusername : username})
                embed.setTitle(`<:success:1122471252293079104> Your League of Legends username ${username} has been added to your profile!`)
                ctx.reply({embeds: [embed], ephemeral: true})
            } else if (game == "fortnite") {
                const updateProfile = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { fortniteusername : username})
                embed.setTitle(`<:success:1122471252293079104> Your Fortnite username ${username} has been added to your profile!`)
                ctx.reply({embeds: [embed], ephemeral: true})
            } else if (game == "wow") {
                const updateProfile = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { wowusername : username})
                embed.setTitle(`<:success:1122471252293079104> Your World of Warcraft username ${username} has been added to your profile!`)
                ctx.reply({embeds: [embed], ephemeral: true})
            }
        } else {
            const newprofile = new userprofile({
                discordid: ctx.user.id
            })
            newprofile.save()
            embed.setTitle("<:success:1122471252293079104> Your profile has been created and saved to our DB, please run this command again.")
            ctx.reply({embeds: [embed], ephemeral: true})
        }
    }
})