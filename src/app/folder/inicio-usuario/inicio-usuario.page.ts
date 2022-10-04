import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.page.html',
  styleUrls: ['./inicio-usuario.page.scss'],
})
export class InicioUsuarioPage implements OnInit {

  usuario = '';

  constructor(private router: Router){ }
  ngOnInit() {
  }

  ionViewWillEnter(){
    if(GlobaldataService.isLogged){
      this.usuario = GlobaldataService.userObject;
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
