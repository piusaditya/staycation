//* Thousand separator (titik untuk nilai ribuan)
export default (number) => {
	const formatNumbering = new Intl.NumberFormat("id-ID");
	return formatNumbering.format(number);
};
