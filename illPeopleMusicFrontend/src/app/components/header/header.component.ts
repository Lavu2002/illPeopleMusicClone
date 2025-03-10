import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="logo">
          <a href="/">
            illPeopleMusic
          </a>
        </div>
        
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="/" class="nav-link active">Beats</a></li>
            <li class="nav-item"><a href="/" class="nav-link">Producers</a></li>
            <li class="nav-item"><a href="/" class="nav-link">About</a></li>
          </ul>
        </nav>
        
        <div class="user-actions">
          <button class="login-btn">Log In</button>
          <button class="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  `,
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {}