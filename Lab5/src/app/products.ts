import { Categories, Category } from './categories';

export class Product {
  num : number | undefined
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  description: string | undefined;
  url: string = '';
  photo: string | undefined;
  like: number | undefined;
}

export const products = [
  {
    num: 1,
    id: '1',
    name: 'Smartphone Apple iPhone 14 PRO Max',
    price: 1100,
    description: 'A large phone with one of the best screens',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    category: Categories[1],
    like: 0
  },
  {
    num: 2,
    id: '2',
    name: 'Laptop Apple MacBook Air Space Gray M2',
    price: 1200,
    description: 'The best choice in your life',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000',

    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/hcd/52679174324254/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg',
    category: Categories[2],
    like: 0
  },
  {
    num: 3,
    id: '1',
    name: 'Smartphone Samsung Galaxy S23+',
    price: 1000,
    description: 'A great phone with one of the best cameras',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-zelenyi-podarok-108714365/?c=750000000',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h3e/68538727563294/samsung-galaxy-s23-5g-8-gb-512-gb-zelenyi-108714365-1.jpg',
    category: Categories[1],
    like: 0
  },
  {
    num: 4,
    id: '1',
    name: 'Apple Watch Series 8 41 мм Aluminum золотистый',
    price: 520,
    description:
      'Поддержка платформ: iOS, Материал корпуса: алюминий, Цвет корпуса: starlight',
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-zolotistyi-106585035/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/hfa/63158666461214/apple-watch-series-8-41-mm-aluminum-zolotistyj-106585035-1.jpg',
    category: Categories[1],
    like: 0
  },
  {
    num: 5,
    id: '3',
    name: 'LUXVISAGE Lip Volumizer Hot Vanilla Lip Gloss Brown 304 Caramel',
    price: 20,
    description:
      'Lip gloss plumper LIP volumizer hot vanilla plumper creates a temporary effect of increasing the volume of the lips, makes the contour clearer, smoothes fine wrinkles, enhances the brightness of the lip color due to the warming effect.',
    url: 'https://kaspi.kz/shop/p/luxvisage-lip-volumizer-hot-vanilla-blesk-dlja-gub-korichnevyi-304-caramel-102827970/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h4f/47076161454110/luxvisage-blesk-dla-uvelicenia-ob-ema-gub-304-caramel-102827970-1.jpg',
    category: Categories[3],
    like: 0
  },
  {
    num: 6,
    id: '1',
    name: 'Smartwatch Apple Watch SE',
    price: 167298,
    description: 'beautiful and helpful watch',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',

    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/he9/46637897416734/apple-watch-se-44mm-space-gray-aluminium-case-with-sport-band-mydt2gk-a-cernyj-100568195-1-Container.jpg',
    category: Categories[1],
    like: 0
  },
  {
    num: 7,
    id: '4',
    name: 'Cooking Chief KENWOOD',
    price: 649990,
    description: 'no need to cook',
    url: 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hc8/33543472480286/kenwood-kcl95-004si-cooking-chef-xl-serebristyj-100883789-1-Container.jpg',
    category: Categories[4],
    like: 0
  },
  {
    num: 8,
    id: '2',
    name: 'Apple MacBook Air 13 MGN93 Laptop silver',
    price: 1100,
    description:
      'Large touchpad. Holds the charge well. Bright screen. Good speakers and good sound in headphones.',

    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000#!/item',

    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
    category: Categories[2],
    like: 0
  },
  {
    num: 9,
    id: '4',
    name: 'Game console Sony PlayStation 5',
    price: 750,
    description: 'the great present for boys',
    url: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h70/33035111104542/sony-playstation-5-belyj-100746577-2-Container.jpg',
      like: 0
    },
  {
    num: 10,
    id: '4',
    name: 'Blender Bosch MSM2650B',
    price: 70,
    description: 'Good blender with high quality',
    url: 'https://kaspi.kz/shop/p/smart-baby-watch-z6-gps-zelenyi-101910569/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hbd/49221585666078/bosch-msm-2650b-black-3100958-1-Container.jpg',
    category: Categories[4],
    like: 0
  },
  {
    num:11,
    id: '4',
    name: 'Samsung DV90T8240SX/LP Drying Machine Black',
    price: 950,
    description:
      'Dry things easier and more efficiently with the intelligent AI panel. Personalized drying cycles remember your preferences and display relevant information.',
    url: 'https://kaspi.kz/shop/p/samsung-dv90t8240sx-lp-chernyi-101247218/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hca/33713306042398/samsung-dv90t8240sx-lp-cernyj-101247218-1.jpg',
    category: Categories[4],
    like: 0
  },
  {
    num: 12,
    id: '4',
    name: 'Dyson V8 Motorhead Vacuum Cleaner Silver',
    price: 70,
    description: 'Silver vertical comfortable cleaner',
    url: 'https://kaspi.kz/shop/p/dyson-v8-motorhead-serebristyi-100403973/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h62/32379949121566/dyson-v8-motorhead-serebristyj-100403973-1.jpg',
    category: Categories[4],
    like: 0
  },
  {
    num: 13,
    id: '4',
    name: 'Dishwasher Bosch SMS44DI01T silver',
    price: 70,
    description: 'Let it wash your dishes instead of you',
    url: 'https://kaspi.kz/shop/p/bosch-sms44di01t-serebristyi-103948041/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/ha1/49097882075166/bosch-sms44di01t-serebristyj-103948041-1.jpg',
    category: Categories[4],
    like: 0
  },
  {
    num: 14,
    id: '2',
    name: 'Laptop Acer Nitro 5 AN515-57 NH.QEKER.004 black',
    price: 70,
    description: 'Bright screen, works quietly, quickly.',
    url: 'hhttps://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    category: Categories[2],
    like: 0
  },
  {
    num: 15,
    id: '2',
    name: 'Laptop Acer Nitro 5 AN515-57 NH.QEKER.004 black',
    price: 900,
    description: 'Bright screen, works quietly, quickly.',
    url: 'https://kaspi.kz/shop/p/asus-vivobook-m1603qa-mb219-90nb0y81-m00cw0-sinii-108310032/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h7b/67525401575454/asus-vivobook-m1603qa-mb219-90nb0y81-m00cw0-sinii-108310032-1.jpg',
    category: Categories[2],
    like: 0
  },
  {
    num: 16,
    id:' 2',
    name: 'Laptop ASUS X515EA-BQ1189W 90NB0TY1-M25390 grey',
    price: 900,
    description: 'A very convenient and good laptop for work.',
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq1189w-90nb0ty1-m25390-seryi-105321625/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/hca/51563452956702/asus-asus-x515ea-i3-1115g4-8gb-256ssd-15-6-win11-x515ea-bq1189w-x515ea-bq1189w-seryj-105321625-1.jpg',
    category: Categories[2],
    like: 0
  },
  {
    num: 17,
    id: '3',
    name: 'LUXVISAGE Dragon Glass 3D Volume Lip Gloss Transparent Transparent',
    price: 900,
    description:
      'Mirror glossy gloss visually increases the volume of the lips, makes them fuller and moisturized.',
    url: 'https://kaspi.kz/shop/p/luxvisage-dragon-glass-3d-volume-blesk-dlja-gub-prozrachnyi-prozrachnyi-103377724/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h40/48133471731742/prozracnyj-blesk-dla-gub-dragon-glass-3d-volume-103377724-3.jpg',
    category: Categories[3],
    like: 0
  },
  {
    num: 18,
    id: '3',
    name: 'The Ordinary Niacinamide 10%+Zinc 1% Serum 30 ml',
    price: 40,
    description:
      'From the first applications, the result is visible. Dries inflammation.',
    url: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h46/33287291764766/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-3.jpg',
    category: Categories[3],
    like: 0
  },
  {
    num: 19,
    id: '3',
    name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer Cream 100 ml',
    price: 190,
    description:
      'This moisturizer has ingredients identical to the skin that mimic skin secretions, moisturizes the skin, and also has the function of retaining moisture.',
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h5e/49917534175262/dr-ceuracle-krem-dla-lica-pro-balance-biotics-moisturizer-100-ml-100675870-2.jpg',
      like: 0
  },
  {
    num: 20,
    id:' 3',
    name: 'MEDI-PEEL Luxury 24K Gold Ampoules Serum 100 ml',
    price: 20,
    description:
      'The product tightens the skin and strengthens the contours of the face, has a lifting effect and increases the elasticity of the skin.',
    url: 'https://kaspi.kz/shop/p/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778/?c=750000000#!/item',
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h03/49884106752030/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778-2.jpg',
      like: 0
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
