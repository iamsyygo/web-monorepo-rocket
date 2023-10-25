# 🚀 vite & rollup 插件指南

> 摘自官网
> 相当数量的 Rollup 插件将直接作为 Vite 插件工作（例如：@rollup/plugin-alias 或 @rollup/plugin-json），但并不是所有的，因为有些插件钩子在非构建式的开发服务器上下文中没有意义
>
> -   **这意味着，尽管 Vite 使用了 Rollup 作为其构建工具，但并不是所有的 Rollup 插件都可以直接用作 Vite 插件。这是因为 Vite 的开发服务器上下文与 Rollup 的构建上下文不同，因此某些 Rollup 插件的钩子在 Vite 的开发服务器上下文中可能没有意义。但是，一些 Rollup 插件（如 @rollup/plugin-alias 或 @rollup/plugin-json）可以直接用作 Vite 插件，因为它们的钩子在 Vite 的开发服务器上下文中也有意义。**
> -   在 Vite 的开发服务器上下文中，它使用了一种名为“模块热替换”（HMR）的技术，它允许在不刷新整个页面的情况下更新模块。因此，一些 Rollup 插件的钩子在 Vite 的开发服务器上下文中也有意义，因为它们可以与 HMR 技术一起使用，从而提供更好的开发体验。例如，@rollup/plugin-alias 可以用于在开发服务器上动态地重定向模块的导入路径，而 @rollup/plugin-json 可以用于在开发服务器上动态地加载 JSON 文件。

可以像 Vite 插件一样工作的 Rollup 插件标准：

-   没有使用`moduleParsed`钩子，因为它在 Vite 的开发服务器上下文中没有意义(不会被 Vite 在开发服务器上调用)
-   打包钩子和输出钩子(`transform、generateBundle`)之间没有很强的耦合，在 Vite 的开发服务器上下文中也有意义，因为它们可以与 HMR 技术一起使用，从而提供更好的开发体验

> 举个例子，假设有一个 Rollup 插件，它在打包钩子中生成了一些额外的文件，然后在输出钩子中使用这些文件。这个插件在 Vite 的开发服务器上下文中可能无法正常工作，因为它生成的文件可能无法及时地传递给浏览器。因此，这个插件在打包钩子和输出钩子之间有很强的耦合，不能直接用作 Vite 插件。相反，如果一个 Rollup 插件只是在打包钩子中修改了模块的 AST，然后在输出钩子中将其转换为代码，那么它就可以更容易地适应 Vite 的开发服务器上下文，因为它在打包钩子和输出钩子之间没有很强的耦合。

### virtual module

模块的内容本身并不是直接存储在磁盘中，而是内存中，因为它本身并不存在，而是在编译的时候动态生成的

> 摘自官网
> 在内部，使用虚拟模块的插件在解析模块 ID 时应以 \0 为前缀，这是一个来自 Rollup 生态系统的惯例。这可以防止其他插件试图处理这个 ID（如节点解析），而像 sourcemap 这样的核心功能可以使用这些信息来区分虚拟模块和普通文件。\0 在导入的 URL 中不是一个允许的字符，所以我们必须在导入分析中替换它们。在浏览器中，一个 0{id} 的虚拟 ID 最终被编码为 /@id/**x00**{id}。在进入插件处理管道之前，这个 ID 会被解码回来。所以这个过程在插件钩子代码中将是不可见的。

举个例子，假设有一个使用虚拟模块的插件，它的虚拟模块 ID 是 0my-module。为了防止其他插件处理这个 ID，插件应该在解析模块 ID 时以 \0 为前缀，即 \0my-module。然后，在导入分析中，这个 ID 会被替换为 /@id/**x00**my-module。在浏览器中，这个虚拟 ID 最终会被编码为 /@id/**x00**my-module。在进入插件处理管道之前，这个 ID 会被解码回来，变成 \0my-module。这个过程在插件钩子代码中将是不可见的，但是它确保了虚拟模块的 ID 不会被其他插件处理，并且核心功能（如 sourcemap）可以使用这些信息来区分虚拟模块和普通文件。
[**虚拟模块插件**](https://juejin.cn/post/6997676637080780814)

注意的是 load 返回的内容是一个字符串，这些字符串生成一个虚拟文件，所以这些内容需要对应导入模块的内容，供模块导入，解析

### 虚拟文件 ts 支持

如果代码结构是确定的可以提前生成对应的 d.ts 定义文件，通过 tsconfig 中配置 `compilerOptions.types` 加载对应的定义文件即可。如果代码结构是动态的，那么就需要动态生成对应的 d.ts 文件写入到项目中来实现

```typescript
declare module 'virtual:xxx' {
    // some code
}
```

### 通用钩子

以下钩子在服务器启动时被调用：

-   `options`
-   `buildStart`

以下钩子会在每个传入模块请求时被调用：

-   `resolveId`
-   `load`
-   `transform`

具体来说，resolveId 钩子会在解析模块 ID 时被调用，它允许插件将模块 ID 解析为实际的文件路径或者虚拟模块 ID。load 钩子会在加载模块时被调用，它允许插件从文件系统、网络或者其他来源加载模块的内容。transform 钩子会在将模块的源代码转换为 JavaScript 代码时被调用，它允许插件修改模块的 AST 或者进行其他的转换操作

以下钩子在服务器关闭时被调用：

-   `buildEnd`
-   `closeBundle`

### Vite 独有钩子

-   `config`
-   `configResolved`
-   `configureServer`
-   `transformIndexHtml`
-   `handleHotUpdate`

### 插件顺序

-   `Alias` 插件应该在 `@rollup/plugin-node-resolve` 之前使用，因为它们可能会影响到模块的解析
-   带有 `enforce: 'pre'` 的用户插件
-   `@rollup/plugin-node-resolve`
-   Vite 核心插件，如 `@vitejs/plugin-vue`、`@vitejs/plugin-react`、`@vitejs/plugin-legacy` 等，用于处理特定类型的文件
-   没有 enforce 值的用户插件，按照它们在 `plugins` 数组中的顺序执行
-   Vite 构建用的插件，如 `@vitejs/plugin-vue-jsx`、`@vitejs/plugin-vue-jsx`、`@vitejs/plugin-vue-i18n` 等，用于处理特定类型的文件
-   带有 enforce: 'post' 的用户插件
-   Vite 后置构建插件（最小化，manifest，报告）

### normalizePath 用于规范化路径

解决不同平台下路径的差异，如 Windows 下的路径是 `C:\foo\bar`，而在 Unix 下是 `/foo/bar`，这样就会导致在不同平台下的路径不一致，所以需要使用 normalizePath 来规范化路径

```typescript
import { normalizePath } from 'vite';
```
