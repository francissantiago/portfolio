import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/sperocoin.png',
      alt: 'SperoCoin',
      title: 'SperoCoin',
      width: '100px',
      height: '51px',
      description: 'Criptomoeda com algoritmo x13 lançada em 2017.',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/LightBurdenOfficial/SperoCoin/',
        }
      ]
    },
    {
      src: 'assets/img/projects/blackfineburguer.png',
      alt: 'BlackFine Burguer',
      title: 'BlackFine Burguer',
      width: '100px',
      height: '51px',
      description: 'Aplicação de delivery desenvolvida em PHP/PWA',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://app.blackfineburguer.com.br/',
        }
      ]
    },
    {
      src: 'assets/img/projects/ekklesia.png',
      alt: 'Ekklesia',
      title: 'Ekklesia',
      width: '100px',
      height: '51px',
      description: 'Aplicação para gerenciamento de igrejas desenvolvida em PHP/PWA',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://app-ekklesia.lightburden.net/',
        }
      ]
    },
    {
      src: 'assets/img/projects/pagseguro.png',
      alt: 'Checkout Transparente PagSeguro - Cartão de Crédito',
      title: 'Checkout Transparente PagSeguro - Cartão de Crédito',
      width: '100px',
      height: '51px',
      description: 'Biblioteca PHP para aceitação de pagamentos via PagSeguro na função Crédito',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/LightBurdenOfficial/Checkout_Transparente_Credito/',
        }
      ]
    },
    {
      src: 'assets/img/projects/pagseguro.png',
      alt: 'Checkout Transparente PagSeguro - Cartão de Crédito',
      title: 'Checkout Transparente PagSeguro - Cartão de Crédito',
      width: '100px',
      height: '51px',
      description: 'Biblioteca PHP para aceitação de pagamentos via PagSeguro na função Crédito',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/LightBurdenOfficial/Checkout_Transparente_Credito/',
        }
      ]
    },
    {
      src: 'assets/img/projects/pagseguro.png',
      alt: 'Checkout Transparente PagSeguro - Cartão de Débito',
      title: 'Checkout Transparente PagSeguro - Cartão de Débito',
      width: '100px',
      height: '51px',
      description: 'Biblioteca PHP para aceitação de pagamentos via PagSeguro na função Débito',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/LightBurdenOfficial/Checkout_Transparente_Debito/',
        }
      ]
    },
    {
      src: 'assets/img/projects/pagseguro.png',
      alt: 'Checkout Transparente PagSeguro - PIX',
      title: 'Checkout Transparente PagSeguro - PIX',
      width: '100px',
      height: '51px',
      description: 'Biblioteca PHP para aceitação de pagamentos via PagSeguro na função PIX',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/LightBurdenOfficial/Checkout_Transparente_PIX/',
        }
      ]
    },
    {
      src: 'assets/img/projects/bitcoin.png',
      alt: 'Premiação de participação no projeto Bitcoin',
      title: 'Premiação de participação no projeto Bitcoin',
      width: '100px',
      height: '51px',
      description: 'Participação, sendo destaque no mês de Fevereiro de 2022, nas traduções de strings na documentação do Bitcoin.',
      links: [
        {
          name: 'VER PREMIAÇÃO',
          href: 'https://drive.google.com/drive/folders/1vHb-FglGxAVtNtnK3XhNzlu04WeDLrH1/',
        }
      ]
    },
    {
      src: 'assets/img/projects/fanaticos.png',
      alt: 'Fanáticos Cash',
      title: 'Fanáticos Cash',
      width: '100px',
      height: '51px',
      description: 'Desenvolvimento de criptomoeda com blockchain própria.',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/fanaticoscriptosoficial/Fanaticos_Cash',
        }
      ]
    },
    {
      src: 'assets/img/projects/mousecoin.png',
      alt: 'MouseCoin',
      title: 'MouseCoin',
      width: '100px',
      height: '51px',
      description: 'Desenvolvimento de criptomoeda com blockchain própria.',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/Mousecoin-Network/Mousecoin-2.0/commits?author=LightBurdenOfficial&since=2022-03-01&until=2022-04-01',
        }
      ]
    },
  ]);
  
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
