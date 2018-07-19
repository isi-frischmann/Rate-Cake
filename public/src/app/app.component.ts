import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  newCake: any;
  cakes = [];
  rates = [];
  newRating: any = {};
  comment: any = {};
  id2: any;
  showDetails: any;

  constructor(private _cakeService: CakeService) {}


  ngOnInit(){
    this.getAll();
    this.newCake = {bakerName: "", imageUrl: "", description: ""}
  }

  addCake(){
    console.log("Create a new cake in your component.ts");
    let newObservable = this._cakeService.newCake(this.newCake);
    newObservable.subscribe((res) => {
    })
    this.newCake = { bakerName: "", imageUrl: "", description: ""};
    this.getAll();
  }


  getAll(){
    const showObservable = this._cakeService.getAll();
    showObservable.subscribe(res => {
      // console.log("I'll show you all cakes");
      this.cakes = res['cake'];
    })
  }

  // show specific cake!!! Change the id from string into json object, because the server can just read json objects
  displayInfo(cakeId){
    // console.log(this.cakes)
    this.id2 = {"id": cakeId}
    // console.log("This id2",this.id2);
    // console.log("In component and find Id", cakeId);
    const detailObservable = this._cakeService.showInfo(this.id2);
    detailObservable.subscribe( res => {
        console.log("I'm in component to get the info back", res);
        this.showDetails = res['cake'];
      })
    }


  addRating(cakeId, ratingFormData){
    console.log("-------------",cakeId);
    console.log("HERE ARE ALL THE CAKE", this.cakes);
    // var rating = {rating: this.newRating, comment: this.comment};
    const addObservable = this._cakeService.addRating( ratingFormData, cakeId);
    addObservable.subscribe( updateRating => {
      console.log("i'm in the component to add rating", updateRating);
      this.newRating = updateRating['rate'];
      this.getAll();
    })
  }
}


