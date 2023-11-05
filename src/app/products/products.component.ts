import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productList: any
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getListData();
    }

    async getListData(): Promise<any> {
        await this.http.post<any>(`${environment.apiUrl}/product/list`,{}).subscribe(data => {
            this.productList = data.data.products;
            console.log(this.productList)
            return this.productList;
        });
    }
}
