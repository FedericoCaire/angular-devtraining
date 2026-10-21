import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../data';

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

  onSubmit(): void {
    const { user, published, content } = this.form.getRawValue();
    this.save.emit({ user: user!, published: published!, content: content! });
  }
}
