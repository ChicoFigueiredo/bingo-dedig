
export function arrayBingo() {
  const usedNums = new Array<boolean>(76);
  const cardBingo: Number[] = new Array<Number>(25);
  for (let i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }
  let deflator = 0;
  for (let i = 0 ; i < 25; i++) {
    if (i === 13) {
      cardBingo[i] = -1; // Espaço FREE
      deflator++;
    } else {
      cardBingo[i] = setSquare(i - deflator);
    }
  }

  return cardBingo;

  function setSquare(thisSquare) {
    const colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);
    const colBasis = colPlace[thisSquare] * 15;
    let newNum = colBasis + getNewNum() + 1;

    do {
      newNum = colBasis + getNewNum() + 1;
    } while ( usedNums[newNum] );

    usedNums[newNum] = true;
    return newNum;
  }

  function getNewNum() {
    return Math.floor(Math.random() * 15);
  }


}
