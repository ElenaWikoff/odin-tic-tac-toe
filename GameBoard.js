/**
 * A 3x3 grid of cells for Tic Tac Toe.
 * @param {object} cell 
 * @returns game board object
 */
export default function GameBoard(cell) {
    const validCoord = [0, 1, 2];
    const _board = [[cell(), cell(), cell()], [cell(), cell(), cell()], [cell(), cell(), cell()]];

    const _validateCoordinates = (row, col) => {
        let valid = true;
        if (validCoord.includes(row)) {
            valid = false;
            console.error(`Invalid row, ${row} !== ${validCoord.join(" | ")}`);
        }
        if (validCoord.includes(col)) {
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

    const clear = () => _board = [[cell(), cell(), cell()], [cell(), cell(), cell()], [cell(), cell(), cell()]];

    return { getCell, clear };
}