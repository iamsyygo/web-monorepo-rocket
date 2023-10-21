# 🚀 monorepo

🚀 monorepo for `aoe`

-   👑 基于 pnpm 的 monorepo
-   🛟 规范开发、协作效率、代码一致性
-   🏖️ 共享工程配置、依赖、模块代码
-   📖 提供开发文档、规范、示例...
-   ⏳ ...

### 📦 发布 workspace 包

发布 workspace 包时，无论是 `npm publish` 还是 `pnpm publish`，都会自动将 `workspace:*`、`workspace:~`、`workspace:^`、`workspace:^1.5.0` 等版本号转化正确的版本号。

```json
{
    "dependencies": {
        "foo": "workspace:*",
        "bar": "workspace:~",
        "qar": "workspace:^",
        "zoo": "workspace:^1.5.0"
    }
}
```

将会被转化为：

```json
{
    "dependencies": {
        "foo": "1.5.0",
        "bar": "~1.5.0",
        "qar": "^1.5.0",
        "zoo": "^1.5.0"
    }
}
```
