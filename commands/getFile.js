const { getFile } = require('../functions/functions.js');

module.exports = {
  name: 'get',
  description: 'get file from uploads.json',
  execute(message, args) {
    const { code, data } = getFile(args[0]);
    if (code == 200) return message.channel.send(data);
    message.channel.send('File nicht gefunden');
  },
};
