import { SlashCommandBuilder } from "@discordjs/builders";

const docker = {
	data: new SlashCommandBuilder().setName("docker").setDescription("Documentacion de docker"),
	async execute(interaction, client) {
		const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL);
		await interaction.reply('Esta es toda la información de "Docker" de la que dispongo');
		await canal.send(`
# LOGIN EN DOCKER HUB
\`\`\`docker login -u nombre-usuario-docker-hub\`\`\`
# PONE UNA ETIQUETA A UN COMMIT
\`\`\`docker tag nombre-usuario-docker-hub/nombre-imagen nombre-usuario-docker-hub/nombre-imagen:tag-que-quieras\`\`\`
# HACE UN PUSH DE LA IMAGEN AL REPOSITORIO EN DOCKER HUB
\`\`\`docker push nombre-usuario-docker-hub/nombre-imagen:tag-que-quieras\`\`\`
# MUESTRA LAS IMAGENES DESCARGADAS LOCALMENTE
\`\`\`docker images\`\`\`
# BUSCA UNA IMAGEN EN DOCKER HUB(REPOSITORIO DE DOCKER)
\`\`\`docker search nombre-imagen\`\`\`
# DESCARGA UNA IMAGEN DEL REPOSITORIO
\`\`\`docker pull nombre-imagen\`\`\`
# GENERAR UNA IMAGEN, NECESITAS LOS ARCHIVOS "Dockerfile" Y ".dockerignore"
\`\`\`docker build . -t nombre-usuario/nombre-imagen\`\`\`
# ARRANCAR UNA IMAGEN
\`\`\`docker run nombre-usuario/nombre-imagen\`\`\`
\`\`\`docker run -p 9000:9000 -d nombre-usuario/nombre-imagen\`\`\`
# ARRANCAR IMAGEN CON ACCESO INTERACTIVO Y TERMINAL
\`\`\`docker run -it nombre-imagen\`\`\`
# MUESTRA LOS CONTENEDORES QUE TIENES EN EJECUCION
\`\`\`docker ps\`\`\`
# MUESTRA TODOS LOS CONTENEDORES, TANTO SI SE ESTAN EJECUTANDO, COMO SI NO
\`\`\`docker ps -a\`\`\`
# MUESTRA EL ULTIMO CONTENEDOR QUE SE HA CREADO
\`\`\`docker ps -l\`\`\`
# ARRANCA UN CONTENEDOR MEDIANTE SU ID O NOMBRE
\`\`\`docker start id-o-nombre-contenedor\`\`\`
# DETIENE UN CONTENEDOR
\`\`\`docker stop id-o-nombre-contenedor\`\`\`
# ELIMINA UN CONTENEDOR
\`\`\`docker rm id-o-nombre-contenedor\`\`\`
# ELIMINA UNA IMAGEN
\`\`\`docker rmi -f id-o-nombre-imagen\`\`\`
        `);
        await canal.send(`
        # RECURSOS ONLINE:
        - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-es
        - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
        `);
	},
};

export default docker;