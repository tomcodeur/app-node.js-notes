const fs = require('fs');
const yargs = require('yargs');

function loadDatas(path) {
    let data = fs.readFileSync(path);
    return JSON.parse(data.toString());
}

yargs
    .command({
        command: 'add',
        describe: "Ajout d'une nouvelle note",
        builder: {
            notes: {
                describe: "Note",
                demandOption: true,
                type: "string"
            }
        },
        handler: (argv) => {
            console.log("Ajout de la nouvelle note dans le fichier !");
            let notes = loadDatas('notes.json');
            notes.push(argv.notes);
            fs.writeFile('notes.json',JSON.stringify(notes), (err) => {
                if(err) throw err;
                console.log("GG, tu as ajouté une nouvelle note !");
            })
        }
    })
    .command({
        command: 'list',
        describe: 'Liste des notes',
        handler: () => {
            console.log("Liste des notes:");
            let notes = loadDatas('notes.json');
            console.log(notes);
        }
    })
    .command({
        command: 'remove',
        describe: 'Supprimer une notes',
        handler: (argv) => {
            console.log("Suppression d'une note !");
            let notes = loadDatas('notes.json');
            notes.(argv.notes);
            fs.writeFile('notes.json',JSON.stringify(notes), (err) => {
                if(err) throw err;
                console.log("GG, tu as supprimé une note !");
            })
        }
    })
    .command({
        command: 'read',
        describe: 'Affiche le title/body de la note spécifiée',
        handler: () => {
            console.log("Voici le titre & la note:");
            let notes = loadDatas('notes.json');
            console.log(notes);
        }
    })
    .argv