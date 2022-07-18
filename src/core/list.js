const ora = require("ora")
const shell = require("shelljs")
const lolcat = require("@darkobits/lolcatjs")
const inquirer = require("inquirer")
const { emojiArr, commitArr } = require("../choices")

const run = command => {
  const loading = ora("").start()
  shell.exec(command)
  loading.succeed("command finished")
  list()
}
const gitCheckout = async () => {
  const { input } = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: lolcat.fromString("input branch name :")
    }
  ])
  run(`git checkout -b ${input}`)
}

const gitCommit = async () => {
  shell.exec("git add .")
  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: lolcat.fromString("please select the commit category"),
      choices: commitArr
    }
  ])
  const { input } = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: lolcat.fromString("full details :")
    }
  ])
  run(`git commit -m "${emojiArr[commitArr.indexOf(type)]}${input ? type + ": " + input : type}"`)
}

const gitRemote = async () => {
  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: lolcat.fromString("select remote command"),
      choices: ["git remote -v", "git remote add origin", "git remote set-url origin"]
    }
  ])
  if (type === "git remote -v") {
    return run(type)
  }
  const { input } = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: lolcat.fromString("repository url:")
    }
  ])
  run(`${type} ${input}`)
}

const list = async () => {
  const { git } = await inquirer.prompt([
    {
      type: "list",
      name: "git",
      message: lolcat.fromString("please choose git commands"),
      choices: ["git init", "git branch", "git checkout -b", "git remote", "git commit", "git pull", "git push", "git merge --no-ff"]
    }
  ])
  if (!shell.which("git")) {
    shell.echo("Sorry, you need download git first")
    return shell.exit(1)
  }
  switch (git) {
    case "git init":
      run(git)
      break
    case "git branch":
      run(git)
      break
    case "git checkout -b":
      gitCheckout()
      break
    case "git pull":
      run(git)
      break
    case "git push":
      run(git)
      break
    case "git commit":
      gitCommit()
      break
    case "git remote":
      gitRemote()
      break
    case "git merge --no-ff":
      run(git)
  }
}

module.exports = list
