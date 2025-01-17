const axios = require('axios');

class ImageApiClient {
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error('API key is required');
        }
        this.apiKey = apiKey;
        this.baseUrl = 'http://waifu-haven.ddns.net';
    }

    async getImage(category, type = 'sfw') {
        try {
            const validSfwCategories = ['kurumi', 'rushia', 'waifu', 'maid', 'marin-kitagawa', 'mori-calliope', 'raiden-shogun', 'oppai', 'uniform', 'kamisato-ayaka'];
            const validNsfwCategories = ['ass', 'hentai', 'redo-of-healer', 'blowjob', 'waifu', 'milf'];

            if (type === 'sfw' && !validSfwCategories.includes(category)) {
                throw new Error('Invalid SFW category');
            }
            if (type === 'nsfw' && !validNsfwCategories.includes(category)) {
                throw new Error('Invalid NSFW category');
            }

            const url = `${this.baseUrl}/${type}/${category}`;
            const response = await axios.get(url, {
                headers: {
                    'Authorization': this.apiKey
                },
                responseType: 'arraybuffer'
            });

            if (response.status === 200) {
                return Buffer.from(response.data, 'binary').toString('base64');
            } else {
                throw new Error('Failed to fetch image');
            }
        } catch (error) {
            console.error('Error fetching image:', error.message);
            throw error;
        }
    }
}

module.exports = ImageApiClient;