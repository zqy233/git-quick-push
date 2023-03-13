## EN | [中文](https://github.com/zqy233/git-quick-push/blob/master/README-CN.md)

> > Node.js script for git commit, add emoji specification prefix to git commit message
>
> Combination of the two:
>
> https://gitmoji.dev/
>
> https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit

Use `chore:` instead of `build:` in angular and use `:wrench:` emoji

| emoji                 | emoji                   | commit message | mean                                                                                 |
| --------------------- | ----------------------- | -------------- | ------------------------------------------------------------------------------------ |
| :wrench:              | `:wrench:`              | chore:         | Changes that affect the build system or external dependencies                        |
| :construction_worker: | `:construction_worker:` | ci:            | Changes to CI configuration files and scripts                                        |
| 📝                    | `:memo:`                | docs:          | Documentation only changes                                                           |
| ✨                    | `:sparkles:`            | feat:          | A new feature                                                                        |
| 🐛                    | `:bug:`                 | fix:           | A bug fix                                                                            |
| ⚡                    | `:zap:`                 | perf:          | A code change that improves performance                                              |
| 🔥                    | `:fire:`                | refactor:      | A code change that neither fixes a bug nor adds a feature , e.g. renaming a variable |
| :white_check_mark:    | `:white_check_mark:`    | test:          | Adding missing tests or correcting existing tests                                    |
| 💄                    | `:lipstick:`            | ui:            | Add or update the UI and style files                                                 |
| :art:                 | `:art:`                 | style:         | Improve structure / format of the code                                               |
| :bookmark:            | `:bookmark:`            | release:       | Release / Version tags                                                               |

## Usage

```bash
npm i -g git-quick-push
```

```bash
git-push list
```

After select `git commit`, the list of commit message prefixes will be displayed，just choose

## Note

it will run `git add .` every time after you choose commit message prefixe
