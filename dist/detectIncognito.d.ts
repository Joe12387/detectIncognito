declare global {
    interface Window {
        detectIncognito: typeof detectIncognito;
    }
}
declare function detectIncognito(): Promise<{
    isPrivate: boolean;
    browserName: string;
}>;
export default detectIncognito;
