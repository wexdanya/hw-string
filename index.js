// написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// регістр не враховувати (рахувати і великі і маленькі голосні)
// працюємо тільки з латинецею
// const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// не використовувати регулярні вирази!

// спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)

const vowels = ["a", "e", "i", "u", "o", "y"];

const getCountOfVowels = (str, arr = vowels) =>
  str
    .toLowerCase()
    .split("")
    .filter((letter) => arr.includes(letter)).length;

console.log(getCountOfVowels("A vowel is a syllabic speech!"));
