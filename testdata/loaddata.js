const fs = require('fs');
const yaml = require('js-yaml');
const login_yaml = yaml.load(fs.readFileSync('./testdata/login.yaml', 'utf8'));
module.exports = login_yaml;