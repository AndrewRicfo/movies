import * as regExp from './regExp';

export function parseFileString(fileString) {
	const chunks = fileString
		.split('\r\n\r\n') //split by films
		.map((item) => item
			.split('\r\n')
			.map((subItem) => subItem.trim())
		) //split by film props
		.filter((item) => item.length === 4); //remove trash

	return chunks.map((chunk) => {
		return {
			title: regExp.getTitle(chunk[0]),
			year: regExp.getYear(chunk[1]),
			format: regExp.getFormat(chunk[2]),
			starring: regExp.getStars(chunk[3])
		};
	});
}