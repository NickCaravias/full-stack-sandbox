

const getNewChessBoard = async (req, res) => {
    var clean_board = {
        row_1: {left: 0, middle: 0, right: 0}, 
        row_2: {left: 0, middle: 0, right: 0}, 
        row_3: {left: 0, middle: 0, right: 0}
    } 

    return res.status(200).json(clean_board);
}

module.exports = {
    getNewChessBoard
}