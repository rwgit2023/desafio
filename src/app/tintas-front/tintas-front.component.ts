import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tintas-front',
  templateUrl: './tintas-front.component.html',
  styleUrls: ['./tintas-front.component.css']
})
export class TintasFrontComponent {

  @Input()
  id: string = ''

  @Input()
  cor: any

  @Input()
  nome: string = ''

  @Input()
  palheta: string = ''








}


