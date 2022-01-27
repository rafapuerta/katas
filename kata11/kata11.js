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
test1.add(4);
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

let string3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu enim, posuere ac efficitur non, mattis vel massa. Sed cursus sed nisi at porttitor. Nulla facilisi. Suspendisse quis interdum ligula. Curabitur malesuada neque vitae velit tristique, et placerat felis finibus. Fusce vel magna bibendum tortor condimentum accumsan. Sed bibendum vehicula molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec consectetur, orci nec lobortis accumsan, lorem nunc gravida ex, sit amet egestas tellus nunc fermentum eros. Aliquam tempus sapien ipsum, ac mollis orci placerat vitae. Vivamus at urna a dui cursus consectetur. Nulla justo tellus, malesuada vel facilisis nec, ultrices vel nulla.

Nunc vel risus vel arcu volutpat tincidunt non non arcu. Phasellus vestibulum aliquet nisi, at varius lectus venenatis ut. Maecenas dictum imperdiet mauris, nec auctor nibh aliquam eu. Pellentesque blandit magna vel enim sagittis pellentesque. Mauris hendrerit dapibus orci et ornare. Nam in erat non dui tempus rhoncus eget in nisi. Vivamus maximus rutrum dolor sed auctor. Etiam congue fermentum ante, non congue orci bibendum in. Donec sit amet nunc sit amet sapien bibendum congue nec eu enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam iaculis turpis sed neque vehicula finibus. Curabitur blandit eleifend pulvinar.

Praesent commodo euismod velit sed sagittis. Nulla ut augue et odio fringilla convallis. Pellentesque nec tempor nisl. Maecenas id arcu tellus. Suspendisse finibus, libero vel ultricies tristique, lectus mi dictum diam, ac porttitor ante ante eu nisl. Vestibulum massa leo, congue ut nibh in, pharetra fermentum eros. Praesent semper, elit eget iaculis sagittis, nulla metus tincidunt ipsum, volutpat aliquet mi lectus a arcu. Morbi lobortis, ipsum ut tempor vehicula, massa turpis ultricies quam, at faucibus velit massa non augue. Morbi dolor sapien, sollicitudin egestas dolor in, aliquet iaculis neque. Morbi malesuada congue ex, eget convallis nulla pulvinar sit amet. Quisque leo dui, semper sed purus in, venenatis venenatis libero. Integer eget augue condimentum, aliquam massa non, lacinia lectus. Duis ac odio sit amet justo posuere auctor. Nulla ut orci nisl.

Donec luctus nisi auctor porttitor tempus. Nulla facilisi. Mauris eget diam eget tellus gravida laoreet. In lobortis purus rutrum lorem sodales posuere. Vivamus in lectus facilisis, porttitor enim ut, sagittis lacus. Donec quis tellus sed tellus vestibulum suscipit sed vitae magna. Pellentesque eget imperdiet leo. Pellentesque imperdiet convallis nibh et congue. Phasellus elementum nibh id auctor commodo. Phasellus maximus, magna vitae bibendum laoreet, ligula ligula tristique felis, sit amet commodo mauris nulla a ligula. Vestibulum vestibulum sem sed arcu tempor tristique.

Phasellus mattis tristique leo et aliquet. In quis elementum magna, ut commodo ex. In malesuada lectus vitae nisi luctus, a viverra ligula pellentesque. Donec vehicula condimentum massa, sit amet porta orci. Etiam mauris metus, dapibus nec vestibulum vel, elementum consequat massa. Maecenas nibh tellus, porta ut velit sit amet, egestas condimentum eros. Pellentesque pellentesque massa dapibus orci congue, non hendrerit sem laoreet. Sed ultrices sit amet diam at molestie. Sed vel augue tempor, eleifend lorem interdum, pellentesque orci. Aliquam sed volutpat est.`;

test3.print(string3);
