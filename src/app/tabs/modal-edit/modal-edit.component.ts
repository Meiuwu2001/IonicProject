import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  item: Product | undefined;

  formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private productoService: ProductService,
    private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.item?.name || "", Validators.required],
      code: [this.item?.code || "", Validators.required],
      category: [this.item?.category || "", Validators.required],
      description: [this.item?.description || "", Validators.required],
      price: [this.item?.price || "", Validators.required],
      amount: [this.item?.amount || "", Validators.required],
    });
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  save(): void {
    if (this.formGroup.valid) {
      const request: Product = {
        id: this.item != null ? this.item._id : null,
        name: this.formGroup.value.name,
        code: this.formGroup.value.code,
        category: this.formGroup.value.category,
        description: this.formGroup.value.description,
        price: this.formGroup.value.price,
        amount: this.formGroup.value.amount,
        status: false,
        creationDate: new Date(),
        deleteDate: new Date()
      };

      if (!this.item) {
        this.productoService.addProduct(request).subscribe(
          (response) => {
            console.log(response);
            this.modalCtrl.dismiss(response, 'confirm');
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.productoService.editProduct(request).subscribe(
          (response) => {
            console.log(response);
            this.modalCtrl.dismiss(response, 'confirm');
          },
          (error) => {
            console.error(error);
          }
        );
      }
    } else {
      console.error('Form is invalid');
    }
  }

}
