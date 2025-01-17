const fs = require('fs');
const yaml = require('js-yaml');

const login_yaml = yaml.load(fs.readFileSync('./testdata/login.yaml', 'utf8'));
const search_yaml= yaml.load(fs.readFileSync('./testdata/search.yaml', 'utf8'));
const dropdown_yaml = yaml.load(fs.readFileSync('./testdata/dropdown.yaml', 'utf8'));

module.exports = Object.assign({}, login_yaml, search_yaml, dropdown_yaml);

