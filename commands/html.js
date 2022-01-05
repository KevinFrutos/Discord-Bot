import { SlashCommandBuilder } from "@discordjs/builders";

const html = {
	data: new SlashCommandBuilder().setName("html").setDescription("Documentacion de HTML"),
	async execute(interaction, client) {
		const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL);
		await interaction.reply('Esta es toda la información de "HTML" de la que dispongo');
		await canal.send(`
        # RECURSOS ONLINE:
        - https://developer.mozilla.org/es/docs/Web/HTML
        - https://www.w3schools.com/html/
		# RECURSOS IMAGENES/ICONOS:
		- https://www.pexels.com/es-es/
		- https://pixabay.com/es/
		- https://icon-icons.com/es/
		- https://www.vectorlogo.zone/
        `);
	},
};

export default html;