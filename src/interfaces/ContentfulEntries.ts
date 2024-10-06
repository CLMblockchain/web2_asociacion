// Define el tipo para los datos del sistema (sys)
interface SysLink {
    sys: {
        type: string;
        linkType: string;
        id: string;
    };
}

interface Metadata {
    tags: any[];
    concepts: any[];
}

// Define el tipo para los campos de contenido (fields)
interface Fields {
    date: string;
    title: string;
    company: string;
    description: {
        nodeType: string;
        data: Record<string, unknown>;
        content: Array<{
            nodeType: string;
            data: Record<string, unknown>;
            content: Array<{
                nodeType: string;
                value: string;
                marks: any[];
                data: Record<string, unknown>;
            }>;
        }>;
    };
    logo: SysLink;
}

// Define el tipo para la entrada completa
interface Entry {
    metadata: Metadata;
    sys: {
        space: SysLink;
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: SysLink;
        revision: number;
        contentType: SysLink;
        locale: string;
    };
    fields: Fields;
}

// El array de entradas
type ContentfulEntries = Entry[];
