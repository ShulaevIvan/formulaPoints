const findCords = (x, y, angle, distance) => {
    const result = {};

    result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
    result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);

    return result;
}

const testPoint = findCords(10, 20, 10, 200);
console.log('testpoint:', testPoint);