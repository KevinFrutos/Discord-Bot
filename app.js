import dotenv from 'dotenv'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { Client, Intents, Collection } from 'discord.js'
import fs from 'fs'

dotenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

client.commands = new Collection();
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
(async () => {
    // IMPORTANDO COMANDOS
    for (const file of commandFiles) {
        const command = await import(`./commands/${file}`)
        commands.push(command.default.data);
        client.commands.set(command.default.data.name, command)
    }
    // REGISTRANDO COMANDOS
    try {
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
        console.log("Comandos regisrados correctamente");
    } catch (error) {
        console.log(error)
    }
})()

client.on('ready', async () => {
    console.log(`Conectado como: ${client.user.tag}`);
    const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL)
    await canal.send("Estoy aqui para poner Orden")
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return
    }

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.default.execute(interaction, client);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
})

client.login(process.env.TOKEN)