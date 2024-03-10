type PetType = 'dog' | 'cat' | 'fish';

type Pet = {
  type: PetType,
  image: string,
  name: string,
  color: string,
  gender: 'Male' | 'Female',
};

const data: Pet[] = [
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    gender: 'Male'
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    gender: 'Male'
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Amarelo',
    gender: 'Female',
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    gender: 'Male'
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    gender: 'Male'
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    gender: 'Female',
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    gender: 'Male'
  },
  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    gender: 'Male'
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    gender: 'Male'
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    gender: 'Female',
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    gender: 'Male'
  },
  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    gender: 'Male'
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    gender: 'Male'
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    gender: 'Male'
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    gender: 'Male'
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    gender: 'Male'
  },
  {
    type: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    gender: 'Male'
  },
]

export const Pet = {
  getAll: (): Pet[] => {
    return data;
  },
  getFromType: (type: PetType): Pet[] => {
    return data.filter(item => item.type === type);
  },
  getFromName: (name: string): Pet[] => {
    return data.filter(item =>
      item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }
}