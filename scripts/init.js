const fs = require('fs');
const shell = require('shelljs');

// check pre-commit file exist

if (!fs.existsSync('.git/hooks/pre-commit')) {
  shell.exec('cp .hooks/pre-commit .git/hooks/');
}
