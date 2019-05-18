import { Component } from '@angular/core';
import { DemoappService } from './demoapp.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DemoappService]
})
export class AppComponent {
  countryObj = {
    india: ["tn", "kerla", "up"],
    uab: ["abudhabi", "dubai"]
  }

  constructor(private demoappS: DemoappService, private route: Router,
    private http: HttpClient) { }
  blogNo = "1";
  passVal = ""
  passColor = ""
  passStrength = ""
  title = 'demoapp';
  name = "gee";
  colorname = "blue";
  age = 10;
  billArr = [
    { name: "N1", quantity: 20 },
    { name: "N2", quantity: 21 },
    { name: "N3", quantity: 22 }
  ]
  billObj = {
    "N1": 250,
    "N2": 260,
    "N3": 270
  }
  buttonfn() {
    this.demoappS.getwelcomestring();
    this.colorname = this.colorname == "blue" ? "red" : "blue";
  }
  validatepass() {
    console.log(this.passVal);
    if (this.passVal.length < 5) {
      this.passColor = "red";
      this.passStrength = "poor";
    }
    else if (this.passVal.length < 10) {
      this.passColor = "orange";
      this.passStrength = "medium";
    }
    else {
      this.passColor = "green";
      this.passStrength = "good";
    }
  }
  changeUrl() {
    this.route.navigate(['/blog/' + this.blogNo + '/name']);
  }
  response = [];
  ngOnInit() {
    this.http.get("https://reqres.in/api/users?page=2").subscribe(
      (resp) => {
        console.log("data is...", resp);
        this.response = resp['data'];
      },
      (error) => {
        console.log("error is...", error);
      }
    )
  }
  name1 = "";
  job = "";
  postrequest() {
    this.http.post("https://reqres.in/api/users",
      {
        name: this.name1,
        job: this.job
      })
      .subscribe(
        (resp) => {
          console.log("data is...", resp);
          this.response = resp['data'];
        },
        (error) => {
          console.log("error is...", error);
        }
      );
  }
  empObj = {
    fName: "R1",
    lName: "R2"
  };
  updateParent(obj){
    this.empObj.fName=obj.fName;
    this.empObj.lName=obj.lName;
    console.log( this.empObj);
  }
}