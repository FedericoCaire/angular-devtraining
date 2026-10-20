import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../data';
import { Router } from '@angular/router';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  standalone: false,
  templateUrl: './postForm.component.html',
})
export class PostFormComponent implements OnInit {
  @Input() post?: Post;
  @Output() save = new EventEmitter<Post>();

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    published: new FormControl<Date | null>(new Date(), Validators.required),
    content: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    if (this.post) {
      this.form.setValue({
        user: this.post.user,
        published: new Date(this.post.published),
        content: this.post.content,
      });
    }
  }

  private postService = inject(PostService);
  private router = inject(Router);

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);
    const { user, published, content } = this.form.value;
    const nuevoPost: Post = { user: user!, published: published!, content: content! };

    if (this.post) {
      this.postService.updatePost(this.post, nuevoPost);
    } else {
      this.postService.addPost(nuevoPost);
      this.router.navigate(['/posts/list']);
    }
  }
}