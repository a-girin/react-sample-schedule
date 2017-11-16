export default function scrollTo(selector) {
	document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}
