import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = "general";
  paisSeleccionado = "co";

  categorias: any[] = [
    {value: 'general', name: 'General'},
    {value: 'negocios', name: 'Negocios'},
    {value: 'entretainment', name: 'Entretenimiento'},
    {value: 'health', name: 'Salud'},
    {value: 'science', name: 'Ciencia'},
    {value: 'sports', name: 'Deportes'},
    {value: 'technology', name: 'Tecnología'}
  ];

  paises: any[] = [
    {value: 'co', name: 'Colombia'},
    {value: 'ar', name: 'Argentina'},
    {value: 'br', name: 'Brasil'},
    {value: 'hu', name: 'Hungria'},
    {value: 'mx', name: 'México'},
    {value: 'gb', name: 'Reino Unido'}
  ];

  constructor(){}

  buscarNoticia(){
    const parametros = {
      categoria : this.categoriaSeleccionada,
      pais : this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(parametros);
  }
}
