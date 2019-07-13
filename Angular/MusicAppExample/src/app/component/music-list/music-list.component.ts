import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  recentSongs: any;
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.initReccent();
  }

  //binding recent songs
  initReccent(){
    this.musicService.getRecentSongs('Ha Noi') //convert observable to promise
    .toPromise()
    //thành công
    .then((res) => {
      this.recentSongs = res.aTracks;
      console.log(this.recentSongs);
    })
    //có lỗi sảy ra
    .catch((err) => {
      console.log(err);
    })
    //cuối cùng làm gì
    .finally(() => {
      console.log('Request has closed');
    })
  }

}
