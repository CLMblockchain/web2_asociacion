import { getEntries, getTagName } from "../libs/contentful/contentful-client";

export async function getExperience() {
  const entries = await getEntries();
  const data =entries.map((entry) => {
    const tags = entry.metadata.tags.map(async (tag) => {
      const tagName = await getTagName(tag.sys.id);
      return tagName;
    });
    return{
      dates: entry.fields.date,
      title: entry.fields.title,
      company: entry.fields.company,
      companyUrl: entry.fields.companyUrl ?? "",
      description: entry.fields.description.content[0].content[0].value,
      technologies: tags,
      logo: entry?.fields?.logo?.fields?.file?.url,
    }
  });
  return data;
}
