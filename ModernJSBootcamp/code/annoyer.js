const annoyer = {
	phrases: [ `Hela Bab`, `Cause she's a slim tab`, `when you're a slim bab, you're just a baby tab`, `it's babs!` ],
	pickPhrase() {
		const { phrases } = this;
		const index = Math.floor(Math.random() * phrases.length);
		return phrases[index];
	},

	oldStart() {
		setInterval(function() {
			var that = this;
			console.log(this.pickPhrase());
		}, 3000);
	},
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 2000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};
