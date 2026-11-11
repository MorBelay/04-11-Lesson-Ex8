
// מגישי טכנטאים: בלייב מור וחיים אשרף 50/5

// Task 8

const fs = require('fs');
const path = require('path');

// קריאת הנתונים מקובץ JSON
const text = fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8');
const users = JSON.parse(text);

const count = users.length;

// איסוף שמות המשתמשים
let names = [];

for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

// כתיבת מספר המשתמשים לקובץ
fs.writeFileSync(path.join(__dirname, 'user_count.txt'), count.toString());

// כתיבת שמות המשתמשים לקובץ
fs.writeFileSync(path.join(__dirname, 'user_names.txt'), names.join('\n'));
