import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _utilityService: UtilityService
  ) {}

  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;
  form4!: FormGroup;
  activeStepIndex: number = 0;
  formTitle: string = 'Form 1.';

  items: MenuItem[] = [];
  steps: any[] = [];
  unitList: string[] = ['kg', 'Ltr', 'mmBtu', 'HM3'];

  // home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  ngOnInit() {
    this.items = [{ label: 'My Record' }, { label: 'Create New Record' }];

    this.steps = [
      {
        label: 'Step 1',
        icon: 'pi pi-check',
        command: (event: any) => {
          /* Your command function here**/
        },
      },
      {
        label: 'Step 2',
        command: (event: any) => {
          /* Your command function here**/
        },
      },
      {
        label: 'Step 3',
        command: (event: any) => {
          /* Your command function here**/
        },
      },
      {
        label: 'Step 4',
        command: (event: any) => {
          /* Your command function here**/
        },
      },
    ];

    this.formsInit();
  }

  jumpToStep(step: number): void {
    this.activeStepIndex = step;
  }

  nextStep(): void {
    if (this.activeStepIndex == 0 && this.form1.invalid) {
      this._utilityService.markAllFieldsAsDirtyAndTouched(this.form1);
      return;
    } else if (this.activeStepIndex == 1 && this.form2.invalid) {
      this._utilityService.markAllFieldsAsDirtyAndTouched(this.form2);
      return;
    } else if (this.activeStepIndex == 2 && this.form3.invalid) {
      this._utilityService.markAllFieldsAsDirtyAndTouched(this.form3);
      return;
    } else if (this.activeStepIndex == 3 && this.form4.invalid) {
      this._utilityService.markAllFieldsAsDirtyAndTouched(this.form4);
      return;
    } else {
      if (this.activeStepIndex < this.steps.length - 1) {
        this.activeStepIndex++;
      }
    }
  }

  prevStep(): void {
    if (this.activeStepIndex > 0) this.activeStepIndex--;
  }

  onSubmit(): void {
    console.log('form 1:', this.form1.getRawValue());
    console.log('form 2:', this.form2.getRawValue());
    console.log('form 3:', this.form3.getRawValue());
    console.log('form 4:', this.form4.getRawValue());
  }

  formsInit() {
    this.form1 = this._fb.group({
      fuelType: [null, Validators.required],
      fuel: [null, Validators.required],
      unit: [null, Validators.required],
      quantity: [0, Validators.required],
      attachedImage: [null, Validators.required],
    });

    this.form2 = this._fb.group({
      transportationVehicle: [null, Validators.required],
      fuel: [null, Validators.required],
      unit: [null, Validators.required],
      quantity: [0, Validators.required],
      attachedImage: [null, Validators.required],
    });

    this.form3 = this._fb.group({
      gasGHG: [null, Validators.required],
      gasQuantity: [null, Validators.required],
      unit: [null, Validators.required],
      attachedImage: [null, Validators.required],
      processType: [null, Validators.required],
    });

    this.form4 = this._fb.group({
      refrigerantGas: [null, Validators.required],
      gasQuantity: [null, Validators.required],
      unit: [null, Validators.required],
      attachedImage: [null, Validators.required],
    });
  }
}
