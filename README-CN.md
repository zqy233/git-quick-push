## [EN](https://github.com/zqy233/git-quick-push/blob/master/README.md) | 中文

> 用于git commit的nodejs脚本，为git commit文本添加emoji规范前缀
>
> 是这两者的结合：
>
> https://gitmoji.dev/
>
> https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit

| emoji | emoji 代码   | commit                                  |
| ----- | ------------ | --------------------------------------- |
| 🎉     | `:tada:`     | first commit :                          |
| ✨     | `:sparkles:` | A new feature                           |
| 🐛     | `:bug:`      | fix bug :                               |
| 💄     | `:lipstick:` | update ui and style files :             |
| 🔥     | `:fire:`     | remove code or file :                   |
| 🎨     | `:art:`      | improve code structure or code format : |
| ⚡     | `:zap:`      | improve performance :                   |
| 📝     | `:memo:`     | document writing :                      |

Use `chore:`  instead of `build:`

| emoji                 | emoji 代码              | commit message | 含义                           |
| --------------------- | ----------------------- | -------------- | ------------------------------ |
| :art:                 | `:art:`                 | chore:         | 影响打包系统或外部依赖项的更改 |
| :construction_worker: | `:construction_worker:` | ci:            | 对CI配置文件和脚本的更改       |
| 📝                     | `:memo:`                | docs:          | 文档更改                       |
| ✨                     | `:sparkles:`            | feat:          | 新特性                         |
| 🐛                     | `:bug:`                 | fix:           | bug修复                        |
| ⚡                     | `:zap:`                 | perf:          | 性能提升                       |
| 🔥                     | `:fire:`                | refactor:      | 代码重构，比如变量重命名       |
| :white_check_mark:    | `:white_check_mark:`    | test:          | 测试文件更改                   |
| 💄                     | `:lipstick:`            | ui:            | 更新前端css样式                |
| :bookmark:            | `:bookmark:`            | release:       | 发布版本                       |

## 用法

```bash
npm i -g git-quick-push
```

```bash
git-push list
```

## 注意

在选择了emoji规范前缀后会脚本会直接执行`git add .` 和`git commit`
