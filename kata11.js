// Kata #11 => http://codekata.com/kata/kata11-sorting-it-out/

class Bolas {
  constructor() {
    this.bolas = [];
  }

  add(numero) {
    this.bolas[numero] = numero;
  }

  print() {
    let array = [];
    array = this.bolas.filter((numero) => numero !== false);
    console.log(array);
  }
}

class Ordenar {
  constructor(string = '') {
    this.text = string;
  }

  print(text = this.text) {
    this.text = text;
    console.log(this.all(this.text));
  }

  all(text) {
    let textclean = [];
    for (let i = 0; i < text.length; i++) {
      let letra = text[i].toLowerCase().charCodeAt(0);
      if (letra > 96 && letra < 123) {
        textclean.push(letra);
      }
    }
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < textclean.length; i++) {
        if (textclean[i - 1] > textclean[i]) {
          done = false;
          let tmp = textclean[i - 1];
          textclean[i - 1] = textclean[i];
          textclean[i] = tmp;
        }
      }
    }
    let final = '';
    for (let i = 0; i < textclean.length; i++) {
      final += String.fromCharCode(textclean[i]);
    }
    return final;
  }
}

/* class Ordenar {
  constructor(string = '') {
    this.text = string;
    this.limpio = [];
    this.ordenado = [];
    this.traducido = '';
  }

  print(text = this.text) {
    this.text = text;
    this.clean(this.text);
    this.order(this.limpio);
    this.translate(this.ordenado);
    console.log(this.traducido);
  }

  clean(text) {
    let textclean = [];
    for (let i = 0; i < text.length; i++) {
      let letra = text[i].toLowerCase().charCodeAt(0);
      if (letra > 96 && letra < 123) {
        textclean.push(letra);
      }
    }
    this.limpio = textclean;
  }

  order(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    this.ordenado = array;
  }

  translate(array) {
    let final = '';
    for (let i = 0; i < array.length; i++) {
      final += String.fromCharCode(array[i]);
    }
    this.traducido = final;
  }
} */

//testeo

let test1 = new Bolas();

test1.add(20);
test1.print();
test1.add(10);
test1.print();
test1.add(30);
test1.print();
test1.add(94);
test1.print();
test1.add(38);
test1.print();

let string =
  'When not studying nuclear physics, Bambi likes to play beach volleyball';
let string2 = 'En algún lugar de la mancha de cuyo nombre no quiero acordarme';

let test2 = new Ordenar(string);
let test3 = new Ordenar();

test2.print();
test2.print(string2);
test3.print();
test3.print(string);
