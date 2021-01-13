var user = {};
user.name = 'John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

var salaries = {
    kim: 1000000,
    park: 1600000,
    lee: 1300000
};

var total = 0;
for (var i in salaries) {
    total += salaries[i];
}
console.log(total);