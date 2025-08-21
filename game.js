import Cell from "./Cell.js";
import GameBoard from "./GameBoard.js";

const gamestate = (function () {
    const gameboard = GameBoard(
        [[Cell(), Cell(), Cell()],
        [Cell(), Cell(), Cell()],
        [Cell(), Cell(), Cell()]]
    );
    const _playerOne = "✕";
    const _playerTwo = "◯"
    return {gameboard};
})();