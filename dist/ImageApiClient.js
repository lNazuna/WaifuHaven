"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class ImageApiClient {
    constructor(apiKey, baseURL = 'http://waifu-haven.ddns.net') {
        this.apiKey = apiKey;
        this.axiosInstance = axios_1.default.create({
            baseURL: baseURL,
            headers: {
                'Authorization': this.apiKey,
            },
        });
    }
    getRandomImage(category, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/${type}/${category}`);
                return response.data;
            }
            catch (error) {
                console.error('Error fetching image:', error);
                throw error;
            }
        });
    }
    getRandomSfwImage(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getRandomImage(category, 'sfw');
        });
    }
    getRandomNsfwImage(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getRandomImage(category, 'nsfw');
        });
    }
}
exports.default = ImageApiClient;
