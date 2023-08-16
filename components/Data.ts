const Data = {
  ENG: {
    nav: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Menu", href: "menu" },
      { id: 3, name: "Stores", href: "stores" },
      { id: 4, name: "Order pickup", href: "pickup" },
    ],
    home: {
      title: "Lemonade",
      firstBtn: "Click to slide",
    },
    Menu: {
      3: {
        title: "Small Lemonade",
        paragraph:
          "A burst of refreshment in a compact size. Made with freshly squeezed lemons, pure cane sugar, and the right water balance, it's perfect for quick pick-me-ups.",
        price: "$0.50",
      },
      2: {
        title: "Medium Lemonade",
        paragraph:
          "Balanced blend of sun-ripened lemons, natural sugars, and precise water mix. Ideal for warm afternoons, offering a harmonious taste. Enjoyable without being overwhelming—a perfect companion for relaxed moments.",
        price: "$1.50",
      },
      1: {
        title: "Large Lemonade",
        paragraph:
          "Ultimate refreshment with generous flavor. Ripe lemon essence, natural sweetness, and perfect water consistency. Ideal for extended enjoyment, whether by the pool, at a picnic, or when thirst calls for a satisfying sip of summer.",
        price: "$2.00",
      },
    },
    Pickup: {
      information: "Shopping card",
      products: [
        {
          name: "Small Lemonade",
          price: "0.50",
        },
        {
          name: "Medium Lemonade",
          price: "1.50",
        },
        {
          name: "Large Lemonade",
          price: "2.00",
        },
      ],
      Order: {
        summary: "Order Summary",
        location: "which location?",
        locations: "--Please choose an option--",
        cost: "Total cost",
        btn: "ORDER",
      },
      text: "The store is not opening today.",
    },
  },
  POR: {
    nav: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Menu", href: "menu" },
      { id: 3, name: "Lojas", href: "stores" },
      { id: 4, name: "Pedido para retirar", href: "pickup" },
    ],
    home: {
      title: "Limonada",
      firstBtn: "Menu",
    },
    Menu: {
      3: {
        title: "Limonada Pequena",
        paragraph:
          "Uma explosão refrescante em tamanho compacto. Feita com limões frescos, açúcar puro e a dose certa de água. Ideal para uma sede rápida, com sabor tangy revigorante.",
        price: "$0.50",
      },
      2: {
        title: "Limonada Média",
        paragraph:
          "Equilíbrio perfeito de limões maduros, açúcares naturais e água na medida certa. Ótima para tardes quentes, proporcionando um sabor harmonioso. Tamanho ideal para momentos relaxantes.",
        price: "$1.50",
      },
      1: {
        title: "Limonada Grande",
        paragraph:
          "O ápice da refrescância em uma porção generosa. Essência de limão verdadeiro, doçura na medida e a consistência perfeita de água. Ideal para momentos prolongados, seja em um piquenique ou no calor do verão.",
        price: "$2.00",
      },
    },
    Pickup: {
      information:"Carrinho de compras",
      products: [
        {
          name: "Limonada Pequena",
          price: "0.50",
        },
        {
          name: "Limonada Média",
          price: "1.50",
        },
        {
          name: "Limonada Grande",
          price: "2.00",
        },
      ],
      Order: {
        summary: "Resumo do pedido",
        location: "Qual local?",
        locations: "--Por favor escolha uma opção--",
        cost: "Custo total",
        btn: "PEDIR",
      },
      text: "A loja de bebidas não está abrindo hoje.",
    },
  },
};

export default Data;
