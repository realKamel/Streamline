import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface IPostCreate {
  title: string;
  description: string;
  postImage?: File;
}
@Component({
  selector: 'app-create-post',
  imports: [FormsModule],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  public formDate: IPostCreate = {
    title: '',
    description: '',
    postImage: undefined,
  };
  formSubmit() {
    console.log(this.formDate);
  }
}
