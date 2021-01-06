import axios from 'axios';

module.exports = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const  user = { firstName: 'TJ'}
        user['lastName'] = 'McCarty';
        return user;
    },
    createNumber: (num1, num2) => num1 + num2,
    load1: 800,
    load2: 700,
    load3: 1000,
    load4: 600,
    usernames: ['John', 'Jacob', 'NotGoingToTryToSpellTheLastName'],
    getUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error'),
}