const myDeck = {
	deck: [],
	drawnCards: [],
	suits: [ `hearts`, `diamonds`, `spades`, `clubs` ],
	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	initializeDeck() {
		// We can destructure the values from the current object
		const { suits, values, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
		// We don't actually need to return anything since we are updating the object
		//return deck;
	},
	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card; //return this.drawnCards.push(this.deck.pop());
	}
};
