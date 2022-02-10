// Задание 1:
// Реализуйте недостающие методы в фабрике.
// От мамы считаем. Муж - Малик, дети - Радик, Лена, сестра - Минжаугар, братья - Миллят, Оскар, отец - Гизатулла Кидрячев, мать - Ркия Кидрячева

const users = [
  { id: 1, name: 'Минсарвар', surname: 'Зайнуллина', gender: 'female' },
  { id: 2, name: 'Малик', surname: 'Зайнуллин', gender: 'male' },
  { id: 3, name: 'Радик', surname: 'Зайнуллин', gender: 'male' },
  { id: 4, name: 'Елена', surname: 'Спиридонова', gender: 'female' },
  { id: 5, name: 'Минжаугар', surname: 'Усманова', gender: 'female' },
  { id: 6, name: 'Миллят', surname: 'Кидрячев', gender: 'male' },
  { id: 7, name: 'Оскар', surname: 'Кидрячев', gender: 'male' },
  { id: 8, name: 'Гизатулла', surname: 'Кидрячев', gender: 'male' },
  { id: 9, name: 'Ркия', surname: 'Кидрячева', gender: 'female' },
  { id: 10, name: 'Маргарита', surname: 'Спасская', gender: 'female' },
  { id: 11, name: 'Юля', surname: 'Ерофеева', gender: 'female' },
  { id: 12, name: 'Марк', surname: 'Спиридонов', gender: 'male' },
];

const relationships = [
  [2, 1, 'marriage'], // Малик - Минсарвар \ первый - муж, второй - жена
  [1, 3, 'parent'], // первый - родитель, второй - ребенок
  [2, 3, 'parent'], // первый - родитель, второй - ребенок
  [1, 4, 'parent'], // Минсарвар - Елена  /  первый - родитель, второй - ребенок
  [2, 4, 'parent'], // первый - родитель, второй - ребенок
  [1, 5, 'sibling'], // первый - брат/сестра, второй - брат/сестра
  [1, 6, 'sibling'], // первый - брат/сестра, второй - брат/сестра
  [1, 7, 'sibling'], // первый - брат/сестра, второй - брат/сестра
  [8, 1, 'parent'], // первый - родитель, второй - ребенок
  [9, 1, 'parent'], // первый - родитель, второй - ребенок
  [8, 5, 'parent'], // первый - родитель, второй - ребенок
  [9, 5, 'parent'], // первый - родитель, второй - ребенок
  [8, 6, 'parent'], // первый - родитель, второй - ребенок
  [9, 6, 'parent'], // первый - родитель, второй - ребенок
  [8, 9, 'marriage'], // первый - муж, второй - жена
];

function findUser(id) {
  const user = users.find((user) => user.id === id);

  return {
    ...user,

    get spouse() {
      for (const rel of relationships) {
        if (rel.includes(id) && rel[2] === 'marriage') {
          const spouseId = rel[0] === id ? rel[1] : rel[0];
          return users.find((user) => user.id === spouseId);
        }
      }
    },

    get parents() {
      const result = [];
      for (const rel of relationships) {
        if (rel.includes(id) && rel[2] === 'parent' && rel[1] === id) {
          const parentId = rel[0] === id ? rel[1] : rel[0];
          result.push(users.find((user) => user.id === parentId ));
        }
      }
      return result;
    },

    get children() {
      const result = [];
      for (const rel of relationships) {
        if (rel.includes(id) && rel[2] === 'parent' && rel[0] === id) {
          const parentId = rel[0] === id ? rel[1] : rel[0];
          result.push(users.find((user) => user.id === parentId ));
        }
      }
      return result;
    },

    get brothers() {
      const result = [];
      for (const rel of relationships) {
        if (rel.includes(id) && rel[2] === 'sibling' && rel[0] === id) {
          const parentId = rel[0] === id ? rel[1] : rel[0];
          result.push(users.find((user) => user.id === parentId ));
        }
      }
      return result;
    },
  };
}

module.exports = {
  findUser,
};
