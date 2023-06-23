import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject, Category, Meal}  from '../interface/interface';
@Injectable({
  providedIn: 'root'
})
export class ServioComidaService {

  constructor(private https:HttpClient) { }
  getinfoApi (){
    return this.https.get<RootObject>("https://themealdb.com/api/json/v1/1/categories.php")

  }
  getCatFood (category:string){
    return this.https.get<RootObject>("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)
  }
}

