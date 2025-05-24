import Product from "../database/models/product.model.js";

const defaultProducts = [
    {
        "brand": {
            "logo": {
                "public_id": "brands/ycvxgp2bfaovrfibaz1h",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686483325/brands/ycvxgp2bfaovrfibaz1h.webp"
            },
            "name": "DecentHome 4."
        },
        "name": "Decent Home 140 TC Polycotton Single Abstract Flat Bedsheet  (Pack of 1, Maroon)",
        "description": "NA",
        "highlights": [
            "Flat (L x W): 228.6 cm x 152.4 cm",
            "Material: Polycotton",
            "Includes: Number of Bedsheets: 1",
            "Thread Count: 140",
            "Color: Maroon"
        ],
        "specifications": [
            {
                "title": " Sales Package",
                "description": "Bedsheet with Pillow Cover",
            },
            {
                "title": "Number of Bedsheets",
                "description": "1",
            },
            {
                "title": "Brand",
                "description": "Decent Home",
            },
            {
                "title": "Color",
                "description": " Maroon",
            },
            {
                "title": "Type",
                "description": "Flat",
            },
            {
                "title": "Size",
                "description": "Single",
            },
            {
                "title": "Material",
                "description": "Polycotton",
            },
            {
                "title": "Thread Count",
                "description": "140",
            },
            {
                "title": "Model Name",
                "description": "maroon",
            }
        ],
        "price": 179,
        "cuttedPrice": 999,
        "images": [
            {
                "public_id": "products/sardhzkmhrzo7xhbtbju",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686483323/products/sardhzkmhrzo7xhbtbju.webp",
            }
        ],
        "category": "Home",
        "stock": 22,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/nazu52pdjewziujbvcqv",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686312809/brands/nazu52pdjewziujbvcqv.webp"
            },
            "name": "Usha"
        },
        "name": "USHA EI 3302 1100 W Dry Iron  (Grey)",
        "description": "Best Dry Iron by Usha",
        "highlights": [
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Special PriceExtra ₹246 off(price inclusive of discount)T&C",
            "Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C",
            "Partner OfferSign up for LocalMart Pay Later and get LocalMart Gift Card worth up to ₹1,000*Know More"
        ],
        "specifications": [
            {
                "title": "In The Box",
                "description": " User Manual, Warranty Card, Main Unit",
            },
            {
                "title": "Brand",
                "description": "USHA",
            },
            {
                "title": "Model",
                "description": " EI 3302",
            },
            {
                "title": "Type",
                "description": "Dry",
            },
            {
                "title": "Color",
                "description": " Grey",
            }
        ],
        "price": 598,
        "cuttedPrice": 1049,
        "images": [
            {
                "public_id": "products/v7e92tobcz452rlzncgb",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686312808/products/v7e92tobcz452rlzncgb.webp",
            }
        ],
        "category": "Electronics",
        "stock": 24,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/ujrctdjc3wmlym6pe4fd",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466634/brands/ujrctdjc3wmlym6pe4fd.webp"
            },
            "name": "Apple"
        },
        "name": "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
        "description": "This Apple Macbook is powered by the Apple M1 chip and is easily portable so that you can carry it with you anywhere you want. This thin and light notebook is equipped with an 8-core CPU to handle all your tasks more efficiently. The 8-core GPU of this notebook takes graphic-intensive games and apps to a whole new level. It also comes with a 16-core Neural Engine to do machine learning tasks more effectively. Its fan-less design offers silent operations and has a long-lasting battery life which can last up to 18 hours on a single charge.",
        "highlights": [
            "Stylish & Portable Thin and Light Laptop",
            "13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)"
        ],
        "specifications": [
            {
                "title": "Sales Package",
                "description": "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
            },
            {
                "title": "Model Number",
                "description": "MGN63HN/A",
            },
            {
                "title": "Part Number",
                "description": "MGN63HN/A",
            },
            {
                "title": "Series",
                "description": "2020 Macbook Air",
            },
            {
                "title": "Color",
                "description": "Space Grey",
            },
            {
                "title": "Type",
                "description": "Thin and Light Laptop",
            }
        ],
        "price": 77990,
        "cuttedPrice": 99900,
        "images": [
            {
                "public_id": "products/lfu5xuvtsbysxffoicy1",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466630/products/lfu5xuvtsbysxffoicy1.webp",
            }
        ],
        "category": "Laptops",
        "stock": 23,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/gzhh4adzz58xkwmm8tux",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686465680/brands/gzhh4adzz58xkwmm8tux.webp"
            },
            "name": "Lenovo"
        },
        "name": "Lenovo IdeaPad 3 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15ALC6 Thin and Light Laptop  (15.6 inch, Arctic Grey, 1.65 kg, With MS Office)",
        "description": "You can complete your tasks and learn new things with ease with the Lenovo IdeaPad Slim 3 Laptop. Thanks to its thin body of merely up to 19.9 mm and a weight of just up to 1.65 kg, this laptop lets you explore and learn even while travelling. Furthermore, courtesy of its Intel 11th Gen processors as well as a speedy solid state drive, this laptop allows you to store your media, apps, etc.",
        "highlights": [
            "Thin and Light Laptop",
            "15.6 inch Full HD TN 250nits Anti-glare, 45% NTSC"
        ],
        "specifications": [
            {
                "title": "Sales Package",
                "description": "Laptop, Power Adaptor, User Guide, Warranty Documents",
            },
            {
                "title": "Model Number",
                "description": "15ALC6",
            },
            {
                "title": "Part Number",
                "description": "82KU017KIN",
            },
            {
                "title": "Model Name",
                "description": "15ALC6",
            },
            {
                "title": "Series",
                "description": "IdeaPad 3",
            }
        ],
        "price": 43975,
        "cuttedPrice": 80390,
        "images": [
            {
                "public_id": "products/vffzopvmlsqk5xje4mvg",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686465677/products/vffzopvmlsqk5xje4mvg.webp",
            }
        ],
        "category": "Laptops",
        "stock": 43,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/c2xjpjgumowekqsxpghg",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686309208/brands/c2xjpjgumowekqsxpghg.png"
            },
            "name": "Realme"
        },
        "name": "realme 10 Pro 5G (Hyperspace, 128 GB)  (8 GB RAM)",
        "description": "\r\nCarry the Realme 10 Pro 5G with you wherever you go to catch people's attention. You can enjoy a large screen size with a significantly compact frame thanks to the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio, and the 120 Hz refresh rate provides you with a fantastic user experience. Additionally, this smartphone enables exceptional photography and filmmaking abilities that let you record precious moments thanks to its 108 MP ProLight Camera. Furthermore, the Realme 10 Pro 5G's Snapdragon 695 5G Chipset is produced utilising a flawless 6 nm production process, which results in a power-efficient phone. Moreover, the Realme 10 Pro 5G's massive 8 GB + 8 GB Dynamic RAM design makes it simple to switch between programmes, play games, and access numerous files.\r\n",
        "highlights": [
            "Bank Offer10% upto ₹750 off on SBI Credit Card TransactionsT&C",
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Bank Offer₹1000 Off On ICICI Bank Credit and Debit Card TransactionsT&C",
            "Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": "Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, TPU Case",
            },
            {
                "title": "Model Number",
                "description": " RMX3660",
            },
            {
                "title": "Model Name",
                "description": "10 Pro 5G",
            },
            {
                "title": "Color",
                "description": " Hyperspace",
            },
            {
                "title": "Browse Type",
                "description": "Smartphones",
            },
            {
                "title": "SIM Type",
                "description": " Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": "Yes",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": "Yes",
            },
            {
                "title": "Sound Enhancements",
                "description": "Dirac Effect, High Res Certification, WCD9370 Audio Decoding Chip",
            }
        ],
        "price": 19999,
        "cuttedPrice": 22999,
        "images": [
            {
                "public_id": "products/gaxuejtqs3ag2xjy61v1",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686309206/products/gaxuejtqs3ag2xjy61v1.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 40,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/ay9zfgay2twuojzafvic",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686481992/brands/ay9zfgay2twuojzafvic.webp"
            },
            "name": "Prestige"
        },
        "name": "Prestige Atlas 3.0 Induction Cooktop  (Black, Push Button)",
        "description": "Combining long-lasting performance with an enhanced cooking experience, the Prestige Atlas 3.0 Induction Cooktop is an ideal choice. It has a robust body that ensures durable performance. And, this induction cooktop's preset Indian menu assists you in preparing your favourite recipes. Additionally, its automatic voltage regulator ensures longevity. The power-saving technology of this induction cooktop allows you to cook more food with less electricity. Furthermore, this induction cooktop allows you to increase the energy usage to up to 2100 W, ensuring quick and consistent cooking.",
        "highlights": [
            "Power Consumption: 1200 W",
            "Automatic shut-off: Yes"
        ],
        "specifications": [
            {
                "title": "Sales Package",
                "description": "1 Induction Cooktop, Instruction manual and Warranty card",
            },
            {
                "title": " Brand",
                "description": "Prestige",
            },
            {
                "title": "model_name",
                "description": "Prestige Atlas 3.0 Induction Cooktop - Black",
            },
            {
                "title": "Model",
                "description": "Atlas 3.0",
            },
            {
                "title": "Type",
                "description": "Induction Cooktop",
            },
            {
                "title": "Color",
                "description": "Black",
            }
        ],
        "price": 1499,
        "cuttedPrice": 2895,
        "images": [
            {
                "public_id": "products/fvefya91anewxzkigz2k",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686481990/products/fvefya91anewxzkigz2k.webp",
            }
        ],
        "category": "Appliances",
        "stock": 12,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/atgyvyo4ouujjzrioa8l",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686468350/brands/atgyvyo4ouujjzrioa8l.webp"
            },
            "name": "ARK DRESSES "
        },
        "name": "Below Knee Party Dress  (Pink, Fashion Sleeve)",
        "description": "NA",
        "highlights": [
            "NA"
        ],
        "specifications": [
            {
                "title": "Fits",
                "description": "Slim",
            },
            {
                "title": "Size",
                "description": "4-13Years",
            }
        ],
        "price": 276,
        "cuttedPrice": 1499,
        "images": [
            {
                "public_id": "products/ghpoqut9hqhkimqimxae",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686468348/products/ghpoqut9hqhkimqimxae.webp",
            }
        ],
        "category": "Fashion",
        "stock": 28,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/lnruswcs2quy23hac2pv",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686313232/brands/lnruswcs2quy23hac2pv.webp"
            },
            "name": "PHILIPS"
        },
        "name": "PHILIPS BT1233/18 Trimmer 30 min Runtime 4 Length Settings  (Black)",
        "description": "NA",
        "highlights": [
            "Blade Material: Stainless Steel",
            "Trimming Range: 0.5 - 7 mm",
            "30 min battery run time",
            "4 length settings",
            "Gender: Men"
        ],
        "specifications": [
            {
                "title": "In The Box",
                "description": " 1 Trimmer, Manual, Warranty Card, USB Cable, Attachment Combs",
            },
            {
                "title": " Brand",
                "description": "PHILIPS",
            },
            {
                "title": "Model Number",
                "description": " BT1233/18",
            },
            {
                "title": "Type",
                "description": "Cordless",
            },
            {
                "title": "Blade Material",
                "description": " Stainless Steel",
            },
            {
                "title": "Trimming Range",
                "description": " 0.5 - 7 mm",
            },
            {
                "title": "Charging Time",
                "description": "8 hr",
            }
        ],
        "price": 649,
        "cuttedPrice": 945,
        "images": [
            {
                "public_id": "products/huh4zjocqite8fgh1uru",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686313229/products/huh4zjocqite8fgh1uru.webp",
            }
        ],
        "category": "Electronics",
        "stock": 33,
        "warranty": 2,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/kbssvyaeiuc23wd8ufui",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686468000/brands/kbssvyaeiuc23wd8ufui.webp"
            },
            "name": "Fruzis Fashion "
        },
        "name": "Men Solid Black, Dark Green Track Pants",
        "description": "NA",
        "highlights": [
            "NA"
        ],
        "specifications": [
            {
                "title": "Fits",
                "description": "Slim",
            },
            {
                "title": "Size",
                "description": "S,M,L,XL,XXL",
            }
        ],
        "price": 349,
        "cuttedPrice": 1299,
        "images": [
            {
                "public_id": "products/kpbyzlbzjvbsuzledozq",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686467997/products/kpbyzlbzjvbsuzledozq.webp",
            }
        ],
        "category": "Fashion",
        "stock": 23,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/ms4sizwcxdmevz7ia3mb",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686311654/brands/ms4sizwcxdmevz7ia3mb.jpg"
            },
            "name": "Samsung"
        },
        "name": "SAMSUNG Galaxy S20 FE 5G (Cloud Lavender, 128 GB)  (8 GB RAM)",
        "description": "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
        "highlights": [
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C",
            "Partner OfferSign up for LocalMart Pay Later and get LocalMart Gift Card worth up to ₹1,000*Know More",
            "No cost EMI ₹4,749/month. Standard EMI also availableView Plans"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": "Handset (Non Removable Battery Included), Travel Adapter, USB Cable, User Manual",
            },
            {
                "title": "Model Number",
                "description": "SM-G781B/DS",
            },
            {
                "title": "Model Name",
                "description": "Galaxy S20 FE 5G",
            },
            {
                "title": "Color",
                "description": " Cloud Lavender",
            },
            {
                "title": "Browse Type",
                "description": " Smartphones",
            },
            {
                "title": "SIM Type",
                "description": " Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": " Yes",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": " Yes",
            }
        ],
        "price": 28490,
        "cuttedPrice": 74990,
        "images": [
            {
                "public_id": "products/vfa3owljsvi14maxh4bx",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686311652/products/vfa3owljsvi14maxh4bx.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 21,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/c9950psgrv4inttolkeg",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686310533/brands/c9950psgrv4inttolkeg.jpg"
            },
            "name": "Samsung"
        },
        "name": "SAMSUNG Galaxy M33 5G (Mystique Green, 128 GB)  (6 GB RAM)",
        "description": "You can use the Samsung Galaxy M33 5G Smartphone for a multitude of purposes, including communication, entertainment, productivity, navigation, and much more. It is compatible with advanced 5G technology for fast internet connectivity, enabling effortless streaming, app downloads, and online communication. In addition, this smartphone's display features up to 16.72 cm (6.6) full rectangle rounded corners TFT screen with up to 1080x2400p FHD+ resolution, delivering high-quality visuals with vivid colours.",
        "highlights": [
            "Bank OfferPay with UPI and Get ₹15 discountT&C",
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Special PriceGet extra ₹3236 off (price inclusive of cashback/coupon)T&C",
            "Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": "Handset, Ejection Pin,Data Cable,Quick Start Guide",
            },
            {
                "title": "Model Number",
                "description": "SM-M336BZGPINS",
            },
            {
                "title": "Model Name",
                "description": "Galaxy M33 5G",
            },
            {
                "title": "Color",
                "description": "Mystique Green",
            },
            {
                "title": "Browse Type",
                "description": "Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": " No",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": "Yes",
            }
        ],
        "price": 15565,
        "cuttedPrice": 24999,
        "images": [
            {
                "public_id": "products/ruuurhiise5vx00u8jjv",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686310532/products/ruuurhiise5vx00u8jjv.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 23,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/qbkmlfpn2rvzb03j6ddi",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686482645/brands/qbkmlfpn2rvzb03j6ddi.webp"
            },
            "name": "ZUNROOF TECH PRIVATE LIMITED"
        },
        "name": "ZunVolt 1.8L Electric Kettle  (1.8 L, Silver, Black)",
        "description": "\r\nZunVolt Electric Kettle 1.8L is the ultimate go-to appliance to relish your morning tea, hot water, soups, and so much more. The kettle comes with a robust stainless steel body and ABS handle that not only makes it shockproof but also, long-lasting. It doesn’t end here, the electric kettle is energy efficient as it consumes 1500W. The pouring spout design of the kettle makes it viable for regular and easy use. Users would find one unit of electric kettle and the user manual in the box.",
        "highlights": [
            "Material: Stainless Steel",
            "Water, Tea & Soups"
        ],
        "specifications": [
            {
                "title": " Operating Mode",
                "description": "Corded",
            },
            {
                "title": "Power Indicator",
                "description": " Yes",
            },
            {
                "title": "Lockable Lid",
                "description": " Yes",
            },
            {
                "title": "Dry Boil Protection",
                "description": "No",
            },
            {
                "title": "Auto Switch Off",
                "description": "Yes",
            },
            {
                "title": "Water Level Indicator",
                "description": "No",
            },
            {
                "title": "Power Requirement",
                "description": "230V",
            },
            {
                "title": "Sales Package",
                "description": "Kettle, User Manual",
            }
        ],
        "price": 428,
        "cuttedPrice": 1499,
        "images": [
            {
                "public_id": "products/mxtgolsou8qnh4sf7raz",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686482642/products/mxtgolsou8qnh4sf7raz.webp",
            }
        ],
        "category": "Appliances",
        "stock": 30,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/zqvp9odyvbv6wncbae7z",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686314001/brands/zqvp9odyvbv6wncbae7z.webp"
            },
            "name": "BAJAJ"
        },
        "name": "BAJAJ Crest Neo 1200 mm Ultra High Speed 3 Blade Ceiling Fan  (Brown, Pack of 1)",
        "description": "You can enjoy cool and refreshing air even on hot summer days with the help of the Bajaj Crest Neo Ceiling Fan. With its high speeds of up to 340 RPM and an air delivery rate of up to 205 cubic metres per minute, this ceiling fan can keep your room well-ventilated at all times. Equipped with 1200 mm high-quality ribbed aluminium blades, this ceiling fan ensures excellent air delivery and long-lasting performance.",
        "highlights": [
            "Blade Sweep: 1200 mm",
            "BEE Energy Rating: 2022 Launch Year"
        ],
        "specifications": [
            {
                "title": " Model Name",
                "description": "Crest Neo",
            },
            {
                "title": "Brand Color",
                "description": " Brown",
            },
            {
                "title": "Number of Blades",
                "description": "3",
            },
            {
                "title": "Pack of",
                "description": "1",
            },
            {
                "title": "Reversible Rotation",
                "description": " No",
            },
            {
                "title": "Remote",
                "description": " No",
            },
            {
                "title": "Power Requirement",
                "description": "AC 230 V, 50 Hz",
            },
            {
                "title": "Power Consumption",
                "description": "56 W",
            },
            {
                "title": "Blade Material",
                "description": "Aluminium",
            }
        ],
        "price": 1399,
        "cuttedPrice": 2179,
        "images": [
            {
                "public_id": "products/qgdsk9tiwblbpznt4ghr",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686313999/products/qgdsk9tiwblbpznt4ghr.webp",
            }
        ],
        "category": "Electronics",
        "stock": 21,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/pyhrr9401rqof4blcegu",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686468606/brands/pyhrr9401rqof4blcegu.webp"
            },
            "name": "Krishna R fashion "
        },
        "name": "Embroidered Banarasi Jacquard Saree  (Dark Green)",
        "description": "NA",
        "highlights": [
            "NA"
        ],
        "specifications": [
            {
                "title": "Fits",
                "description": "Slim",
            },
            {
                "title": "Color",
                "description": "Dark Green",
            }
        ],
        "price": 477,
        "cuttedPrice": 3999,
        "images": [
            {
                "public_id": "products/enehwi2jtfsg6cg1oynp",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686468596/products/enehwi2jtfsg6cg1oynp.webp",
            }
        ],
        "category": "Fashion",
        "stock": 12,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/fkicirwn9qcoabeio3sm",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686313578/brands/fkicirwn9qcoabeio3sm.webp"
            },
            "name": "PHILIPS"
        },
        "name": "PHILIPS HP8100/60 Hair Dryer  (1000 W, Blue)",
        "description": "\r\nCompact and ergonomic, this hairdryer benefits from a clever modern design. This results in a dryer that is light and easy to handle yet small enough to store virtually anywhere.This 1000W hairdryer creates the optimum level of airflow and gentle drying power, for beautiful results every day.The rubberised hook is located at the base of the handle and provides another storage option, particularly convenient for use in the home or when staying at a hotel.The concentrator works by focusing the flow of air through the opening onto specific areas. This results in precise styling and is great for touch ups or to finish a style.2 years of worldwide guarantee.The ThermoProtect temperature provides the optimal drying temperature and gives additional protection from overheating the hair. With the same powerful airflow, you will get the best results in a caring way.Careful drying with 2 flexible heat settings.",
        "highlights": [
            "2 heat settings",
            "2 speed settings",
            "Wattage: 1000 W",
            "1.5 m cord length"
        ],
        "specifications": [
            {
                "title": "In The Box",
                "description": " Manual, Concentrator, Main Unit",
            },
            {
                "title": " Brand",
                "description": "PHILIPS",
            },
            {
                "title": "Model Number",
                "description": "HP8100/60",
            },
            {
                "title": "Color",
                "description": " Blue",
            },
            {
                "title": "Number of Speed Settings",
                "description": "2",
            },
            {
                "title": "Cold Air Feature",
                "description": "No",
            }
        ],
        "price": 649,
        "cuttedPrice": 1095,
        "images": [
            {
                "public_id": "products/l135nfaxunem7ju7ng4h",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686313577/products/l135nfaxunem7ju7ng4h.webp",
            }
        ],
        "category": "Electronics",
        "stock": 14,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/xc11eh4z8iiiepnxlu0q",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686484516/brands/xc11eh4z8iiiepnxlu0q.webp"
            },
            "name": " GlobalBeesBrands"
        },
        "name": "The Better Home 1000 Stainless Steel Bottle 1 Litre | Rust & Leak Proof Steel Bottle 1000 ml Bottle  (Pack of 2, Purple, Steel)",
        "description": "NA",
        "highlights": [
            "Made of: Steel",
            "Bottle Type: Bottle",
            "Capacity: 1000 ml",
            "Pack of: 2"
        ],
        "specifications": [
            {
                "title": " Number of Contents in Sales Package",
                "description": "2",
            },
            {
                "title": " Type",
                "description": "Bottle",
            },
            {
                "title": "Body Material",
                "description": "Steel",
            },
            {
                "title": "Handle with Care",
                "description": "Yes",
            },
            {
                "title": "Model Name",
                "description": "1000 Stainless Steel Bottle 1 Litre | Rust & Leak Proof Steel Bottle",
            },
            {
                "title": "Net Quantity",
                "description": "2",
            }
        ],
        "price": 549,
        "cuttedPrice": 2198,
        "images": [
            {
                "public_id": "products/yaht7f6gn4yztn9yssyr",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686484514/products/yaht7f6gn4yztn9yssyr.webp",
            }
        ],
        "category": "Home",
        "stock": 50,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/mknipnyulamigp8w8csm",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686307212/brands/mknipnyulamigp8w8csm.png"
            },
            "name": "Realme"
        },
        "name": "realme C55 (Rainy Night, 64 GB)  (6 GB RAM)",
        "description": "\r\nCarry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches",
        "highlights": [
            "6 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
            "17.07 cm (6.72 inch) Full HD+ Display",
            "64MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Helio G88 Processor"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": " Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, Case",
            },
            {
                "title": "Model Number",
                "description": "RMX3710",
            },
            {
                "title": "Model Name",
                "description": "C55",
            },
            {
                "title": "Color",
                "description": "Rainy Night",
            },
            {
                "title": "Browse Type",
                "description": "Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": " No",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": "Yes",
            },
            {
                "title": "Quick Charging",
                "description": "Yes",
            },
            {
                "title": "SAR Value",
                "description": "Head:0.99 W/kg, Body: 1.23 W/kg",
            }
        ],
        "price": 11999,
        "cuttedPrice": 13999,
        "images": [
            {
                "public_id": "products/euvwxwhyxrsvbme5b05t",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686307208/products/euvwxwhyxrsvbme5b05t.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 23,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/cy7eakqdeknazcuebi3d",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686467603/brands/cy7eakqdeknazcuebi3d.webp"
            },
            "name": "Urbano Fashion "
        },
        "name": "Men Printed Round Neck Pure Cotton Dark Green T-Shirt",
        "description": "NA",
        "highlights": [
            "NA"
        ],
        "specifications": [
            {
                "title": "Fits",
                "description": "Slim",
            },
            {
                "title": "Size",
                "description": "S,M,L,XL",
            }
        ],
        "price": 378,
        "cuttedPrice": 1099,
        "images": [
            {
                "public_id": "products/timcm9kverzgihqrfyq2",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686467601/products/timcm9kverzgihqrfyq2.webp",
            }
        ],
        "category": "Fashion",
        "stock": 34,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/rjx8wt4icigq9pie1ho8",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686309666/brands/rjx8wt4icigq9pie1ho8.png"
            },
            "name": "Realme"
        },
        "name": "realme 10 (Rush Black, 64 GB)  (4 GB RAM)",
        "description": "\r\nGet a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% Screen-to-Body Ratio, Corning Gorilla Glass 5 for increased protection, 1000 nits of peak brightness for brilliance, and a contrast ratio of 4000000:1 that helps make every image spectacular. Additionally, the 8 GB+8 GB of Dynamic RAM allows you to run many programmes simultaneously without feeling any latency.",
        "highlights": [
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Special PriceGet extra ₹3500 off (price inclusive of cashback/coupon)T&C",
            "FreebieGet 200% Welcome Bonus upto ₹10000*T&C",
            "Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": "Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, Case",
            },
            {
                "title": "Model Number",
                "description": "RMX3630",
            },
            {
                "title": "Model Name",
                "description": " 10",
            },
            {
                "title": "Color",
                "description": " Rush Black",
            },
            {
                "title": "Browse Type",
                "description": " Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": " No",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": " Yes",
            },
            {
                "title": "Quick Charging",
                "description": " Yes",
            },
            {
                "title": "Sound Enhancements",
                "description": "Dirac Effect, MT6366 Audio Decoding Chip",
            },
            {
                "title": "SAR Value",
                "description": " Head: 1.138 W/kg, Body: 1.112 W/kg",
            }
        ],
        "price": 12499,
        "cuttedPrice": 15999,
        "images": [
            {
                "public_id": "products/vzywwxl4dbzxicprehfp",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686309664/products/vzywwxl4dbzxicprehfp.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 9,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/cortjd6j6pdit9kk8gme",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686482986/brands/cortjd6j6pdit9kk8gme.webp"
            },
            "name": " SuperAqua"
        },
        "name": "Aqua Fresh EPICAQUA+RO+UV+UF+TDSADJUSTER 15 L RO + UV + UF + ATDS Water Purifier  (Blue)",
        "description": "Our double carbon blocks can remove up to 99.99% chlorine chemicals in drinking water, Provides convenient, unlimited access to bottled water quality water right at your kitchen sink, RO+UV+UF with TDS with mineral Technology.It automatically stops when the tank is full or when there is no inlet supply of water.The consumables including the pre-sediment filter,pre-carbon filter, ultra violet chamber, RO membrane & filter will not covered under warranty ,Only electric parts covered warranty. Installation charges are 500-700/-in all over India. For more information customer care number:9810392397. TERMS AND CONDITION 1) Installation provided by seller charges Paid by customer .if customer will install by third party so warranty will avoid (withdrawal) . 2) Membranes is not cover in warranty. 3) RO Membrane will cover standard TDS of water (upto 1500-2000TDS) . 4) Water Purifies body color may be differ against Shaw on website. 5) Warranty cover for 6 month ( PUMP , SMPS). 6) Our Executive Will solve customer problems within 24-48 HR",
        "highlights": [
            "Electrical & Storage : Electric purification - suitable for areas with water shortage",
            "15 L : More the capacity, more the users can be served with drinking water",
            "RO + UV + UF + ATDS"
        ],
        "specifications": [
            {
                "title": " Model Name",
                "description": "EPICAQUA+RO+UV+UF+TDSADJUSTER",
            },
            {
                "title": "Series",
                "description": "Audi Blue",
            },
            {
                "title": "Color",
                "description": "Blue",
            },
            {
                "title": "Total Capacity",
                "description": "15 L",
            },
            {
                "title": "Purifying Technology",
                "description": "RO + UV + UF + ATDS",
            },
            {
                "title": "In The Box",
                "description": "1 Water Purifier, Clarity Cartridge, Installation Kit and User Manual",
            },
            {
                "title": "Power Requirement",
                "description": " AC 100 - 250 V, 50/60 Hz",
            },
            {
                "title": "Power Consumption",
                "description": "50 W",
            },
            {
                "title": "Electrical Type",
                "description": "Electric",
            },
            {
                "title": "Purification Features",
                "description": "RO UV UF, RO UV UF TDS with mineral water, Provides convenient, unlimited access to bottled water quality water right at your kitchen sink drinking water.",
            }
        ],
        "price": 3999,
        "cuttedPrice": 16500,
        "images": [
            {
                "public_id": "products/uwww292x3fdrouiigwv1",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686482983/products/uwww292x3fdrouiigwv1.webp",
            }
        ],
        "category": "Appliances",
        "stock": 33,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/abqcjrr1jla13zjus3vg",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686482319/brands/abqcjrr1jla13zjus3vg.webp"
            },
            "name": "The Capnicks Store"
        },
        "name": "capnicks Heavy Duty 7 Socket Extension Boards  (Black, 4 m)",
        "description": "NA",
        "highlights": [
            "Cord Length: 4 m",
            "Type: Strip",
            "Number of Sockets: 7"
        ],
        "specifications": [
            {
                "title": "In The Box",
                "description": "1",
            },
            {
                "title": "Brand",
                "description": " capnicks",
            },
            {
                "title": "Model Number",
                "description": "C-400",
            },
            {
                "title": "Model Name",
                "description": "Heavy Duty",
            },
            {
                "title": "Type",
                "description": "Strip",
            },
            {
                "title": "Number of Sockets",
                "description": "7",
            },
            {
                "title": "Suitable For",
                "description": "Computers and other Electronic Equipments",
            },
            {
                "title": "USB Port",
                "description": " No",
            }
        ],
        "price": 528,
        "cuttedPrice": 999,
        "images": [
            {
                "public_id": "products/bfiwi51orslzoclx2dcw",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686482318/products/bfiwi51orslzoclx2dcw.webp",
            }
        ],
        "category": "Appliances",
        "stock": 21,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/hadpnes7qd39tggyjuuu",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686481688/brands/hadpnes7qd39tggyjuuu.webp"
            },
            "name": "Bajaj"
        },
        "name": "BAJAJ 410570 GX 1 500 W Juicer Mixer Grinder (3 Jars, Blue)",
        "description": "The Bajaj GX1 Mixer-grinder makes it easy to grind spices, purees, and other ingredients for your favourite recipes. It fulfils a variety of cooking requirements with its three jars of varying capacities. Additionally, the jars include easy-grip handles, adding to the convenience of use. This mixer-grinder functions within a voltage range ,safeguarding its motor from voltage fluctuations while ensuring effective performance. Furthermore, this mixer-grinder's overload protection safeguards this device from damage caused by motor overload.",
        "highlights": [
            "500 W : Higher the Wattage, tougher the Juicing/Grinding"
        ],
        "specifications": [
            {
                "title": " Sales Package",
                "description": "Mixer: 1N| |Liquidizing Jar: 1N| |Grinding Jar: 1N| |Chutney Jar: 1N| |Liquidizing Lid: 1N| |Grinding Lid: 1N| |Chutney Lid: 1N| |Warranty Card: 1N| |Instruction Manual: 1N",
            },
            {
                "title": "Material",
                "description": "Stainless Steel",
            },
            {
                "title": "Dry Grinding",
                "description": "Yes",
            },
            {
                "title": "Mincing",
                "description": "Yes",
            },
            {
                "title": "Chutney Grinding",
                "description": " Yes",
            },
            {
                "title": "Liquidizing Jar Capacity",
                "description": " 1.2",
            },
            {
                "title": "Chutney Jar Capacity",
                "description": "0.4",
            }
        ],
        "price": 1899,
        "cuttedPrice": 4125,
        "images": [
            {
                "public_id": "products/rs0j3b6cevfjykumgvel",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686481686/products/rs0j3b6cevfjykumgvel.webp",
            }
        ],
        "category": "Appliances",
        "stock": 27,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/ikz3v7fxnlviaxxgq5pu",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686464953/brands/ikz3v7fxnlviaxxgq5pu.webp"
            },
            "name": "Control D "
        },
        "name": "Control D Body Temperature Check Fast Reading Fever Alarm & Beeper Alert Digital Thermometer  (White, Blue)",
        "description": "\r\nControl D Digital Thermometer is used for measuring body temperature. It can be used for oral, rectal and oxter measurement. Highly accurate and precise, this digital thermometer is good for both child and adult usage. The reading time of 60 seconds makes sure that the result is highly accurate. Features include Beep sound, Dual mode with both Celsius and Fahrenheit options, Memory of last result, Auto shut-off for energy saving and a long battery life.",
        "highlights": [
            "Power Source: LR41 Battery",
            "LCD Display",
            "Features: ONE BUTTON OPERATION, SOUND ALARM, Auto Shut OFF, 100% Safe (No Mercury), Clinically tested",
            "Auto Shut OFF"
        ],
        "specifications": [
            {
                "title": "Model ID",
                "description": "Body Temperature Check",
            },
            {
                "title": "Model Name",
                "description": "Fast Reading Fever Alarm & Beeper Alert Digital",
            },
            {
                "title": "Color",
                "description": "White, Blue",
            },
            {
                "title": "Flexible Tip",
                "description": "No",
            },
            {
                "title": "Memory Function",
                "description": "Yes",
            },
            {
                "title": "Buzzer",
                "description": "Yes",
            },
            {
                "title": "Measurement Range",
                "description": "32-42°C",
            },
            {
                "title": "Measurement Accuracy",
                "description": "0.1°C",
            },
            {
                "title": "Sales Package",
                "description": "Thermometer 1, Carry Case 1",
            }
        ],
        "price": 169,
        "cuttedPrice": 249,
        "images": [
            {
                "public_id": "products/azmqhvtupqj7mqoij8db",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686464951/products/azmqhvtupqj7mqoij8db.webp",
            }
        ],
        "category": "Electronics",
        "stock": 15,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/pgfyiuf12e9f9cpxh0rp",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466903/brands/pgfyiuf12e9f9cpxh0rp.webp"
            },
            "name": "HP"
        },
        "name": "HP 15s (2023) Ryzen 3 Dual Core 3250U - (8 GB/512 GB SSD/Windows 11 Home) 15s- eq1580AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)",
        "description": "NA",
        "highlights": [
            "Stylish & Portable Thin and Light Laptop",
            "5.6 Inch Full HD, micro-edge,anti-glare, Brightness: 220 nits, 141 ppi, Color Gamut: 45%NTSC",
            "Light Laptop without Optical Disk Drive"
        ],
        "specifications": [
            {
                "title": " Sales Package",
                "description": "Laptop, battery, power adapter, user guide",
            },
            {
                "title": "Model Number",
                "description": "15s- eq1580AU",
            },
            {
                "title": "Part Number",
                "description": "834S2PA#ACJ",
            },
            {
                "title": "Model Name",
                "description": " 15s- eq1580AU",
            },
            {
                "title": "Series",
                "description": " 15s (2023",
            },
            {
                "title": "Color",
                "description": "Natural Silver",
            },
            {
                "title": "Type",
                "description": "Thin and Light Laptop",
            }
        ],
        "price": 32990,
        "cuttedPrice": 39995,
        "images": [
            {
                "public_id": "products/eytcc2tidi1w5cphinsf",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466899/products/eytcc2tidi1w5cphinsf.webp",
            }
        ],
        "category": "Laptops",
        "stock": 23,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/beag8mohntnfdkf5mfl6",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686312436/brands/beag8mohntnfdkf5mfl6.jpg"
            },
            "name": "Micromax"
        },
        "name": "Micromax IN 2B (Blue, 64 GB)  (4 GB RAM)",
        "description": "\r\nNA",
        "highlights": [
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Special PriceGet extra ₹3500 off (price inclusive of cashback/coupon)T&C",
            "FreebieGet 200% Welcome Bonus upto ₹10000*T&C",
            "Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": "Handset, Charger, Data Cable, SIM Tool Ejector, Screen Guard, TPU Case, User Manual",
            },
            {
                "title": "Model Number",
                "description": "E7544",
            },
            {
                "title": "Model Name",
                "description": "IN 2B",
            },
            {
                "title": "Color",
                "description": "Blue",
            },
            {
                "title": "Browse Type",
                "description": " Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": "No",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": " Yes",
            },
            {
                "title": "SAR Value",
                "description": " Head - 0.852 W/Kg, Body - 1.132 W/Kg",
            }
        ],
        "price": 6999,
        "cuttedPrice": 10499,
        "images": [
            {
                "public_id": "products/bbfwvyqcjnb0hq9hn08o",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686312433/products/bbfwvyqcjnb0hq9hn08o.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 32,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/vnxfckice8tbr2dcawyx",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686484247/brands/vnxfckice8tbr2dcawyx.webp"
            },
            "name": "AMRO HOME NEEDS"
        },
        "name": "AMRO HOME NEEDS Feather Static Duster Dry Duster",
        "description": "\r\nHome Needs Multipurpose Colorful Microfiber Static Feather Duster for Easy to Cleaning Home/Office/Shop/Car",
        "highlights": [
            "Type: Duster",
            "Cleaning Type: Dry",
            "Brush Material: Microfiber",
            "Handle Material: Plastic"
        ],
        "specifications": [
            {
                "title": " Sales Package",
                "description": "1",
            },
            {
                "title": "Pack of",
                "description": "1",
            },
            {
                "title": "Brand",
                "description": "AMRO HOME NEEDS",
            },
            {
                "title": "Model Number",
                "description": "FDS01",
            },
            {
                "title": "Model Name",
                "description": "Feather Static Duster",
            },
            {
                "title": "Type",
                "description": "Duster",
            },
            {
                "title": "Shade",
                "description": "Multi",
            },
            {
                "title": "Cleaning Type",
                "description": "Dry",
            },
            {
                "title": "Brush Material",
                "description": "Microfiber",
            }
        ],
        "price": 179,
        "cuttedPrice": 299,
        "images": [
            {
                "public_id": "products/iepsmejvazwwnfzuyfxs",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686484244/products/iepsmejvazwwnfzuyfxs.webp",
            }
        ],
        "category": "Home",
        "stock": 34,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/p6aax3rq7g71wnvtp3za",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686483640/brands/p6aax3rq7g71wnvtp3za.webp"
            },
            "name": "HomeSizzlerIndia"
        },
        "name": "Home Sizzler 153 cm (5 ft) Polyester Room Darkening Window Curtain (Pack Of 2)  (Floral, Brown)",
        "description": "\r\nThe design of the delivered product may slightly vary from what is shown in the displayed image.",
        "highlights": [
            "Window (115 cm x 153 cm)",
            "Material: Polyester",
            "Pack of: 2",
            "Transparency: Room Darkening",
            "Closure Type: Eyelet"
        ],
        "specifications": [
            {
                "title": "Model Name",
                "description": "Garden Panel Brown Set of 2 Window Curtains",
            },
            {
                "title": "Model Number",
                "description": "HS2PC000992WD_NEW",
            },
            {
                "title": "Reversible",
                "description": "No",
            },
            {
                "title": "Transparency",
                "description": "Room Darkening",
            },
            {
                "title": "Fabric Care",
                "description": "Normal Hand Wash or Machine Wash",
            },
            {
                "title": "Collection",
                "description": "Garden Panel",
            },
            {
                "title": "Sales Package",
                "description": "2 Window Curtains",
            },
            {
                "title": "Net Quantity",
                "description": "2",
            }
        ],
        "price": 349,
        "cuttedPrice": 799,
        "images": [
            {
                "public_id": "products/t2at8br3cirgzoenjrtn",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686483638/products/t2at8br3cirgzoenjrtn.webp",
            }
        ],
        "category": "Home",
        "stock": 44,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/zb1pvrhr7zmxcdiitlah",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686307940/brands/zb1pvrhr7zmxcdiitlah.png"
            },
            "name": "Realme"
        },
        "name": "realme C30 (Bamboo Green, 32 GB)  (3 GB RAM)",
        "description": "\r\nExplore your inner self and be outspoken about it with the realme C30 smartphone which reflects your persona to the whole world with its intuitive nature. Powered by the Unisoc T612 processor, you can seamlessly multitask and get things done at your convenience. Furthermore, an 8 MP AI-driven rear camera and a 5 MP selfie camera allow you to capture stunning images with exceptional imagery. Moreover, this phone boasts 3 card slots which support a dual SIM setup with two slots and allow you to enjoy up to 1 TB of internal storage with the third slot.",
        "highlights": [
            " Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Special PriceGet extra ₹2800 off (price inclusive of cashback/coupon)T&C",
            "FreebieGet 200% Welcome Bonus upto ₹10000*T&C",
            "Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": " Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool",
            },
            {
                "title": "Model Number",
                "description": "RMX3581",
            },
            {
                "title": "Model Name",
                "description": "C30",
            },
            {
                "title": "Color",
                "description": "Bamboo Green",
            },
            {
                "title": "Browse Type",
                "description": "Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": "No",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": "Yes",
            },
            {
                "title": "Sound Enhancements",
                "description": "Dirac Effect",
            },
            {
                "title": "SAR Value",
                "description": "Head: 1.020 W/kg, Body: 0.682 W/kg",
            }
        ],
        "price": 6499,
        "cuttedPrice": 9299,
        "images": [
            {
                "public_id": "products/kdromzr9jtribemtjhr6",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686307936/products/kdromzr9jtribemtjhr6.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 49,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/xdpclbg7y8e4ypjqqqix",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686308555/brands/xdpclbg7y8e4ypjqqqix.png"
            },
            "name": "Realme"
        },
        "name": "realme C33 2023 (Sandy Gold, 128 GB)  (4 GB RAM)",
        "description": "\r\nNA",
        "highlights": [
            "Bank Offer10% upto ₹750 off on SBI Credit Card TransactionsT&C",
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Bank Offer₹1000 Off On ICICI Bank Credit and Debit Card TransactionsT&C",
            "Special PriceGet extra ₹3500 off (price inclusive of cashback/coupon)T&C"
        ],
        "specifications": [
            {
                "title": "In The Box",
                "description": " Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool",
            },
            {
                "title": "Model Number",
                "description": "RMX3627",
            },
            {
                "title": "Model Name",
                "description": " C33 2023",
            },
            {
                "title": "Color",
                "description": " Sandy Gold",
            },
            {
                "title": "Browse Type",
                "description": " Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": " Yes",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": "Yes",
            },
            {
                "title": "Sound Enhancements",
                "description": "Dirac Effect",
            }
        ],
        "price": 10499,
        "cuttedPrice": 13999,
        "images": [
            {
                "public_id": "products/z9gk3jnulvdgyq12lz30",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686308553/products/z9gk3jnulvdgyq12lz30.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 34,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/duupzzcsfdqowbuexnya",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686310969/brands/duupzzcsfdqowbuexnya.jpg"
            },
            "name": "Samsung"
        },
        "name": "SAMSUNG Galaxy A23 5G (Silver, 128 GB)  (6 GB RAM)",
        "description": "Enjoy smooth multitasking and impeccable connectivity with the Samsung Galaxy A23 5G smartphone, which is packed with amazing features. The Galaxy A23 5G combines the power of the Snapdragon mobile platform with rapid and efficient performance for the task at hand with the help of up to 6 GB of RAM. Additionally, the Galaxy A23 5G's 16.76 cm (6.6) Infinity-V Display gives you additional room to see and perform tasks. Furthermore, the 50 MP OIS Camera allows you to shoot crystal-clear, crisp photographs. Furthermore, you may enlarge your field of vision using the Ultra Wide Camera. Moreover, Dolby Atmos allows you to experience a rich, powerful sound that immerses you in the action.",
        "highlights": [
            "Bank OfferGet 10% Cashback on Samsung Axis bank Credit CardT&C",
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Bank Offer₹2000 Off On SBI Credit Card TransactionsT&C",
            "Special PriceGet extra ₹6991 off (price inclusive of cashback/coupon)T&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": " Handset, Type-C Data Cable, Travel Adapter, Quick Start Guide, Sim Ejection Pin",
            },
            {
                "title": "Model Numbe",
                "description": "SM-A236EZSGINS",
            },
            {
                "title": "Model Name",
                "description": " Galaxy A23 5G",
            },
            {
                "title": "Color",
                "description": " Silver",
            },
            {
                "title": "Browse Type",
                "description": "Smartphones",
            },
            {
                "title": "SIM Type",
                "description": " Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": " Yes",
            },
            {
                "title": "Touchscreen",
                "description": " Yes",
            },
            {
                "title": "OTG Compatible",
                "description": "Yes",
            },
            {
                "title": "Quick Charging",
                "description": "Yes",
            },
            {
                "title": "SAR Value",
                "description": " 0.442W/Kg",
            }
        ],
        "price": 21999,
        "cuttedPrice": 28990,
        "images": [
            {
                "public_id": "products/owfdnk4uzin6wvutetox",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686310966/products/owfdnk4uzin6wvutetox.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 33,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/iqfteykup1gfamtw54hp",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466358/brands/iqfteykup1gfamtw54hp.webp"
            },
            "name": "Realme"
        },
        "name": "realme Book (Slim) Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home) RMNB1001 Thin and Light Laptop  (14 inch, Real Blue, 1.38 kg)",
        "description": "NA",
        "highlights": [
            "Stylish & Portable Thin and Light Laptop",
            "14 inch 2K QHD, IPS LCD Display ( 400nits peak brightness, 100% sRGB,3:2 aspect ratio, Full Vision Display)",
            "Finger Print Sensor for Faster System Access",
            "Light Laptop without Optical Disk Drive"
        ],
        "specifications": [
            {
                "title": " Sales Package",
                "description": "Laptop, Power Adaptor, User Guide, Warranty Documents",
            },
            {
                "title": "Model Number",
                "description": "RMNB1001",
            },
            {
                "title": "Part Number",
                "description": "130290120017",
            },
            {
                "title": "Model Name",
                "description": "RMNB1001",
            },
            {
                "title": "Series",
                "description": "Book (Slim)",
            },
            {
                "title": "Color",
                "description": " Real Blue",
            }
        ],
        "price": 32364,
        "cuttedPrice": 54999,
        "images": [
            {
                "public_id": "products/kkez1sit9oy2apzbdodc",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466355/products/kkez1sit9oy2apzbdodc.webp",
            }
        ],
        "category": "Laptops",
        "stock": 17,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/shq602d7gpgslcehfh29",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686483972/brands/shq602d7gpgslcehfh29.webp"
            },
            "name": " GlobalBeesBrands4."
        },
        "name": "SAVYA HOME Apollo HBCB Mesh Office Executive Chair  (Black, DIY(Do-It-Yourself))",
        "description": "chair with lumbar support and pneumatic gas lift for height adjustment and 360 degree swivel The Chair Is Packed & Dispatched In Semi Assembled Condition no too is needed. Further Assembly Is Very Easy & No Tool Is Required Pl. Warranty: 1 year manufacturer warranty against manufacturing defects. For Service and Installation Queries, Please Reach Out To Us On Our Customer Care Number",
        "highlights": [
            "Head Support",
            "W x H: 51 cm x 130 cm (1 ft 8 in x 4 ft 3 in)",
            "Frame Material: Plastic",
            "Upholstery Type: Cushion",
            "DIY - Basic assembly to be done with simple tools by the customer, comes with instructions."
        ],
        "specifications": [
            {
                "title": "Sales Package",
                "description": " 1 complete chair with complete assembly kit",
            },
            {
                "title": "Model Number",
                "description": "Marcozy -001",
            },
            {
                "title": "Model Name",
                "description": "Apollo HBCB",
            },
            {
                "title": "Suitable For",
                "description": "Study & Home Office",
            },
            {
                "title": "Frame Material Subtype",
                "description": "PP (Polypropylene)",
            },
            {
                "title": "Upholstery Material",
                "description": "Mesh",
            },
            {
                "title": "Key Features",
                "description": "Office chair with pneumatic gas lift for height adjustment and 360 degree swivel and tilt movement with breathable mesh fabric",
            }
        ],
        "price": 5199,
        "cuttedPrice": 18000,
        "images": [
            {
                "public_id": "products/fwfeld97fatl9tdobi9u",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686483969/products/fwfeld97fatl9tdobi9u.webp",
            }
        ],
        "category": "Home",
        "stock": 33,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/f5jhf77oo7alslzy0dr4",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686310160/brands/f5jhf77oo7alslzy0dr4.jpg"
            },
            "name": "SAMSUNG"
        },
        "name": "SAMSUNG Galaxy F14 5G (B.A.E. Purple, 128 GB)  (6 GB RAM)",
        "description": "\r\nThe Samsung Galaxy F14 smartphone uses a segment-only 5nm processor that enables you with easy multitasking, gaming, and much more. It has a 6000 mAh battery that will last you for up to 2 days on a single charge. Thanks to the 5G connectivity, you can enjoy high speed browsing on this smartphone. It has a large display of about 16.72 cm (6.5) full HD+ display that enables you with immersive viewing. The 12 GB of RAM with RAM Plus offers enough storage space to store all your data. This smartphone’s OS updates and security updates keeps you updated and protected.",
        "highlights": [
            "Bank OfferGet 10% Cashback on Samsung Axis bank Credit CardT&C",
            "Bank Offer5% Cashback on LocalMart Axis Bank CardT&C",
            "Bank Offer₹1000 Off On SBI Credit Card TransactionsT&C",
            "Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C"
        ],
        "specifications": [
            {
                "title": " In The Box",
                "description": " Handset, Type-C Data Cable, Quick Start Guide, Sim Ejection Pin",
            },
            {
                "title": "Model Number",
                "description": " SM-E146BLVHINS",
            },
            {
                "title": "Model Name",
                "description": "Galaxy F14 5G",
            },
            {
                "title": "Color",
                "description": " B.A.E. Purple",
            },
            {
                "title": "Browse Type",
                "description": "Smartphones",
            },
            {
                "title": "SIM Type",
                "description": "Dual Sim",
            },
            {
                "title": "Hybrid Sim Slot",
                "description": "No",
            },
            {
                "title": "Touchscreen",
                "description": "Yes",
            },
            {
                "title": "OTG Compatible",
                "description": " Yes",
            }
        ],
        "price": 14490,
        "cuttedPrice": 18490,
        "images": [
            {
                "public_id": "products/khwkgdjkzskkyhdrzaci",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686310158/products/khwkgdjkzskkyhdrzaci.webp",
            }
        ],
        "category": "Mobiles",
        "stock": 40,
        "warranty": 1,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/i69qbmikvazhgjm8lpld",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686467215/brands/i69qbmikvazhgjm8lpld.webp"
            },
            "name": "LAMBOO "
        },
        "name": "Men Slim Fit Floral Print Spread Collar Casual Shirt",
        "description": "NA",
        "highlights": [
            "NO"
        ],
        "specifications": [
            {
                "title": "Fits",
                "description": "Slim",
            },
            {
                "title": "Size",
                "description": "S",
            }
        ],
        "price": 359,
        "cuttedPrice": 1299,
        "images": [
            {
                "public_id": "products/hllv9dpqxhfepod8fjl3",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686467211/products/hllv9dpqxhfepod8fjl3.webp",
            }
        ],
        "category": "Fashion",
        "stock": 23,
        "warranty": 0,
    },
    {
        "brand": {
            "logo": {
                "public_id": "brands/opurukcnwgd2hd1vrucc",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466017/brands/opurukcnwgd2hd1vrucc.webp"
            },
            "name": "Asus"
        },
        "name": "ASUS Vivobook 15 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)",
        "description": "\r\nThe outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.",
        "highlights": [
            "Stylish & Portable Thin and Light Laptop",
            "15.6 Inch Full HD 16:9 Aspect ratio, LED Backlit, 200nits, 45% NTSC Color Gamut, Anti-glare display",
            "Finger Print Sensor for Faster System Access",
            "Light Laptop without Optical Disk Drive"
        ],
        "specifications": [
            {
                "title": "Sales Package",
                "description": "Laptop, Battery, Adapter, Cables and User Manuals",
            },
            {
                "title": "Model Number",
                "description": "X515EA-EJ322WS | X515EA-EJ328WS",
            },
            {
                "title": "Part Number",
                "description": "90NB0TY2-M00JK0 | 90NB0TY2-M047X0",
            },
            {
                "title": "Model Name",
                "description": "X515EA-EJ322WS | X515EA-EJ328WS",
            },
            {
                "title": "Series",
                "description": "Vivobook 15",
            },
            {
                "title": "Color",
                "description": "Transparent Silver",
            }
        ],
        "price": 34990,
        "cuttedPrice": 56990,
        "images": [
            {
                "public_id": "products/og6majk8fhflywqw7upq",
                "url": "https://res.cloudinary.com/dvxwh8aqq/image/upload/v1686466013/products/og6majk8fhflywqw7upq.webp",
            }
        ],
        "category": "Laptops",
        "stock": 23,
        "warranty": 1,
    }
]

const defaultData = async () => {
    try {
      const productExists = await Product.exists({});
      if (!productExists) {
        await Product.insertMany(defaultProducts);
        console.log('Default products inserted.');
      } else {
        console.log('Products already exist. No insertion needed.');
      }
    } catch (err) {
      console.error('Error inserting default data:', err);
    }
  };

export default defaultData;
