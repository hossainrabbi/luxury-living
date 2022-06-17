import axios from 'axios';

export default function useImageUpload() {
  const IMG_BB_API_KEY = 'f7992baa94f8dc9dbe7fa9344fcf8b23';
  const IMG_BB_API_URL = 'https://api.imgbb.com/1/upload';

  async function imagePost(e) {
    const imageData = new FormData();

    imageData.set('key', IMG_BB_API_KEY);
    imageData.append('image', e.target.files[0]);

    return await axios.post(IMG_BB_API_URL, imageData);
  }

  return {
    imagePost,
  };
}
