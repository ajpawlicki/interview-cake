var myRectangle = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // width and height
  width: 6,
  height: 3,

};

const findXOverlap = (rectangle1, rectangle2) => {
  // left = max of two lefts
  const highestStartPoint = Math.max(rectangle1.leftX, rectangle2.leftX);
  // right = min of two rights
  const lowestEndPoint = Math.min(rectangle1.leftX + rectangle1.width, rectangle2.leftX + rectangle2.width);
  
  // no overlap if left's right is less than right's left
  if (highestStartPoint >= lowestEndPoint) return null;

  return {
    startPoint: highestStartPoint,
    width: lowestEndPoint - highestStartPoint
  };
};

const findRectangularOverlap = (rectangle1, rectangle2) => {
  const highestLeft = Math.max(rectangle1.leftX, rectangle2.leftX);
  const lowestRight = Math.min(rectangle1.leftX + rectangle1.width, rectangle2.leftX + rectangle2.width);

  const highestBottom = Math.max(rectangle1.bottomY, rectangle2.bottomY);
  const lowestTop = Math.min(rectangle1.bottomY + rectangle1.height, rectangle2.bottomY + rectangle2.height);

  if (highestLeft >= lowestRight || highestBottom >= lowestTop) return null;

  return {
    leftX: highestLeft,
    bottomY: highestBottom,
    width: lowestRight - highestLeft,
    height: lowestTop - highestBottom
  };
};
