import { Component } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  logo="../assets/logopk.jpg";
  imgProfile:string="../assets/perfilpok.png";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[]=[
    new Pokemon(1, 'pikachu', ['Elétrico'], 'Esse éo picachu','https://assets.stickpng.com/images/580b57fcd9996e24bc43c319.png'),
    new Pokemon(2, 'bulbasaur', ['Grama', 'veneno'], 'Esse é o bulbasur','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
    new Pokemon(1, 'Ivysaur', ['Fogo'], 'Esse éo Ivysaur', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'),
    new Pokemon(2, 'Geodude', ['Pedra'], 'Esse éo Geodude', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'),
  ]

  selectedPokemon?: Pokemon;

  showDetailes(pokemon: Pokemon){
    this.selectedPokemon=pokemon;
  }

  closeModal(){
    this.selectedPokemon=undefined;
  }

  filterValue:string='';
  filteredPokemons():Pokemon[]{
    if (this.filterValue){
      return this.pokemons;
    }

    return this.pokemons.filter(pokemon=> pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}



