import ora from 'ora'
import shell from 'shelljs'
import lolcat from '@darkobits/lolcatjs'
import inquirer from 'inquirer'
import { emojiArr, commitArr } from './choices'

const run = (command: string) => {
  const loading = ora('').start()
  shell.exec(command)
  loading.succeed('command finished')
  list()
}
const gitCheckout = async () => {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: lolcat.fromString('please select the command'),
      choices: ['git checkout', 'git checkout -b'],
    },
  ])
  const { input } = await inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: lolcat.fromString('input branch name :'),
    },
  ])
  run(`${type} ${input}`)
}

const gitCommit = async () => {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: lolcat.fromString('please select the commit category'),
      choices: commitArr,
    },
  ])
  const { input } = await inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: lolcat.fromString('full details :'),
    },
  ])
  shell.exec('git add .')
  run(`git commit -m "${emojiArr[commitArr.indexOf(type)]}${input ? type + ': ' + input : type}"`)
}

const gitRemote = async () => {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: lolcat.fromString('select remote command'),
      choices: ['git remote -v', 'git remote add origin', 'git remote set-url origin'],
    },
  ])
  if (type === 'git remote -v') {
    return run(type)
  }
  const { input } = await inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: lolcat.fromString('repository url:'),
    },
  ])
  run(`${type} ${input}`)
}

const gitPush = async () => {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: lolcat.fromString('select push command'),
      choices: ['git push -u', 'git push'],
    },
  ])
  if (type === 'git push') {
    return run(type)
  }
  const { input } = await inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: lolcat.fromString('repository name and branch name:'),
    },
  ])
  run(`${type} ${input}`)
}

const gitMerge = async () => {
  const { input } = await inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: lolcat.fromString('merged branch name:'),
    },
  ])
  run(`git merge --no-ff ${input}`)
}

const list = async () => {
  const { git } = await inquirer.prompt([
    {
      type: 'list',
      name: 'git',
      message: lolcat.fromString('please choose git commands'),
      choices: [
        'git init',
        'git branch',
        'git checkout',
        'git remote',
        'git commit',
        'git pull',
        'git push',
        'git merge',
      ],
    },
  ])
  if (!shell.which('git')) {
    shell.echo('Sorry, you need download git first')
    return shell.exit(1)
  }
  switch (git) {
    case 'git init':
      run(git)
      break
    case 'git branch':
      run(git)
      break
    case 'git checkout':
      gitCheckout()
      break
    case 'git pull':
      run(git)
      break
    case 'git push':
      gitPush()
      break
    case 'git commit':
      gitCommit()
      break
    case 'git remote':
      gitRemote()
      break
    case 'git merge':
      gitMerge()
  }
}

export default list
