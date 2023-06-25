const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")
const userprofile = require("../models/userprofile")

new Command({
	name: 'delusername',
	description: 'Delete game username from your profile',
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
            if (findProfile.minecraftusername != username) {
                embed.setTitle(`<:error:1122470917163982858> You don't have this username.`)
                ctx.reply({embeds: [embed], ephemeral: true})
            } else {
            const removeUsername = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { minecraftusername: null})
            embed.setTitle(`<:success:1122471252293079104> Your Minecraft username ${username} has been removed from your profile.`)
            ctx.reply({embeds: [embed], ephemeral: true})
            }
            } else if (game == "wot") {
                if (findProfile.wotusername != username) {
                    embed.setTitle(`<:error:1122470917163982858> You don't have this username.`)
                    ctx.reply({embeds: [embed], ephemeral: true})
                } else {
                const removeUsername = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { wotusername: null})
                embed.setTitle(`<:success:1122471252293079104> Your World Of Tanks username ${username} has been removed from your profile.`)
                ctx.reply({embeds: [embed], ephemeral: true})
                }
            } else if (game == "lol") {
                if (findProfile.lolusername != username) {
                    embed.setTitle(`<:error:1122470917163982858> You don't have this username.`)
                    ctx.reply({embeds: [embed], ephemeral: true})
                } else {
                const removeUsername = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { lolusername: null})
                embed.setTitle(`<:success:1122471252293079104> Your League of Legends username ${username} has been removed from your profile.`)
                ctx.reply({embeds: [embed], ephemeral: true})
                }
            } else if (game == "fortnite") {
                if (findProfile.fortniteusername != username) {
                    embed.setTitle(`<:error:1122470917163982858> You don't have this username.`)
                    ctx.reply({embeds: [embed], ephemeral: true})
                } else {
                const removeUsername = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { fortniteusername: null})
                embed.setTitle(`<:success:1122471252293079104> Your Fortnite username ${username} has been removed from your profile.`)
                ctx.reply({embeds: [embed], ephemeral: true})
                }
            } else if (game == "wow") {
                if (findProfile.wowusername != username) {
                    embed.setTitle(`<:error:1122470917163982858> You don't have this username.`)
                    ctx.reply({embeds: [embed], ephemeral: true})
                } else {
                const removeUsername = await userprofile.findOneAndUpdate({discordid: ctx.user.id}, { wowusername: null})
                embed.setTitle(`<:success:1122471252293079104> Your World Of Warcraft username ${username} has been removed from your profile.`)
                ctx.reply({embeds: [embed], ephemeral: true})
                }
            }
        } else {
            embed.setTitle(`<:error:1122470917163982858> You don't have this username.`)
            ctx.reply({embeds: [embed], ephemeral: true})
        }
    }
})