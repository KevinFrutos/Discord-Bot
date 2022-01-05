import { SlashCommandBuilder } from "@discordjs/builders";

const git = {
	data: new SlashCommandBuilder().setName("git").setDescription("Documentacion de git"),
	async execute(interaction, client) {
		const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL);
		await interaction.reply('Esta es toda la información de "Git" de la que dispongo');
		await canal.send(`
// CUANDO EMPIEZAS EN UNA NUEVA MAQUINA ESTA ES LA FORMA DE REGISTRARSE
git config --global user.name "mi nombre"
git config --global user.email "myemail@example.com"

// INICIAR UN NUEVO REPOSITORIO
// CREA LA CARPETA .git CON LOS CAMBIOS REALIZADOS AL REPOSITORIO
git init

// PARA VER LOS CAMBIOS QUE A UN NO HAN SIDO REGISTRADOS
git status

// MUESTRA LOS ARCHIVOS MODIFICADOS
git status -s

// PARA AÑADIR TODOS LOS ARCHIVOS DE LA CARPETA AL REPOSITORIO
// Y HACER UN SEGUIMIENTO DE LOS CAMBIOS
git add .

// CREAR UN "PUNTO DE CONTROL" DEL PROYECTO EN ESTE MOMENTO
git commit -m "primer commit"

// MUESTRA LOS COMMIT REALIZADOS
git log --oneline
        `);
		await canal.send(`
        Recursos online:
        - https://bluuweb.github.io/tutorial-github/
        - https://git-scm.com/docs
        `);
	},
};

export default git;
