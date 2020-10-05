import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {AlertifyService} from '../../_services/alertify.service';
import {NgxGalleryAction, NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private alertify: AlertifyService) { }

  async ngOnInit() {
   this.getUser();
  }

  getImages(){
    const imageUrls = [];
    for (let photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

  getUser(){
    this.userService.getUser(+this.activatedRoute.snapshot.params['id'])
      .subscribe((user:User) => {
        this.user = user;
        this.galleryOptions = [
          {
            width: '500px',
            height: '500px',
            imagePercent: 100,
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            imageArrows: true
          }
        ];
        this.galleryImages = this.getImages();
      }, error => this.alertify.error(error));
  }
}
