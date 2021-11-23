const cats = [
	{
		name: 'Calico',
		breed: 'Domestic Short Hair',
		colors: [ 'white', 'brown', 'Black' ],
		weight: 8,
		pattern: 'Calico'
	},
	{
		name: 'Babs',
		breed: 'Domestic Short Hair',
		colors: [ 'brown', 'Black' ],
		weight: 8,
		pattern: 'Tabby'
	},
	{
		name: 'Rory',
		breed: 'Domestic Short Hair',
		colors: [ 'Silver' ],
		weight: 8,
		pattern: 'Tabby'
	},
	{
		name: 'Yaya',
		breed: 'Domestic Short Hair',
		colors: [ 'Silver' ],
		weight: 8,
		pattern: 'Tabby'
	}
];
// Check to see if every cat weighs 8 lbs
const doTheyWeighTheSame = cats.every((cat) => {
	return cat.weight === 8;
});
console.log(doTheyWeighTheSame);

// Do they all have a tabby coat
const areTheyAllTabbies = cats.every((cat) => cat.pattern === 'Tabby');
console.log(areTheyAllTabbies);

// Do any of them include Silver in the colors array
const areSomeOfThemSilver = cats.some((cat) => cat.colors.includes('Silver'));
console.log(areSomeOfThemSilver);

//
const areSomeOfThemOrange = cats.some((cat) => cat.colors.includes('Orange'));
console.log(areSomeOfThemOrange);

const votes = [ 'y', 'n', 'y', 'absent', 'y', 'n', 'n', 'y', 'y' ];
const results = votes.reduce((tallyObject, currentValue) => {
	if (tallyObject[currentValue]) {
		// If the vote exists, increment
		tallyObject[currentValue]++;
	} else {
		// If it doesn't, add and set to 1
		tallyObject[currentValue] = 1;
	}
	return tallyObject;
}, {});
console.log(results);

// This takes advantage of boolean logic
// If tally[val] exists, the left side will be true
// And then 1 is added. If it doesn't exist, it will be
// undefined and 0 will be true
const shorterResults = votes.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});
console.log(shorterResults);
