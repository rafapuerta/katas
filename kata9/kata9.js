// Kata #9 => http://codekata.com/kata/kata09-back-to-the-checkout/

const clasificador = (precios) => {
  return (precios = precios.map((x) => {
    if (typeof x.promo != 'undefined') {
      return new ConPromo(
        x.item,
        x.importe,
        x.promo.cantidadOferta,
        x.promo.oferta
      );
    }

    return new SinPromo(x.item, x.importe);
  }));
};

class SinPromo {
  constructor(item, importe) {
    this.item2 = item;
    this.importe = importe;
    this.cantidad = 0;
  }

  get item() {
    return this.item2;
  }

  increment() {
    this.cantidad++;
  }

  total() {
    return this.cantidad * this.importe;
  }
}

class ConPromo {
  constructor(item, importe, cantidadOferta, oferta) {
    this.item2 = item;
    this.importe = importe;
    this.cantidadOferta = cantidadOferta;
    this.oferta = oferta;

    this.cantidad = 0;
  }

  get item() {
    return this.item2;
  }

  increment() {
    this.cantidad++;
  }

  total() {
    let total = 0;

    total += Math.floor(this.cantidad / this.cantidadOferta) * this.oferta;

    let resto = this.cantidad % this.cantidadOferta;
    total += resto * this.importe;

    return total;
  }
}

class Checkout {
  constructor(precios) {
    this.precios = clasificador(precios);
  }

  scan(item) {
    this.precios.find((x) => x.item === item).increment();
  }

  total() {
    return this.precios
      .map((x) => x.total())
      .reduce((total, x) => (total += x));
  }
}

//Testing

const precios = [
  {
    item: 'A',
    importe: 50,
    promo: {
      cantidadOferta: 2,
      oferta: 80,
    },
  },
  {
    item: 'A',
    importe: 50,
    promo: {
      cantidadOferta: 3,
      oferta: 130,
    },
  },
  {
    item: 'B',
    importe: 30,
    promo: {
      cantidadOferta: 2,
      oferta: 45,
    },
  },
  {
    item: 'C',
    importe: 20,
  },
  {
    item: 'D',
    importe: 15,
  },
];

function test(items, precios) {
  const checkout = new Checkout(precios);
  items.forEach((item) => checkout.scan(item));
  console.log(checkout.total());
}

test(['A', 'B'], precios);
test(['A', 'A'], precios);
test(['A', 'A', 'A'], precios);
test(['A', 'A', 'A', 'A', 'A'], precios);
test(['A', 'A', 'A', 'A', 'A', 'A'], precios);
test(['C', 'D', 'B', 'A'], precios);
