// * I know this isn't a great shuffle implimentation - I should revisited this
export const shuffleArray = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);
