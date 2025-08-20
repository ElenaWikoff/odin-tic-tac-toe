/**
 * A gameboard grid.
 * @param {[*]} board Initial board array
 * @returns game board object
 */
export default function GameBoard(board) {
    if (!Array.isArray(board)) {
        throw new Error(`'board' must be an array`);
    }
    const _board = board;

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

    const clear = () => _board = board;

    return { getCell, clear };
}