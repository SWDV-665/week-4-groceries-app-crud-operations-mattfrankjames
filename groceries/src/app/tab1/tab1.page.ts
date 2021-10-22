import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../providers/groceries-service.service';
import { InputDialogService } from '../providers/input-dialog.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery";

  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService) { }
  loadItems() {
    return this.dataService.getItems();
  }
  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 2000
    });
    toast.present();
    this.dataService.remvoveItem(index);
  }
  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }
  // waiting to see if we can lose this method and just use the showAddItemPropmt()
  addItem() {
    console.log('adding item');
    this.inputDialogService.showPrompt();
  }


}
