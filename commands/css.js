import { SlashCommandBuilder } from "@discordjs/builders";

const css = {
	data: new SlashCommandBuilder()
		.setName("css")
		.setDescription("Documentacion de CSS")
		.addSubcommand(subcommand => subcommand.setName("flexbox").setDescription("Información de Flexbox"))
		.addSubcommand(subcommand => subcommand.setName("media_query").setDescription("Informacion de media query"))
		.addSubcommand(subcommand => subcommand.setName("bootstrap").setDescription("Informacion de Bootstrap")),
	async execute(interaction, client) {
		const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL);
		if (interaction.options.getSubcommand() === "flexbox") {
			await interaction.reply('Esta es toda la información de "Flexbox" de la que dispongo');
			await canal.send("Flex");
		} else if (interaction.options.getSubcommand() === "media_query") {
			await interaction.reply('Esta es toda la información de "Media Query" de la que dispongo');
			await canal.send("@query");
		} else if (interaction.options.getSubcommand() === "bootstrap") {
			await interaction.reply('Esta es toda la información de "Bootstrap" de la que dispongo');
			await canal.send("Bootstrap");
		}
	},
};

export default css;
