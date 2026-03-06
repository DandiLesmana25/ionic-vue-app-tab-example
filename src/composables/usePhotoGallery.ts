import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ref } from 'vue';

export const usePhotoGallery = () => {
     const photos = ref<UserPhoto[]>([]);
    const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    // CHANGE: Create `savedImageFile` matching `UserPhoto` interface
    const savedImageFile = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
    };

    // CHANGE: Update the `photos` array with the new photo
    photos.value = [savedImageFile, ...photos.value];

    };

    return {
        addNewToGallery,
        photos
    };
};


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

