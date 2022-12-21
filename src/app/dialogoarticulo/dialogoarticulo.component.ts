import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Articulo} from '../articulo';

@Component({
  selector: 'app-dialogoarticulo',
  templateUrl: './dialogoarticulo.component.html',
  styleUrls: ['./dialogoarticulo.component.css']
})
export class DialogoarticuloComponent implements OnInit {
  public formularioRegistro : FormGroup;
  @Output() Data = [];
  public arrayPaises: any = []
  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: []) {
      this.formularioRegistro = this.fb.group({
        inpName:["",[Validators.required]],
        inpApellido:["",[Validators.required]],
        cbxPais:["",[Validators.required]],
        inpFechaNac:["",[Validators.required]]
      })
    }

    ngOnInit(): void {     
      this.arrayPaises = [
        {paisid:1, name:"Afganistán"},{paisid:2, name:"Alemania"},{paisid:3, name:"Andorra"},{paisid:4, name:"Angola"},{paisid:5, name:"Antigua y Barbuda"},{paisid:6, name:"Arabia Saudita"},
        {paisid:7, name:"Argelia"},{paisid:8, name:"Argentina"},{paisid:9, name:"Armenia"},{paisid:10, name:"Australia"},{paisid:11, name:"Austria"},{paisid:12, name:"Azerbaiyán"},
        {paisid:13, name:"Bahamas"},{paisid:14, name:"Bangladés"},{paisid:15, name:"Barbados"},{paisid:16, name:"Baréin"},{paisid:17, name:"Bélgica"},{paisid:18, name:"Belice"},
        {paisid:19, name:"Benín"},{paisid:20, name:"Bielorrusia"},{paisid:21, name:"Birmania"},{paisid:22, name:"Bolivia"},{paisid:23, name:"Bosnia y Herzegovina"},{paisid:24, name:"Botsuana"},{paisid:25, name:"Brasil"},{paisid:26, name:"Brunéi"},{paisid:27, name:"Bulgaria"},{paisid:28, name:"Burkina Faso"},{paisid:29, name:"Burundi"},{paisid:30, name:"Bután"},{paisid:31, name:"Cabo Verde"},{paisid:32, name:"Camboya"},{paisid:33, name:"Camerún"},{paisid:34, name:"Canadá"},{paisid:35, name:"Catar"},{paisid:36, name:"Chad"},{paisid:37, name:"Chile"},{paisid:38, name:"China"},{paisid:39, name:"Chipre"},{paisid:40, name:"Ciudad del Vaticano"},{paisid:41, name:"Colombia"},{paisid:42, name:"Comoras"},{paisid:43, name:"Corea del Norte"},{paisid:44, name:"Corea del Sur"},{paisid:45, name:"Costa de Marfil"},{paisid:46, name:"Costa Rica"},{paisid:47, name:"Croacia"},{paisid:48, name:"Cuba"},{paisid:49, name:"Dinamarca"},{paisid:50, name:"Dominica"},{paisid:51, name:"Ecuador"},{paisid:52, name:"Egipto"},{paisid:53, name:"El Salvador"},{paisid:54, name:"Emiratos Árabes Unidos"},{paisid:55, name:"Eritrea"},{paisid:56, name:"Eslovaquia"},{paisid:57, name:"Eslovenia"},{paisid:58, name:"España"},{paisid:59, name:"Estados Unidos"},{paisid:60, name:"Estonia"},{paisid:61, name:"Etiopía"},{paisid:62, name:"Filipinas"},{paisid:63, name:"Finlandia"},{paisid:64, name:"Fiyi"},{paisid:65, name:"Francia"},{paisid:66, name:"Gabón"},{paisid:67, name:"Gambia"},{paisid:68, name:"Georgia"},{paisid:69, name:"Ghana"},{paisid:70, name:"Granada"},{paisid:71, name:"Grecia"},{paisid:72, name:"Guatemala"},{paisid:73, name:"Guyana"},{paisid:74, name:"Guinea"},{paisid:75, name:"Guinea ecuatorial"},{paisid:76, name:"Guinea-Bisáu"},{paisid:77, name:"Haití"},{paisid:78, name:"Honduras"},{paisid:79, name:"Hungría"},{paisid:80, name:"India"},{paisid:81, name:"Indonesia"},{paisid:82, name:"Irak"},{paisid:83, name:"Irán"},{paisid:84, name:"Irlanda"},{paisid:85, name:"Islandia"},{paisid:86, name:"Islas Marshall"},{paisid:87, name:"Islas Salomón"},{paisid:88, name:"Israel"},{paisid:89, name:"Italia"},{paisid:90, name:"Jamaica"},{paisid:91, name:"Japón"},{paisid:92, name:"Jordania"},{paisid:93, name:"Kazajistán"},{paisid:94, name:"Kenia"},{paisid:95, name:"Kirguistán"},{paisid:96, name:"Kiribati"},{paisid:97, name:"Kuwait"},{paisid:98, name:"Laos"},{paisid:99, name:"Lesoto"},{paisid:100, name:"Letonia"},{paisid:101, name:"Líbano"},{paisid:102, name:"Liberia"},{paisid:103, name:"Libia"},{paisid:104, name:"Liechtenstein"},{paisid:105, name:"Lituania"},{paisid:106, name:"Luxemburgo"},{paisid:107, name:"Madagascar"},{paisid:108, name:"Malasia"},{paisid:109, name:"Malaui"},{paisid:110, name:"Maldivas"},{paisid:111, name:"Malí"},{paisid:112, name:"Malta"},{paisid:113, name:"Marruecos"},{paisid:114, name:"Mauricio"},{paisid:115, name:"Mauritania"},{paisid:116, name:"México"},{paisid:117, name:"Micronesia"},{paisid:118, name:"Moldavia"},{paisid:119, name:"Mónaco"},{paisid:120, name:"Mongolia"},{paisid:121, name:"Montenegro"},{paisid:122, name:"Mozambique"},{paisid:123, name:"Namibia"},{paisid:124, name:"Nauru"},{paisid:125, name:"Nepal"},{paisid:126, name:"Nicaragua"},{paisid:127, name:"Níger"},{paisid:128, name:"Nigeria"},{paisid:129, name:"Noruega"},{paisid:130, name:"Nueva Zelanda"},{paisid:131, name:"Omán"},{paisid:132, name:"Países Bajos"},{paisid:133, name:"Pakistán"},{paisid:134, name:"Palaos"},{paisid:135, name:"Palestina"},{paisid:136, name:"Panamá"},{paisid:137, name:"Papúa Nueva Guinea"},{paisid:138, name:"Paraguay"},{paisid:139, name:"Perú"},{paisid:140, name:"Polonia"},{paisid:141, name:"Portugal"},{paisid:142, name:"Reino Unido"},{paisid:143, name:"República Centroafricana"},{paisid:144, name:"República Checa"},{paisid:145, name:"República de Macedonia"},{paisid:146, name:"República del Congo"},{paisid:147, name:"República Democrática del Congo"},{paisid:148, name:"República Dominicana"},{paisid:149, name:"República Sudafricana"},{paisid:150, name:"Ruanda"},{paisid:151, name:"Rumanía"},{paisid:152, name:"Rusia"},{paisid:153, name:"Samoa"},{paisid:154, name:"San Cristóbal y Nieves"},{paisid:155, name:"San Marino"},{paisid:156, name:"San Vicente y las Granadinas"},{paisid:157, name:"Santa Lucía"},{paisid:158, name:"Santo Tomé y Príncipe"},{paisid:159, name:"Senegal"},{paisid:160, name:"Serbia"},{paisid:161, name:"Seychelles"},{paisid:162, name:"Sierra Leona"},{paisid:163, name:"Singapur"},{paisid:164, name:"Siria"},{paisid:165, name:"Somalia"},{paisid:166, name:"Sri Lanka"},{paisid:167, name:"Suazilandia"},{paisid:168, name:"Sudán"},{paisid:169, name:"Sudán del Sur"},{paisid:170, name:"Suecia"},{paisid:171, name:"Suiza"},{paisid:172, name:"Surinam"},{paisid:173, name:"Tailandia"},{paisid:174, name:"Tanzania"},{paisid:175, name:"Tayikistán"},{paisid:176, name:"Timor Oriental"},{paisid:177, name:"Togo"},{paisid:178, name:"Tonga"},{paisid:179, name:"Trinidad y Tobago"},{paisid:180, name:"Túnez"},{paisid:181, name:"Turkmenistán"},{paisid:182, name:"Turquía"},{paisid:183, name:"Tuvalu"},{paisid:184, name:"Ucrania"},{paisid:185, name:"Uganda"},{paisid:186, name:"Uruguay"},{paisid:187, name:"Uzbekistán"},{paisid:188, name:"Vanuatu"},{paisid:189, name:"Venezuela"},{paisid:190, name:"Vietnam"},{paisid:191, name:"Yemen"},{paisid:192, name:"Yibuti"},{paisid:193, name:"Zambia"},{paisid:194, name:"Zimbabue"},{paisid:195, name:""},
      ]
    }  

  cancelar() {
    this.dialogRef.close();
  }

}
