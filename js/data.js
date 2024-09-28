let shopItemsData = [
    {
        "id": "1",
        "name": "Apple iPad (10.2-inch, Wi-Fi, 64GB) - Space Gray",
        "price": 329,
        "desc": "The new iPad combines tremendous capability with unmatched ease of use and versatility. With the powerful A13 Bionic chip, support for Apple Pencil and the Smart Keyboard, and the amazing new things you can do with iPadOS 15, now there’s, even more, to love about iPad.",
        "img": "../images/assets/ipad.png"
    },
    {
        "id": "2",
        "name": "Calvin Klein Men's Dress Shirt Slim Fit Non-Iron Herringbone",
        "price": 45,
        "desc": "Designed with lightweight, non-iron fabric and a slim fit, this herringbone dress shirt from Calvin Klein moves with you and resists wrinkles for all-day style and comfort.",
        "img": "../images/men/chimes2.avif",
         "categoryID":"menClothesTshirt"
    },
    {
        "id": "3",
        "name": "Hanes Men's ComfortSoft Short Sleeve T-Shirt",
        "price": 10,
        "desc": "Made with 100% ComfortSoft cotton, this classic tee from Hanes offers superior comfort and breathability. Perfect for everyday wear.",
        "img": "../images/assets/shirt.png",
        "categoryID":"menClothesTshirt"
    },
    {
        "id": "4",
        "name": "Perry Ellis Men's Slim Fit Suit",
        "price": 200,
        "desc": "This Perry Ellis suit offers a classic and timeless look with a slim fit design. It's made from a polyester and rayon blend for durability and comfort.",
        "img": "../images/assets/suit.png"
    },
    {
        "id": "5",
        "name": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
        "price": 348,
        "desc": "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
        "img": "../images/assets/sonyHeadphones.png"
    },
    {
        "id": "6",
        "name": "Dell XPS 13 9310 Laptop",
        "price": 999,
        "desc": "Dell's smallest 13-inch laptop packs powerful performance and a stunning 4-sided InfinityEdge display – all in a remarkably thin, light design.",
        "img": "../images/assets/dellLaptop.png"
    },
    {
        "id": "7",
        "name": "Fitbit Charge 5 Advanced Fitness & Health Tracker",
        "price": 179,
        "desc": "Optimize your workout routine with a Daily Readiness Score that reveals if you’re ready to exercise or should focus on recovery (requires Fitbit Premium membership).",
        "img": "../images/assets/smartWatch.png"
    },
    {
        "id": "8",
        "name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        "price": 89,
        "desc": "The Instant Pot Duo 7-in-1 combines 7 kitchen appliances in 1, including a pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.",
        "img": "../images/assets/cooker.png"

    },
    {
        "id": "9",
        "name": "Nike Air Max 270",
        "price": 150,
        "desc": "Nike's first lifestyle Air Max brings you style, comfort, and a big Air unit for extra cushioning with every step. Perfect for those who are always on the go.",
        "img": "../images/assets/nike.png"
    },
    {
        "id": "10",
        "name": "New Balance 990v5",
        "price": 175,
        "desc": "The New Balance 990v5 offers a perfect blend of cushioning and stability, wrapped in a timeless silhouette that’s equally at home on the run and in the street.",
        "img": "../images/assets/nb_990v5.png"
    },
    {
        "id": "11",
        "name": "Sony A7 III",
        "price": 1999,
        "desc": "The Sony A7 III is a versatile full-frame mirrorless camera that excels in both photography and videography, featuring a 24.2MP sensor and 4K video recording.",
        "img": "../images/assets/sony_a7iii.png"
    },
    {
        "id": "12",
        "name": "Nintendo Switch",
        "price": 299,
        "desc": "The Nintendo Switch offers the versatility of a home console and a portable gaming device, providing endless entertainment with its wide array of exclusive games.",
        "img": "../images/assets/nintendo_switch.png"
    },
    {
        "id": "13",
        "name": "GoPro HERO9 Black",
        "price": 399,
        "desc": "The GoPro HERO9 Black is a powerful action camera with 5K video, 20MP photos, and HyperSmooth 3.0 stabilization, perfect for capturing adventures in stunning detail.",
        "img": "../images/assets/gopro_hero9.png"
    },
    {
        "id": "14",
        "name": "Apple Watch Series 7",
        "price": 399,
        "desc": "Apple Watch Series 7 features a larger, more advanced display, health and fitness tracking, and seamless integration with your iPhone, making it the ultimate wearable device.",
        "img": "../images/assets/apple_watch7.png"
    },
    {
        "id": "15",
        "name": "Razer Blade 15",
        "price": 1799,
        "desc": "The Razer Blade 15 is a high-performance gaming laptop with a sleek design, powerful NVIDIA GeForce RTX graphics, and a fast 144Hz display for a smooth gaming experience.",
        "img": "../images/assets/razer_blade15.png"
    },
    {
        "id": "16",
        "name": "Dyson V11 Absolute",
        "price": 599,
        "desc": "The Dyson V11 Absolute cordless vacuum offers powerful suction, intelligent cleaning modes, and a high torque cleaner head to tackle dirt on all floor types.",
        "img": "../images/assets/dyson_v11.png"
    },
    {
        "id": "17",
        "name": "Jabra Elite 75t",
        "price": 149,
        "desc": "The Jabra Elite 75t true wireless earbuds offer a comfortable fit, great sound quality, and customizable settings, making them ideal for an active lifestyle.",
        "img": "../images/assets/jabra_elite75t.png"
    },
    {
        "id": "18",
        "name": "Canon EOS R5",
        "price": 3899,
        "desc": "The Canon EOS R5 is a professional-grade mirrorless camera featuring a 45MP full-frame sensor, 8K video recording, and advanced autofocus for stunning image quality.",
        "img": "../images/assets/canon_eos_r5.png"
    },
    {
        "id": "19",
        "name": "Samsung Galaxy Tab S7",
        "price": 649,
        "desc": "The Samsung Galaxy Tab S7 offers a premium tablet experience with a stunning 11-inch display, powerful performance, and S Pen support for productivity and creativity.",
        "img": "../images/assets/galaxy_tab_s7.png"
    },
    {
        "id": "20",
        "name": "Anker PowerCore 10000",
        "price": 29,
        "desc": "The Anker PowerCore 10000 is a compact and portable power bank that provides fast and efficient charging for your devices, ensuring you stay powered up on the go.",
        "img": "../images/assets/anker_powercore10000.png"
    },
    // menSportsClothes
    {
        "id": "21",
        "name": "Nike Men's Dri-FIT Running Shirt",
        "price": 30,
        "desc": "Stay cool and dry with the Nike Dri-FIT running shirt, featuring moisture-wicking fabric and a comfortable fit.",
        "img": "../images/men/mansport1.avif",
        "categoryID": "menSportsClothes"
    },
    {
        "id": "22",
        "name": "Adidas Men's Training Shorts",
        "price": 35,
        "desc": "Comfortable and flexible training shorts from Adidas, perfect for any workout routine.",
        "img": "../images/men/mansport2.avif",
        "categoryID": "menSportsClothes"
    },
    {
        "id": "23",
        "name": "Under Armour Men's Compression Shirt",
        "price": 40,
        "desc": "Enhance your performance with the Under Armour compression shirt, designed for maximum support and flexibility.",
        "img": "../images/men/mansport3.avif",
        "categoryID": "menSportsClothes"
    },
    {
        "id": "24",
        "name": "Puma Men's Soccer Jersey",
        "price": 50,
        "desc": "Stay comfortable on the field with the Puma soccer jersey, featuring breathable fabric and a stylish design.",
        "img": "../images/men/mansport4.avif",
        "categoryID": "menSportsClothes"
    },
    {
        "id": "25",
        "name": "Reebok Men's Track Pants",
        "price": 45,
        "desc": "Reebok track pants offer comfort and style, perfect for warming up or cooling down after a workout.",
        "img": "../images/men/mansport5.avif",
        "categoryID": "menSportsClothes"
    },
    // menSummerClothes
    {
        "id": "26",
        "name": "Men's Hawaiian Short Sleeve Shirt",
        "price": 25,
        "desc": "A vibrant and colorful Hawaiian shirt perfect for summer vacations and casual outings.",
        "img": "../images/men/manSummer1.avif",
        "categoryID": "menSummerClothes"
    },
    {
        "id": "27",
        "name": "Men's Cargo Shorts",
        "price": 30,
        "desc": "Versatile and durable cargo shorts with multiple pockets, ideal for summer adventures.",
        "img": "../images/men/manSummer2.avif",
        "categoryID": "menSummerClothes"
    },
    {
        "id": "28",
        "name": "Men's Linen Pants",
        "price": 35,
        "desc": "Lightweight and breathable linen pants perfect for staying cool in hot weather.",
        "img": "../images/men/manSummer3.avif",
        "categoryID": "menSummerClothes"
    },
    {
        "id": "29",
        "name": "Men's Sleeveless Tank Top",
        "price": 20,
        "desc": "Comfortable and breathable tank top ideal for workouts and casual summer wear.",
        "img": "../images/men/manSummer4.avif",
        "categoryID": "menSummerClothes"
    },
    {
        "id": "30",
        "name": "Men's Flip Flops",
        "price": 15,
        "desc": "Casual and comfortable flip flops perfect for the beach and summer activities.",
        "img": "../images/men/manSummer5.avif",
        "categoryID": "menSummerClothes"
    },
    // Men's chemises
    {
        "id": "31",
        "name": "Tommy Hilfiger Men's Dress Shirt",
        "price": 50,
        "desc": "A classic dress shirt from Tommy Hilfiger with a modern slim fit design.",
        "img": "../images/men/chimes1.avif",
        "categoryID": "menChemises"
    },
    {
        "id": "32",
        "name": "Brooks Brothers Men's Non-Iron Dress Shirt",
        "price": 60,
        "desc": "A high-quality non-iron dress shirt from Brooks Brothers, perfect for business attire.",
        "img": "../images/men/chimes2.avif",
        "categoryID": "menChemises"
    },
    {
        "id": "33",
        "name": "Hugo Boss Men's Slim Fit Dress Shirt",
        "price": 70,
        "desc": "A sophisticated slim fit dress shirt from Hugo Boss, ideal for formal occasions.",
        "img": "../images/men/chimes3.avif",
        "categoryID": "menChemises"
    },
    {
        "id": "34",
        "name": "Ralph Lauren Men's Oxford Shirt",
        "price": 55,
        "desc": "A stylish Oxford shirt from Ralph Lauren, featuring a button-down collar and a classic fit.",
        "img": "../images/men/chimes4.avif",
        "categoryID": "menChemises"
    },
    {
        "id": "35",
        "name": "Michael Kors Men's Dress Shirt",
        "price": 65,
        "desc": "A modern dress shirt from Michael Kors with a tailored fit and luxurious fabric.",
        "img": "../images/men/chimes5.avif",
        "categoryID": "menChemises"
    },
     // Men's pants
     {
        "id": "36",
        "name": "Levi's Men's 501 Original Fit Jeans",
        "price": 55,
        "desc": "Classic straight-fit jeans from Levi's, featuring durable denim and a timeless design.",
        "img": "../images/men/manPantes1.avif",
        "categoryID": "menPantsShorts"
    },
    {
        "id": "37",
        "name": "Dockers Men's Khaki Pants",
        "price": 40,
        "desc": "Versatile and comfortable khaki pants from Dockers, perfect for both casual and semi-formal occasions.",
        "img": "../images/men/manPantes2.avif",
        "categoryID": "menPantsShorts"
    },
    {
        "id": "38",
        "name": "Nike Men's Sportswear Tech Fleece Joggers",
        "price": 70,
        "desc": "Stylish and comfortable Tech Fleece joggers from Nike, ideal for casual wear and light workouts.",
        "img": "../images/men/manPantes3.avif",
        "categoryID": "menPantsShorts"
    },
    // Men's shorts
    {
        "id": "39",
        "name": "Patagonia Men's Baggies Shorts",
        "price": 50,
        "desc": "Durable and quick-drying shorts from Patagonia, perfect for outdoor activities and water sports.",
        "img": "../images/men/manPantes4.avif",
        "categoryID": "menPantsShorts"
    },
    {
        "id": "40",
        "name": "Columbia Men's Silver Ridge Cargo Shorts",
        "price": 45,
        "desc": "Lightweight and breathable cargo shorts from Columbia, designed for hiking and outdoor adventures.",
        "img": "../images/men/manPantes5.avif",
        "categoryID": "menPantsShorts"
    },
    //womenSportsClothes
    {
        "id": "41",
        "name": "Nike Women's Pro Training Tights",
        "price": 55,
        "desc": "Nike Pro training tights offer a snug fit and moisture-wicking fabric to keep you comfortable during workouts.",
        "img": "../images/woman/womenShose1.avif",
        "categoryID": "womenSportsClothes"
    },
    {
        "id": "42",
        "name": "Adidas Women's Running Shorts",
        "price": 30,
        "desc": "Stay cool and comfortable with Adidas running shorts, designed for optimal performance and breathability.",
        "img": "../images/woman/womenSport2.avif",
        "categoryID": "womenSportsClothes"
    },
    {
        "id": "43",
        "name": "Under Armour Women's Sports",
        "price": 35,
        "desc": "Supportive and comfortable sports bra from Under Armour, perfect for high-impact activities.",
        "img": "../images/woman/womenSport3.avif",
        "categoryID": "womenSportsClothes"
    },
    {
        "id": "44",
        "name": "Puma Women's Training Jacket",
        "price": 60,
        "desc": "Lightweight and stylish training jacket from Puma, ideal for warming up or cooling down.",
        "img": "../images/woman/womenSport4.avif",
        "categoryID": "womenSportsClothes"
    },
    {
        "id": "45",
        "name": "Reebok Women's Yoga Pants",
        "price": 45,
        "desc": "Flexible and comfortable yoga pants from Reebok, designed to move with you during your practice.",
        "img": "../images/woman/womenSport5.avif",
        "categoryID": "womenSportsClothes"
    },
     // Women's summer clothing
     {
        "id": "46",
        "name": "Women's Floral Summer Dress",
        "price": 40,
        "desc": "A beautiful floral summer dress perfect for sunny days and casual outings.",
        "img": "../images/woman/womenSummer1.avif",
        "categoryID": "womenSummerClothes"
    },
    {
        "id": "47",
        "name": "Women's Sleeveless Tank Top",
        "price": 20,
        "desc": "A comfortable and breathable sleeveless tank top, ideal for hot weather.",
        "img": "../images/woman/womenSummer2.avif",
        "categoryID": "womenSummerClothes"
    },
    {
        "id": "48",
        "name": "Women's High-Waisted Shorts",
        "price": 25,
        "desc": "Stylish and versatile high-waisted shorts, perfect for a casual summer look.",
        "img": "../images/woman/womenSummer3.avif",
        "categoryID": "womenSummerClothes"
    },
    {
        "id": "49",
        "name": "Women's Sun Hat",
        "price": 15,
        "desc": "A wide-brimmed sun hat to protect you from the sun while adding a touch of style.",
        "img": "../images/woman/womenSummer4.avif",
        "categoryID": "womenSummerClothes"
    },
    {
        "id": "50",
        "name": "Women's Beach Cover-Up",
        "price": 30,
        "desc": "A lightweight and airy beach cover-up, perfect for a day at the beach or pool.",
        "img": "../images/woman/womenSummer5.avif",
        "categoryID": "womenSummerClothes"
    },
    // Women's handbags
    {
        "id": "51",
        "name": "Kate Spade New York Leather Satchel",
        "price": 200,
        "desc": "Elegant and stylish, this leather satchel from Kate Spade New York is perfect for everyday use.",
        "img": "../images/woman/womenBag1.avif",
        "categoryID": "womenHandbags"
    },
    {
        "id": "52",
        "name": "Michael Kors Jet Set Travel Tote",
        "price": 150,
        "desc": "The Michael Kors Jet Set Travel Tote offers ample space and a sleek design, ideal for both travel and daily use.",
        "img": "../images/woman/womenBag2.avif",
        "categoryID": "womenHandbags"
    },
    {
        "id": "53",
        "name": "Coach Signature Shoulder Bag",
        "price": 180,
        "desc": "This Coach shoulder bag features the iconic Coach signature pattern and provides a chic and practical option for any occasion.",
        "img": "../images/woman/womenBag3.avif",
        "categoryID": "womenHandbags"
    },
    {
        "id": "54",
        "name": "Tory Burch Kira Chevron Crossbody",
        "price": 250,
        "desc": "The Tory Burch Kira Chevron Crossbody bag combines luxury and functionality, making it a versatile addition to your wardrobe.",
        "img": "../images/woman/womenBag4.avif",
        "categoryID": "womenHandbags"
    },
    {
        "id": "55",
        "name": "Fossil Fiona Small Crossbody",
        "price": 100,
        "desc": "Compact and stylish, the Fossil Fiona Small Crossbody is perfect for carrying your essentials on the go.",
        "img": "../images/woman/womenBag5.avif",
        "categoryID": "womenHandbags"
    },
    // Women's dresses
    {
        "id": "56",
        "name": "Maxi Floral Dress",
        "price": 60,
        "desc": "A beautiful maxi dress with a floral print, perfect for summer occasions and casual wear.",
        "img": "../images/woman/womenDress1.avif",
        "categoryID": "womenDresses"
    },
    {
        "id": "57",
        "name": "Cocktail Party Dress",
        "price": 80,
        "desc": "An elegant cocktail dress with a fitted silhouette and stylish design, ideal for parties and special events.",
        "img": "../images/woman/womenDress2.avif",
        "categoryID": "womenDresses"
    },
    {
        "id": "58",
        "name": "Casual T-Shirt Dress",
        "price": 35,
        "desc": "A comfortable and versatile t-shirt dress, perfect for everyday wear and relaxed outings.",
        "img": "../images/woman/womenDress3.avif",
        "categoryID": "womenDresses"
    },
    {
        "id": "59",
        "name": "Off-Shoulder Summer Dress",
        "price": 50,
        "desc": "A chic off-shoulder dress with a flowy design, perfect for summer days and beach vacations.",
        "img": "../images/woman/womenDress4.avif",
        "categoryID": "womenDresses"
    },
    {
        "id": "60",
        "name": "Evening Gown",
        "price": 120,
        "desc": "A stunning evening gown with intricate detailing, perfect for formal events and special occasions.",
        "img": "../images/woman/womenDress5.avif",
        "categoryID": "womenDresses"
    },
     // Women's shoes
     {
        "id": "61",
        "name": "Nike Women's Running Shoes",
        "price": 90,
        "desc": "High-performance running shoes from Nike, designed for comfort and durability.",
        "img": "../images/woman/womenShose1.avif",
        "categoryID": "womenShoes"
    },
    {
        "id": "62",
        "name": "Adidas Women's Sneakers",
        "price": 85,
        "desc": "Stylish and comfortable sneakers from Adidas, perfect for everyday wear.",
        "img": "../images/woman/womenShose2.avif",
        "categoryID": "womenShoes"
    },
    {
        "id": "63",
        "name": "Steve Madden Women's Heels",
        "price": 110,
        "desc": "Elegant and fashionable heels from Steve Madden, ideal for formal occasions.",
        "img": "../images/woman/womenShose3.avif",
        "categoryID": "womenShoes"
    },
    {
        "id": "64",
        "name": "Birkenstock Women's Sandals",
        "price": 70,
        "desc": "Comfortable and durable sandals from Birkenstock, perfect for summer.",
        "img": "../images/woman/womenShose4.avif",
        "categoryID": "womenShoes"
    },
    {
        "id": "65",
        "name": "Ugg Women's Boots",
        "price": 130,
        "desc": "Cozy and stylish boots from Ugg, great for keeping warm in colder weather.",
        "img": "../images/woman/womenShose5.avif",
        "categoryID": "womenShoes"
    },
     // Kids' summer clothing
     {
        "id": "66",
        "name": "Kids' Graphic T-Shirt",
        "price": 15,
        "desc": "A fun and colorful graphic t-shirt, perfect for keeping kids cool and stylish during the summer.",
        "img": "../images/kids/kidSummer1.avif",
        "categoryID": "kidsSummerClothes"
    },
    {
        "id": "67",
        "name": "Kids' Denim Shorts",
        "price": 20,
        "desc": "Comfortable and durable denim shorts, ideal for outdoor play and summer adventures.",
        "img": "../images/kids/kidSummer2.avif",
        "categoryID": "kidsSummerClothes"
    },
    {
        "id": "68",
        "name": "Kids' Sundress",
        "price": 25,
        "desc": "A lightweight and breezy sundress, perfect for summer picnics and family outings.",
        "img": "../images/kids/kidSummer3.avif",
        "categoryID": "kidsSummerClothes"
    },
    {
        "id": "69",
        "name": "Kids' Swim Trunks",
        "price": 18,
        "desc": "Quick-drying swim trunks, perfect for pool days and beach vacations.",
        "img": "../images/kids/kidSummer4.avif",
        "categoryID": "kidsSummerClothes"
    },
    {
        "id": "70",
        "name": "Kids' Tank Top",
        "price": 12,
        "desc": "A comfortable and breathable tank top, great for hot summer days and active play.",
        "img": "../images/kids/kidSummer5.avif",
        "categoryID": "kidsSummerClothes"
    },
    // Kids' sports clothing
    {
        "id": "71",
        "name": "Kids' Soccer Jersey",
        "price": 30,
        "desc": "A lightweight and breathable soccer jersey, perfect for young athletes on the field.",
        "img": "../images/kids/kidSport1.avif",
        "categoryID": "kidsSportsClothes"
    },
    {
        "id": "72",
        "name": "Kids' Basketball Shorts",
        "price": 25,
        "desc": "Comfortable basketball shorts designed for freedom of movement during games and practice.",
        "img": "../images/kids/kidSummer2.avif",
        "categoryID": "kidsSportsClothes"
    },
    {
        "id": "73",
        "name": "Kids' Running Shoes",
        "price": 40,
        "desc": "Lightweight and supportive running shoes for kids, ideal for track and field activities.",
        "img": "../images/kids/kidSummer3.avif",
        "categoryID": "kidsSportsClothes"
    },
    {
        "id": "74",
        "name": "Kids' Gym Shorts",
        "price": 20,
        "desc": "Flexible and comfortable gym shorts, perfect for indoor and outdoor activities.",
        "img": "../images/kids/kidSummer4.avif",
        "categoryID": "kidsSportsClothes"
    },
    {
        "id": "75",
        "name": "Kids' Tennis Dress",
        "price": 35,
        "desc": "A stylish tennis dress for young athletes, designed for comfort and performance on the court.",
        "img": "../images/kids/kidSummer5.avif",
        "categoryID": "kidsSportsClothes"
    },
    //  kids' dresses
    {
        "id": "76",
        "name": "Kids' Party Dress",
        "price": 45,
        "desc": "A charming party dress for kids, perfect for special occasions and celebrations.",
        "img": "../images/kids/kidDress1.avif",
        "categoryID": "kidsDresses"
    },
    {
        "id": "77",
        "name": "Kids' Floral Sundress",
        "price": 30,
        "desc": "A delightful floral sundress for girls, ideal for sunny days and outdoor events.",
        "img": "../images/kids/kidDress2.avif",
        "categoryID": "kidsDresses"
    },
    {
        "id": "78",
        "name": "Kids' Princess Costume Dress",
        "price": 50,
        "desc": "A magical princess costume dress for imaginative play and themed parties.",
        "img": "../images/kids/kidDress3.avif",
        "categoryID": "kidsDresses"
    },
    {
        "id": "79",
        "name": "Kids' Striped Dress",
        "price": 25,
        "desc": "A cute and comfortable striped dress for everyday wear and casual outings.",
        "img": "../images/kids/kidDress4.avif",
        "categoryID": "kidsDresses"
    },
    {
        "id": "80",
        "name": "Kids' Formal Dress",
        "price": 55,
        "desc": "A formal dress for kids, perfect for weddings, recitals, and formal gatherings.",
        "img": "../images/kids/kidDress5.avif",
        "categoryID": "kidsDresses"
    },
     // Kids' chemises (shirts)
     {
        "id": "81",
        "name": "Kids' Plaid Shirt",
        "price": 18,
        "desc": "A stylish plaid shirt for kids, perfect for casual wear and layering.",
        "img": "../images/kids/kidShirts1.avif",
        "categoryID": "kidsChemises"
    },
    {
        "id": "82",
        "name": "Kids' Polo Shirt",
        "price": 15,
        "desc": "A classic polo shirt for kids, ideal for both casual and semi-formal occasions.",
        "img": "../images/kids/kidShirts2.avif",
        "categoryID": "kidsChemises"
    },
    {
        "id": "83",
        "name": "Kids' Striped T-Shirt",
        "price": 12,
        "desc": "A comfortable striped t-shirt for kids, great for everyday play and activities.",
        "img": "../images/kids/kidShirts3.avif",
        "categoryID": "kidsChemises"
    },
     // Kids' pants and shorts
     {
        "id": "84",
        "name": "Kids' Denim Jeans",
        "price": 25,
        "desc": "Classic denim jeans for kids, durable and comfortable for everyday wear.",
        "img": "../images/kids/kidPanties1.avif",
        "categoryID": "kidsPantsShorts"
    },
    {
        "id": "85",
        "name": "Kids' Cargo Pants",
        "price": 30,
        "desc": "Versatile cargo pants for kids, featuring multiple pockets for storing small items.",
        "img": "../images/kids/kidPanties2.avif",
        "categoryID": "kidsPantsShorts"
    },
    {
        "id": "86",
        "name": "Kids' Sports Shorts",
        "price": 15,
        "desc": "Comfortable sports shorts for kids, perfect for active play and outdoor activities.",
        "img": "../images/kids/kidPanties3.avif",
        "categoryID": "kidsPantsShorts"
    },
    {
        "id": "87",
        "name": "Kids' Denim Shorts",
        "price": 18,
        "desc": "Stylish denim shorts for kids, ideal for warm weather and casual outings.",
        "img": "../images/kids/kidPanties4.avif",
        "categoryID": "kidsPantsShorts"
    },
     {
        "id": "88",
        "name": "Kids' Denim Shorts",
        "price": 18,
        "desc": "Stylish denim shorts for kids, ideal for warm weather and casual outings.",
        "img": "../images/kids/kidPanties5.avif",
        "categoryID": "kidsPantsShorts"
    },
    //laptops
    {
        id: "89",
        name: "Laptop Model A",
        price: 1200,
        desc: "High-performance laptop with latest processor and graphics card.",
        img: "../images/devices/lap1.avif",
        categoryID: "devicesLaptop"
    },
    {
        id: "90",
        name: "Laptop Model B",
        price: 899,
        desc: "Slim and lightweight laptop with long battery life, perfect for travelers.",
        img: "../images/devices/lap2.avif",
        categoryID: "devicesLaptop"
    },
    {
        id: "91",
        name: "Laptop Model C",
        price: 1500,
        desc: "Premium laptop with 4K display and powerful audio system.",
        img: "../images/devices/lap3.avif",
        categoryID: "devicesLaptop"
    },
    {
        id: "92",
        name: "Laptop Model D",
        price: 999,
        desc: "Budget-friendly laptop with decent performance for everyday use.",
        img: "../images/devices/lap4.avif",
        categoryID: "devicesLaptop"
    },
    {
        id: "93",
        name: "Laptop Model E",
        price: 1800,
        desc: "Gaming laptop with RGB keyboard and high refresh rate display.",
        img: "../images/devices/lap5.avif",
        categoryID: "devicesLaptop"
    },
    //moblis
    {
        id: "94",
        name: "Mobile Model X",
        price: 699,
        desc: "Compact smartphone with powerful camera and long-lasting battery.",
        img: "../images/devices/moblie1.avif",
        categoryID: "mobiles"
    },
    {
        id: "95",
        name: "Mobile Model Y",
        price: 899,
        desc: "Flagship mobile with edge-to-edge display and AI-powered features.",
        img: "../images/devices/moblie2.avif",
        categoryID: "mobiles"
    },
    {
        id: "96",
        name: "Mobile Model Z",
        price: 1099,
        desc: "Premium smartphone with 5G connectivity and advanced security features.",
        img: "../images/devices/moblie3.avif",
        categoryID: "mobiles"
    },
    {
        id: "97",
        name: "Mobile Model W",
        price: 499,
        desc: "Affordable smartphone with decent performance and sleek design.",
        img: "../images/devices/moblie4.avif",
        categoryID: "mobiles"
    },
    {
        id: "98",
        name: "Mobile Model V",
        price: 1299,
        desc: "Ultra-premium smartphone with foldable display and state-of-the-art camera.",
        img: "../images/devices/moblie5.avif",
        categoryID: "mobiles"
    },
    //camera
    {
        id: "99",
        name: "DSLR Camera Model A",
        price: 1499,
        desc: "Professional DSLR camera with high-resolution sensor and interchangeable lenses.",
        img: "../images/devices/camera1.avif",
        categoryID: "cameras"
    },
    {
        id: "100",
        name: "Mirrorless Camera Model B",
        price: 1299,
        desc: "Compact mirrorless camera with 4K video recording and fast autofocus system.",
        img: "../images/devices/camera2.avif",
        categoryID: "cameras"
    },
    {
        id: "101",
        name: "Action Camera Model C",
        price: 399,
        desc: "Waterproof action camera with wide-angle lens and built-in stabilization.",
        img: "../images/devices/camera3.avif",
        categoryID: "cameras"
    },
    {
        id: "102",
        name: "Compact Camera Model D",
        price: 599,
        desc: "Versatile compact camera with large sensor and intuitive touchscreen interface.",
        img: "../images/devices/camera4.avif",
        categoryID: "cameras"
    },
    {
        id: "103",
        name: "360-Degree Camera Model E",
        price: 799,
        desc: "360-degree camera for capturing immersive virtual reality experiences.",
        img: "../images/devices/camera5.avif",
        categoryID: "cameras"
    },
    //vedio game
    {
        id: "104",
        name: "Action Adventure Game",
        price: 59.99,
        desc: "Immersive action-adventure game with stunning graphics and dynamic gameplay.",
        img: "../images/devices/paly1.avif",
        categoryID: "videoGames"
    },
    {
        id: "105",
        name: "Racing Game",
        price: 49.99,
        desc: "High-speed racing game with realistic physics and a variety of tracks and vehicles.",
        img: "../images/devices/paly2.avif",
        categoryID: "videoGames"
    },
    {
        id: "106",
        name: "Role-Playing Game (RPG)",
        price: 69.99,
        desc: "Epic RPG with expansive open world, complex characters, and deep storyline.",
        img: "../images/devices/paly3.avif",
        categoryID: "videoGames"
    },
    {
        id: "107",
        name: "Sports Game",
        price: 54.99,
        desc: "Sports simulation game featuring popular sports with realistic gameplay mechanics.",
        img: "../images/devices/paly4.avif",
        categoryID: "videoGames"
    },
    {
        id: "108",
        name: "Shooter Game",
        price: 79.99,
        desc: "Intense shooter game with multiplayer modes, customizable weapons, and tactical gameplay.",
        img: "../images/devices/play5.avif",
        categoryID: "videoGames"
    },
    //tv
    {
        id: "109",
        name: "Smart TV Model A",
        price: 899,
        desc: "High-definition smart TV with built-in streaming apps and voice control.",
        img: "../images/devices/screen1.avif",
        categoryID: "TVs"
    },
    {
        id: "110",
        name: "4K Ultra HD TV Model B",
        price: 1299,
        desc: "4K Ultra HD TV with HDR support, vibrant colors, and immersive sound.",
        img: "../images/devices/screen2.avif",
        categoryID: "TVs"
    },
    {
        id: "111",
        name: "OLED TV Model C",
        price: 1999,
        desc: "OLED TV with perfect black levels, stunning contrast, and cinematic picture quality.",
        img: "../images/devices/screen3.avif",
        categoryID: "TVs"
    },
    {
        id: "112",
        name: "Curved TV Model D",
        price: 1599,
        desc: "Curved TV for immersive viewing experience with wide viewing angles.",
        img: "../images/devices/screen4.avif",
        categoryID: "TVs"
    },
    {
        id: "113",
        name: "QLED TV Model E",
        price: 1799,
        desc: "QLED TV with quantum dot technology for vivid colors and deep blacks.",
        img: "../images/devices/screen5.avif",
        categoryID: "TVs"
    }
];
