/**
 * Tic Tac Toe Cell factory function
 * @param {string | undefined} mark Character symbol marked on cell
 * @returns cell object
 */
export default function Cell(mark = undefined) {
    // `mark` must be undefined or be only 1 character 
    if (mark !== undefined && mark.length !== 1) {
        throw new Error(`Symbol must be one character: ${mark}`);
    }
    let _mark = mark;

    const isMarked = () => _mark ? true : false;
    const getMark = () => _mark;
    const addMark = (value) => {
        if (value.length !== 1) {
            throw new Error(`Symbol must be one character: ${value}`);
        }
        _mark = "" + value;
    };
    const clear = () => _mark = undefined;
    const equals = (other) => _mark === other.getMark();
    const toString = () => "" + _mark;

    return { isMarked, getMark, addMark, clear, equals, toString }
}