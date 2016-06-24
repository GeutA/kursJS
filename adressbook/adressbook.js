// User storage
// HW-s - a_book 

var users = [
	{
		firstName: 'Dmitry',
		lastName: 'Bondarchuk',
		birthDay: '16.07.1990',
		phones: [
			'89001234567',
			'83431234567'
		] 
	},
	{
		firstName: 'Ivan',
		lastName: 'Petrov',
		birthDay: '08.06.1956',
		phones: [
			'89001234567',
			'83431234567'
		] 
	}
];
function inputHuman() {
user = {};
user.phones = [];
user.firstName = prompt ('Введите Ваше имя:', 'Антон');
user.lastName = prompt('Введите Вашу фамилию','Геут');
user.birthDay = prompt('Введите Ваш день рождения','01.01.1901');
user.phones.push(prompt('Введите Ваш телефон', '123456789'));
user.phones.push(prompt('Введите Ваш второй телефонный номер', ''));
users.push(user);
}
function presentation() {
for (var i = 0; i < users.length; i++) {
    console.log('Контрагент ' + (i + 1) + '\n' + users[i].firstName + ';' + users[i].lastName + ';' + users[i].birthDay + ';' + users[i].phones.join('/'));
}
}
inputHuman();
presentation();