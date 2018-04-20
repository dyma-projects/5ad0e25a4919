import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
status: boolean = true;
bool: boolean = true;
paragraphe: string;
public paragraphe2: string;
image: string;
p1: string;
p2: string;
texts: string[];

Afficher(){ 
  console.log(this.bool);
  if(this.bool === true){
    this.paragraphe = "Paragraphe affiché";
  }else{
    this.paragraphe = "";
  }
  this.bool =! this.bool;
}

Afficher2(){ 
  if(this.status === true){
    this.p1 = "Paragraphe 1";
    this.p2 = "";
  }else{
    this.p1 = "";
    this.p2 = "Paragraphe 2";
    
  }
  this.status =! this.status;
}


  constructor() { 

    this.image = 'https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png';

      this.Afficher();
      this.paragraphe2 = '';
      this.Afficher2();
      this.texts = ["un","deux","trois"];

  }

  ngOnInit() {
  }

}

