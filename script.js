const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

const getPlayerChoice = () => {
    return prompt("Enter choice (rock, paper, scissor)").toLowerCase()
}

const getComputerChoice = () => {
    return ["rock", "paper", "scissors"][getRandomNumber(3)]
}

const playRound = (playerChoice, computerChoice) => {
    let winner

    if (playerChoice === "rock" && computerChoice === "paper")
        winner = "computer"
    else if (playerChoice === "rock" && computerChoice === "scissors")
        winner = "player"

    if (playerChoice === "paper" && computerChoice === "rock") 
        winner = "player"
    else if (playerChoice === "paper" && computerChoice === "scissors")
        winner = "computer"

    if (playerChoice === "scissors" && computerChoice === "rock")
        winner = "computer"
    else if (playerChoice === "scissors" && computerChoice === "paper")
        winner = "player"

    return winner
}

const updateScores = (scores, roundWinner) => {
    if (roundWinner === "player") scores.player++
    else if (roundWinner === "computer") scores.computer++
}

const outputGameWinner = (playerScore, computerScore) => {
    if (playerScore > computerScore)
        console.log("%c Player Won!", "color: limegreen")
    else if (computerScore > playerScore)
        console.log("%c Computer Won!", "color: crimson")
    else console.log("%c Tie!", "color: gold")
}

const startRPSGame = (rounds = 1) => {
    let scores = { player: 0, computer: 0 }

    for (let i = 0; i < rounds; i++) {
        const playerChoice = getPlayerChoice()
        const computerChoice = getComputerChoice()

        const roundWinner = playRound(playerChoice, computerChoice)
        updateScores(scores, roundWinner)
    }
    outputGameWinner(scores.player, scores.computer)
}

startRPSGame(5)
