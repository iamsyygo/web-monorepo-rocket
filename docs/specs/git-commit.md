# git 提交规范

git 规定提交时必须要写提交信息，作为改动说明，保存在 `commit` 历史中，方便回溯。规范的 `log` 不仅有助于他人 `review`, 还可以有效的输出 `CHANGELOG`，甚至对于项目的研发质量都有很大的提升。

## 提交信息格式

注意：`<type>(<scope>):` 和 `<message>` 之间有一个空格

```bash
<type>(<scope>): <message>
```

> -   `type` 用于说明 `commit` 的类别，只允许使用下面 11 个标识
> -   `scope` 用于说明 `commit` 影响的范围，比如`Button`组件，`Header`组件，`README.md` 等等。如果修改影响了不止一个范围，可以使用 `*` 代替
> -   `message` 是 `commit` 目的的简短描述，不超过 50 个字符

## type

提交的类型只允许使用下面 11 个标识

| type     | 说明                                              |
| -------- | ------------------------------------------------- |
| feat     | 新功能（feature）                                 |
| fix      | 修补 bug                                          |
| docs     | 文档（documentation）                             |
| style    | 格式（不影响代码运行的变动）                      |
| refactor | 重构（即不是新增功能，也不是修改 bug 的代码变动） |
| perf     | 性能优化                                          |
| test     | 增加测试                                          |
| chore    | 构建过程或辅助工具的变动                          |
| revert   | 回滚到上一个版本                                  |
| merge    | 合并分支                                          |
| ci       | 持续集成相关文件修改                              |

## 分支规范

### 分支类型

<!-- prettier-ignore -->
|   分支类型    | 说明                                                                                            |
|  --------    | ----------------------------------------------------------------------------------------------- |
| master       | 主分支(受保护)，用于存放对外发布的版本，任何时候都不能直接在该分支上开发                        |
| dev          | 开发分支，所有功能都在该分支上开发，该分支上的代码要能随时可供部署                              |
| feat         | 功能分支，从 `dev` 分支上拉出，用于开发一个新功能，开发完成后合并回 `dev` or `release` 进行测试 |
| release      | 预发布分支，从 `dev` 分支上拉出，用于合并项目各个功能分支进行合并提测，改 bug 等均在此分支进行，测试完成后合并回 `dev`   |
| hotfix       | 热修复分支，从 `master` 分支上拉出，用于修复线上 bug，修复完成后合并回 `master` 和 `dev`        |

```bash
# 从 dev 分支上拉出一个新的功能分支
git checkout -b feat/xxx dev
# 从 dev 分支上拉出一个新的预发布分支
git checkout -b release/xxx dev
# 从 master 分支上拉出一个新的热修复分支
git checkout -b hotfix/xxx master

# xxx 建议使用功能名称或 bug 编号
```

任何时候我们应该保持远程仓库仅有 `master` 和 `dev` 两个分支，其他分支都应该及时删除或保留在本地，不要推送到远程仓库。保持远程仓库的简洁性，避免分支混乱。

::: tip 使用 rebase 合并分支

尽可能的使用 `git rebase` 命令，避免使用 `git merge` 命令，保持分支的简洁性。

```bash
# 切换到 dev 分支
git checkout dev

# 拉取远程仓库最新代码
git pull origin dev

# 切换到功能分支
git checkout feat/xxx

# 合并 dev 分支
git rebase dev
```

:::

### Tag 规范

Tag 用于标记版本，每次发布版本时，都应该打一个 Tag，方便回溯版本。

Tag 格式：`v1.0.0` or `v1.0.0-beta.1` or `v1.0.0-alpha.1` or `v1.0.0-rc.1`

> -   `v` 为前缀，表示版本
> -   `1.0.0` 为版本号
> -   `beta.1` 为预发布版本号， `.1` 表示第一次预发布
> -   `alpha.1` 为内部测试版本号， `.1` 表示第一次内部测试
> -   `rc.1` 为候选版本号， `.1` 表示第一次候选版本

```bash
# 查看所有 Tag
git tag

# 新建一个 Tag
git tag v1.0.0

# 删除一个 Tag
git tag -d v1.0.0

# 推送一个 Tag 到远程仓库
git push origin v1.0.0

# ...
```
