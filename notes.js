const fs=require('fs')
const chalk=require('chalk');

const readItems=(title)=>{
const loadNote=loadNotes();
const e1=loadNote.find((node)=>{
    if(node.title===title){
        return node;
    }
    
})
if(e1===undefined){
    console.log(chalk.red.inverse.bold("no node found"));
}
else{
    console.log(chalk.green.inverse.bold(e1.title),title);
    
}
}
const listItems=()=>{
console.log(chalk.blue.inverse.bold("list"));
const loadNote=loadNotes();
let z=0;
loadNote.forEach((note) => {
   
    if(z%2===0)
    console.log(chalk.red.inverse.bold(note.title));
    else{
        console.log(chalk.green.inverse.bold(note.title));
    }
    z=1-z;
    
});
}
const loadNotes=()=>{
    try{
const databuffer=fs.readFileSync('notes.json');
const samplejson=databuffer.toString();
const sampleobject1=JSON.parse(samplejson);
return sampleobject1;

}
catch(e){
return [];
}

}
const removeNotes=(title)=>{
const loadNotes1=loadNotes();
const nloadNotes1=loadNotes1.filter((note)=>{
    return note.title!==title;
})
if(loadNotes1.length===nloadNotes1.length){
    const message=chalk.red.inverse.bold("no node removed");
    console.log(message);
}
else{
    const message=chalk.green.inverse.bold(" node removed");
    console.log(message);
   
}
saveNotes(nloadNotes1);
}
const addNote=(title,body)=>{
const loadNotes1=loadNotes();
const validateNotes=loadNotes1.find((note)=>{
    return note.title===title;
})
if(!validateNotes){
loadNotes1.push({
    title:title,
    body:body
})
saveNotes(loadNotes1);
console.log(chalk.green.inverse.bold("new node added"));
}

else{
    console.log(chalk.red.inverse.bold("no title taken"));
}

}
const saveNotes=(notes)=>{
    const datajson=JSON.stringify(notes);
    fs.writeFileSync('notes.json',datajson);
}
module.exports={
   
    
    addNotes:addNote,
    removeNotes:removeNotes,
    listItems:listItems,
    readItems:readItems

};