import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  colores = [
    { nombre: 'Negro', valor: 0 },
    { nombre: 'Marrón', valor: 1 },
    { nombre: 'Rojo', valor: 2 },
    { nombre: 'Naranja', valor: 3 },
    { nombre: 'Amarillo', valor: 4 },
    { nombre: 'Verde', valor: 5 },
    { nombre: 'Azul', valor: 6 },
    { nombre: 'Violeta', valor: 7 },
    { nombre: 'Gris', valor: 8 },
    { nombre: 'Blanco', valor: 9 },
  ];

  multiplicadores = [
    { nombre: 'Negro', valor: 1 },
    { nombre: 'Marrón', valor: 10 },
    { nombre: 'Rojo', valor: 100 },
    { nombre: 'Naranja', valor: 1000 },
    { nombre: 'Amarillo', valor: 10000 },
    { nombre: 'Verde', valor: 100000 },
    { nombre: 'Azul', valor: 1000000 },
    { nombre: 'Dorado', valor: 0.1 },
    { nombre: 'Plateado', valor: 0.01 },
  ];

  tolerancias = [
    { nombre: 'Marrón', valor: 1 },
    { nombre: 'Rojo', valor: 2 },
    { nombre: 'Verde', valor: 0.5 },
    { nombre: 'Azul', valor: 0.25 },
    { nombre: 'Violeta', valor: 0.1 },
    { nombre: 'Gris', valor: 0.05 },
    { nombre: 'Dorado', valor: 5 },
    { nombre: 'Plateado', valor: 10 },
  ];

  color1 = 0;
  color2 = 0;
  multiplicador = 1;
  tolerancia = 5;

  resultado: { valor: number; maximo: number; minimo: number } | null = null;

  calcular() {
    const valorBase = (this.color1 * 10 + this.color2) * this.multiplicador;
    const maximo = valorBase * (1 + this.tolerancia / 100);
    const minimo = valorBase * (1 - this.tolerancia / 100);

    this.resultado = { valor: valorBase, maximo, minimo };
  }
}
