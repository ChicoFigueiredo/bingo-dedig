module.exports = {
    arrayBingo: () => {
        const usedNums = new Array(76);
        const cardBingo = new Array(25);
        for (let i = 1; i < usedNums.length; i++) {
            usedNums[i] = false;
        }
        let deflator = 0;
        for (let i = 0; i < 25; i++) {
            if (i === 13) {
                cardBingo[i] = -1; // Espaço FREE
                deflator++;
            } else {
                const numero = setSquare(i - deflator);
                cardBingo[i] = {
                    numero: numero,
                    marcadoSistema: false,
                    marcadoUsuario: false,
                    linha: Math.floor(i / 5),
                    coluna: i % 5 + 1
                }
            }
        }

        return cardBingo;

        function setSquare(thisSquare) {
            const colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);
            const colBasis = colPlace[thisSquare] * 15;
            let newNum = colBasis + getNewNum() + 1;

            do {
                newNum = colBasis + getNewNum() + 1;
            } while (usedNums[newNum]);

            usedNums[newNum] = true;
            return newNum;
        }

        function getNewNum() {
            return Math.floor(Math.random() * 15);
        }


    }
}