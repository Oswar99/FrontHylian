import { Component, Output, EventEmitter } from '@angular/core';
import { compressImg } from 'src/helpers/setup.helper';
import { postFile, query } from 'src/services/api.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss']
})
export class FileUploadComponent {
  @Output() loadimg = new EventEmitter<string>;
  selectedFiles: File[] | undefined;

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
    this.uploadFile();
  }

  async uploadFile() {
    const li = this.loadimg;
    if (this.selectedFiles) {
      for (let e of this.selectedFiles) {
        var reader = new FileReader();
        reader.readAsDataURL(await compressImg(e, 50));
        reader.onload = async function () {
          await postFile(reader.result).then(v=>{
            if(v.data.successed){
              li.emit(`${query}/img/${v.data.name}`)
            }
          })
        };

      }
    };
  };

}
