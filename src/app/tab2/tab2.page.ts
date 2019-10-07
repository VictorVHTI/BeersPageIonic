import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myPhoto: any;
  viewPhoto: boolean = false;
  constructor(
    private camera: Camera
  ) {}

  openCamera() {
    const options: CameraOptions = {
      quality: 75,
      encodingType: this.camera.EncodingType.JPEG,
      cameraDirection: this.camera.Direction.BACK,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myPhoto = imageData;
      this.viewPhoto = true;
    }, (err) => {
      // Handle error
    });
  }
}
