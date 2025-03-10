import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BeatsService } from './services/beats.service';
import { BeatCardComponent } from './components/beat-card/beat-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    CommonModule,
    BeatCardComponent,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>

      <main class="main-content">
        <div class="container">
          <h1 class="page-title">Trending Beats</h1>

          <div *ngIf="loading" class="loading-container">
            <app-loading-spinner></app-loading-spinner>
          </div>

          <div *ngIf="error" class="error-message">
            {{ error }}
          </div>
            <app-beat-card [beat]="beats[0]"></app-beat-card>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #121212;
        color: white;
      }

      .main-content {
        flex: 1;
        padding: 2rem 0;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      .page-title {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: 700;
      }

      .beats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      .loading-container {
        display: flex;
        justify-content: center;
        padding: 3rem 0;
      }

      .error-message {
        color: #ff5555;
        text-align: center;
        padding: 2rem;
        background: rgba(255, 0, 0, 0.1);
        border-radius: 8px;
      }

      @media (max-width: 768px) {
        .beats-grid {
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  beats: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private beatsService: BeatsService) {}

  ngOnInit(): void {
    this.beatsService.getBeats().subscribe({
      next: (response) => {
        if (response && response.playlists) {
          this.beats = response.playlists;
        } else {
          this.error = 'Invalid data format received';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching beats:', err);
        this.error = 'Failed to load beats. Please try again later.';
        this.loading = false;
      },
    });
  }
}
