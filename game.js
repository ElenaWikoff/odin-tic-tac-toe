import Cell from "./Cell.js";
import GameBoard from "./GameBoard.js";

const gamestate = (function () {
    const _gameboard = GameBoard(Cell, 3, 3);
    const _states = ["", "✕", "◯", "draw"]
    let _state = 0;
    const _players = ["✕", "◯"];
    let _currPlayer = 0;

    /**
     * Determine if Tic Tac Toe game has ended
     * @returns 0: keep playing, 1: ✕ wins, 2: ◯ wins, and 3: draw
     */
    const _gameOver = () => {
        let winner = 0;
        const cell = _gameboard.getCell;

        // Check if winner
        const winConditions = [
            [[0, 0], [0, 1], [0, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[1, 0], [1, 1], [1, 2]],
            [[0, 1], [1, 1], [2, 1]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]],
        ];
        winConditions.forEach((cond) => {
            const currCell = cell(...cond[0]);
            if (currCell.getMark() &&
                currCell.equals(cell(...cond[1])) &&
                currCell.equals(cell(...cond[2]))) {
                winner = _states.indexOf(cell(...cond[0]).getMark());
                return;
            }
        });

        if (!winner) {
            // Check if game can still be played
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    // If there is cell not marked, keep playing
                    if (!cell(r, c).isMarked()) {
                        return 0; // keep playing
                    }
                }
            }
            return 3; // draw
        }
        return winner;
    };

    const mark = (row, col) => {
        if (_state === 0) {
            const cell = _gameboard.getCell(row, col);
            if (cell.isMarked()) {
                console.log(`Cell (${row}, ${col}) already marked with: '${cell.getMark()}'.`);
            } else {
                // Mark cell with symbol of current player: '✕' or '◯'
                cell.addMark(_players[_currPlayer]);
                // Update state of game
                _state = _gameOver();
                // Switch current player
                _currPlayer ^= 1;
            }
        }
    }

    const getState = () => _states[_state];

    const getCurrentPlayer = () => _players[_currPlayer];

    const reset = () => {
        _currPlayer = 0;
        _gameboard.clear();
    }

    const toString = () => {
        let output = "";
        switch (_state) {
            case 0: output += `Turn: ${getCurrentPlayer()}\n`; break;
            case 1:
            case 2: output += `${_states[_state]} wins!\n`; break;
            case 3:
            default: output += "Draw\n";
        }
        return output += _gameboard.toString();
    }

    return { mark, getState, getCurrentPlayer, reset, toString };
})();