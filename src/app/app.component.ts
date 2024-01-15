import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'noticias';
  loading = false;
  listNoticias : any[] = [];

  constructor(private service : NoticiasService){}

  ngOnInit(): void {

  }

  buscarNoticias(parametros:any){
    this.loading = true;
    this.listNoticias = [];
    setTimeout(() =>{
      this.service.getNoticias(parametros).subscribe(res =>{
        this.loading = false;
        this.listNoticias = res.articles;
      },error =>{
        console.log(error);
        this.loading = false;
      })
    },1000);
  }
}
