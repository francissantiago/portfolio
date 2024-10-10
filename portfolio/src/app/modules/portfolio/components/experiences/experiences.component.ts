import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Angular',
        p: 'Radio Memory | 2024 - Data Atual',
      },
      text: '',
    },
    {
      summary: {
        strong: 'Desenvolvedor Blockchain',
        p: 'SperoCoin | 2017 - Data Atual',
      },
      text: 'Como profissional especializado em desenvolvimento blockchain, possuo habilidades abrangentes que incluem experiência específica nos padrões Bitcoin RPC 1.0 e RPC 2.0. Minha expertise envolve a criação e implementação de soluções robustas, utilizando as melhores práticas desses protocolos. Tenho profundo conhecimento em interações RPC, desenvolvimento de contratos inteligentes e a capacidade de projetar e implementar aplicações descentralizadas eficientes. Minha habilidade em trabalhar com a infraestrutura blockchain permite-me contribuir de maneira significativa para projetos inovadores, garantindo a conformidade com os padrões estabelecidos.',
    },
    {
      summary: {
        strong: 'Desenvolvedor PHP',
        p: 'Desenvolvedor autônomo | 2016 - Data Atual',
      },
      text: 'Como profissional de desenvolvimento de aplicações PHP, destaco minhas habilidades na criação de soluções robustas e eficientes, utilizando PHP tanto com quanto sem a integração de banco de dados MySQL. Minha experiência abrange desde o desenvolvimento de sistemas dinâmicos até a criação de aplicações Progressivas para a Web (PWA), proporcionando experiências de usuário responsivas e envolventes. Tenho expertise em implementar arquiteturas eficientes, garantindo desempenho otimizado e segurança. Além disso, meu compromisso com as melhores práticas de desenvolvimento e a busca contínua por atualizações tecnológicas me permitem oferecer soluções inovadoras e de alta qualidade.',
    },
    {
      summary: {
        strong: 'Manutenção de Hardware',
        p: 'Hope Assistência Técnica | 2017 - 2019',
      },
      text: 'Como profissional altamente capacitado em assistência técnica, trago habilidades especializadas na manutenção de hardware. Minhas rotinas diárias envolvem a análise meticulosa de componentes eletrônicos, diagnóstico preciso de falhas e a implementação de soluções eficientes para otimizar o desempenho de dispositivos. Realizo com destreza a desmontagem e remontagem de equipamentos, efetuando reparos, substituições de peças e, quando necessário, realizando soldas. Minha expertise se estende à limpeza preventiva, garantindo que os dispositivos operem de maneira eficaz, prevenindo problemas decorrentes do acúmulo de poeira e sujeira. Além disso, mantenho uma documentação detalhada de cada intervenção realizada, assegurando transparência e rastreabilidade no processo de manutenção.',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Soluções para Blockchain',
        p: 'SperoCoin/LightBurden | 2017 - Data Atual',
      },
      text: 'Como profissional no campo do desenvolvimento de aplicações blockchain, destaco minhas habilidades na criação de soluções especializadas, incluindo exploradores de blocos, web wallets e plataformas de investimentos. Minha experiência abrange a concepção e implementação de sistemas eficientes e seguros, proporcionando aos usuários uma experiência intuitiva e confiável. Sou proficiente na integração de tecnologias blockchain, garantindo a interoperabilidade entre diferentes componentes. Além disso, possuo a capacidade de desenvolver interfaces de usuário atraentes e funcionais, aliando design intuitivo e performance otimizada em minhas aplicações.',
    },
  ]);
}
