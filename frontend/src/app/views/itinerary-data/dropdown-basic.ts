import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html'
})
export class NgbdDropdownBasic {
    displayMessage = "Categories";
    sortOptions = ["*", "Drinks", "Coffee", "Shops", "Arts", "Outdoors", "Sights", "Trending", "Top Picks"]

    changeMessage(selectedItem: string){
       this.displayMessage = selectedItem;
    }
}