let board = []

function play(clickedId) {
    let  clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player')

    if (clickedElement.innerText === '') {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O'
            clickedElement.innerText = 'X'
            board[clickedId] = 'X'
        } else if (playerSpan.innerText === 'O') {
            playerSpan.innerText = 'X'
            clickedElement.innerText = 'O'
            board[clickedId] = 'O'
        }
    }
    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let centerLeft = board[3]
    let centerCenter = board[4]
    let centerRight = board[5]
    let bottomLeft = board[6]
    let bottomCenter = board[7]
    let bottomRight = board[8]
    
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`The winner is Player ${topLeft}!`)
        return stopGame()
    }
    if (centerLeft !== undefined && centerLeft === centerCenter && centerLeft === centerRight) {
        alert(`The winner is Player ${centerLeft}!`)
        return stopGame()
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`The winner is Player ${bottomLeft}!`)
        return stopGame()
    }
    if (topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft) {
        alert(`The winner is Player ${topLeft}!`)
        return stopGame()
    }
    if (topCenter !== undefined && topCenter === centerCenter && topCenter === bottomCenter) {
        alert(`The winner is Player ${topCenter}!`)
        return stopGame()
    }
    if (topRight !== undefined && topRight === centerRight && topRight === bottomRight) {
        alert(`The winner is Player ${topRight}!`)
        return stopGame()
    }
    if (topLeft !== undefined && topLeft === centerCenter && topLeft === bottomRight) {
        alert(`The winner is Player ${topLeft}!`)
        return stopGame()
    }
    if (topRight !== undefined && topRight === centerCenter && topRight === bottomLeft) {
        alert(`The winner is Player ${topRight}!`)
        return stopGame()
    }

    let boardFull = true
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's Game")
    }
}

function reset() {
   let boxes = document.getElementsByTagName('td')
   board = []
   for (let i = 0; i < boxes.length; i++) {
       boxes[i].innerText = ''
       boxes[i].setAttribute('onclick', 'play(' + i + ')')
       console.log(boxes[i]['onclick'])
   }
}

function stopGame() {
    let end = document.getElementsByTagName('td')
        for (let i = 0; i < end.length; i++) {
            end[i]['onclick'] = ''
            console.log(end[i]['onclick'])
        }
}