import { Plugin, AppContext, Directive } from 'vue';

type SFCWithInstall<T> = T & Plugin;
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};

declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
declare const withInstallDirective: <T extends Directive>(directive: T, name: string) => SFCWithInstall<T>;
declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;

export {
    type SFCInstallWithContext,
    type SFCWithInstall,
    withInstall,
    withInstallDirective,
    withInstallFunction,
    withNoopInstall,
};
