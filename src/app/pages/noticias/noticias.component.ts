import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  views: number;
  comments: number;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  email: string = '';
  subscribed: boolean = false;
  successMessage: string = '';

  articles: Article[] = [
    {
      id: 1,
      title: 'Gran Final de la PixelLeague 2026: Récord Histórico de Espectadores',
      category: 'Esports',
      date: '15 de Junio, 2026',
      readTime: '5 min de lectura',
      image: 'assets/images/news_esports.png',
      summary: 'La final mundial de este año superó todas las expectativas, alcanzando un pico de 4.2 millones de espectadores en simultáneo en plataformas de streaming.',
      views: 12450,
      comments: 89
    },
    {
      id: 2,
      title: 'Análisis de Hardware: ¿Son las GPU del Futuro Tan Revolucionarias?',
      category: 'Tecnología',
      date: '12 de Junio, 2026',
      readTime: '8 min de lectura',
      image: 'assets/images/gaming_banner.png',
      summary: 'Desglosamos las especificaciones filtradas de la nueva arquitectura gráfica. Promete un aumento de rendimiento del 45% con trazado de rayos nativo en 8K.',
      views: 8900,
      comments: 54
    },
    {
      id: 3,
      title: 'Elidor: Crónicas del Abismo es Nominado a Juego de Rol del Año',
      category: 'Lanzamientos',
      date: '09 de Junio, 2026',
      readTime: '6 min de lectura',
      image: 'assets/images/game_fantasy.png',
      summary: 'La crítica especializada ha aclamado la nueva aventura medieval. Su enfoque en decisiones morales complejas y combate dinámico la posiciona como la favorita.',
      views: 15600,
      comments: 142
    }
  ];

  subscribeNewsletter() {
    if (this.email.trim() && this.email.includes('@')) {
      this.successMessage = `¡Gracias por suscribirte! Recibirás nuestras novedades en ${this.email} 📩`;
      this.subscribed = true;
      this.email = '';
      setTimeout(() => {
        this.subscribed = false;
      }, 5000);
    }
  }
}
