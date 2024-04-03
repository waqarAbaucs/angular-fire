import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss']
})
export class CreationFormComponent implements OnInit {

  imageUrl: string | null = null;

  constructor(public fb: FormBuilder, public sharedService: SharedService) { }


  creationForm = this.fb.group({
    image: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
    message: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.creationForm.valid) {
      this.sharedService.addUser(this.creationForm.value).then((data)=> {
        console.log('user-data',data);
        this.creationForm.reset();
      })
    } else {
      console.log('Form is invalid');
    }
  }

  async onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      try {
        this.imageUrl = await this.sharedService.uploadImage(file);
        (this.creationForm.get('image') as FormControl)!.setValue(this.imageUrl);
        console.log('Image uploaded successfully. URL:', this.imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  }

}
