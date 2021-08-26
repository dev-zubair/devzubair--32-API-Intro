// JavaScript Object 
//JSON
const user = { id: 11, name: 'Zubair Ahmed', job: 'Freelancer' };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const firm = {
    name: 'Dev Zubair',
    address: 'Tongi',
    profit: 15000,
    services: ['Web Design', 'Logo Design', 'Mobile App Develop'],
    isExpensive: false,
    ceo: {
        name: 'Parul Akther',
        age: 37,
    },
}
const firmStringify = JSON.stringify(firm);
// console.log(firm);
console.log(firmStringify);
const converted = JSON.parse(firmStringify);
console.log(converted);



