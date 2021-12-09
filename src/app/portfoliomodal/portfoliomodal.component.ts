import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfoliomodal',
  templateUrl: './portfoliomodal.component.html',
  styleUrls: ['./portfoliomodal.component.css']
})
export class PortfoliomodalComponent implements OnInit {
 @Input() isModal:boolean = false;
 @Output() openStatus:boolean = this.isModal;

  constructor() { }

  ngOnInit(): void {
  }

  hideModal(){
    this.isModal = false;
  }

}
