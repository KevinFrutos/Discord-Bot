import { SlashCommandBuilder } from '@discordjs/builders'

const hola = {
    data: new SlashCommandBuilder()
        .setName("hola")
        .setDescription("Se te enviara un saludo"),
    async execute(interaction){
        return interaction.reply(`Hola a ti tambien ${interaction.user.tag}`)
    }
}

export default hola;