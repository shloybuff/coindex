const keymanager = require('../lib/KeyManager')
const cryptoAPI = require('../lib/CryptoAPI')

const check = {
    async price(cmd){
        try{
            const keyManager = new keymanager()
            const key = keyManager.getKey()
    
            const api = new cryptoAPI(key)
            const priceCoin = await api.getPriceData(cmd.coin, cmd.cur)
    
            console.log(priceCoin)
        }catch(err){
            console.log(err.message.red)
        }

    }
}

module.exports = check