import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string[];
  rating: number;
  price: number;
  image: string;
  description: string;
  released: string;
  developer: string;
}

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  searchText: string = '';
  selectedPlatform: string = 'All';
  selectedGame: Game | null = null;
  showSuccessToast: boolean = false;
  toastMessage: string = '';

  platforms: string[] = ['All', 'PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'];

  games: Game[] = [
    {
      id: 1,
      title: 'CyberNeon',
      genre: 'RPG de Acción / Cyberpunk',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 4.8,
      price: 59.99,
      image: 'assets/images/game_cyberpunk.png',
      description: 'Conviértete en un mercenario urbano mejorado tecnológicamente en una vibrante metrópolis futurista dominada por corporaciones despiadadas.',
      released: 'Noviembre 2025',
      developer: 'NeonSoft Studios'
    },
    {
      id: 2,
      title: 'Elidor: Fantasy Legend',
      genre: 'Aventura / RPG de Fantasía',
      platform: ['PC', 'PS5', 'Nintendo Switch'],
      rating: 4.7,
      price: 49.99,
      image: 'assets/images/game_fantasy.png',
      description: 'Explora un vasto mundo abierto repleto de islas flotantes, ruinas ancestrales y criaturas místicas en una misión para restaurar el orden cósmico.',
      released: 'Enero 2026',
      developer: 'Pixel Wandering'
    },
    {
      id: 3,
      title: 'Neon Speed: Nitro',
      genre: 'Carreras / Simulación / Arcade',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 4.5,
      price: 39.99,
      image: 'assets/images/game_racing.png',
      description: 'Pilota superdeportivos de última generación en las pistas más desafiantes del mundo iluminadas por la noche y el neón urbano.',
      released: 'Marzo 2026',
      developer: 'Veloce Games'
    },
    {
      id: 4,
      title: 'CyberNeon: Edición Cromo',
      genre: 'Acción / Aventura',
      platform: ['PC', 'PS5'],
      rating: 4.6,
      price: 69.99,
      image: 'assets/images/game_cyberpunk.png',
      description: 'La versión mejorada que incluye expansiones exclusivas, nuevos implantes cibernéticos y misiones de sigilo corporativo en los niveles más bajos de la ciudad.',
      released: 'Mayo 2026',
      developer: 'NeonSoft Studios'
    },
    {
      id: 5,
      title: 'Elidor: Crónicas del Abismo',
      genre: 'Rol / Estrategia',
      platform: ['PC', 'Nintendo Switch'],
      rating: 4.9,
      price: 29.99,
      image: 'assets/images/game_fantasy.png',
      description: 'Una expansión narrativa independiente que lleva a los héroes de Elidor a las profundidades de la tierra para enfrentarse a horrores primigenios.',
      released: 'Junio 2026',
      developer: 'Pixel Wandering'
    },
    {
      id: 6,
      title: 'Neon Speed: Redline Racer',
      genre: 'Carreras Arcade',
      platform: ['Nintendo Switch', 'Xbox Series X'],
      rating: 4.4,
      price: 19.99,
      image: 'assets/images/game_racing.png',
      description: 'Una versión arcade más dinámica y rápida enfocada en carreras en línea, derrapes imposibles y bandas sonoras synthwave espectaculares.',
      released: 'Febrero 2026',
      developer: 'Veloce Games'
    }
  ];

  get filteredGames(): Game[] {
    return this.games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(this.searchText.toLowerCase()) || 
                            game.genre.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesPlatform = this.selectedPlatform === 'All' || game.platform.includes(this.selectedPlatform);
      return matchesSearch && matchesPlatform;
    });
  }

  selectGame(game: Game) {
    this.selectedGame = game;
  }

  closeModal() {
    this.selectedGame = null;
  }

  addToWishlist(gameTitle: string) {
    this.toastMessage = `¡${gameTitle} añadido a tu lista de deseos! 💖`;
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000);
  }
}
