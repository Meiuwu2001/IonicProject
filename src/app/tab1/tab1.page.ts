import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { TeacherService } from '../service/teacher.service';
import { ModalEditComponent } from '../tabs/modal-edit/modal-edit.component';
import { AddTeacherComponent } from '../tabs/add-teacher/add-teacher.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  teacherList
    : any[] = []

  constructor(private teacherService: TeacherService,
    private modalCtrl: ModalController
  ) { }
  ngOnInit(): void {
    console.log('view did enter 2');
    this.getTeacher()
  }

  ionViewDidEnter() {
    console.log('view did enter 2');
  }
  async createTeacher() {
    const modal = await this.modalCtrl.create({
      component: AddTeacherComponent
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.teacherList.push(data);
      console.log('Nuevo Teacher creado:', data);
    }
  }

  ionViewWillEnter() {
    this.getTeacher()
  }

  async getTeacher() {
    try {
      await this.teacherService.getTeacher()
        .subscribe(item => this.teacherList
          = item)
      console.log(this.teacherList
      )
    } catch (error) {
      console.log(error)
    }
  }

  async edit(item: any) {
    // const modal = await this.modalCtrl.create({
    //   component: ModalEditComponent,
    //   componentProps: {
    //     item
    //   }
    // });
    // modal.present();

    // const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   console.log(`Hello, ${data}!`);
    // }
  }

  delete(item: any) {
    console.log(item)
  }
}
