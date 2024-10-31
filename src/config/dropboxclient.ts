import axios from 'axios';

export const getDropboxFiles = async () => {
    const response = await axios.post('https://www.dropbox.com/developers/apps/info/q7c5ezdz06orzms', {
        path: '',
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.DROPBOX_TOKEN}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data.entries;
};
