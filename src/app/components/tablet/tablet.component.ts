import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiciosService } from 'src/service/Servicios.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {

  public t: String;
  public usuarios: Array<any>;
  constructor(
    private _service: ServiciosService,
    private _router: Router,
    private _activateRouter: ActivatedRoute) {
    this.t = "";
  }

  mostrarDatos() {
    this._service.usuariosPrueba().subscribe(response => {
      this.usuarios = response;
    })
  }

  mostrarDetalles(id) {

    this._router.navigate(["/detalles/" + id]);
  }

  ngOnInit(): void {
    this.mostrarDatos();
  }

}
