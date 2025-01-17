const ImageApiClient = require('waifu-haven-api');
const imageClient = new ImageApiClient('Your-Api-Key');
const { AttachmentBuilder } = require("discord.js");

imageClient.getImage('waifu', 'sfw')
    .then(base64Image => {

        // Salvar a imagem como um arquivo

        const buffer = Buffer.from(base64Image, 'base64');
        const attachment = new AttachmentBuilder(buffer, { name: 'image.jpg' });
        interaction.editReply({ files: [attachment] });

        console.log('Imagem salva com sucesso');
    })
    .catch(error => {
        console.error('Erro ao obter a imagem:', error.message);
    });