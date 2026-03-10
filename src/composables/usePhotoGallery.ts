import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { onMounted, ref, watch } from 'vue';

import { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
    
  // 
  const photos = ref<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';
  
  const addNewToGallery = async () => {
    
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // set filename
    const fileName = Date.now() + '.jpeg';
    
    //save picture and add it to photo collection 
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    // CHANGE: Update the `photos` array with the new photo
    photos.value = [savedImageFile, ...photos.value];    
    };



    // save picture method
    const savePicture = async (photo: Photo, fileName: string):Promise<UserPhoto> => {
      // fetch the photo and read as a blob, then convert to bas64 format
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      const base64Data = (await convertBlopToBase64(blob)) as string;

      const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Data,
      })
 
      console.log(fileName);
      console.log(photo.webPath);
      
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      }
    }
    


    const convertBlopToBase64 = (blob: Blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(blob);
      });
    };


  //  methode load photo
    const cachePhoto = () => {
      Preferences.set({
        key:PHOTO_STORAGE,
        value: JSON.stringify(photos.value),
      })
    }

    // methode load save
    const loadSaved = async () => {
      const photoList = await Preferences.get({key: PHOTO_STORAGE});
      const photoInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

         // CHANGE: Display the photo by reading into base64 format
    for (const photo of photoInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photoInPreferences;

    }
    
    onMounted(loadSaved);
    watch(photos, cachePhoto);
    
    return {
        addNewToGallery,
        photos
    };
};


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

