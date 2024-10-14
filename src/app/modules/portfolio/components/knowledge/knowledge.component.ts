import { Component, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';


// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento em PHP',
      tooltip: 'PHP'
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'Ícone de conhecimento em MySQL',
      tooltip: 'MySQL'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento em HTML5',
      tooltip: 'HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento em CSS3',
      tooltip: 'CSS3'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento em Angular',
      tooltip: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento em Javascript',
      tooltip: 'Javascript'
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone de conhecimento em Docker',
      tooltip: 'Docker / docker-compose'
    },
    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Ícone de conhecimento em Bootstrap',
      tooltip: 'Bootstrap'
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Ícone de conhecimento em Github',
      tooltip: 'Github'
    },
    {
      src: 'assets/icons/knowledge/linux.svg',
      alt: 'Ícone de conhecimento em Linux',
      tooltip: 'Linux'
    },
    {
      src: 'assets/icons/knowledge/ubuntu.svg',
      alt: 'Ícone de conhecimento em Ubuntu',
      tooltip: 'Ubuntu'
    },
  ]);
}
