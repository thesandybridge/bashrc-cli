const conf = new (require('conf'))()
const fs = require('fs')
const p = require('path')
const homedir = require('os').homedir();

function createCustomFunction (name, [flags], path=homedir, [value]) {
    const output = `\n${name}() {
  local OPTIND ${name}
  while getopts ":${flags}" option; do
    case $option in
      ${flags}) ${name}=${value} ;;
      ?) echo "invalid option: $OPTARG"; return 1 ;;
    esac
  done
  $\{${name}} ${path}\n}`;
    const file = p.join(homedir,'/', '.bash_aliases')
    
    fs.appendFile(file, output, (err) => {
        if (err) {
          console.log(err);
        }
        else {
          // Get the file contents after the append operation
          console.log(`${output} added to .bash_aliases`);
        }
    });
}
module.exports = createCustomFunction