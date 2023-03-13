const choices = [
  {
    emoji: ':art:',
    commit: 'chore:',
  },
  {
    emoji: ':construction_worker:',
    commit: 'ci:',
  },
  {
    emoji: ':memo:',
    commit: 'docs:',
  },
  {
    emoji: ':sparkles:',
    commit: 'feat:',
  },
  {
    emoji: ':bug:',
    commit: 'fix:',
  },
  {
    emoji: ':zap:',
    commit: 'perf:',
  },
  {
    emoji: ':fire:',
    commit: 'refactor:',
  },
  {
    emoji: ':white_check_mark:',
    commit: 'test:',
  },
  {
    emoji: ':lipstick:',
    commit: 'ui:',
  },
  {
    emoji: ':bookmark:',
    commit: 'release:',
  },
]
const emojiArr = choices.map(item => item.emoji)
const commitArr = choices.map(item => item.commit)
export { emojiArr, commitArr }
