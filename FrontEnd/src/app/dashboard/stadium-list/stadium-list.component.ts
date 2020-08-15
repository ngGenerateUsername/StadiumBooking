import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';
import { Stadium } from 'src/app/models/stadium';

@Component({
  selector: 'app-stadium-list',
  templateUrl: './stadium-list.component.html',
  styleUrls: ['./stadium-list.component.css']
})
export class StadiumListComponent implements OnInit {

  listStadium:Stadium[] = null;
  constructor(private stadium:StadiumService) { }

  ngOnInit(): void {
    this.stadium.getAllStadium().subscribe(
      data=>this.listStadium = data
    );
  }

}
