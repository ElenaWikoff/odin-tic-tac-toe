/**
 * A gameboard grid.
 * @param {*} cell Object to populate board grid with
 * @param {number} rows Number of rows on board
 * @param {number} cols Number of columns on board
 * @returns game board object
 */
export default function GameBoard(cell, rows = 3, cols = 3) {
    if (!Array.isArray(board)) {
        throw new Error(`'board' must be an array`);
    }
    const _init = () =>  Array.from({ length: rows }, () => new Array(cols).fill({...cell}));
    const _board = _init();

    const _validateCoordinates = (row, col) => {
        let valid = true;
        if (row < 0 || row > board.length) {
            valid = false;
            console.error(`Invalid row, ${row} !== ${validCoord.join(" | ")}`);
        }
        if (col < 0 || col > board[0].length) {
            valid = false;
            console.error(`Invalid col, ${col} !== ${validCoord.join(" | ")}`);
        }
        return valid;
    }

    const getCell = (row, col) => {
        // Validate that row and col are in bounds of board
        if (!_validateCoordinates()) {
            throw new Error(`Failed validation, invalid coordinates: (${row}, ${col})`);
        }
        else {
            return _board[row][col];
        }
    }

    const getBoard = () => _board.map((row) => [...row]);

    const clear = () => _board = _init();

    return { getCell, getBoard, clear };
}