import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';
import { Stadium } from 'src/app/models/stadium';


@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {

   success:string;
  stadiumForm = this.fb.group({
    sport:['',Validators.required],
    MinPlayer:['',Validators.required],
    MaxPlayer:['',Validators.required],
    price:['',Validators.required],
    openHeure:['',Validators.required],
    closeHeure:['',Validators.required],
    surface:['',Validators.required]

  });
  constructor(private fb:FormBuilder,private stadium:StadiumService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const stadium:Stadium = {
      sport: this.stadiumForm.get('sport').value,
      MinPlayer:this.stadiumForm.get('MinPlayer').value,
      MaxPlayer: this.stadiumForm.get('MaxPlayer').value,
      price:this.stadiumForm.get('price').value,
      openHeure: this.stadiumForm.get('openHeure').value,
      closeHeure:this.stadiumForm.get('closeHeure').value,
      surface:this.stadiumForm.get('surface').value
    };
     this.stadium.postStadium(stadium).subscribe((success)=>
    {
      this.success = success.success;
    }
    );
    return this.stadiumForm.reset();
  }
}
