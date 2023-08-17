import { Component } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss']
})
export class FileUploadComponent {
  selectedFile: File | undefined;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      // Aquí puedes agregar la lógica para subir el archivo al servidor
      console.log('Subiendo archivo:', this.selectedFile);
    }
  }
}
