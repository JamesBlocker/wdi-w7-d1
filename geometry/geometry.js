function diameter(radius) {
    return radius * 2;
}

function circumference(radius) {
    return diameter(radius) * Math.PI;
}

function circleArea(radius) {
    return Math.PI * (raidus * radius);
}

module.exports = {
    diameter: diameter,
    circumference: circumference,
    circleArea: circleArea
};