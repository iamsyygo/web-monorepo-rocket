import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'aoe docs.',
    description: 'A document about aoe engineering architecture specifications.',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        // ['script', { src: '' }],
    ],
    themeConfig: {
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '文档 📚', link: '/documents' },
            { text: '规范 💡', link: '/specs' },
        ],
        sidebar: [
            {
                text: '规范',
                items: [
                    { text: 'vue 组件的命名规范', link: '/specs/vue-file-name' },
                    { text: 'git 提交规范', link: '/specs/git-commit' },
                ],
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/iamsyygo' }],
    },
});
