import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  featuredGame = {
    title: 'CyberNeon: Edición Definitiva',
    genre: 'Acción / Cyberpunk RPG',
    description: 'Sumérgete en la megalópolis lluviosa de Neo-Veridia. Conviértete en un mercenario mejorado cibernéticamente y lucha por la supervivencia contra megacorporaciones corruptas en el videojuego de rol de acción más esperado del año.',
    rating: 4.8,
    image: 'assets/images/game_cyberpunk.png'
  };

  stats = [
    { number: '120K+', label: 'Gamer Activos', icon: 'fa-users' },
    { number: '450+', label: 'Juegos Indexados', icon: 'fa-gamepad' },
    { number: '85K+', label: 'Reviews Comunidad', icon: 'fa-star' }
  ];
}
