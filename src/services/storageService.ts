import { getDropboxFiles } from "../config/dropboxclient";

export const fetchFilesFromDropbox = async () => {
    const files = await getDropboxFiles();
    return files;
};
