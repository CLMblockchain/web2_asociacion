/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly CONTENTFUL_SPACE: string;
    readonly CONTENTFUL_ENVIRONMENT: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}