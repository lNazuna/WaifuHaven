import axios, { AxiosInstance } from 'axios';

class ImageApiClient {
  private apiKey: string;
  private axiosInstance: AxiosInstance;

  constructor(apiKey: string, baseURL: string = 'http://waifu-haven.ddns.net') {
    this.apiKey = apiKey;
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        'Authorization': this.apiKey,
      },
    });
  }

  async getRandomImage(category: string, type: 'sfw' | 'nsfw'): Promise<string> {
    try {
      const response = await this.axiosInstance.get(`/${type}/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }

  async getRandomSfwImage(category: string): Promise<string> {
    return this.getRandomImage(category, 'sfw');
  }

  async getRandomNsfwImage(category: string): Promise<string> {
    return this.getRandomImage(category, 'nsfw');
  }
}

export default ImageApiClient;