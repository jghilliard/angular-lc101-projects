import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A Small collection of photoes.';
  image1 = "https://cdn.pixabay.com/photo/2022/08/03/13/09/moon-7362632_1280.jpg";
  image2 = 'https://cdn.pixabay.com/photo/2023/01/21/13/39/trees-7733877_1280.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2023/01/17/12/31/background-7724476_1280.jpg';

  constructor() { }

  ngOnInit() {
  }

}