import { Component, OnInit } from '@angular/core';
import { ServioComidaService } from '../services/servio-comida.service';
import { RootObject, Category}  from '../interface/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  todasLasCategorias:Category[]=[]
  arrayMeal:Category[]=[]
  constructor(private showCate:ServioComidaService) {}
  ngOnInit(): void {
    this.showCate.getinfoApi().subscribe(apiXd=>{
    this.arrayMeal=apiXd.categories
    this.todasLasCategorias=apiXd.categories
  })


}
buscarCategoria(event: any) {
  const termino = event.target.value;
  if (termino && termino.trim() != '') {

    this.arrayMeal = this.arrayMeal.filter((item: Category) => {
      return item.strCategory.toLowerCase().indexOf(termino.toLowerCase()) > -1;
    });
  } else {
    this.arrayMeal = this.todasLasCategorias;
  }
}

}




