import { SlashCommandBuilder } from "@discordjs/builders";

const kubernetes = {
	data: new SlashCommandBuilder().setName("kubernetes").setDescription("Documentacion de kubernetes"),
	async execute(interaction, client) {
		const canal = await client.channels.fetch(process.env.GENERAL_CHANNEL);
		await interaction.reply('Esta es toda la información de "Kubernetes" de la que dispongo');
		await canal.send(`
#------------ COMANDOS DE KUBERNETES PARA GESTIONAR PODS, DEPLOYMENTS, SERVICIOS, ETC.

# MUESTRA LOS PODS EJECUTANDOSE EN LA MAQUINA VIRTUAL(INCLUIENDO LOS DE SISTEMA)
kubectl get po -A

# MUESTRA EL ESTADO DEL LOS PODS
kubectl get pods
kubectl get pods --watch

# EJECUTAR UNA TERMINAL DENTRO DE UN POD
kubectl exec -it nombre-pod -- sh

# MUESTRA LOS SERVICIOS DISPONIBLES(DNS)
kubectl get svc

# GENERA/CREA UN POD CON LAS OPCIONES DECLARADAS EN EL ARCHIVO YAML
kubectl apply -f nombre-pod.yaml

# ELIMINA UN POD/DEPLOYMENT/SERVICIO
kubectl delete -f nombre-pod.yaml

# MUESTRA LOS INGRESOS DE LA GATEWAY
kubectl get ingress
        `);
        await canal.send(`
#------------ COMANDOS DE MINIKUBE PARA GESTIONAR LA MAQUINA VIRTUAL LOCAL DE KUBERNETES

# ARRANCA LA MAQUINA VIRTUAL
minikube start

# MUESTRA EL ESTADO DE LA MAQUINA VIRTUAL
minikube status

# DETIENE LA MAQUINA VIRTUAL
minikube stop

# MUESTRA LA IP DE UN SERVICIO
minikube service nombre-servicio --url

# MUESTRA LA IP DEL CLUSTER DE MINIKUBE
minikube ip

# MUY IMPORTANTE PARA CONSEGUIR UNA IP EXTERNA PARA EL GATEWAY
minikube tunnel
        `)
	},
};

export default kubernetes;