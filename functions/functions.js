const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../config/uploads.json');

function uploadFile(name, url) {
  let data = fs.readFileSync(filePath);
  let json = JSON.parse(data);
  json[name] = url;
  fs.writeFileSync(filePath, JSON.stringify(json));
  return { code: 200, data: 'Uploaded File' };
}

function getFile(name) {
  let data = fs.readFileSync(filePath);
  let json = JSON.parse(data);
  if (json[name] !== undefined) return { code: 200, data: json[name] };
  return { code: 404, data: 'File nicht gefunden' };
}

module.exports = { uploadFile, getFile };
