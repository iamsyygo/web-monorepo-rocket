type Fn = (rect: DOMRect, targ: HTMLDivElement) => void;

export const useBoundingClientRect = (targ: HTMLDivElement | null, cb?: Fn) => {
    if (targ) {
        targ.style.position = 'fixed';
        targ.style.zIndex = '999';
    }

    const onClick = (e: MouseEvent) => {
        console.log(e);

        // 绑定事件的元素
        const t = e.currentTarget as HTMLDivElement;

        const rect = t.getBoundingClientRect();

        if (!targ) return;

        if (cb) {
            cb(rect, targ);
            return;
        }

        targ.style.left = `${rect.left}px`;
        targ.style.top = `${rect.top + rect.height}px`;
    };

    return {
        onClick,
    };
};
