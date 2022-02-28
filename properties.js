const phone = {
    name:'Vivo Y90',
     color: 'Black',
      storage:'2GB & 32GB'
};
//Getting all property names
const keys = Object.keys(phone)
console.log(keys);
const values = Object.values(phone);
console.log(values);

const pair = Object.entries(phone)
console.log(pair);
phone.color = 'Mad Black'

// Object.seal(phone);
Object.freeze(phone)

delete phone.storage;
console.log(phone);