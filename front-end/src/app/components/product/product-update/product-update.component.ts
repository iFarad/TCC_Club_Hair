import { Product, Servico } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  servico = new Servico()
  novoServico = new Servico();


  novoProduto = false

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    const nome = this.route.snapshot.paramMap.get("nomeServico");

    this.novoProduto = nome == '0' ? true : false

    this.productService.readById(id).subscribe((product) => {
      this.product = product;
      this.servico = product.servicos.find(a => a.nome == nome)
      console.log('this.servico:', this.servico)
    });
  }

  updateProduct(): void {
    this.product.servicos = this.product.servicos.filter(a => { return a.nome != this.servico.nome }).concat(this.servico)
    console.log('this.product.servicos:', this.product.servicos)
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  AdicionarServico() {
    try {

      this.product.servicos = this.product.servicos.filter(a => { return a.nome != this.novoServico.nome }).concat(this.novoServico)
      console.log('this.product.servicos:', this.product.servicos)
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      });
    } catch (error) { console.log('error:', error) }
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
