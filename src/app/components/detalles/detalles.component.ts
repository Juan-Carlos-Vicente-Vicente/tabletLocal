import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuario } from 'src/models/usuario';
import { ServiciosService } from 'src/service/Servicios.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  public identificador: String;
  public lista: Array<object>;

  constructor(
    private _activateRouter: ActivatedRoute
    , private _service: ServiciosService) {
    this.lista = [];
  }

  pasarIdUsuario() {
    this._activateRouter.params.subscribe((params: Params) => {
      if (params != null) {
        this.identificador = params.id;
      } else {
        console.log("No hay parametros");
      }
    })
  }

  comprobarUsuario() {
    this._service.usuariosPrueba().subscribe(response => {
      this.lista = response;
    })
  }

  elegirUsuario() {

  }

  ngOnInit(): void {
    this.pasarIdUsuario();
    this.comprobarUsuario();
  }

}
