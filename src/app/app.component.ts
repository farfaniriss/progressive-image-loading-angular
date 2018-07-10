import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ready = false;
  coverImageTest = "https://data.whicdn.com/images/297083770/large.jpg";
  thumbTest = "http://i843.photobucket.com/albums/zz354/DarknessOfMyLife/6-resized_zps8l4xcevi.jpg";

ngOnInit(){
  this.loadImage();
}


  loadImage(){
    let img = new Image();
    img.src = "https://data.whicdn.com/images/297083770/large.jpg";
    img.onload = () =>  this.ready = true;
  }

}

