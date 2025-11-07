import { PropertyProps } from "@/interfaces";

export const HERO_IMAGE = "/assets/hero.png";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    images: [
      "/assets/image_1.png",
      "/assets/image_2.png",
      "/assets/image_3.png",
      "/assets/image_4.png"

    ],
     
    discount: "",
    description:
      "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.",
      reviews: [
      {
        id: 1,
        user: "Emily R.",
        rating: 5,
        avatar:  "/reviews/review-1.png",
        comment:
          "The villa was spotless with stunning ocean views. Perfect for a family holiday.",
        date: "2024-08-15",
      },
      {
        id: 2,
        user: "James K.",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment:
          "Amazing property with great service. Pool area was beautiful, only wish WiFi was faster.",
        date: "2024-09-01",
      },
      {
        id: 3,
        user: "Sophia M.",
        rating: 5,
        avatar:  "/reviews/review-1.png",
        comment:
          "Best Bali experience ever! Quiet location but close to restaurants and shops.",
        date: "2024-09-18",
      },
    ],
    host: {
    name: "Grace Kim",
    avatar: "/host/host1.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },
  {
    id: "2",
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    images: [
      "/assets/image_2.png",
      "/assets/image_3.png",
      "/assets/image_4.png",
      "/assets/image_5.png"

    ],
    discount: "30",
    description:
      "A charming rustic chalet nestled in the heart of Aspen, offering the warmth of a crackling fireplace and panoramic alpine views. Perfect for unwinding after a long day on the slopes or simply enjoying a peaceful mountain retreat.",
      reviews: [
      {
        id: 1,
        user: "Daniel S.",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment:
          "Perfect ski chalet! Fireplace and views were incredible after a long day on the slopes.",
        date: "2024-07-22",
      },
      {
        id: 2,
        user: "Olivia W.",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment:
          "Lovely and cozy. Only downside was limited parking space during peak season.",
        date: "2024-08-11",
      },
      {
        id: 3,
        user: "Liam P.",
        rating: 5,
        avatar:  "/reviews/review-1.png",
        comment:
          "Super comfortable beds and unbeatable location for skiing. Highly recommend.",
        date: "2024-09-12",
      },
    ],
    host: {
    name: "Liam Chen",
    avatar: "/host/host2.png",
    bio: "Always ready to help and ensure guests have a memorable stay.",
    responseTime: "within a few hours",
    responseRate: "92%",
    joined: "2019-03-22",
    languages: ["English", "Mandarin"],
    superhost: false,
  },
  },
  {
    id: "3",
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    images: [
      "/assets/image_3.png",
      "/assets/image_4.png",
      "/assets/image_5.png",
      "/assets/image_6.png"

    ],
     
    discount: "",
    description:
      "A stylish Palm Springs retreat with breathtaking desert scenery and pet-friendly comfort.",
      reviews: [
      {
          id: 1,
        user: "Maya L.",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment:
          "Loved the desert views and quiet location. Perfect for a weekend escape.",
        date: "2024-08-03",
      },
      {
          id: 2,
        user: "Chris D.",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment:
          "Comfortable and well-equipped, though it gets hot during the day—thankfully AC worked perfectly.",
        date: "2024-08-29",
      },
      {
          id: 3,
        user: "Hannah S.",
        rating: 5,
        avatar:  "/reviews/review-1.png",
        comment:
          "Super cozy with stylish interiors. Great spot for pet owners!",
        date: "2024-09-10",
      },
    ],
    host: {
    name: "Aisha Patel",
    avatar: "/host/host3.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
  },
  {
    id: "4",
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    images: [
      "/assets/image_4.png",
      "/assets/image_5.png",
      "/assets/image_6.png",
      "/assets/image_7.png"

    ],
    discount: "15",
    description:
      "Luxury penthouse in Manhattan with panoramic skyline views and high-end modern amenities.",
      
      reviews: [
      {
          id: 1,
        user: "Grace N.",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment:
          "Kayaking on the river was a highlight. Cabin was cozy and well maintained.",
        date: "2024-08-22",
      },
      {
        id: 2,
        user: "Ethan W.",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Beautiful setting. WiFi was spotty but we loved being offline.",
        date: "2024-09-03",
      },
      {
        id: 3,
        user: "Rachel F.",
        rating: 5,
        avatar:  "/reviews/review-1.png",
        comment:
          "Peaceful escape with amazing outdoor activities. Perfect for families.",
        date: "2024-09-20",
      },
    ],
     host: {
    name: "Grace Kim",
    avatar: "/host/host4.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },

  {
    id: "5",
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    images: [
      "/assets/image_5.png",
      "/assets/image_6.png",
      "/assets/image_7.png",
      "/assets/image_8.png"

    ],
    discount: "20",
    description:
      "A serene cabin on the riverside featuring a private dock and free kayaks for outdoor enthusiasts.",
      reviews: [
      {
        id: 1,
        user: "Sophia Martinez",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Perfect wine country experience. The cottage was so cute!",
        date: "2024-05-22",
      },
      {
        id: 2,
        user: "Daniel Harris",
        rating: 4,
        avatar:  "/reviews/review-1.png",
        comment: "Peaceful but a bit far from restaurants.",
        date: "2024-06-09",
      },
    ],
    host: {
    name: "Liam Chen",
    avatar: "/host/host1.png",
    bio: "Always ready to help and ensure guests have a memorable stay.",
    responseTime: "within a few hours",
    responseRate: "92%",
    joined: "2019-03-22",
    languages: ["English", "Mandarin"],
    superhost: false,
  },     
  },
  {
    id: "6",
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    images: [
      "/assets/image_6.png",
      "/assets/image_7.png",
      "/assets/image_12.png",
      "/assets/image_13.png"

    ],
    discount: "",
    description:
      "Spacious beachfront villa with chef service and private pool, offering luxury and relaxation.",
      reviews: [
      {
          id: 1,
        user: "Grace Kim",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Loved the city view at night, stunning!",
        date: "2024-07-02",
      },
      {
          id: 2,
        user: "Ryan Scott",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Well-furnished but elevators were often crowded.",
        date: "2024-08-01",
      },
    ],
    host: {
    name: "Aisha Patel",
    avatar: "/host/host2.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
  },
  {
    id: "7",
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    images: [
      "/assets/image_7.png",
      "/assets/image_8.png",
      "/assets/image_12.png",
      "/assets/image_13.png"

    ],
    discount: "10",
    description:
      "Cozy chalet on a tranquil lake in Banff, surrounded by hiking trails and mountain scenery.",
      reviews: [
      {
          id: 1,
        user: "Hannah Wilson",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Perfect after-ski relaxation with the hot tub!",
        date: "2024-01-20",
      },
      {
          id: 2,
        user: "Chris Adams",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Expensive but worth it for ski-in/ski-out convenience.",
        date: "2024-02-05",
      },
    ],
     host: {
    name: "Grace Kim",
    avatar: "/host/host3.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },
  {
    id: "8",
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    images: [
      "/assets/image_8.png",
      "/assets/image_9.png",
      "/assets/image_10.png",
      "/assets/image_11.png"

    ],
    discount: "25",
    description:
      "A lush garden villa in Koh Samui with modern comforts and peaceful surroundings.",
      reviews: [
      {
          id: 1,
        user: "Mia Lopez",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Paradise! Best vacation ever.",
        date: "2024-03-12",
      },
      {
          id: 2,
        user: "Ethan Clark",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Bugs at night but otherwise perfect.",
        date: "2024-04-01",
      },
    ],
    host: {
    name: "Liam Chen",
    avatar: "/host/host4.png",
    bio: "Always ready to help and ensure guests have a memorable stay.",
    responseTime: "within a few hours",
    responseRate: "92%",
    joined: "2019-03-22",
    languages: ["English", "Mandarin"],
    superhost: false,
  },
  },
  {
    id: "9",
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    images: [
      "/assets/image_9.png",
      "/assets/image_10.png",
      "/assets/image_11.png",
      "/assets/image_12.png"

    ],
    discount: "",
    description:
      "Trendy loft in central Berlin with modern design and easy access to nightlife and attractions.",
      reviews: [
      {
          id: 1,
        user: "Isabella Garcia",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Loved the mix of history and comfort.",
        date: "2024-05-08",
      },
      {
          id: 2,
        user: "Benjamin Hall",
        rating: 4,
        avatar:  "/reviews/review-2.png",
        comment: "Old building quirks but overall very nice.",
        date: "2024-05-20",
      },
    ],
    host: {
    name: "Aisha Patel",
    avatar: "/host/host1.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
  },
  {
    id: "10",
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    images: [
      "/assets/image_10.png",
      "/assets/image_11.png",
      "/assets/image_12.png",
      "/assets/image_13.png"

    ],
    discount: "40",
    description:
      "Private forest hideaway in Whistler with a hot tub and self check-in for a peaceful retreat.",
      reviews: [
      {
          id: 1,
        user: "Zoe Parker",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Sitting by the lake in the morning was magical.",
        date: "2024-06-07",
      },
      {
          id: 2,
        user: "Matthew Turner",
        rating: 4,
        avatar:  "/reviews/review-1.png",
        comment: "Loved it but bring mosquito spray!",
        date: "2024-07-01",
      },
    ],
     host: {
    name: "Grace Kim",
    avatar: "/host/host2.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },
  {
    id: "11",
    name: "Cliffside Villa",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    images: [
      "/assets/image_11.png",
      "/assets/image_12.png",
      "/assets/image_13.png",
      "/assets/image_14.png"

    ],
    discount: "50",
    description:
      "Elegant Amalfi villa perched on a cliffside with infinity pool and breathtaking Mediterranean views.",
      reviews: [
      {
          id: 1,
        user: "Natalie Brooks",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Felt like a celebrity staying here!",
        date: "2024-08-15",
      },
      {
          id: 2,
        user: "Connor Reed",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Elevator wait times were long but the penthouse was amazing.",
        date: "2024-09-01",
      },
    ],
    host: {
    name: "Liam Chen",
    avatar: "/host/host3.png",
    bio: "Always ready to help and ensure guests have a memorable stay.",
    responseTime: "within a few hours",
    responseRate: "92%",
    joined: "2019-03-22",
    languages: ["English", "Mandarin"],
    superhost: false,
  },
  },
  {
    id: "12",
    name: "Coastal Escape Villa",
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    images: [
      "/assets/image_12.png",
      "/assets/image_13.png",
      "/assets/image_14.png",
      "/assets/image_15.png"

    ],
    discount: "",
    description:
      "A modern villa on the Australian coast with beach access and pet-friendly amenities.",
       reviews: [
      {
          id: 1,
        user: "Ella Robinson",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Loved the peaceful farm vibes.",
        date: "2024-05-11",
      },
      {
          id: 2,
        user: "Jack Evans",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Comfortable but a bit chilly at night.",
        date: "2024-06-05",
      },
    ],
    host: {
    name: "Aisha Patel",
    avatar: "/host/host4.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
  },
  {
    id: "13",
    name: "Historical Villa",
    address: { state: "Florence", city: "Tuscany", country: "Italy" },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    images: [
      "/assets/image_13.png",
      "/assets/image_14.png",
      "/assets/image_15.png",
      "/assets/image_16.png"

    ],
    discount: "35",
    description:
      "Charming Tuscan villa rich in history, offering traditional architecture and modern comforts.",
       reviews: [
      {
          id: 1,
        user: "Ava Mitchell",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "The desert sunsets were unreal.",
        date: "2024-07-20",
      },
      {
          id: 2,
        user: "Liam Young",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Pool was amazing but it got really hot during the day.",
        date: "2024-08-02",
      },
    ],
     host: {
    name: "Grace Kim",
    avatar: "/host/host1.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },
  {
    id: "14",
    name: "Downtown Apartment",
    address: { state: "Tokyo", city: "Tokyo", country: "Japan" },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: { bed: "1", shower: "1", occupants: "2" },
    images: [
      "/assets/image_14.png",
      "/assets/image_15.png",
      "/assets/image_16.png",
      "/assets/image_17.png"

    ],
    discount: "",
    description:
      "Compact yet stylish apartment in central Tokyo with easy access to transport and attractions.",
       reviews: [
      {
          id: 1,
        user: "Charlotte King",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Loved the eco-conscious design and nature.",
        date: "2024-09-05",
      },
      {
          id: 2,
        user: "Mason Hill",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "A bit remote but worth it for the experience.",
        date: "2024-09-20",
      },
    ],
    host: {
    name: "Liam Chen",
    avatar: "/host/host2.png",
    bio: "Always ready to help and ensure guests have a memorable stay.",
    responseTime: "within a few hours",
    responseRate: "92%",
    joined: "2019-03-22",
    languages: ["English", "Mandarin"],
    superhost: false,
  },
  },
  {
    id: "15",
    name: "Luxury Safari Lodge",
    address: { state: "Serengeti", city: "Mara", country: "Tanzania" },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    images: [
      "/assets/image_15.png",
      "/assets/image_16.png",
      "/assets/image_17.png",
      "/assets/image_18.png"

    ],
    discount: "20",
    description:
      "Exclusive safari lodge in the Serengeti offering guided tours and luxury amenities.",
      reviews: [
      {
          id: 1,
        user: "Amelia Perez",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Hands down the most romantic place I’ve ever been.",
        date: "2024-06-10",
      },
      {
          id: 2,
        user: "Noah Rivera",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Incredible views but lots of stairs.",
        date: "2024-07-01",
      },
    ],
    host: {
    name: "Aisha Patel",
    avatar: "/host/host3.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
  },
  {
    id: "16",
    name: "Countryside Cottage",
    address: { state: "Cotswolds", city: "Gloucestershire", country: "UK" },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    images: [
      "/assets/image_16.png",
      "/assets/image_17.png",
      "/assets/image_18.png",
      "/assets/image_19.png"

    ],
    discount: "25",
    description:
      "Charming Cotswold cottage surrounded by rolling hills, featuring a cozy fireplace.",
       reviews: [
      {
        id: 1,
        user: "Harper Allen",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Felt like royalty staying here!",
        date: "2024-08-01",
      },
      {
        id: 2,
        user: "Lucas Martin",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Beautiful but Wi-Fi was spotty.",
        date: "2024-08-18",
      },
    ],
     host: {
    name: "Grace Kim",
    avatar: "/host/host4.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },
  {
    id: "17",
    name: "Riverfront Mansion",
    address: { state: "Paris", city: "Île-de-France", country: "France" },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: { bed: "4", shower: "3", occupants: "6-8" },
    images: [
      "/assets/image_17.png",
      "/assets/image_18.png",
      "/assets/image_19.png",
      "/assets/image_20.png"

    ],
    discount: "30",
    description:
      "Elegant Parisian mansion on the riverfront with private garden and luxury finishes.",
       reviews: [
      {
        id: 1,
        user: "Aria Sanchez",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "Like a childhood dream come true!",
        date: "2024-05-30",
      },
      {
        id: 2,
        user: "Henry Ramirez",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Really cool but a bit of a climb up.",
        date: "2024-06-11",
      },
    ],
    host: {
    name: "Liam Chen",
    avatar: "/host/host1.png",
    bio: "Always ready to help and ensure guests have a memorable stay.",
    responseTime: "within a few hours",
    responseRate: "92%",
    joined: "2019-03-22",
    languages: ["English", "Mandarin"],
    superhost: false,
  },
  },
  {
    id: "18",
    name: "Ski Chalet",
    address: { state: "Zermatt", city: "Valais", country: "Switzerland" },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    images: [
      "/assets/image_18.png",
      "/assets/image_19.png",
      "/assets/image_15.png",
      "/assets/image_20.png"

    ],
    discount: "",
    description:
      "Chalet in Zermatt with direct ski access and panoramic views of the Swiss Alps.",
      reviews: [
      {
          id: 1,
        user: "Chloe Torres",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment: "The views, the food, the vibes—perfection!",
        date: "2024-07-15",
      },
      {
        id: 2,
        user: "Sebastian Flores",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Stunning but lots of tourists nearby.",
        date: "2024-07-30",
      },
    ],
    host: {
    name: "Aisha Patel",
    avatar: "/host/host2.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
  },
  {
     id: "19",
    name: "Island Paradise Villa",
    address: { state: "Mahe", city: "Victoria", country: "Seychelles" },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: { bed: "5", shower: "5", occupants: "8-10" },
    images: [
      "/assets/image_19.png",
      "/assets/image_20.png",
      "/assets/image_10.png",
      "/assets/image_6.png"

    ],
    discount: "60",
    description:
      "Ultra-luxury Seychelles villa with private pool, chef service, and pristine beachfront access.",
      reviews: [
      {
        id: 1,
        user: "Emily R.",
        rating: 5,
         avatar:  "/reviews/review-1.png",
        comment:
          "The villa was spotless with stunning ocean views. Perfect for a family holiday.",
        date: "2024-08-15",
      },
      {
        id: 2,
        user: "James K.",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment:
          "Amazing property with great service. Pool area was beautiful, only wish WiFi was faster.",
        date: "2024-09-01",
      },
      {
        id: 3,
        user: "Sophia M.",
        rating: 5,
        avatar: "/reviews/review-2.png",
        comment:
          "Best Bali experience ever! Quiet location but close to restaurants and shops.",
        date: "2024-09-18",
      },
    ],
     host: {
    name: "Grace Kim",
    avatar: "/host/host2.png",
    bio: "Passionate traveler and local guide. Love hosting guests from around the world.",
    responseTime: "within an hour",
    responseRate: "98%",
    joined: "2018-06-15",
    languages: ["English", "French"],
    superhost: true,
  },
  },
  {
     id: "20",
    name: "Clifftop Retreat",
    address: { state: "Cape Town", city: "Western Cape", country: "South Africa" },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    images: [
      "/assets/image_20.png",
      "/assets/image_17.png",
      "/assets/image_14.png",
      "/assets/image_4.png"

    ],
    discount: "",
    description:
      "Modern villa in Cape Town with panoramic clifftop ocean views and private infinity pool.",
      reviews: [
      {
        id: 1,
        user: "Layla Cooper",
        rating: 5,
        avatar:  "/reviews/review-1.png",
        comment: "Yoga with a jungle view was unforgettable.",
        date: "2024-08-25",
      },
      {
        id: 2,
        user: "Wyatt Murphy",
        rating: 4,
        avatar: "/reviews/review-2.png",
        comment: "Nature everywhere but bugs were annoying at night.",
        date: "2024-09-03",
      },
    ],
    host:{
    name: "Aisha Patel",
    avatar: "/host/host3.png",
    bio: "Love sharing my city’s hidden gems with visitors. Experienced host.",
    responseTime: "within an hour",
    responseRate: "95%",
    joined: "2020-11-10",
    languages: ["English", "Hindi"],
    superhost: true,
  },
    
    }
];
