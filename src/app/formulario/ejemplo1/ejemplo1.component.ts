import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Usuario{
  nombre:string;
  edad:number;
  correo:string;

}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styles: ``
})
export default class Ejemplo1Component implements OnInit {
  formGroup!: FormGroup;
  nombre:string="Cardiel";

  persona:Usuario={
    nombre:'',
    edad:0,
    correo:''
  }

  constructor(private readonly fb: FormBuilder){}
  
  ngOnInit(): void {
      this.formGroup = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      nombre:[''],
      edad:[''],
      correo:['']

    })
  }

    onSubmit():void{
      //DESESTRUCTURAR DATOS, SOBREESCRIBIENDO 
      const{nombre,edad,correo} = this.formGroup.value;
      this.persona.nombre=nombre
      this.persona.edad=edad
      this.persona.correo=correo

      let personaJSON = JSON.stringify(this.persona);


      localStorage.setItem("persona",personaJSON);




      /* localStorage.setItem("nombre",this.nombre); */
    }

    subImprimir():void{
      const usarioGuardado =localStorage.getItem('persona');
      if (usarioGuardado) {
        const usuarioRecuperado: Usuario=JSON.parse(usarioGuardado);

        this.persona=usuarioRecuperado;
      }
    }



}