const profiles = [
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/27.jpg',
    profileName: 'cillaelopes',
  }, {
    imageUrl: 'https://randomuser.me/api/portraits/women/30.jpg',
    profileName: 'marialucena',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/41.jpg',
    profileName: 'barbaran',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    profileName: 'bartolomeo',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
    profileName: 'francisca',
  }, {
    imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    profileName: 'ketlenn',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
    profileName: 'bethluz',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    profileName: 'luizguerrero',
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/13.jpg',
    profileName: 'brisaalana',
  }, {
    imageUrl: 'https://randomuser.me/api/portraits/men/27.jpg',
    profileName: 'helioottoni',
  },
];

export default {
stories: [
  {
    profile: profiles[0],
  },
  {
    profile: profiles[1],
  },
  {
    profile: profiles[2],
  },
  {
    profile: profiles[3],
  },
  {
    profile: profiles[4],
  },
  {
    profile: profiles[5],
  },
  {
    profile: profiles[6],
  },
  {
    profile: profiles[7],
  },
  {
    profile: profiles[8],
  },
  {
    profile: profiles[9],
  },
],
posts: [
  {
    profile: profiles[0],
    location: 'Aqui',
    uri: 'https://images.unsplash.com/photo-1496661269814-a841e78df103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    comments: [
        {
          id: 1,
          message: "O empenho em analisar a consolidação das estruturas exige a precisão e a definição dos níveis de motivação departamental.",
          profile: profiles[2],
          time: new Date()
        }]
  },
  {
    profile: profiles[1],
    location: 'Casa da Mãe Joana',
    uri: 'https://images.unsplash.com/photo-1496326968759-9f01b492145d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    comments: [
      {
        id: 1,
        message: "O empenho em analisar a consolidação das estruturas exige a precisão e a definição dos níveis de motivação departamental.",
        profile: profiles[2],
        time: new Date()
      }]
  }
],
};