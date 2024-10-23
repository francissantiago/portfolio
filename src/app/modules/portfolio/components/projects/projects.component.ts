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
      description: 'A <b>SperoCoin</b> é um projeto de criptomoeda com algoritmo x13 com blockchain própria.<br>\
        O projeto foi lançado em 2017, sendo mantido até os dias atuais.<br>\
        A intenção deste projeto é reduzir diferenças econômicas e sociais entre a população, sendo que, ao mesmo tempo,\
        elas são expostas ao aprendizado de utilização de uma criptomoeda e seu sistema descentralizado.',
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
      description: 'Primeira aplicação de delivery desenvolvida em PHP/PWA em 2022 de forma comercial.<br>\
        O projeto envolve múltiplas áreas de conhecimento como banco de dados, sistema de notitficações, gerenciamento de perfis de usuário, cupons de desconto,\
        dentre outras funcionalidades.',
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
      description: 'Aplicação para gerenciamento de igrejas desenvolvida em PHP/PWA, onde a finalidade da aplicação é reunir informações de membros e compartilhamento entre\
        as igrejas.<br>\
        A finalidade é reduzir os golpes e falsos membros dentro dos ministérios em comum.',
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
          href: 'https://github.com/francissantiago/Checkout_Transparente_Credito/',
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
          href: 'https://github.com/francissantiago/Checkout_Transparente_Debito/',
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
          href: 'https://github.com/francissantiago/Checkout_Transparente_PIX/',
        }
      ]
    },
    {
      src: 'assets/img/projects/bitcoin.png',
      alt: 'Premiação de participação no projeto Bitcoin',
      title: 'Premiação de participação no projeto Bitcoin',
      width: '100px',
      height: '51px',
      description: 'Participação, sendo destaque no mês de Fevereiro de 2022, nas traduções de trechos na documentação oficial do Bitcoin.',
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
    {
      src: 'assets/img/projects/radiomemory.png',
      alt: 'XWork Connect PHP',
      title: 'XWork Connect PHP',
      width: '100px',
      height: '51px',
      description: 'Uma biblioteca para gerenciar conexões com banco de dados XWF e Firebird na aplicação Gestão Profissional da empresa Radio Memory.',
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://github.com/francissantiago/xWorkConnect-PHP',
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Lista de Tarefas - ANGULAR',
      title: 'Lista de Tarefas - ANGULAR',
      width: '100px',
      height: '51px',
      description: 'Desenvolvida em Angular, essa lista de tarefas foi criada à partir de um projeto do curso "Curso de Angular 2 (v17+) Typescript do Básico ao Avançado" do instrutor Dener Troquatte.<br>\
        Foram utilizadas técnicas de localStorage, @Input e @Output, além de Signal.' ,
      links: [
        {
          name: 'ACESSAR PROJETO',
          href: 'https://francissantiago.github.io/Angular-ListaDeTarefas/',
        }
      ]
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
