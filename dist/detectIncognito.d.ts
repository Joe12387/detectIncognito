/**
 *
 * detectIncognito v1.3.0 - (c) 2022 Joe Rutkowski <Joe@dreggle.com> (https://github.com/Joe12387/detectIncognito)
 *
 **/
export declare const detectIncognito: () => Promise<{
    isPrivate: boolean;
    browserName: string;
}>;
