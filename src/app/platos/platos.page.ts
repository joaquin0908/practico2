import { Component, OnInit } from '@angular/core';
import { ServioComidaService } from '../services/servio-comida.service';
import { ActivatedRoute } from '@angular/router';
import { RootObject, Meal}  from '../interface/interface';
@Component({
  selector: 'app-platos',
  templateUrl: './platos.page.html',
  styleUrls: ['./platos.page.scss'],
})
export class PlatosPage implements OnInit {
  ArrayPlatos: Meal[]=[];
  constructor(private getcat:ServioComidaService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.rutaActiva.params
       .subscribe(({ category }) => {
         console.log(category);
    this.getcat.getCatFood(category).subscribe(apixD=>{
      console.log(apixD)
      this.ArrayPlatos=apixD.meals;
    })
  })

}}
