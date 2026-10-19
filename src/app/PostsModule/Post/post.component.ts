import { Component, computed, input, signal } from '@angular/core';
import {Post} from '../../data';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-post',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  post = input.required<Post>();

  private readonly limit = 100;
  protected readonly expanded = signal(false);

  protected readonly isLong = computed(() => this.post().content.length > this.limit);

  protected readonly visibleContent = computed(() =>
    this.expanded() || !this.isLong()
      ? this.post().content
      : this.post().content.slice(0, this.limit) + '…'
  );

  protected toggle() {
    this.expanded.update(v => !v);
  }
}