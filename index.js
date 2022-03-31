const chalk=require('chalk');
const  notes=require('./notes.js');
const command = require('nodemon/lib/config/command');
const yargs=require('yargs');
const greeting=chalk.blue.inverse.bold('hello world');

yargs.command({
    command:'list',
    describe:'list the items',
    handler: function(){
  notes.listItems();
    }

})
yargs.command({
    command:'read',
    describe:'read the items',
    builder:{
        title:{
            describe:'Note a title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
       notes.readItems(argv.title);
    }

})
yargs.command({
command:'add',
describe:'add a node',
builder:{
    title:{
        describe:'Note a title',
        demandOption:true,
        type:'string'
    },
    body:{
        describe:'Note a body',
        demandOption:true,
        type:'string'
    }
},
handler: function(argv){
notes.addNotes(argv.title,argv.body);
}

})
yargs.command({
    command:'remove',
    describe:'remove a node',
    builder:{
        title:{
            describe:'remove a title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
    }


})
yargs.parse();