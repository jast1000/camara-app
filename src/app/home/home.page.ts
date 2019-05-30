import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScanResult, BarcodeScanner} from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n1: number;
  n2: number;
  photo: string;
  qr: string;
  constructor(
    private camera: Camera,
    private barcoscanner: BarcodeScanner
  ) {}

  async readQR(){
    let result: BarcodeScanResult = await this.barcoscanner.scan();
    this.qr = result.text;
  }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    let img: string = await this.camera.getPicture(options); 
    this.photo = "data:image/jpeg;base64," + img;
  }

  sumar(){
    let r:number= (+(this.n1)) + (+(this.n2));
    console.log(r);
  }
  restar(){
    let r:number= (+(this.n1)) - (+(this.n2));
    console.log(r);
  }
}
