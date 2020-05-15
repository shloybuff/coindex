const program = require('commander')
const check = require('./command/check')

program
   .command('price')
   .description('Check the price')
   .option(
       '--coin <type>',
        'Add specifique coin', 
        'BTH,ETh,XRP')
   .option(
       '--cur <currency>',
       'Chnge the currency',
       'USD')
   .action( (cmd) => check.price(cmd))

program.parse(process.argv)   