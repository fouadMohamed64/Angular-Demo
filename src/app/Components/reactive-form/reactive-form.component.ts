import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userRegisterForm: FormGroup

  constructor(public fb:FormBuilder){
    // this.userRegisterForm = new FormGroup({
    //   name: new FormControl('' , [Validators.required]),
    //   email: new FormControl('' , [Validators.required, Validators.email]),
    //   password: new FormControl('')
    // })
    this.userRegisterForm = this.fb.group({
      name: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('')
    })
  }

  onSubmit(){}

  get getName(){
    return this.userRegisterForm.get('name')
  }
  get getEmail(){
    return this.userRegisterForm.get('email')
  }

}
