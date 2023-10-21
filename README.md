# 🏕️ monorepo

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
