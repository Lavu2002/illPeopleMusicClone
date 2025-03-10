import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beat-card',
  standalone: true,
  // imports: [CommonModule],
  template: `
  <div class="beat-section">
  @for(trendingBeat of beat.beats; track trendingBeat._id){
    <div class="beat-card">
      <div class="beat-image">
        <img [src]="trendingBeat.cover_picture" [alt]="trendingBeat.title">
        <div class="play-overlay">
          <button class="play-button" (click)="togglePlay()">
            <span class="icon">{{ isPlaying ? '❚❚' : '▶' }}</span>
          </button>
        </div>
      </div>
      
      <div class="beat-info">
      <div>
      <h3 class="beat-title">{{ trendingBeat.title }}</h3>
<div class="flex gap-6 items-center mb-2">
<p class="beat-producer">{{ trendingBeat.producer.store.general.name }}</p>
        <span class="flex gap-2 items-center text-sm"><img class="icon" src="https://illpeoplemusic.com/assets/imgs/sub-menu/beat-play.png"  alt="">{{trendingBeat.tempo}}</span>
        <span class="flex gap-2 items-center text-sm"><img class="icon" src="https://illpeoplemusic.com/assets/imgs/sub-menu/audio-icon.png"  alt="">{{ formatMusicKey(trendingBeat.key) }}</span>
</div>
        
        <div class="beat-meta">
          <div class="beat-stats">
            <span class="stat">
              <i class="mdi mdi-play"></i> {{ formatNumber(trendingBeat.play_count) }}
            </span>
            <span class="stat">
              <i class="mdi mdi-heart"></i> {{ formatNumber(trendingBeat.likes_count) }}
            </span>
          </div>
        </div>
      </div>

      
      <div class="beat-tags">
        @for (tag of trendingBeat.tag?.slice(0, 3); track tag) {
          <span class="tag">{{ tag }}</span>
        }
      </div>
      <div class="beat-price">
          <i class="mdi mdi-cart"></i>₹{{ trendingBeat.prices[0].final_price }}
        </div>
      </div>
    </div>
  }
  </div>
  `,
styleUrls:['./beat-card.component.css']
})
export class BeatCardComponent {
  @Input() beat: any;
  isPlaying: boolean = false;
  
  togglePlay() {
    this.isPlaying = !this.isPlaying;
    // Here you would add logic to play/pause the audio
  }
  
  formatNumber(num: number): string {
    if (!num) return '0';
    
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  }

  formatMusicKey(key: string) {
    if (!key) return '';

    return key
        .toLowerCase()
        .replace(/([a-g])(_sharp|_flat)?_{0,2}(minor|major)/gi, (match, note, accidental, type) => {
            let formattedNote = note.toUpperCase();
            let formattedAccidental = accidental ? accidental.replace('_', '').replace('sharp', '♯').replace('flat', '♭') : '';
            let formattedType = type.toLowerCase();
            
            return `${formattedNote}${formattedAccidental} ${formattedType}`;
        });
}
}