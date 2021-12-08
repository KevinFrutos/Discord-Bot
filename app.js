import dotenv from 'dotenv'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { Client, Intents } from 'discord.js'

dotenv.config()

const comandos = [
    { name: "buenas", description: "Saluda a alguien" },
    { name: "adios", description: "Se despide de alguien" }
]

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {

        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: comandos })
        console.log("Comandos regisrados correctamente");
    } catch (error) {
        console.log(error)
    }
})()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', async () => {
    console.log(`Conectado como: ${client.user.tag}`);
    const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL)
    await canal.send("Estoy aqui para poner Orden")
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return
    }

    if (interaction.commandName === 'buenas') {
        await interaction.reply(`Hola a ti tambien ${interaction.user.tag}`)
    } else if (interaction.commandName === 'adios') {
        await interaction.reply(`Nos vemos en la proxima ${interaction.user.tag}`)
    }
})

client.login(process.env.TOKEN)