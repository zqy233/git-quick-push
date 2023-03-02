import figlet from "figlet"
import inquirer from "inquirer"

function showLogo () {
  const text = figlet.textSync("git-quick-push")
  const textColor = lolcat.fromString(text)
  console.log(textColor)
}

module.exports = showLogo
