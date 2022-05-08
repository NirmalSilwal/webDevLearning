const os = require('os');

// console.log(os);

// info about current user
const user = os.userInfo();
console.log(user);

// system uptime
 console.log(`system uptime is ${os.uptime} seconds`);