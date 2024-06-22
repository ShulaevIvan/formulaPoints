const X = 500;
const Y = 500;

const arr = [
	{ length: 1665, corner: 0 },
	{ length: 947, corner: 90 },
	{ length: 557, corner: 0 },
	{ length: 1300, corner: 90 },
	{ length: 2225, corner: 180 },
	{ length: 2239, corner: 270 },
];

const findCords = (angle, distance) => {
	const result = {};

	result.x = Math.round(Math.cos((angle * Math.PI) / 180) * distance);
	result.y = Math.round(Math.sin((angle * Math.PI) / 180) * distance);

	return result;
};

const arrResultCords = arr.map((item) => {
	const calcLengthSM = item.length / 10;
	return findCords(item.corner, calcLengthSM);
});

const genCordStr = (cordArr=[], str='') => {
	cordArr.forEach((item, i) => {
		console.log(cordArr)
		if (i > 0) str += ` ${cordArr[i-1].x + item.x},${cordArr[i-1].y + item.y}`;
		else str += ` ${item.x},${item.y}`;
	});
	return str;
};


const polylineSvg = document.querySelector("svg");

const points = `<polyline
            points="${genCordStr(arrResultCords)}"
            fill="none" stroke="orangered" stroke-width="5"
        />`;

polylineSvg.innerHTML = points;
