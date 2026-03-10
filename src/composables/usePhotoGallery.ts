import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ref } from 'vue';

import { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';


export const usePhotoGallery = () => {
    
  // 
  const photos = ref<UserPhoto[]>([]);
  
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
    
    return {
        addNewToGallery,
        photos
    };
};


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

