const regExp = {
	title: /^Title: ([a-zA-z0-9 ,:.\-_=]+)$/,
	year: /^Release Year: ([0-9]+)$/,
	format: /^Format: ([a-zA-z\-]+)$/,
	stars: /^Stars: ([a-zA-z ,.'\-]+)+$/
};

export function getTitle(str) {
	const res = regExp.title.exec(str);
	return res ? res[1] : '';
}

export function getYear(str) {
	const res = regExp.year.exec(str);
	return res ? res[1] : '';
}

export function getFormat(str) {
	const res = regExp.format.exec(str);
	return res ? res[1] : '';
}

export function getStars(str) {
	const res = regExp.stars.exec(str);
	return res ? res[1].split(', ') : '';
}