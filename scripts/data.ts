import uuid from 'react-native-uuid'

export type User = {
    name: string,
    pfp: string,
    descr: string
}

export type PostContent = {
    owner: User;
    text: string,
    img: any | undefined;
    time: Date,
    id: string
}

export const USER_POSTS: PostContent[] = [
    {
        owner: {
            name: "Júnior Entrosa",
            pfp: "https://as2.ftcdn.net/jpg/01/40/87/71/1000_F_140877194_Ns1yqiZNk64k8yELu6zXtx9SmRgslkey.jpg",
            descr: 'Amo entrosar'
        },
        text: "Semana passada minha casa explodiu. Enquanto muitos entrariam em pânico e se desesperariam, aproveitei a oportunidade para aprender sobre relacionamentos.\n\nPoucos tem essa mentalidade",
        img: "https://s2-g1.glbimg.com/DNzoT4EIZK1GvLUQDjo-UFoYKHo=/0x0:1700x1065/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/V/f/8HnuXLQqqe0oBr5M5GwQ/casa.jpg",
        time: new Date('0'),
        id: uuid.v4()
    },
    {
        owner: {
            name: "Sabrena Carpinteira",
            pfp: "https://img.freepik.com/free-photo/female-cutting-wood-plank_23-2148836061.jpg?semt=ais_hybrid&w=740&q=80",
            descr: 'Lineagem fortemente ligada com jesus\nBora bill e muito amor!!'
        },
        text: "Ano passado me introduzi no mundo da marcenaria, e com isso aprendi várias lições sobre o mundo do trabalho e do romance: \n\n1: quem com ferro fere, com ferro será ferido; \n2: aaaaaaaaaaaaaa",
        img: "https://dandimadeiras.com.br/wp-content/uploads/2018/09/wood-1318872_960_720.jpg",
        time: new Date(0),
        id: uuid.v4()
    },
    {
        owner: {
            name: "José Pimenta Alho",
            pfp: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fempresario-de-sucesso-sorrindo-no-escritorio-empresario-bem-sucedido-no-fundo-de-um-escritorio-brilhante_87394-43807.jpg&f=1&nofb=1&ipt=17786815d29d2cd35325e8326bd0f8dbf949f87d7687cdd98147a68c84e63fa2',
            descr: 'CEO da locadora Car-Alho Cars'
        },
        text: "Acabei de otimizar meu departamento de RH em 70%, e os resultados são impressionantes: um aumento de 700% na produtividade. 🚀\n\nÀs vezes, liderar exige tomar decisões difíceis para simplificar as operações e focar no que realmente gera valor. Tudo se resume à eficiência enxuta e à maximização da produção. 📈\n\n#Liderança #Eficiência #Produtividade #CrescimentoDeNegócios #Otimização",
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2Fbmju.rgii.JZCUhqgBpLZw--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Njc-%2Fhttps%3A%2F%2Fmedia.zenfs.com%2Fen%2Faol_ny_post_us_news_articles_123%2F013d520d007f8645ba774299c6ae365f&f=1&nofb=1&ipt=1fd3f17f4e053f9e50a861baa94bd97dba8d1c7af0f8093f4a6c15ac71178db4',
        time: new Date(0),
        id: uuid.v4()
    }
];