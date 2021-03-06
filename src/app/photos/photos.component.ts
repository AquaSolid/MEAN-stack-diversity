import {Component, OnInit} from '@angular/core';
import {Photo} from "../photo";
import {PhotoService} from "../photo.service";

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
    photos: Photo[];

    constructor(private photoService: PhotoService) {
    }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos(): void {
        this.photoService.getPhotos()
            .subscribe(photos => this.photos = photos);
    }

    getPhoto(id: number): void {
        this.photoService.getPhoto(id)
            .subscribe(photo => console.log(photo));
    }


}
