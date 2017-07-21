/*  roshambo.js by David Jerome @GlassToeStudio - GlassToeStudio@gmail.com

    19 July, 2017
    https://github.com/GlassToeStudio
    http://glasstoestudio.weebly.com/
    https://twitter.com/GlassToeStudio

    ------------------------------------------------------------------------
    Play a game of paper, rock, scissors with the bot.
    Input is received from user by the !roshambo <arg> command.
    Bot randomly selects a play.
    Results are return and displayed in the message channel.

    Usage:
      !roshambo (rock or r, paper or p, scissors or s)

    Example:
      !roshambo scissors

      Rock.. Paper.. Scissors.. SHOOT: 👊

    ------------------------------------------------------------------------
    // 🖖 for later use :D
*/

const Confax = require('../bot.js')
const allMoves = [
  'rock', 'r', '✊', '🤜', '🤜', '👊',
  'paper', 'p', '✋', '🖐', '📄', '📃', '🗒',
  'scissors', 's', '✌', '✂'
]
const mojiMoves = [' 👊', ' ✋', ' ✌']

Confax.registerCommand('roshambo', 'default', (message) => {
  let userMove = message.content.toLowerCase()
  userMove = allMoves.indexOf(userMove) >= 0 ? userMove : null
  if (userMove == null) {
    return '***' + message + '***' + ' is not a valid move.\n\n `Please use:  ` ' + allMoves.join(', ')
  } else {
    message.channel.send('Rock.. Paper.. Scissors.. SHOOT: ' + mojiMoves[Math.floor(Math.random() * 3)])
  }
}, allMoves, 'Play Rock-Paper-Scissors! !roshambo rock', '[]')
