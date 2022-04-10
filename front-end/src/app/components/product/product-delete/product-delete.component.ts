import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Product, Servico } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  servico = new Servico()

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const nome = this.route.snapshot.paramMap.get('nome');
    console.log('name:', nome)
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
      this.servico = product.servicos.find(a => a.nome == nome)
      console.log('this.servico:', this.servico)
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
