import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent  implements OnInit {

  teacherForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController) {
    this.teacherForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      code: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      status: [false, Validators.required],
      creationDate: ['', Validators.required],
    });
  }

  createTeacher() {
    if (this.teacherForm.valid) {
      this.modalCtrl.dismiss(this.teacherForm.value, 'confirm');
    }
  }

  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  ngOnInit() {}

}
