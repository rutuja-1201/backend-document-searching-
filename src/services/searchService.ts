import { Client } from '@elastic/elasticsearch';
import { Document } from '../models/documentModel';

const client = new Client({ node: "http://localhost:9200",
    auth: {
        username: 'elastic',
        password: '@123rutuja'
      }
});

export const indexFileContent = async (fileId: string, content: string, metadata: Document) => {
    
    const { content: metadataContent, ...restOfMetadata } = metadata; 

    await client.index({
        index: 'documents',
        id: fileId,
        body: { content, ...restOfMetadata }
    });
};

export const searchFiles = async (query: string) => {
    const result = await client.search({
        index: 'documents',
        body: {
            query: {
                match: { content: query }
            }
        }
    });
    return result.hits.hits;
};
