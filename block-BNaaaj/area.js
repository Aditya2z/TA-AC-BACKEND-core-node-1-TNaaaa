// Function to calculate the area of a square
function calculateSquareArea(sideLength) {
  return sideLength * sideLength;
}

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

module.exports = {
    calculateSquareArea,
    calculateCircleArea,
    calculateRectangleArea,
}
