## EN | [中文](https://github.com/zqy233/git-quick-push/blob/master/README-CN.md)

> [Node.js](https://nodejs.org/en/) script for git commit, add emoji specification prefix to git commit message

| emoji | emoji        | commit message                          |
| ----- | ------------ | --------------------------------------- |
| 🎉    | `:tada:`     | first commit :                          |
| ✨    | `:sparkles:` | new feature :                           |
| 🐛    | `:bug:`      | fix bug :                               |
| 💄    | `:lipstick:` | update ui and style files :             |
| 🔥    | `:fire:`     | remove code or file :                   |
| 🎨    | `:art:`      | improve code structure or code format : |
| ⚡    | `:zap:`      | improve performance :                   |
| 📝    | `:memo:`     | document writing :                      |

## Usage

```bash
npm i -g git-quick-push
```

```bash
git-push list
```

After select `git commit`, the list of supported emoji specification prefixes will be displayed

## Note

it will run `git add .` every time after you choose the emoji specification prefix
