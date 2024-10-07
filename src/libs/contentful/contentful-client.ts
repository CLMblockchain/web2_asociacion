import * as contentful from 'contentful';

const contentfulClient = contentful.createClient({
    space: import.meta.env.PUBLIC_CONTENTFUL_SPACE!,
    environment: import.meta.env.PUBLIC_CONTENTFUL_ENVIRONMENT!,
    accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
    const entries = await contentfulClient.getEntries();
    return entries.items;
};

export const getTagName = async (tag: string) => {
    const tagName = await contentfulClient.getTag(tag);
    return tagName.name;
}