const conf = new (require('conf'))()
const fs = require('fs')
const path = require('path')
const homedir = require('os').homedir();

function createAlias (alias, command) {
    const output = `\n alias ${alias}="${command}"`;
    const file = path.join(homedir,'/', '.bash_aliases')
    
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
module.exports = createAlias