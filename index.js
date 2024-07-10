

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on('line', cmd => {
//     console.log(`You just typed: ${cmd}`)
// });  //aici se adauga un listener pentru evenimentul line
// //evenimetul este declansat de fiecare data cand se introduce o linie de text si se apasa enter
    

// rl.question('What is your name?', answer => {
//     console.log(`Nice to meet you, ${answer}`)
// });



// Ghiceste numarul aplicatie

// const readline = require('readline');
// const fs = require('fs').promises;
// const { program } = require('commander');
// require('colors');

// program.option(
//     '-f, --file [type]',
//     'file for saving game results',
//     'results.txt'
// );

// program.parse(process.argv);

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let count = 0; //initializam un contor cu 0 care sa numere incercarile de ghicire
// const logFile = program.opts().file;
// const mind = Math.floor(Math.random() * 10) + 1;

// const isValid = value => {
//     if (isNaN(value)) {
//         console.log('Introduceti numarul'.red);
//         return false;
//     }
//     if (value < 1 || value > 10) {
//         console.log('Numărul trebuie să fie în intervalul 1 - 10'.red);
//         return false;
//     }
//     return true;
// };

// const log = async data => {
//   try {
//     await fs.appendFile(logFile, `${data}\n`);
//     console.log(`S-a reușit salvarea rezultatului într-un fișier ${logFile}`.green);
//   } catch (err) {
//     console.log(`Nu s-a putut salva fișierul ${logFile}`.red);
//   }
// };

// const game = () => {
//   rl.question(
//     'Introdu un număr de la 1 la 10 pentru a ghici răspunsul: '.yellow,
//     value => {
//       let a = +value;
//       if (!isValid(a)) {
//         game();
//         return;
//       }
//       count += 1;
//       if (a === mind) {
//         console.log('Felicitări, ai ghicit numărul în %d pași'.green, count);
//         log(
//           `${new Date().toLocaleDateString()}: Felicitări, ai ghicit numărul în ${count} pași`,
//         ).finally(() => rl.close());
//         return;
//       }
//       console.log('Nu ai ghicit, încearcă din nou'.red);
//       game();
//     },
//   );
// };

// game();



// Creează un script Node.js care:
// Citește un fișier text ce conține o listă de numere separate prin linii noi.
// Calculează suma, media, maximul și minimul numerelor.
// Salvează rezultatele într-un fișier de ieșire.

// const fs = require('fs').promises;

// const readDataFile = async (filePath) => {
//     try {
//         const data = await fs.readFile(filePath, 'utf8');
//         return data.split('\n').map(Number).filter(num => !isNaN(num));
//     } catch (error) {
//         console.error(`Eroare la citirea fișierului ${filePath}:`, error);
//         throw error;
//     }
// };

// const calculateStatistics = (numbers) => {
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   const avg = sum / numbers.length;
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);
//   return { sum, avg, min, max };
// };


// const writeResults = async (filePath, results) => {
//     const resultText = `
//     Sumă: ${results.sum}
//     Medie: ${results.avg}
//     Minim: ${results.min}
//     Maxim: ${results.max}
//   `;
//     try {
//         await fs.writeFile(filePath, resultText.trim());
//         console.log(`Rezultatele au fost salvate în fișierul ${filePath}`);
//     } catch (error) {
//         console.error(`Eroare la scrierea fișierului ${filePath}:`, error);
//     }
// };

// //main function

// const main = async () => {
//     const input = 'data.txt';
//     const output = 'output.txt';

//     try {
//         const numbers = await readDataFile(input);
//         const stats = calculateStatistics(numbers);
//         await writeResults(output, stats);
//     } catch (error) {
//         console.error('A apărut o eroare:', error);
//     }
// };

// main();






// Creează un script Node.js care:
// Citește un fișier JSON ce conține o listă de utilizatori.
// Calculează și afișează numărul total de utilizatori.
// Găsește și afișează utilizatorul cel mai în vârstă.
// Scrie rezultatele într-un fișier text numit results.txt.

// const fs = require('fs').promises;

// const processUsers = async () => {
//   try {
//     // Citește fișierul JSON
//     const data = await fs.readFile('users.json', 'utf8');
//     const users = JSON.parse(data);

//     // Calculează numărul total de utilizatori
//     const totalUsers = users.length;

//     // Găsește utilizatorul cel mai în vârstă
//     let oldestUser = users[0];
//     for (let user of users) {
//       if (user.age > oldestUser.age) {
//         oldestUser = user;
//       }
//     }

//     // Afișează rezultatele
//     console.log(`Numărul total de utilizatori: ${totalUsers}`);
//     console.log(`Utilizatorul cel mai în vârstă: ${oldestUser.name}, ${oldestUser.age} ani`);

//     // Scrie rezultatele într-un fișier text
//     const results = `
//       Numărul total de utilizatori: ${totalUsers}
//       Utilizatorul cel mai în vârstă: ${oldestUser.name}, ${oldestUser.age} ani
//     `;
//     await fs.writeFile('results.txt', results.trim());

//     console.log('Rezultatele au fost salvate în results.txt');
//   } catch (error) {
//     console.error('A apărut o eroare:', error);
//   }
// };

// processUsers();







// Creează un script Node.js care:
// Citește un fișier text ce conține un articol sau un text lung.
// Calculează și afișează următoarele statistici despre text:
// Numărul total de cuvinte.
// Cuvântul cel mai frecvent și de câte ori apare.
// Scrie aceste statistici într-un fișier text numit text_stats.txt.


// const fs = require('fs').promises;


// const readTextFile = async (filePath) => {
//     try {
//         const data = await fs.readFile(filePath, 'utf8');
//         return data;
//     } catch (error) {
//         console.error(`Eroare la citirea fisierului ${filePath}`);
        
//     }
// };

// const analyzeText = (text) => {
//     const words = text.toLowerCase().match(/\b\w+\b/g);
//     const wordCount = words.length;

// }










// Problema: Gestionarea unei liste de sarcini (To-Do List)
// Cerințe
// Creează un script Node.js care:
// Adaugă o nouă sarcină la lista de sarcini.
// Afișează toate sarcinile din listă.
// Marchează o sarcină ca fiind completă.
// Salvează lista de sarcini într-un fișier JSON numit tasks.json.




// const fs = require('fs').promises;
// const { progam } = require('commander');


//configurare comander pt lista de comanda

// progam
//     .option('-a, --add <task>', 'Adauga o noua sarcina')
//     .option('-l, --list', 'Afiseaza toate sarcinile')
//     .option('-c, --complete <index>', 'Marcheaza sarcina ca fiin completa');

// progam.parse(process.argv);

// const taskFile = 'tasks.json';


//Functie citim sarcinile din fisier

// const readTasks = async () => {
//     try {
//         const data = await fs.readFile(taskFile, 'utf8');
//         return JSON.parse(data);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             return [];
//         } else {
//             console.error('Eroare la citirea fișierului tasks.json:', error);
//             throw error;
//         }
        
//     }
// };

//Functie pentru scrierea sarcinilor in fisier

// const writeTasks = async (tasks) => {
//     try {
//         await fs.writeFile(taskFile, JSON.stringify(tasks, null, 2));
//     } catch (error) {
//     console.error('Eroare la scrierea fișierului tasks.json:', error);
//     throw error;
//   }
// }


// //Functie pentru adaugarea unei noi sarcini

// const addTask = async (taskDescription) => {
//     const task = await readTasks();
//     task.push({
//         description: taskDescription,
//         completed: false
//     });
//     await writeTasks(task);
//     console.log(`Sarcina "${taskDescription}" a fost adăugată.`);
// };



//Afisarea tuturor taskurilor


// Vom crea un server Express care gestionează o listă de sarcini (To-Do List). Vom putea adăuga, vizualiza și șterge sarcini din listă.


const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;
const taskFile = 'tasks.json';


app.use(express.json());

//Functie citire taskuri din fisier

const readTasksFromFile = async () => {
    try {
        const data = await fs.readFile(taskFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        } else {
            throw error;
        }
    }
};

//Functie pentru scriere in fisier sarcinile

const writeTasksToFile = async (tasks) => {
  try {
    await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
    console.log('Tasks written to file:', tasks); // Log pentru scriere
  } catch (error) {
    console.error('Error writing to file:', error); // Log pentru eroare la scriere
    throw error;
  }
};

//Ruta pentru toate sarcinile

app.get('/tasks',async (req, res) => {
    try {
        const tasks = await readTasksFromFile();
        res.json(tasks);

    } catch(error) {
         res.status(500).json({ message: 'Eroare la citirea sarcinilor.' });
    }
});

//Ruta pentru a adauga o noua sarcina

app.post('/tasks', async(req, res) => {
    const task = req.body.task;
    if (task) {
        try {
            const tasks = await readTasksFromFile();
            tasks.push(task);
            await writeTasksToFile();
            res.status(200).json({ message: 'Sarcina adaugata cu succes!' });
        } catch(error) {
            res.status(500).json({ message: 'Eroare la salvarea sarcinii' });
        }
    } else {
         res.status(400).json({ message: 'Sarcina nu poate fi goală!' });
    }
});

//Ruta pentru a sterge o sarcina dupa index

app.delete('/tasks/:index', async (req, res) => {
    const index = parseInt(req.params.index);
    try {
        const tasks = await readTasksFromFile();
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            await writeTasksToFile();
            res.json({ message: 'Sarcina a fost ștearsă cu succes!', tasks });
        } else {
             res.status(404).json({ message: 'Index invalid!' });
        }
    }catch (error) {
    res.status(500).json({ message: 'Eroare la ștergerea sarcinii.' });
  }
})


app.listen(port, () => {
    console.log(`Serverul ruleaza la http://localhost:${port}`);
});