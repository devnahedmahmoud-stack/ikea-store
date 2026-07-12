import {
  Category,
  FooterLink,
  HomeSection,
  IKEAStore,
  MenuItemButton,
  NavLink,
  ProductCard,
  RestaurantItem,
  SocialMediaLink,
  User,
} from "@/types/types";
import {
  Facebook02FreeIcons,
  InstagramFreeIcons,
  NewTwitterIcon,
  YoutubeFreeIcons,
} from "@hugeicons/core-free-icons";

export const productCards: ProductCard[] = [
  {
    id: 1,
    topSeller: true,
    images: ["/spruttig.png", "/spruttig1.png"],
    title: "spruttig",
    subtitle: "Hanger, black, 100 cm",
    price: 179,
    unitPrice: 17.9,
    pack: "pack",
    packCount: 10,
    ratingCount: 79,
    store: "Cairo",
  },
  {
    id: 2,
    topSeller: true,
    images: ["/milkforther-1.png", "/milkforther-2.png", "/milkforther-3.png"],
    title: "PRODUKT",
    subtitle: "Milk-frother, black",
    price: 99,
    ratingCount: 44,
    store: "Cairo",
    description: "Milk-frother, black",
  },
  {
    id: 3,
    topSeller: true,
    images: ["/pokalglass-1.png", "/pokalglass-2.png", "/pokalglass-3.png"],
    title: "pokal",
    subtitle: "Glass, pink, 35 cl 104.177.10",
    price: 69,
    ratingCount: 24,
    store: "Cairo",
    priceLowered: "price Lowered",
    lastChance: "Last chance",
    previousPrice: 99,
    description:
      "With their classic design and different sizes, POKAL glasses are sure to be favourites – great for water and soft drinks and can also hold warm beverages like coffee or tea. Made of tempered glass for added strength and durability.",
  },
  {
    id: 4,
    topSeller: true,
    images: [
      "/fnisswastebin-1.png",
      "/fnisswastebin-2.png",
      "/fnisswastebin-3.png",
      "/fnisswastebin-4.png",
      "/fnisswastebin-5.png",
    ],
    title: "fniss waste bin",
    subtitle: "Waste bin, white, 10 l 402.954.39",
    price: 99,
    ratingCount: 94,
    store: "Cairo",
    moreOptions: "More options",
    description: "Waste bin, white, 10 l 402.954.39",
  },
  {
    id: 5,
    topSeller: true,
    images: ["/BOLMENtoiletbrush-1.png", "/BOLMENtoiletbrush-2.png"],
    title: "BOLMEN",
    subtitle: "Toilet brush/holder, white, 10 l 402.954.39",
    price: 99,
    ratingCount: 10,
    store: "Cairo",
    moreOptions: "More options",
  },
  {
    id: 6,
    topSeller: true,
    images: [
      "/RINNIGdishwashingbrush-1.png",
      "/RINNIGdishwashingbrush-2.png",
      "/RINNIGdishwashingbrush-3.png",
      "/RINNIGdishwashingbrush-4.png",
      "/RINNIGdishwashingbrush-5.png",
    ],
    title: "RINNIG",
    subtitle: "Dish-washing brush",
    price: 79,
    ratingCount: 16,
    store: "Cairo",
    moreOptions: "More options",
    description:
      "RINNIG dish-washing brush has a comfortable handle and stiff bristles that make it easy to clean even the toughest stains. The brush head can be removed and replaced when needed, making it a long-lasting and sustainable choice for your kitchen.",
  },
  {
    id: 7,
    images: [
      "/storagebag-1.png",
      "/storagebag-2.png",
      "/storagebag-3.png",
      "/storagebag-4.png",
      "/storagebag-5.png",
      "/storagebag-6.png",
    ],
    title: "DIMPA",
    subtitle: "Storage bag, transparent, 65x22x65 cm",
    price: 239,
    ratingCount: 9,
    store: "Cairo",
    description: "Storage bag, transparent, 65x22x65 cm",
  },
];

export const homeMainSections: HomeSection[] = [
  {
    id: 1,
    title: "storage furniture",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/storage-organisation-st001.jpeg?imwidth=160",
    href: "storage-furniture",
    desc: "IKEA's comprehensive furniture storage collection, including wardrobes, bookcases, display cabinets, and shelves, provides the perfect solution for organizing. From boxes to baskets, we offer a variety of options for small storage needs, all of which can be customized to match your unique style.",
    heading: "A hideout for bedtime essentials",
    brief:
      "When you’re ready to sleep, let your nightstand necessities drift off in the new PLÖJKER bedside table. Behind its minimal box-like exterior, it’s much more than just a cube, with a drawer within a drawer providing lots of versatile space. Happy placed on the floor or attached to the wall, its clean, modern style fits into lots of bedroom looks – as well as perfectly coordinating with a PAX wardrobe and FORSAND doors.",
    categries: [
      {
        id: 1,
        title: "Bookcases & shelving units",
        href: "bookcases-shelving-units",
        image: "/bookcases-shelving-units.png",
        products: productCards,
      },
      {
        id: 2,
        title: "Storage solution systems",
        href: "storage-solution-systems",
        image: "/storage-solution-systems.png",
      },
      {
        id: 3,
        title: "Tv & media furniture",
        href: "tv-media-furniture",
        image: "/tv-media-furniture.png",
      },
      {
        id: 4,
        title: "Garage storage",
        href: "garage-storage",
        image: "/garage-storage.png",
      },
    ],
  },
  {
    id: 2,
    title: "desk & desk chairs",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/desk-desk-chairs-fu004.jpeg?imwidth=160",
    href: "tables-desks",
  },
  {
    id: 3,
    title: "outdoor products",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/outdoor-products-od001.jpeg?imwidth=160",
    href: "outdoor-products",
    desc: "Unlock the potential of your outdoor space with IKEA's Outdoor Products. Explore a selection of patio furniture, garden essentials, and versatile outdoor accessories. With a perfect blend of functionality and design, find the best solutions for creating stylish and comfortable outdoor retreats.",
    categries: [
      {
        id: 1,
        title: "outdoor furniture",
        href: "outdoor-furniture",
        image: "/outdoor-furniture.png",
      },
      {
        id: 2,
        title: "outdoor storage",
        href: "outdoor-storage",
        image: "/outdoor-storage.png",
      },
      {
        id: 3,
        title: "outdoor kitchen & accessories",
        href: "outdoor-kitchen-accessories",
        image: "/outdoor-kitchen-accessories.png",
      },
    ],
  },
  {
    id: 4,
    title: "kitchenware & tableware",
    image:
      "https://www.ikea.com/eg/ar/range-categorisation/images/product/kitchenware-tableware-kt001.jpeg?imwidth=160",
    href: "Kitchenware-tableware",
  },
  {
    id: 5,
    title: "decoration",
    image:
      "https://www.ikea.com/eg/ar/range-categorisation/images/product/decoration-de001.jpeg?imwidth=160",
    href: "decoration",
  },
  {
    id: 6,
    title: "sofas & armchairs",
    image:
      "https://www.ikea.com/eg/ar/range-categorisation/images/product/sofas-armchairs-700640.jpeg?imwidth=160",
    href: "sofas-armchairs",
  },
  {
    id: 7,
    title: "beds",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/beds-mattresses-bm001.jpeg?imwidth=160",
    href: "",
  },
  {
    id: 8,
    title: "lightning",
    image:
      "https://www.ikea.com/eg/ar/range-categorisation/images/product/lighting-li001.jpeg?imwidth=160",
    href: "",
  },

  {
    id: 9,
    title: "small storage & organisers",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/small-storage-organisers-st007.jpeg?imwidth=160",
    href: "",
  },
  {
    id: 10,
    title: "textiles & rugs",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/textiles-tl001.jpeg?imwidth=160",
    href: "",
  },
  {
    id: 11,
    title: "baby & children",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/baby-children-bc001.jpeg?imwidth=160",
    href: "",
  },
  {
    id: 12,
    title: "curtains & blinds",
    image:
      "https://www.ikea.com/global/assets/range-categorisation/images/product/curtains-blinds-tl002.jpeg?imwidth=160",
    href: "",
  },
];
export const footerLinks: FooterLink[] = [
  {
    id: 1,
    title: "Useful links",
    links: [
      {
        relLinks: [
          { id: 1, title: "Brochures", href: "/brochures" },
          { id: 2, title: "IKEA shopping app", href: "/ikea-shopping-app" },
          { id: 3, title: "Planning Tools", href: "/planning-tools" },
          { id: 4, title: "Stores", href: "/stores" },
          { id: 5, title: "IKEA Restaurant", href: "/restaurant" },
          { id: 6, title: "IKEA Family", href: "/ikea-family" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Customer service",
    links: [
      {
        relLinks: [
          { id: 1, title: "Terms and conditions", href: "/terms-conditions" },
          {
            id: 2,
            title: "Guarantees & warranties",
            href: "/guarantees-warranties",
          },
          { id: 3, title: "Spare parts", href: "/spare-parts" },
          { id: 4, title: "About services", href: "/customer-services" },
          { id: 5, title: "About shopping", href: "/about-shopping" },
          { id: 6, title: "Return policy", href: "/return-policy" },
          { id: 7, title: "Contact us", href: "/contact-us" },
          { id: 8, title: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "This is IKEA",
    links: [
      {
        relLinks: [
          { id: 1, title: "About IKEA", href: "/about-ikea" },
          { id: 2, title: "Democratic Design", href: "/democratic-design" },
          {
            id: 3,
            title: "Sustainable everyday",
            href: "/sustainable-everyday",
          },
          {
            id: 4,
            title: "Community engagement",
            href: "/community-engagement",
          },
          { id: 5, title: "Working at IKEA", href: "/working-at-ikea" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "General information",
    links: [
      {
        relLinks: [
          { id: 1, title: "Newsroom", href: "/newsroom" },
          { id: 2, title: "Careers", href: "/careers" },
          { id: 3, title: "Product recalls", href: "/product-recalls" },
        ],
      },
    ],
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 1,
    icon: Facebook02FreeIcons,
    href: "https://www.facebook.com/IkeaEgypt/",
  },
  {
    id: 2,
    icon: InstagramFreeIcons,
    href: "https://www.instagram.com/ikeaegypt/",
  },
  {
    id: 3,
    icon: YoutubeFreeIcons,
    href: "https://www.youtube.com/user/IKEAegypt",
  },
  {
    id: 4,
    icon: NewTwitterIcon,
    href: "https://x.com/IKEAEgypt",
  },
];

export const LOGIN_USERS: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    password: "password456",
  },
  {
    id: "3",
    firstName: "Nahed",
    lastName: "Mahmoud",
    email: "devnahedmahmoud@gmail.com",
    password: "password789",
  },
];
export const MenuItemButtons: MenuItemButton[] = [
  {
    id: 1,
    title: "Now at IKEA",
  },

  {
    id: 2,
    title: "Storage furniture",
  },

  {
    id: 3,
    title: "Desk & desk chairs",
  },

  {
    id: 4,
    title: "Outdoor products",
  },

  {
    id: 5,
    title: "Kitchenware & tableware",
  },

  {
    id: 6,
    title: "Decoration",
  },

  {
    id: 7,
    title: "Sofas & armchairs",
  },

  {
    id: 8,
    title: "Tables & chairs",
  },

  {
    id: 9,
    title: "Lighting",
  },

  {
    id: 10,
    title: "Baby & children",
  },
];

export const Rooms: NavLink[] = [
  {
    id: 1,
    title: "living room",
    href: "living-room",
    image: "/living-room.png",
    nestedLinks: [
      {
        id: 1,
        title: "Sofas",
        href: "sofas",
        image: "/sofas.png",
      },
      {
        id: 2,
        title: "living room Tables",
        href: "living-room-tables",
        image: "/living-room-tables.png",
      },
      {
        id: 3,
        title: "lighting",
        href: "lighting",
        image: "/lighting.png",
      },
      {
        id: 4,
        title: "Sofas",
        href: "sofas",
        image: "/sofas.png",
      },
      {
        id: 5,
        title: "living room Tables",
        href: "living-room-tables",
        image: "/living-room-tables.png",
      },
      {
        id: 6,
        title: "lighting",
        href: "lighting",
        image: "/lighting.png",
      },
      {
        id: 7,
        title: "Sofas",
        href: "sofas",
        image: "/sofas.png",
      },
    ],
    gallery: [
      {
        id: 1,
        title: "Mix and match colours and materials",
        href: "",
        image: "/living-room-gallery-1.png",
      },
      {
        id: 2,
        title: "Japandi style inspired by nature",
        href: "",
        image: "/living-room-gallery-2.png",
      },
      {
        id: 3,
        title: "Modern yet timeless for cosy mingles",
        href: "",
        image: "/living-room-gallery-3.png",
      },
      {
        id: 4,
        title: "Family fun, modern Scandi style",
        href: "",
        image: "/living-room-gallery-4.png",
      },
    ],
  },

  {
    id: 2,
    title: "dining",
    href: "dining",
    image: "/dining-room.png",
  },

  {
    id: 3,
    title: "kitchen",
    href: "kitchen",
    image: "/kitchen.png",
  },

  {
    id: 4,
    title: "bedroom",
    href: "bedroom",
    image: "/bedroom.png",
  },

  {
    id: 5,
    title: "bathroom",
    href: "bathroom",
    image: "/bathroom.png",
  },
  {
    id: 6,
    title: "home office",
    href: "home-office",
    image: "/hoomeoffice.png",
  },
  {
    id: 7,
    title: "hallway",
    href: "hallway",
    image: "/hallway.png",
  },
  {
    id: 8,
    title: "garden & balcony",
    href: "outdoor",
    image: "/garden.png",
  },
  {
    id: 9,
    title: "hallway",
    href: "hallway",
    image: "/hallway.png",
  },
  {
    id: 10,
    title: "garden & balcony",
    href: "/rooms/outdoor",
    image: "/garden.png",
  },
];
export const navBarLinks: NavLink[] = [
  { id: 1, title: "products", href: "/products" },
  { id: 2, title: "rooms", href: "/rooms" },
  { id: 3, title: "offers", href: "/offers" },
  { id: 4, title: "design & ideas", href: "/products" },
  { id: 5, title: "services", href: "/products" },
];
export const MenuMainLinks: FooterLink[] = [
  {
    id: 1,
    title: "products",
    links: [
      {
        id: 1,
        title: "Now at IKEA",
        image: "/MenuImages/new.png",
        relLinks: [
          {
            id: 1,
            title: "new products",
            href: "/new",
          },

          {
            id: 2,
            title: "priced lowered",
            href: "/cat/lower-price",
          },

          {
            id: 3,
            title: "IKEA food",
            href: "/stores/restaurant",
          },

          {
            id: 4,
            title: "join IKEA family",
            href: "/ikea-family",
          },
        ],
        secondLinks: {
          header: "Everyday value",
          links: [
            { id: 1, title: "IKEA food", href: "/stores/restaurant" },
            { id: 2, title: "top seller", href: "" },
            { id: 3, title: "new products", href: "/new" },
            { id: 4, title: "our lowest price", href: "/lowest-price" },
            { id: 5, title: "last chance", href: "/last-chance" },
            {
              id: 6,
              title: "Everyday essentials",
              href: "/everyday-essentials",
            },
            {
              id: 7,
              title: "affordable essentials",
              href: "/compaigns/affordable-essentials",
            },
          ],
        },
        thirdLinks: {
          header: "Price with convenient",
          links: [
            { id: 1, title: "under 100 EGP", href: "/search" },
            { id: 2, title: "under 300 EGP", href: "/search" },
            { id: 3, title: "under 500 EGP", href: "/search" },
          ],
        },
      },
      {
        id: 2,
        title: "storage furniture",
        image:
          "https://www.ikea.com/global/assets/range-categorisation/images/product/storage-organisation-st001.jpeg?imwidth=160",
        relLinks: [
          {
            id: 1,
            title: "Explore storage furniture",
            href: "storage-furniture",
            desc: "IKEA's comprehensive furniture storage collection, including wardrobes, bookcases, display cabinets, and shelves, provides the perfect solution for organizing. From boxes to baskets, we offer a variety of options for small storage needs, all of which can be customized to match your unique style.",
            categries: [
              {
                id: 1,
                title: "Bookcases & shelving units",
                href: "bookcases-shelving-units",
                image: "/bookcases-shelving-units.png",
              },
              {
                id: 2,
                title: "Storage solution systems",
                href: "storage-solution-systems",
                image: "/storage-solution-systems.png",
              },
              {
                id: 3,
                title: "Tv & media furniture",
                href: "tv-media-furniture",
                image: "/tv-media-furniture.png",
              },
              {
                id: 4,
                title: "Garage storage",
                href: "garage-storage",
                image: "/garage-storage.png",
              },
            ],
          },
        ],
        secondLinks: {
          links: [
            {
              id: 1,
              title: "Bookcases & shelving units",
              href: "bookcases-shelving-units",
              image: "/bookcases-shelving-units.png",
            },
            {
              id: 2,
              title: "Storage solution systems",
              href: "storage-solution-systems",
              image: "/storage-solution-systems.png",
            },
            {
              id: 3,
              title: "Tv & media furniture",
              href: "tv-media-furniture",
              image: "/tv-media-furniture.png",
            },
            {
              id: 4,
              title: "Garage storage",
              href: "garage-storage",
              image: "/garage-storage.png",
            },
          ],
        },
        thirdLinks: {
          links: [
            { id: 1, title: "Hallway", href: "/search" },
            { id: 2, title: "Shoe cabinet", href: "/search" },
          ],
        },
      },
      {
        id: 3,
        title: "desk & desk chairs",
        image:
          "https://www.ikea.com/global/assets/range-categorisation/images/product/desk-desk-chairs-fu004.jpeg?imwidth=160",
        relLinks: [
          {
            id: 1,
            title: "Explore desk & desk chairs",
            href: "tables-desks",
            categries: [],
          },
          {
            id: 2,
            title: "Top rated disks",
            href: "/",
          },
        ],
        secondLinks: {
          links: [
            { id: 1, title: "Desks & computer desks", href: "/" },
            { id: 2, title: "Desk chairs", href: "/" },
            { id: 3, title: "Gaming furniture", href: "/" },
            {
              id: 4,
              title: "Conference tables",
              href: "/",
            },
          ],
        },
      },
      {
        id: 4,
        title: "outdoor products",
        image:
          "https://www.ikea.com/global/assets/range-categorisation/images/product/outdoor-products-od001.jpeg?imwidth=160",
        relLinks: [
          {
            id: 1,
            title: "Explore outdoor products",
            href: "outdoor-products",
            desc: "Unlock the potential of your outdoor space with IKEA's Outdoor Products. Explore a selection of patio furniture, garden essentials, and versatile outdoor accessories. With a perfect blend of functionality and design, find the best solutions for creating stylish and comfortable outdoor retreats.",
            categries: [
              {
                id: 1,
                title: "outdoor furniture",
                href: "outdoor-furniture",
                image: "/outdoor-furniture.png",
              },
              {
                id: 2,
                title: "outdoor storage",
                href: "outdoor-storage",
                image: "/outdoor-storage.png",
              },
              {
                id: 3,
                title: "outdoor kitchen & accessories",
                href: "outdoor-kitchen-accessories",
                image: "/outdoor-kitchen-accessories.png",
              },
            ],
          },
        ],
        secondLinks: {
          links: [
            {
              id: 1,
              title: "outdoor furniture",
              href: "outdoor-furniture",
              image: "/outdoor-furniture.png",
            },
            {
              id: 2,
              title: "outdoor storage",
              href: "outdoor-storage",
              image: "/outdoor-storage.png",
            },
            {
              id: 3,
              title: "outdoor kitchen & accessories",
              href: "outdoor-kitchen-accessories",
              image: "/outdoor-kitchen-accessories.png",
            },
          ],
        },
      },
      {
        id: 5,
        title: "sofas & armchairs",
        image:
          "https://www.ikea.com/eg/ar/range-categorisation/images/product/sofas-armchairs-700640.jpeg?imwidth=160",
        relLinks: [],
      },
      {
        id: 6,
        title: "beds",
        image:
          "https://www.ikea.com/global/assets/range-categorisation/images/product/beds-mattresses-bm001.jpeg?imwidth=160",
        relLinks: [],
      },
      {
        id: 7,
        title: "lightning",
        image:
          "https://www.ikea.com/eg/ar/range-categorisation/images/product/lighting-li001.jpeg?imwidth=160",
        relLinks: [],
      },
    ],
  },
  {
    id: 2,
    title: "rooms",
    links: [],
  },
  {
    id: 3,
    title: "offers",
    links: [
      {
        relLinks: [
          {
            id: 1,
            title: "see all offers",
            href: "/offers",
          },

          {
            id: 2,
            title: "IKEA family offer",
            href: "/cat/lower-price",
          },

          {
            id: 3,
            title: "price lowered",
            href: "/cat/lower-price",
          },
          {
            id: 4,
            title: "IKEA food",
            href: "/stores/restaurant",
          },

          {
            id: 5,
            title: "all compaigns",
            href: "/compaigns",
          },
        ],
        secondLinks: {
          header: "All campaigns",
          links: [
            { id: 1, title: "Life starts in the kitchen", href: "" },
            { id: 2, title: "Trending this season", href: "" },
          ],
        },
        thirdLinks: {
          header: "Offers",
          links: [{ id: 1, title: "IKEA family offer", href: "/search" }],
        },
      },
    ],
  },
  {
    id: 4,
    title: "design & ideas",
    links: [
      {
        relLinks: [
          {
            id: 1,
            title: "see all ideas",
            href: "/all-ideas",
          },

          {
            id: 2,
            title: "home inspiration",
            href: "/home-inspiration",
          },

          {
            id: 3,
            title: "brouchures",
            href: "/customer-service/brouchures",
          },

          {
            id: 4,
            title: "campaigns",
            href: "/compaigns",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "services",
    links: [
      {
        relLinks: [
          {
            id: 1,
            title: "see all services",
            href: "/all-services",
          },

          {
            id: 2,
            title: "ikea for business",
            href: "/ikea-business",
          },

          {
            id: 3,
            title: "join IKEA family",
            href: "/ikea-family",
          },

          {
            id: 4,
            title: "customer care",
            href: "/customer-service",
          },
        ],
      },
    ],
  },
];
export const FurnitureProducts: ProductCard[] = [
  {
    id: 8,
    topSeller: true,
    images: ["/furniture/sofa-1.png", "/furniture/sofa-2.png"],
    title: "Modern",
    subtitle: "3-seat sofa, velvet, dark blue",
    description: "Comfortable 3-seat velvet sofa with wooden legs.",
    price: 899,
    unitPrice: 299.67,
    pack: "Set",
    packCount: 3,
    ratingCount: 214,
    store: "Home Comfort",
    priceLowered: "15% Off",
    lastChance: "Only 4 left",
    previousPrice: 1050,
    moreOptions: "5 colors available",
  },
  {
    id: 9,
    topSeller: false,
    images: [
      "/furniture/table-1.png",
      "/furniture/table-2.png",
      "/furniture/table-3.png",
      "/furniture/table-4.png",
      "/furniture/table-5.png",
    ],
    title: "Oak",
    subtitle: "Dining table, solid oak, 180x90 cm",
    description: "Solid oak dining table suitable for 6 people.",
    price: 650,
    unitPrice: 108.33,
    pack: "Box",
    packCount: 6,
    ratingCount: 98,
    store: "Urban Living",
    previousPrice: 720,
    moreOptions: "2 sizes available",
    priceLowered: "price Lowered",
  },
  {
    id: 10,
    topSeller: true,
    images: [
      "/furniture/chair-1.png",
      "/furniture/chair-2.png",
      "/furniture/chair-3.png",
      "/furniture/chair-4.png",
      "/furniture/chair-5.png",
      "/furniture/chair-6.png",
      "/furniture/chair-7.png",
      "/furniture/chair-8.png",
      "/furniture/chair-9.png",
      "/furniture/chair-10.png",
    ],
    title: "Ergonomic",
    subtitle: "Adjustable office chair with lumbar support",
    description: "Adjustable office chair with lumbar support.",
    price: 249,
    ratingCount: 432,
    store: "WorkSpace Pro",
    priceLowered: "10% Off",
    previousPrice: 279,
    moreOptions: "Mesh & leather options",
  },
  {
    id: 11,
    images: [
      "/furniture/bed-1.png",
      "/furniture/bed-2.png",
      "/furniture/bed-3.png",
    ],
    title: "Minimalist",
    subtitle: "Queen-size wooden bed frame",
    description: "Queen-size wooden bed frame with modern design.",
    price: 499,
    unitPrice: 249.5,
    pack: "Piece",
    packCount: 2,
    ratingCount: 156,
    store: "Dream House",
    lastChance: "Selling fast",
    previousPrice: 560,
  },
  {
    id: 12,
    topSeller: false,
    images: [
      "/furniture/shelf-1.png",
      "/furniture/shelf-2.png",
      "/furniture/shelf-3.png",
      "/furniture/shelf-4.png",
    ],
    title: "Scandinavian",
    subtitle: "5-tier bookshelf, natural pine wood",
    description: "5-tier bookshelf made from natural pine wood.",
    price: 320,
    ratingCount: 87,
    store: "Nordic Style",
    moreOptions: "White & walnut finishes",
  },
  {
    id: 13,
    topSeller: true,
    images: [
      "/furniture/armchair-1.png",
      "/furniture/armchair-2.png",
      "/furniture/armchair-3.png",
      "/furniture/armchair-4.png",
      "/furniture/armchair-5.png",
      "/furniture/armchair-6.png",
    ],
    title: "Luxury",
    subtitle: "Premium leather recliner with footrest",
    description: "Premium leather recliner with footrest.",
    price: 799,
    unitPrice: 799,
    pack: "Single",
    packCount: 1,
    ratingCount: 301,
    store: "Relax Zone",
    priceLowered: "20% Off",
    lastChance: "Limited stock",
    previousPrice: 999,
    moreOptions: "3 leather finishes",
  },
  {
    id: 14,
    images: [
      "/furniture/beside-table-1.png",
      "/furniture/beside-table-2.png",
      "/furniture/beside-table-3.png",
      "/furniture/beside-table-4.png",
    ],
    title: "Rustic Nightstand",
    subtitle: "Wooden bedside table with storage drawer",
    description: "Wooden bedside table with storage drawer.",
    price: 95,
    ratingCount: 47,
    store: "Country Home",
    moreOptions: "Natural & espresso wood",
  },
  {
    id: 15,
    images: [
      "/furniture/cabinet-1.png",
      "/furniture/cabinet-2.png",
      "/furniture/cabinet-3.png",
      "/furniture/cabinet-4.png",
      "/furniture/cabinet-5.png",
      "/furniture/cabinet-6.png",
    ],
    title: "Modern",
    subtitle: "Slim shoe storage cabinet",
    description: "Slim shoe storage cabinet with 4 compartments.",
    price: 260,
    ratingCount: 89,
    store: "Entry Style",
    moreOptions: "White & oak finishes",
  },
];
export const AccessoriesProducts: ProductCard[] = [
  {
    id: 16,
    topSeller: true,
    images: [
      "/accessories/lamp-1.png",
      "/accessories/lamp-2.png",
      "/accessories/lamp-3.png",
    ],
    title: "FEJKA",
    subtitle: "Artificial potted plant, in/outdoor, 9 cm",
    description:
      "Lifelike artificial plant that stays fresh-looking year after year.",
    price: 149,
    unitPrice: 149,
    pack: "pc",
    packCount: 1,
    ratingCount: 328,
    store: "Cairo Festival City",
    moreOptions: "3 sizes",
  },
  {
    id: 17,
    topSeller: true,
    images: [
      "/accessories/curtain-1.png",
      "/accessories/curtain-2.png",
      "/accessories/curtain-3.png",
      "/accessories/curtain-4.png",
      "/accessories/curtain-5.png",
    ],
    title: "GLADOM",
    subtitle: "Tray table, white",
    description: "Lightweight side table with removable tray.",
    price: 899,
    ratingCount: 214,
    store: "Mall of Arabia",
    moreOptions: "4 colours",
  },
  {
    id: 18,
    images: [
      "/accessories/waste-bin-1.png",
      "/accessories/waste-bin-2.png",
      "/accessories/waste-bin-3.png",
      "/accessories/waste-bin-4.png",
      "/accessories/waste-bin-5.png",
      "/accessories/waste-bin-6.png",
      "/accessories/waste-bin-7.png",
      "/accessories/waste-bin-8.png",
      "/accessories/waste-bin-1.png",
      "/accessories/waste-bin-9.png",
    ],
    title: "BORRBY Lantern",
    subtitle: "Waste bin, white, 10 l 402.954.39",
    description:
      "The stackable DAMMÄNG bins help you save space and allow waste sorting to be part of the home interior. This one is perfect for larger waste like packages made of plastic or paper.",
    price: 349,
    ratingCount: 97,
    store: "Cairo Festival City",
    priceLowered: "New lower price",
    previousPrice: 399,
  },
  {
    id: 19,
    images: [
      "/accessories/carpet-1.png",
      "/accessories/carpet-2.png",
      "/accessories/carpet-3.png",
      "/accessories/carpet-4.png",
      "/accessories/carpet-5.png",
      "/accessories/carpet-6.png",
    ],
    title: "SKOGSVIKEN",
    subtitle: "Tray, bamboo, 40x30 cm",
    description: "Bamboo tray for organizing small items.",
    price: 249,
    unitPrice: 249,
    pack: "pc",
    packCount: 1,
    ratingCount: 61,
    store: "Mall of Arabia",
  },
  {
    id: 20,
    topSeller: true,
    images: [
      "/accessories/bath-sheet-1.png",
      "/accessories/bath-sheet-2.png",
      "/accessories/bath-sheet-3.png",
      "/accessories/bath-sheet-4.png",
    ],
    title: "SMYCKA",
    subtitle: "Artificial flower, 10 cm",
    description: "Realistic decorative flower for vases and arrangements.",
    price: 39,
    unitPrice: 39,
    pack: "stem",
    packCount: 1,
    ratingCount: 442,
    store: "Cairo Festival City",
    moreOptions: "8 colours",
  },
  {
    id: 21,
    images: [
      "/accessories/storage-case-1.png",
      "/accessories/storage-case-2.png",
      "/accessories/storage-case-3.png",
      "/accessories/storage-case-4.png",
      "/accessories/storage-case-5.png",
      "/accessories/storage-case-6.png",
      "/accessories/storage-case-7.png",
    ],
    title: "RINNIG",
    subtitle: "Dish brush with replaceable head, white",
    description: "Ergonomic dish brush for everyday cleaning.",
    price: 79,
    unitPrice: 79,
    pack: "pc",
    packCount: 1,
    ratingCount: 183,
    store: "Mall of Arabia",
  },
  {
    id: 22,
    images: [
      "/accessories/bin-1.png",
      "/accessories/bin-2.png",
      "/accessories/bin-3.png",
      "/accessories/bin-4.png",
      "/accessories/bin-5.png",
    ],
    title: "VARIERA Box",
    subtitle: "Practical storage box for shelves and cabinets.",
    description: "Practical storage box for shelves and cabinets.",
    price: 129,
    pack: "pc",
    packCount: 1,
    ratingCount: 251,
    store: "Cairo Festival City",
    moreOptions: "2 colours",
  },
  {
    id: 23,
    topSeller: true,
    images: [
      "/accessories/red-lamp-1.png",
      "/accessories/red-lamp-2.png",
      "/accessories/red-lamp-3.png",
      "/accessories/red-lamp-4.png",
      "/accessories/red-lamp-5.png",
    ],
    title: "FRAKTA",
    subtitle: "Reusable shopping bag, large capacity",
    description: "Durable reusable shopping bag with large capacity.",
    price: 29,
    unitPrice: 29,
    pack: "pc",
    packCount: 1,
    ratingCount: 1203,
    store: "Mall of Arabia",
  },
  {
    id: 24,
    images: [
      "/accessories/curtain-1.png",
      "/accessories/curtain-2.png",
      "/accessories/curtain-3.png",
      "/accessories/curtain-4.png",
      "/accessories/curtain-5.png",
    ],
    title: "PEPPRIG",
    subtitle: "Microfiber cloth, 3-pack",
    description: "Absorbent microfiber cloth for multiple surfaces.",
    price: 99,
    pack: "pack",
    packCount: 3,
    unitPrice: 33,
    ratingCount: 112,
    store: "Cairo Festival City",
  },
  {
    id: 25,
    images: [
      "/accessories/carpet-1.png",
      "/accessories/carpet-2.png",
      "/accessories/carpet-3.png",
      "/accessories/carpet-4.png",
      "/accessories/carpet-5.png",
      "/accessories/carpet-6.png",
    ],
    title: "LYSANDE",
    subtitle: "Battery-operated LED candle with warm glow",
    description: "Battery-operated LED candle with warm glow.",
    price: 199,
    ratingCount: 168,
    store: "Mall of Arabia",
    lastChance: "Last chance",
  },
  {
    id: 26,
    images: [
      "/accessories/basket-1.png",
      "/accessories/basket-2.png",
      "/accessories/basket-3.png",
      "/accessories/basket-4.png",
    ],
    title: "KRUSTISTEL",
    subtitle: "Handwoven basket for decorative storage",
    description: "Handwoven basket for decorative storage.",
    price: 449,
    ratingCount: 89,
    store: "Cairo Festival City",
    moreOptions: "2 sizes",
  },
  {
    id: 27,
    topSeller: true,
    images: [
      "/accessories/bath-sheet-1.png",
      "/accessories/bath-sheet-2.png",
      "/accessories/bath-sheet-3.png",
      "/accessories/bath-sheet-4.png",
    ],
    title: "TISKEN",
    subtitle: "Suction basket, white",
    description: "Wall-mounted basket with strong suction cups.",
    price: 179,
    ratingCount: 377,
    store: "Mall of Arabia",
    priceLowered: "New lower price",
    previousPrice: 229,
  },
];
export const NewCollectionsItems: NavLink[] = [
  {
    id: 1,
    title: "GREJSIMOJS collection",
    href: "GREJSIMOJS-collection",
    image: "/new-collections/collection-1.png",
    products: productCards,
  },
  {
    id: 2,
    title: "GOKVÄLLÅ collection",
    href: "GOKVÄLLÅ-collection",
    image: "/new-collections/collection-2.png",
  },
  {
    id: 3,
    title: "SMÖRFISK collection",
    href: "SMÖRFISK-collection",
    image: "/new-collections/collection-3.png",
  },
  {
    id: 4,
    title: "GULVIAL collection",
    href: "GULVIAL-collection",
    image: "/new-collections/collection-4.png",
  },
  {
    id: 5,
    title: "SANDLÖPARE collection",
    href: "SANDLÖPARE-collection",
    image: "/new-collections/collection-5.png",
  },
  {
    id: 6,
    title: "MÄVINN collection",
    href: "MÄVINN-collection",
    image: "/new-collections/collection-6.png",
  },
  {
    id: 7,
    title: "VÅGSJÖN series",
    href: "VÅGSJÖN-series",
    image: "/new-collections/collection-7.png",
  },
  {
    id: 8,
    title: "Check all New products",
    href: "new-products",
    image: "",
  },
];

export const Now_in_IKEA: NavLink[] = [
  {
    id: 1,
    title: "Discover this month's offer",
    desc: "IKEA Family members get more for less",
    href: "",
    image: "/now-in-ikea/family-offer.png",
    color: "#007CC1",
  },
  {
    id: 2,
    title: "Trending this season",
    desc: "Make the best of summer holiday",
    href: "",
    image: "/now-in-ikea/outdoor.png",
    color: "#DEBC9C",
  },
  {
    id: 3,
    title: "Living room magazine",
    desc: "Browse our Living room magazine for ideas & inspiration",
    href: "",
    image: "/now-in-ikea/living-room.png",
    color: "#F5F5F5",
  },
  {
    id: 4,
    title: "Play is for everyone, let the fun begin",
    desc: "GREJSIMOJS collection brings play beyond the playroom, encouraging creativity, movement, and joy across the entire home.",
    href: "",
    image: "/now-in-ikea/kids-room.png",
    color: "#CA5008",
  },
  {
    id: 5,
    title: "Affordable Essentials",
    desc: "Discover everyday essential products for all your rooms with affordable prices",
    href: "",
    image: "/now-in-ikea/essentials.png",
    color: "#F5F5F5",
  },
  {
    id: 6,
    title: "Free delivery to your doorstep across Egypt",
    desc: "on accessory purchases over 250 EGP and up to 20 KGs per order.",
    href: "",
    image: "/now-in-ikea/free-delivery.png",
    color: "#F5F5F5",
  },
];
export const RestaurantCtegories: Category[] = [
  {
    id: 1,
    name: "Breakfast",
    title: "Breakfast - Available until 11:30 AM",
    desc: "Wake up and enjoy a proper breakfast.",
  },
  {
    id: 2,
    name: "Cold dishes",
    title: "Cold dishes",
  },
  {
    id: 3,
    name: "Lunch and dinner",
    title: "Lunch and dinner - Available from 11:30am",
  },
  {
    id: 4,
    name: "Kids' meals",
    title: "Kids' meals",
  },
  {
    id: 5,
    name: "Desserts",
    title: "Delicious desserts at IKEA",
    desc: "Because in the end there is still some space ...",
  },
  {
    id: 6,
    name: "Beverages",
    title: "Beverages",
  },
];
export const RestaurantItems: RestaurantItem[] = [
  {
    id: 1,
    title: "Egyptian Breakfast",
    price: 39,
    categoryId: 1,
    image: "/IkeaFood/Egyptian-Breakfast.jpg",
  },
  {
    id: 2,
    title: "Grilled cheese sandwich",
    price: 29,
    categoryId: 1,
    image: "/IkeaFood/Grilled-cheese-sandwich.jpg",
  },
  {
    id: 3,
    title: "IKEA Breakfast",
    price: 45,
    categoryId: 1,
    image: "/IkeaFood/IKEA-Breakfast.jpg",
  },
  {
    id: 4,
    title: "Caesar Salad",
    price: 89,
    categoryId: 2,
    image: "/IkeaFood/Caesar-Salad.jpg",
  },
  {
    id: 5,
    title: "Marinated salmon",
    price: 99,
    categoryId: 2,
    image: "/IkeaFood/Marinated-salmon.jpg",
  },
  {
    id: 6,
    title: "Greek Salad",
    price: 69,
    categoryId: 2,
    image: "/IkeaFood/Greek-Salad.jpg",
  },
  {
    id: 7,
    title: "Oriental salad",
    price: 25,
    categoryId: 2,
    image: "/IkeaFood/Oriental-salad.jpg",
  },
  {
    id: 8,
    title: "Soup of the day",
    price: 29,
    categoryId: 2,
    image: "/IkeaFood/Soup-of-the-day.jpg",
  },
  {
    id: 9,
    title: "Meatballs - 12 pieces",
    price: 149,
    categoryId: 3,
    image: "/IkeaFood/Meatballs-12pieces.jpg",
    desc: "with mashed potato and broccoli",
  },
  {
    id: 10,
    title: "Meatballs - 8 pieces",
    price: 99,
    categoryId: 3,
    image: "/IkeaFood/Meatballs-8pieces.jpg",
    desc: "with mashed potato and broccoli",
  },
  {
    id: 11,
    title: "Salmon",
    price: 299,
    categoryId: 3,
    image: "/IkeaFood/Salmon.jpg",
    desc: "with lemon dill sauce and potato",
  },
  {
    id: 12,
    title: "Roasted chicken",
    price: 199,
    categoryId: 3,
    image: "/IkeaFood/Roasted-chicken.jpg",
    desc: "With seasonal mixed vegetable",
  },
  {
    id: 13,
    title: "Beef striploin",
    price: 349,
    categoryId: 3,
    image: "/IkeaFood/Beef-striploin.jpg",
  },
  {
    id: 14,
    title: "Kids meal",
    price: 69,
    categoryId: 4,
    image: "/IkeaFood/Kids-meal.jpg",
    desc: "Chicken nuggets with fries",
  },
  {
    id: 15,
    title: "Kid's Spaghetti with tomato sauce",
    price: 69,
    categoryId: 4,
    image: "/IkeaFood/Kid's-Spaghetti.jpg",
  },
  {
    id: 16,
    title: "Carrot Cake ",
    price: 69,
    categoryId: 5,
    image: "/IkeaFood/Carrot-Cake .jpg",
  },
  {
    id: 17,
    title: "Cinnamon bun",
    price: 49,
    categoryId: 5,
    image: "/IkeaFood/Cinnamon-bun.jpg",
  },
  {
    id: 18,
    title: "Rice Pudding",
    price: 29,
    categoryId: 5,
    image: "/IkeaFood/Rice-Pudding.jpg",
  },
  {
    id: 19,
    title: "Fruit salad Assorted fruits",
    price: 49,
    categoryId: 5,
    image: "/IkeaFood/Fruit-salad.jpg",
  },
  {
    id: 20,
    title: "Assorted muffins",
    price: 49,
    categoryId: 5,
    image: "/IkeaFood/Assorted-muffins.jpg",
  },
  {
    id: 21,
    title: "Jelly",
    price: 19,
    categoryId: 5,
    image: "/IkeaFood/Jelly.jpg",
  },
  {
    id: 22,
    title: "Coffee (refillable)",
    price: 45,
    categoryId: 6,
    image: "/IkeaFood/Coffee.jpg",
  },
  {
    id: 23,
    title: "Soft drink (refillable)",
    price: 39,
    categoryId: 6,
    image: "/IkeaFood/Soft-drink.jpg",
  },
  {
    id: 24,
    title: "Coffee with milk",
    price: 49,
    categoryId: 6,
    image: "/IkeaFood/Coffee-with-milk.jpg",
  },

  {
    id: 25,
    title: "Fresh orange juice",
    price: 65,
    categoryId: 6,
    image: "/IkeaFood/Fresh-orange-juice.jpg",
  },
  {
    id: 26,
    title: "Tea (Refillable)",
    price: 35,
    categoryId: 6,
    image: "/IkeaFood/Tea.jpg",
  },
];
export const IKEAStores: IKEAStore[] = [
  {
    id: 1,
    name: "IKEA Cairo Festival City",
    address: "Cairo festival city, Taha Hussuin str., Fifth settlement",
    hotline: "16576",
    image: "/IKEAStore/cairo-store.jpg",
    openingHours: "Daily  from 10 AM to 12 AM",
    desc: "Located at Festival City Mall, it stands out as the largest store, featuring the widest collection of items, from stylish furniture to design studios and home planning services. The store offers everything you need to revamp your home. Moreover, you can even enjoy the Småland Kids’ Play Area to keep your little ones entertained while you shop. You can also keep an eye on a packed schedule of in-store activities for your kids! For added convenience,we offer a self-service assembly area, where you can put together your furniture for FREE.",
    href:"cairo",
    title:"Planning your visit",
    desc2:`Accessible parking is available for our customers
          Småland
          Family-friendly toilets/baby care rooms
          Free wifi
          Accessibility - Accessible toilets / changing facilities
          Food and drink you can trust`,
    mainImage:"/IKEAStore/cairo-store-1.jpg"
  },
  {
    id: 2,
    name: "IKEA Mall of arabia",
    address:
      "Mall of Arabia, Expansion phase Gate 17 - 6th of October City Giza",
    hotline: "16576",
    image: "/IKEAStore/mall-arabia-store.jpg",
    openingHours: "Daily  from 10 AM to 12 AM",
    desc: "The store in - 6th of October City, Giza.This location features the same affordable, stylish furniture along with a Swedish café, offering a diverse range of bites and drinks that all your family would enjoy. IKEA MOA tailors its offerings to reflect the mix of traditional and modern homes in the area, catering to everyone from villa owners to apartment dwellers.",
    href:"mall-of-arabia",
    title:"Planning your visit",
    desc2:`Accessible parking is available for our customers
          Småland
          Family-friendly toilets/baby care rooms
          Free wifi
          Accessibility - Accessible toilets / changing facilities
          Food and drink you can trust`,
    mainImage:"/IKEAStore/mall-arabia-store-1.jpg"
  },
  {
    id: 3,
    name: "IKEA North Coast",
    address: "IKEA North Coast Store - Livio's Mall - Infront of Marassi",
    hotline: "16576",
    image: "/IKEAStore/northcoast-store.jpg",
    openingHours: "Daily  from 10 AM to 12 AM",
    desc: "IKEA North Coast Sahel store opens for the 8th year in Sidi Abdel Rahman in front of Marassi at 128 KM beside Agora village, located at Livio's Mall.The store is built on 2 floors with a big outdoor area, the showroom displays over 1,500 products ready for instant purchase.",
    href:"north-coast",
    title:"North Coast ​is now open!",
    desc2:`Finally, it’s summer and time to let go and have fun!
To help create that joyful vacation feeling, our collection is vibrant and colourful with lots of playful prints and products.`,
    mainImage:"/IKEAStore/northcoast-store-1.jpg"
  },
  {
    id: 4,
    name: "IKEA Hurghada",

    address:
      "IKEA Hurghada Senzo Mall ,Safaga road (Villages Road) , Hurghada 1 , Red Sea Governoratore , Egypt.",
    hotline: "16576",
    image: "/IKEAStore/hurghada-store.jpg",
    openingHours: "Daily  from 10 AM to 12 AM",
    desc: "IKEA  Hurghada  opens now in  Senzo Mall ,Safaga road (Villages Road) , Hurghada 1 , Red Sea Governoratore , Egypt.",
    href:"hurghada",
    title:"Hurghada pop up store",
    desc2:`Finally, it’s summer and time to let go and have fun!
    To help create that joyful vacation feeling, our collection is vibrant and colourful with lots of playful prints and products.`,
mainImage:"/IKEAStore/hurghada-store-1.jpg"
  },
];
