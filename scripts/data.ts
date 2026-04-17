import uuid from 'react-native-uuid'

export type User = {
    name: string,
    pfp: string,
    descr: string
}

export type PostContent = {
    ownerId: number;
    text: string,
    img: any | undefined;
    time: Date,
    id: string
}

export const USERS: User[] = [
    {
        name: "Júnior Entrosa",
        pfp: "https://as2.ftcdn.net/jpg/01/40/87/71/1000_F_140877194_Ns1yqiZNk64k8yELu6zXtx9SmRgslkey.jpg",
        descr: 'Amo entrosar'
    },
    {
            name: "Sabrena Carpinteira",
            pfp: "https://img.freepik.com/free-photo/female-cutting-wood-plank_23-2148836061.jpg?semt=ais_hybrid&w=740&q=80",
            descr: 'Lineagem fortemente ligada com jesus\nPrimeira pastora lésbica de Volta Redonda - BH\n\nFique com... deusa???🙏🙏🙏🙏'
    },
    {
        name: "José Pimenta Alho",
        pfp: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fempresario-de-sucesso-sorrindo-no-escritorio-empresario-bem-sucedido-no-fundo-de-um-escritorio-brilhante_87394-43807.jpg&f=1&nofb=1&ipt=17786815d29d2cd35325e8326bd0f8dbf949f87d7687cdd98147a68c84e63fa2',
        descr: 'CEO da locadora Car-Alho Cars'
    }
]

function randomDate(endHour: number, startHour: number) {
  var date = new Date(+12 + Math.random() * (12 - 12));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

export const USER_POSTS: PostContent[] = [
    {
        ownerId: 0,
        text: "Semana passada minha casa explodiu. Enquanto muitos entrariam em pânico e se desesperariam, aproveitei a oportunidade para aprender sobre relacionamentos.\n\nPoucos tem essa mentalidade",
        img: "https://s2-g1.glbimg.com/DNzoT4EIZK1GvLUQDjo-UFoYKHo=/0x0:1700x1065/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/V/f/8HnuXLQqqe0oBr5M5GwQ/casa.jpg",
        time: randomDate(20, 20),
        id: uuid.v4()
    },
    {
        ownerId: 1,
        text: "Ano passado me introduzi no mundo da marcenaria, e com isso aprendi várias lições sobre o mundo do trabalho e do romance: \n\n1: quem com ferro fere, com ferro será ferido; \n2: aaaaaaaaaaaaaa",
        img: "https://dandimadeiras.com.br/wp-content/uploads/2018/09/wood-1318872_960_720.jpg",
        time: randomDate(15, 20),
        id: uuid.v4()
    },
    {
        ownerId: 2,
        text: "Acabei de otimizar meu departamento de RH em 70%, e os resultados são impressionantes: um aumento de 700% na produtividade. 🚀\n\nÀs vezes, liderar exige tomar decisões difíceis para simplificar as operações e focar no que realmente gera valor. Tudo se resume à eficiência enxuta e à maximização da produção. 📈\n\n#Liderança #Eficiência #Produtividade #CrescimentoDeNegócios #Otimização",
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2Fbmju.rgii.JZCUhqgBpLZw--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Njc-%2Fhttps%3A%2F%2Fmedia.zenfs.com%2Fen%2Faol_ny_post_us_news_articles_123%2F013d520d007f8645ba774299c6ae365f&f=1&nofb=1&ipt=1fd3f17f4e053f9e50a861baa94bd97dba8d1c7af0f8093f4a6c15ac71178db4',
        time: randomDate(23, 0),
        id: uuid.v4()
    },
    {
        ownerId: 0,
        text: "Refletindo sobre uma grande mudança na minha vida hoje. 🚀 Meu casamento chegou oficialmente ao fim e estou me preparando para a transição final amanhã. Grata pelas lições aprendidas durante este capítulo, enquanto me preparo para a minha saída definitiva.\n\n#NovosComeços #TransiçãoDeVida #ÚltimoMarco",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0Plv9LPB_doWfXrf-X4_7LR9g8pD2ARyRQ&s',
        time: randomDate(10, 15),
        id: uuid.v4()
    },
    {
        ownerId: 0,
        text: 'Enfrentar um desafio de saúde como a SARS foi um ponto de virada importante para mim. Sou grata pelo período de quarentena obrigatória para refletir e recarregar as energias. Adiei meus prazos finais para amanhã — priorizando o bem-estar para garantir o máximo desempenho!\n\n#Resiliência #EquilíbrioEntreVidaPessoalEProfissional #SaúdeEmPrimeiroLugar',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia3.cgtrader.com%2Fvariants%2FNKQA7xFQFGMUyg7WkWVhji9U%2F40073f86dea5cc27b3e46b911284f10ff35833da74046da55f55f229c8993de7%2Fsars-cov-2_preview02.jpg&f=1&nofb=1&ipt=198aba9bcbad102d64233b6481df75d4791fa173bb517f16ed099a6b026de3fd',
        time: randomDate(20, 0),
        id: uuid.v4()
    },
    {
        ownerId: 1,
        text: "Há algum profissional altamente ativo e voltado para a comunidade em minha rede que esteja buscando se conectar com um líder espiritual para um projeto de alto impacto?",
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fhayley-kiyoko-lesbian-jesus-laura-stewart.jpg&f=1&nofb=1&ipt=31c8a1448af0af75be4ed331dde0ba3b6065f6b93d1b8c88e28b02b37e0743fe',
        time: randomDate(50, 10),
        id: uuid.v4()
    },
    {
        ownerId: 1,
        text: "Estou muito animada para anunciar o lançamento de uma startup poliamorosa, liderada por mulheres e com foco na fé! 🚀 Busco parceiras com a mesma missão para se juntarem a essa comunidade inclusiva. Entre em contato por pombo-correio para conversarmos sobre sinergia e alinhamento.\n\n#Networking #FéNosNegócios #LiderançaInclusiva #NovosEmpreendimentos",
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dictionary.com%2Fe%2Fwp-content%2Fuploads%2F2019%2F04%2Fpolycule-2.png&f=1&nofb=1&ipt=f871ea37f2b96e5586a4383806f4d7225aaccfc7bd2ec947260083e2fe955747',
        time: randomDate(10, 20),
        id: uuid.v4()
    },
    {
        ownerId: 0,
        text: "Minha sogra me disse que eu nunca daria certo na vida. Hoje agradeço a ela todos os dias. Foi ouvindo aquela voz crítica que aprendi a amar de verdade — amando quem me desafia. Relacionamento não é sobre conforto, é sobre resiliência e growth mindset. ❤️📈\n\n#ObrigadoSogra #AmorQueCobra",
        time: randomDate(0, 10),
        id: uuid.v4(),
        img: undefined
    },
    {
        ownerId: 1,
        text: "Semana passada minha mulher chegou com um serrote e disse: 'vamos construir nossa relação do zero'. Ela tava falando literalmente. Construímos um armário juntas. Mas entenda: o amor também se constrói com madeira, fé e paciência. E com força bruta. 🙏🛠️\n\n#AmorLésbicoCarpinteiro #JesusConstroi",
        time: randomDate(0, 10),
        id: uuid.v4(),
        img: undefined
    },
    {
        ownerId: 2,
        text: "Acabei de aplicar a metodologia Car-Alho de otimização de relacionamentos no meu casamento. Reduzi discussões em 80% e aumentei a eficiência do carinho em 600%. 📊 O segredo? Demiti emocionalmente quem não agregava valor e contratei flores semanais. Amor é gestão pura. 🚗❤️\n\n#CEOdoAmor #CarAlhoCars",
        time: randomDate(0, 10),
        id: uuid.v4(),
        img: undefined
    },
    {
        ownerId: 0,
        text: "Meu ex terminou comigo por mensagem de texto. Enquanto muitos chorariam, agradeci a oportunidade de aprender sobre desapego ágil. Relacionamento é como startup: se não escalou, pivotar é necessário. Hoje estou aberta a novos investimentos emocionais. 💔🚀\n\n#LoveAgile #Recomeço",
        time: randomDate(0, 10),
        id: uuid.v4(),
        img: undefined
    },
    {
        ownerId: 1,
        text: "Sabe o que o martelo e o amor têm em comum? Os dois doem quando usados sem direção. Já dizia minha avó pastora: 'quem ama sem prego, constrói só vento'. Por isso hoje eu prego o amor com prego mesmo. E com muito suor e glória a Deus. 🔨🙌\n\n#AmorDeMarceneira #FéQueMovePranchas",
        time: randomDate(0, 10),
        id: uuid.v4(),
        img: undefined
    },
    {
        ownerId: 2,
        text: "Se o amor fosse um carro da Car-Alho Cars, ele teria bancos de couro, som ambiente e 3 meses de garantia. Mas atenção: relacionamento não é locação, é compra definitiva. Por isso faça um test drive antes de assinar o contrato emocional. ❤️🚙 #LigadoNoAmor #SemDevolução",
        time: randomDate(0, 10),
        id: uuid.v4(),
        img: undefined
    }
];