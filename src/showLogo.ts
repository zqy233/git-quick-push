import figlet from 'figlet'
import lolcat from '@darkobits/lolcatjs'

function showLogo() {
  const text = figlet.textSync('git-quick-push')
  const textColor = lolcat.fromString(text)
  console.log(textColor)
}

export default showLogo
