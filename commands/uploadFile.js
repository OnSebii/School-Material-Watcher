const { uploadFile } = require('../functions/functions.js');

module.exports = {
  name: 'upload',
  description: 'Upload your file',
  execute(message, args) {
    // if (args[0] == undefined) return message.channel.send('File hat keinen Namen. !upload [Name]');
    if (message.attachments.first() == undefined) return message.channel.send('Es wurde kein File mitangegeben.');
    const { name, url } = message.attachments.first();
    uploadFile(name, url);
    message.channel.send('Uploaded File');
  },
};
