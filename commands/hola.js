import { SlashCommandBuilder } from '@discordjs/builders'

const hola = {
    data: new SlashCommandBuilder()
    .setName("hola")
    .setDescription("Se te enviara un saludo"),
    async execute(interaction, client){
        const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL)
        await canal.send("Estoy aqui para poner Orden")
        await interaction.reply(`Hola a ti tambien ${interaction.user.tag}`)
    }
}

export default hola;