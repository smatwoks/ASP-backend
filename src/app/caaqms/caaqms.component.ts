import {  Component } from '@angular/core';

@Component({
  selector: 'app-caaqms',
  templateUrl: './caaqms.component.html',
  styleUrls: ['./caaqms.component.css']
})
export class CaaqmsComponent {
 
  public hasRefreshed = false;

  refreshPage(): void {
    if (!this.hasRefreshed) {
      window.location.reload();
      this.hasRefreshed = true;
    }
  }
  }

  
