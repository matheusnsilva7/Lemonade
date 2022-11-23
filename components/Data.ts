const Data = {
  ENG: {
    nav: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Menu", href: "menu" },
      { id: 3, name: "Stores", href: "stores" },
      { id: 4, name: "Order pickup", href: "pickup" },
    ],
    home: {
      title: "The lemonade stand",
      subTitle: "the most fresh and healthy lemonade stand",
      firstBtn: "MENU",
      secondBtn: "STORES",
    },
    Menu: {
      firstProduct: {
        title: "Cheap lemonade",
        paragraph:
          "Lemon has caffeine, limonene, vitamin C and pectin, which speed up your metabolism and decrease the absorption of fats in the body.",
        price: "$0.50",
      },
      secondProduct: {
        title: "Fancy lemonade",
        paragraph:
          "Lemon has caffeine, limonene, vitamin C and pectin, which speed up your metabolism and decrease the absorption of fats in the body.",
        price: "$1.00",
      },
    },
    Pickup: {
      information:{
        product: "Product",
        quantity : "Quantity",
        price:"price,"
      },
      products:[{
        name:"Cheap lemonade",
        price:"$0.50"
      },{
        name:"Fancy lemonade",
        price:"$1.00"
      }],
      Order: {
        summary: "Order Summary",
        location:"which location?",
        locations: ["Sâo Paulo","Rio de janeiro", "Santa Catarina"],
        cost: "Total cost",
        btn: "ORDER"
      }
    }
  },
  POR: {
    nav: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Menu", href: "menu" },
      { id: 3, name: "Lojas", href: "stores" },
      { id: 4, name: "Order pickup", href: "pickup" },
    ],
    home: {
      title: "A barraca de limonada",
      subTitle: "a banca de limonada mais fresca e saudável",
      firstBtn: "MENU",
      secondBtn: "LOJAS",
    },
    Menu: {
      firstProduct: {
        title: "Limonada barata",
        paragraph:
          "O limão possui cafeína, limoneno, vitamina C e pectina, que aceleram o seu metabolismo e diminuem a absorção de gorduras no corpo.",
        price: "$0.70",
      },
      secondProduct: {
        title: "Limonada chique",
        paragraph:
          "O limão possui cafeína, limoneno, vitamina C e pectina, que aceleram o seu metabolismo e diminuem a absorção de gorduras no corpo.",
        price: "$1.00",
      },
    },
  },
};

export default Data;
