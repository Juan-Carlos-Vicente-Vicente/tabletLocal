import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/service/Servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("nombre") nombre: ElementRef;
  @ViewChild("password") password: ElementRef;
  public nom: String;
  public pass: String;
  public sms: String;
  public token: String;
  constructor(private _router: Router, private _service: ServiciosService) {
  }

  irTablet() {
    this.nom = this.nombre.nativeElement.value;
    this.pass = this.password.nativeElement.value;
    if (this.nom == "S2VTournament" && this.pass == "sogetispain") {
      this._router.navigate(["/tablet/"]);
    } else {
      this.sms = "Error en los datos introducidos.";
    }
  }

  ngOnInit(): void {
  }

}
