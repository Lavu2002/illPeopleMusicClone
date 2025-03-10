import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">illPeopleMusic</h3>
            <p class="footer-text">Connecting producers and artists worldwide.</p>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">Beats</a></li>
              <li><a href="/">Producers</a></li>
              <li><a href="/">About</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-title">Support</h3>
            <ul class="footer-links">
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Terms of Service</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-title">Connect</h3>
            <div class="social-links">
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">YouTube</a>
              <a href="#" class="social-link">SoundCloud</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 illPeopleMusic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {}