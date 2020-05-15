const KeyManager = require('../lib/KeyManager');
const {isRequired} = require('../utils/validation');
const colors = require('colors');
const inquirer = require('inquirer')

const key = {

    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
          {
            type: 'input',
            name: 'key',
            message: 'Enter API Key '.green + 'https://nomics.com',
            validate: isRequired
          }
        ]);
    
        const key = keyManager.setKey(input.key);
    
        if (key) {
          console.log('API Key Set'.blue);
        }
      },
    show() {
        try{
            const keyManager = new KeyManager;
            const key = keyManager.getKey();

            console.log('current API key ' + key.yellow)

            return key; 
        }catch(err){
          console.error(err.message.red)
        }
    },
    remove() {
        try{
            const keyManager = new KeyManager;
            keyManager.deleteKey();
  
            console.log('key removed' )
  
            return ; 
        }catch(err){
            console.error(err.message.red)
          }
    },
}

module.exports = key