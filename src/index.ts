import { Command } from 'commander'
import showLogo from './showLogo'
import list from './list'

// show a beautiful logo "git-quick-push"
showLogo()
const program = new Command()
program
  .command('list')
  .description('show a list of git commands')
  .action(() => {
    list()
  })

program.version('1.0.26').parse(process.argv)
