import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Post } from './components/post/post';
import { Footer } from './components/footer/footer';
import { CreatePost } from './components/create-post/create-post';

@Component({
  selector: 'app-root',
  imports: [Navbar, Post, Footer, CreatePost],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Streamline');
}
