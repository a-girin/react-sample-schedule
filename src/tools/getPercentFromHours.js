export default function getPercentFromHours(value) {
	return `${value / 1000 / 3600 / 24 * 100}%`;
}
