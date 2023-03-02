## [EN](https://github.com/zqy233/git-quick-push/blob/master/README.md) | 中文

> 用于git commit的nodejs脚本，为git commit文本添加emoji规范前缀

| emoji | emoji 代码   | commit                                  |
| ----- | ------------ | --------------------------------------- |
| 🎉     | `:tada:`     | first commit :                          |
| ✨     | `:sparkles:` | new feature :                           |
| 🐛     | `:bug:`      | fix bug :                               |
| 💄     | `:lipstick:` | update ui and style files :             |
| 🔥     | `:fire:`     | remove code or file :                   |
| 🎨     | `:art:`      | improve code structure or code format : |
| ⚡     | `:zap:`      | improve performance :                   |
| 📝     | `:memo:`     | document writing :                      |

## 用法

```bash
npm i -g git-quick-push
```

```bash
git-push list
```

## 注意

在选择了emoji规范前缀后会脚本会直接执行`git add .` 和`git commit`
