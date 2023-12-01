type Fn = (rect: DOMRect, targ: HTMLDivElement) => void;
export declare const useBoundingClientRect: (targ: HTMLDivElement | null, cb?: Fn) => {
    onClick: (e: MouseEvent) => void;
};
export {};
