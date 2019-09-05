import React, { Component } from 'react';
import Header from './Header.jsx';
import Timeline from './Timeline.jsx';

import './styles/Container.css';

import jim from '../assets/jim.jpg';
import myles from '../assets/myles.jpg';
import kevin from '../assets/kevin.jpg';

const data = [
    {
        user: 'Myles Kennedy',
        date: '04 Set 2019',
        text:
            'Caros amigos, a execução dos pontos do programa aponta para a melhoria do orçamento setorial. Todavia, a mobilidade dos capitais internacionais oferece uma interessante oportunidade para verificação das condições inegavelmente apropriadas. Assim mesmo, a complexidade dos estudos efetuados exige a precisão e a definição do fluxo de informações. ',
        image: myles,
        comments: [
            {
                user: 'Kevin Bacon',
                image: kevin,
                user: 'Zé',
                text:
                    'No entanto, não podemos esquecer que o entendimento das metas propostas prepara-nos para enfrentar situações atípicas decorrentes dos procedimentos normalmente adotados'
            }
        ]
    },
    {
        user: 'Jim Carrey',
        date: '04 Set 2019',
        text:
            'A certificação de metodologias que nos auxiliam a lidar com a consolidação das estruturas garante a contribuição de um grupo importante na determinação dos índices pretendidos. Do mesmo modo, a determinação clara de objetivos facilita a criação de todos os recursos funcionais envolvidos.',
        image: jim,
        comments: [
            {
                user: 'Kevin Bacon',
                image: kevin,
                text:
                    'O empenho em analisar o consenso sobre a necessidade de qualificação desafia a capacidade de equalização das diretrizes de desenvolvimento para o futuro.'
            }
        ]
    },
    {
        user: 'Kevin Bacon',
        date: '04 Set 2019',
        text:
            'Acima de tudo, é fundamental ressaltar que a percepção das dificuldades estende o alcance e a importância das direções preferenciais no sentido do progresso.',
        image: kevin,
        comments: [
            {
                user: 'Myles Kennedy',
                image: myles,
                text:
                    'Pensando mais a longo prazo, o início da atividade geral de formação de atitudes nos obriga à análise do retorno esperado a longo prazo. '
            }
        ]
    }
];

class Container extends Component {
    render() {
        return (
            <div className={'container'}>
                <Header />
                <Timeline posts={data} />
            </div>
        );
    }
}

export default Container;
