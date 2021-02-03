var listCategory = [
  {
    id: 1,
    imageCategory: "img/shirts.png",
    category: "nike"
  },
  {
    id: 2,
    imageCategory: "img/shirts.png",
    category: "nike"
  },
  {
    id: 3,
    imageCategory: "img/shirts.png",
    category: "nike"
  },
  {
    id: 4,
    imageCategory: "img/shirts.png",
    category: "nike"
  },
  {
    id: 5,
    imageCategory: "img/shirts.png",
    category: "nike"
  },
  {
    id: 6,
    imageCategory: "img/shirts.png",
    category: "nike"
  }
];

//  var parent=document.getElementById("adidas");
var rowCategory = document.querySelector(".category__list");
listCategory.forEach(function insertCategory(cat) {
  rowCategory.innerHTML +=
    '<div class="category__item"><div class="category__name">' +
    cat.category +
    '</div><div class="category__img"><img src="' +
    cat.imageCategory +
    '" alt=""></div></div>';
});

//Recommend Product
var listRecommendProduct = [
    {
        id: 1,
        imageRecommendProduct : "img/january_born.jpg",
        nameRecommendProduct : "January Born",
        priceRecommendProduct : "$28.95"
    },
    {
        id: 2,
        imageRecommendProduct : "img/january_born.jpg",
        nameRecommendProduct : "January Born",
        priceRecommendProduct : "$28.95"
    },
    {
        id: 3,
        imageRecommendProduct : "img/january_born.jpg",
        nameRecommendProduct : "January Born",
        priceRecommendProduct : "$28.95"
    },
    {
        id: 4,
        imageRecommendProduct : "img/january_born.jpg",
        nameRecommendProduct : "January Born",
        priceRecommendProduct : "$28.95"
    }
]

listRecommendProduct.forEach(function insertRecommend(rem){
    document.querySelector(".product-recommend__list").innerHTML+='<div class="product__item"><div class="product__img"><img src="'+rem.imageRecommendProduct+'" alt=""></div><div class="product__desc"><div class="product__name">'+rem.nameRecommendProduct+'</div><div class="product__price">'+rem.priceRecommendProduct+'</div></div></div>'
});

//Featured Collection
var listFeaturedCollection = [
  {
    id: 1,
    imageFeaturedProduct: "img/allyouneedislove.jpg",
    nameFeaturedProduct: "January Born",
    priceFeaturedProduct: "$28.95",
    numberColorFeaturedProduct: "2 colors"
  },
  {
    id: 2,
    imageFeaturedProduct: "img/allyouneedislove.jpg",
    nameFeaturedProduct: "January Born",
    priceFeaturedProduct: "$28.95",
    numberColorFeaturedProduct: "2 colors"
  },
  {
    id: 3,
    imageFeaturedProduct: "img/january_born.jpg",
    nameFeaturedProduct: "January Born",
    priceFeaturedProduct: "$28.95",
    numberColorFeaturedProduct: "2 colors"
  },
  {
    id: 4,
    imageFeaturedProduct: "img/allyouneedislove.jpg",
    nameFeaturedProduct: "January Born",
    priceFeaturedProduct: "$28.95",
    numberColorFeaturedProduct: "2 colors"
  }
];

listFeaturedCollection.forEach(function insertFeaturedCollection(fea){
    document.querySelector(".featured-collection__list").innerHTML+='<div class="product__item"><div class="product__img"><img src="'+fea.imageFeaturedProduct+'" alt=""></div><div class="product__desc"><div class="product__name">'+fea.nameFeaturedProduct+'</div><div class="product__featured"><div class="product__price">'+fea.priceFeaturedProduct+'</div><span class="product__text-color">'+fea.numberColorFeaturedProduct+'</span></div></div></div>'
})

//Personable Product

var listPersonalProduct = [
  {
    id: 1,
    imagePersonalProduct: "img/personalizable.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  },
  {
    id: 2,
    imagePersonalProduct: "img/personalizable.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  },
  {
    id: 3,
    imagePersonalProduct: "img/personalizable.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  },
  {
    id: 4,
    imagePersonalProduct: "img/allyouneedislove.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  }
];

listPersonalProduct.forEach(function insertPersonalProduct(per){
    document.querySelector(".product-personable__list").innerHTML+='<div class="product__item"><div class="product__img"><img src="'+per.imagePersonalProduct+'" alt=""></div><div class="product-personal__icon"><i class="fas fa-user-edit"></i></div><div class="product__desc"><div class="product-personalizable">Personalizable</div><div class="product__name">'+per.namePersonalProduct+'</div><div class="product__featured"><div class="product__price">'+per.pricePersonalProduct+'</div><span class="product__text-color">'+per.numberColorPersonalProduct+'</span></div></div></div>'
})

//Custom mugs

var listCustomMugs = [
  {
    id: 1,
    imagePersonalProduct: "img/custom-mug.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  },
  {
    id: 2,
    imagePersonalProduct: "img/custom-mug.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  },
  {
    id: 3,
    imagePersonalProduct: "img/custom-mug.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  },
  {
    id: 4,
    imagePersonalProduct: "img/personalizable.jpg",
    namePersonalProduct: "January Born",
    pricePersonalProduct: "$28.95",
    numberColorPersonalProduct: "2 colors"
  }
];
listCustomMugs.forEach(function insertPersonalProduct(per) {
  document.querySelector(".custom-mugs__list").innerHTML +=
    '<div class="product__item"><div class="product__img"><img src="' +
    per.imagePersonalProduct +
    '" alt=""></div><div class="product-personal__icon"><i class="fas fa-user-edit"></i></div><div class="product__desc"><div class="product-personalizable">Personalizable</div><div class="product__name">' +
    per.namePersonalProduct +
    '</div><div class="product__featured"><div class="product__price">' +
    per.pricePersonalProduct +
    '</div><span class="product__text-color">' +
    per.numberColorPersonalProduct +
    "</span></div></div></div>";
});