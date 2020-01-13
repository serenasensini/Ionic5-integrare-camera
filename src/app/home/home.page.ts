import {Component, OnInit} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  foto: any = '';

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera) { }

  scattaFoto(): void {

    // Create options for the Camera Dialog
    const options = {
      quality: 100,
      targetWidth: 80,
      targetHeight: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    };

// Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      this.prepareFile('data:image/jpeg;base64,' + imagePath);
    }, (err) => {
      console.log('Error while selecting image.');
    })};

  private prepareFile(namePath) {
    this.foto = namePath;
  }

}
