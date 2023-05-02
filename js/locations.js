// Parkour Locations
let pkSpots = [
    {
      location: "Tempest Freerunning Academy Valley",
      address: "19821 Nordhoff Pl #115, Chatsworth, CA 91311",
      category: "School",
      latitude: 34.237115,
      longitude: -118.564806,
      state: "California",
      country: "United States",
      level: "Beginners",
      obstacles: ["Low Wall", "High Bar"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95c9f5554700c2467f4a_tempest%20freerunning%20academy%20valley.webp"
    },
    {
      location: "Tempest Freerunning Academy North County",
      address: "2620 Progress St #A, Vista, CA 92081, United States",
      category: "School",
      latitude: 33.14567,
      longitude: -117.216846,
      state: "California",
      country: "United States",
      level: "Beginners",
      obstacles: ["Low Wall", "Parallel Walls", "Incline Ramp"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95c81c311c32effb91eb_Tempest%20Freerunning%20Academy%20North%20County.webp"
    },
    {
      location: "Tempest Freerunning Academy Texas",
      address: "280 Commerce St #100, Southlake, TX 76092, Estados Unidos",
      category: "School",
      latitude: 32.936282,
      longitude: -97.105221,
      state: "Texas",
      country: "United States",
      level: "Beginners",
      obstacles: ["Grassy Ground", "Handrail"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95c9fcacf7f5ce8d3f01_Tempest%20Freerunning%20Academy%20Texas.webp"
    },
    {
      location: "APEX Denver",
      address: "#A5, 700 W Mississippi Ave, Denver, CO 80223, Estados Unidos",
      category: "GYM",
      latitude: 39.696525,
      longitude: -104.994261,
      state: "Colorado",
      country: "United States",
      level: "Beginners",
      obstacles: ["Handrail", "High Bar", "High Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a65c0925395f3a0afd_APEX%20Denver.webp"
    },
    {
      location: "Elements Parkour Langley",
      address: "19292 60 Ave #307, Surrey, BC V3S 3M2, Canadá",
      category: "GYM",
      latitude: 49.110627,
      longitude: -122.688594,
      state: "Langley",
      country: "Canada",
      level: "Beginners",
      obstacles: ["Parallel Walls", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a4fe7b00741a8c0da4_Elements%20Parkour%20Langley.webp"
    },
    {
      location: "Parkour Generations London",
      address:
        "Chainstore Gym & Parkour Academy, Trinity Buoy Wharf, 64 Orchard Pl, London E14 0JY, United Kingdom",
      category: "School",
      latitude: 51.508122,
      longitude: 0.008808,
      state: "London",
      country: "United Kingdom",
      level: "Beginners",
      obstacles: ["High Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95aa5d73bed8433f2644_Parkour%20Generations%20London.webp"
    },
    {
      location: "Origins Parkour",
      address: "2655 Main St 3rd floor, Vancouver, BC V5T 3E5, Canadá",
      category: "GYM",
      latitude: 49.261566,
      longitude: -123.101256,
      state: "British Columbia",
      country: "Canada",
      level: "Beginners",
      obstacles: [
        "Handrail",
        "High Bar",
        "High Wall",
        "Low Wall",
        "Parallel Walls"
      ],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a81887d150fdf01029_Origins%20Parkour.webp"
    },
    {
      location: "Castle Fountain",
      address: "Downtown Vancouver",
      category: "Outdoor",
      latitude: 49.277158,
      longitude: -123.131968,
      state: "British Columbia",
      country: "Canada",
      level: "Intermediate",
      obstacles: ["Handrail", "Stairs", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a6a7eb5c7f83850667_Castle%20Fountain.webp"
    },
    {
      location: "Leg in Boot",
      address: "Market Hill, Vancouver, BC, Canadá",
      category: "Outdoor",
      latitude: 49.266767,
      longitude: -123.119412,
      state: "British Columbia",
      country: "Canada",
      level: "Intermediate",
      obstacles: ["Stairs", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a82e553d4f0631fe7c_Leg%20in%20Boot.webp"
    },
    {
      location: "Ricky's",
      address: "Beatty St, Vancouver, BC, Canadá",
      category: "Outdoor",
      latitude: 49.279945,
      longitude: -123.110539,
      state: "British Columbia",
      country: "Canada",
      level: "Intermediate",
      obstacles: ["Handrail", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95c8fcacf73b2c8d3f00_Rickys.webp"
    },
    {
      location: "Cambie BDWay Station",
      address:
        "Broadway-City Hall Station @ Bay 2, Vancouver, BC V5Z 2V2, Canadá",
      category: "Outdoor",
      latitude: 49.262767,
      longitude: -123.114604,
      state: "British Columbia",
      country: "Canada",
      level: "Beginner",
      obstacles: ["Bench", "Handrail", "Low Wall", "Incline Ramp", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a68635e011d3db6c1e_Cambie%20BDWay%20Station.webp"
    },
    {
      location: "Granville Loop Park",
      address: "1435 W 5th Ave, Vancouver, BC V6Z 1N3, Canadá",
      category: "Playground",
      latitude: 49.267265,
      longitude: -123.137546,
      state: "British Columbia",
      country: "Canada",
      level: "Beginner",
      obstacles: ["Grassy Ground", "Bench", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a81c311c93f3fb9054_Granville%20Loop%20Park.webp"
    },
    {
      location: "Law Courts / Robson Square",
      address: "800 Robson St, Vancouver, BC V6E 1A7, Canadá",
      category: "Playground",
      latitude: 49.281844,
      longitude: -123.122009,
      state: "British Columbia",
      country: "Canada",
      level: "Intermediate",
      obstacles: ["Stairs", "Low Wall", "High Wall", "Handrail", "Bench"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a8a7eb5c60cb850669_Law%20Courts_Robson%20Square.webp"
    },
    {
      location: "Infinite Movement Academy",
      address: "215 W Ridgecrest Blvd, Ridgecrest, CA 93555, Estados Unidos",
      category: "GYM",
      latitude: 35.622042,
      longitude: -117.672955,
      state: "California",
      country: "United States",
      level: "Beginners",
      obstacles: ["Low Wall", "High Wall", "High Bar", "Incline Ramps"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/64429d5a02ff347389a44d80_parque%20el%20fraile.jpg"
    },
    {
      location: "Parque de la Ciudad",
      address:
        "C. 405 Bis 277, B1882 Ezpeleta, Provincia de Buenos Aires, Argentina",
      category: "Park",
      latitude: -34.75529,
      longitude: -58.2548,
      state: "Buenos Aires",
      country: "Argentina",
      level: "Beginners",
      obstacles: ["Bench", "Grassy Ground", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/64429d5a02ff347389a44d80_parque%20el%20fraile.jpg"
    },
    {
      location: "Comunal",
      address: "C. 528 Bis 399-449, Tolosa, Provincia de Buenos Aires, Argentina",
      category: "Meeting Point",
      latitude: -34.89305,
      longitude: -57.96831,
      state: "Buenos Aires",
      country: "Argentina",
      level: "Beginners",
      obstacles: ["Low Wall", "Stairs", "Bench", "Grassy Ground"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a600ff54e54e3b860d_Comunal.webp"
    },
    {
      location: "Centro de entrenamiento Monos Urbanos",
      address: "C. Churubusco 243, San Juan de Dios, 44360 Guadalajara, Jal.",
      category: "GYM",
      latitude: 20.67537,
      longitude: -103.33274,
      state: "Jalisco",
      country: "México",
      level: "Beginners",
      obstacles: ["Handrail", "High Bar", "High Wall", "Pole"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a621d3fe51d1fb8081_Centro%20de%20entrenamiento%20Monos%20Urbanos.webp"
    },
    {
      location: "Parroquia Maria Madre de Cristo",
      address: "C. Severo Díaz 95, Arcos Vallarta, 44130 Guadalajara, Jal.",
      category: "Meeting Point",
      latitude: 20.6773,
      longitude: -103.38413,
      state: "Jalisco",
      country: "México",
      level: "Advanced",
      obstacles: ["Stairs", "Bench", "High Wall", "Pole"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95b8f5554765a5467dee_Parroquia%20Maria%20Madre%20de%20Cristo.webp"
    },
    {
      location: "Parque Las Maravillas",
      address:
        "Blvd. Carlos Abedrop Dávila 3745, Parque Centro Metropolitano, 25022 Saltillo, Coah.",
      category: "Park",
      latitude: 25.41578,
      longitude: -100.96534,
      state: "Coahuila",
      country: "México",
      level: "Intermediate",
      obstacles: ["Bench", "High Wall", "Grassy Ground", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95aa2e553db71231fe8d_Parque%20las%20maravillas.webp"
    },
    {
      location: "Templo",
      address: "Saudita 127, Lomas del Pedregal, 66648 Cd Apodaca, N.L.",
      category: "Meeting Point",
      latitude: 25.7276,
      longitude: -100.17127,
      state: "Nuevo León",
      country: "México",
      level: "Intermediate",
      obstacles: [
        "Bench",
        "Grassy Ground",
        "Stairs",
        "High Wall",
        "Incline Ramps"
      ],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95c88635e01917db6d2d_Templo.webp"
    },
    {
      location: "La Capital",
      address: "Sta. Lucia, Centro, 64000 Monterrey, N.L.",
      category: "Meeting Point",
      latitude: 25.67263,
      longitude: -100.3007,
      state: "Nuevo León",
      country: "México",
      level: "Beginners",
      obstacles: ["Bench", "Handrail", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a8fe7b0003598c0da5_La%20capital.webp"
    },
    {
      location: "Palacio de Gobierno, NL",
      address: "Centro, 64000 Monterrey, N.L.",
      category: "Meeting Point",
      latitude: 25.67203,
      longitude: -100.30957,
      state: "Nuevo León",
      country: "México",
      level: "Beginners",
      obstacles: ["Low Wall", "Handrail", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a89df37d1468dcc118_Palacio%20de%20gobierno.webp"
    },
    {
      location: "Explanada de los heroes",
      address: "Eje Metropolitano 21 87, Centro, 64000 Monterrey, N.L.",
      category: "Park",
      latitude: 25.67029,
      longitude: -100.30897,
      state: "Nuevo León",
      country: "México",
      level: "Intermediate",
      obstacles: [
        "Grassy Ground",
        "Handrail",
        "Stairs",
        "Incline Ramp",
        "Low Wall"
      ],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a6c89c38b7f9170389_Explanada%20de%20los%20heroes.webp"
    },
    {
      location: "Plaza de la Amistad",
      address: "Parque del Dulce, Rincón de San Jemo, Monterrey, N.L.",
      category: "Park",
      latitude: 25.68359,
      longitude: -100.36512,
      state: "Nuevo León",
      country: "México",
      level: "Beginners",
      obstacles: ["Grassy Ground", "Bench", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95aa4da57eddf073c3ed_Plaza%20la%20amistad.webp"
    },
    {
      location: "DIF",
      address:
        "Colonia Antonio I. Villarreal Sn, Antonio I Villarreal, 64390 Monterrey, N.L.",
      category: "Park",
      latitude: 25.70492,
      longitude: -100.35556,
      state: "Nuevo León",
      country: "México",
      level: "Beginners",
      obstacles: ["Bench", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a6a3e46f8c6715ea00_DIF.webp"
    },
    {
      location: "El Fraile",
      address: "Anáhuac, 66450 San Nicolás de los Garza, N.L.",
      category: "Park",
      latitude: 25.74115,
      longitude: -100.31874,
      state: "Nuevo León",
      country: "México",
      level: "Intermediate",
      obstacles: [
        "Handrail",
        "High Wall",
        "Parallel Walls",
        "Handrail",
        "Stairs"
      ],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95aaf87a7051e6c8b171_Parque%20el%20fraile.webp"
    },
    {
      location: "Puente Universitario",
      address: "Anáhuac, 66450 San Nicolás de los Garza, N.L.",
      category: "School",
      latitude: 25.73147,
      longitude: -100.3081,
      state: "Nuevo León",
      country: "México",
      level: "Advanced",
      obstacles: ["Handrail", "High Wall", "Incline Ramp", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95abfcacf74e6b8d3e5f_Puente%20universitario.webp"
    },
    {
      location: "El lago de los saltos",
      address: " Niños Héroes, Monterrey, N.L. ",
      category: "Park",
      latitude: 25.7161,
      longitude: -100.31428,
      state: "Nuevo León",
      country: "México",
      level: "Intermediate",
      obstacles: ["Grassy Ground", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a71887d1219ef01028_Lago%20de%20los%20saltos.webp"
    },
    {
      location: "Estatua de Pancho Villa",
      address:
        "Aldama 94, Cerro de La Pila, Zona Centro, 35059 Gómez Palacio, Dgo.",
      category: "Meeting Point",
      latitude: 25.571581,
      longitude: -103.505339,
      state: "Durango",
      country: "México",
      level: "Intermediate",
      obstacles: ["Grassy Ground", "Low Wall", "High Wall", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a5c89c3807b217035d_Estatua%20de%20Pancho%20Villa.webp"
    },
    {
      location: "Parque Extremo",
      address: "C. 20 de Noviembre 6, Castellanos, 35057 Gómez Palacio, Dgo.",
      category: "Playground",
      latitude: 25.567321,
      longitude: -103.516259,
      state: "Durango",
      country: "México",
      level: "Intermediate",
      obstacles: ["Stairs", "Bench", "Grassy Ground"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95aac89c383a001703b9_Parque%20Extremo.webp"
    },
    {
      location: "Parque San Sebastian",
      address: "México 45, Lagunita, 33730 Cd Camargo, Chih.",
      category: "Outdoor",
      latitude: 27.684072,
      longitude: -105.164893,
      state: "Chihuahua",
      country: "México",
      level: "Intermediate",
      obstacles: ["High Wall", "Grassy Ground"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644c95a900ff5450163b862f_Parque%20San%20Sebastian.webp"
    },
    {
      location: "The MIT Stata Center",
      address: "32 Vassar St, Cambridge, MA 02139, United States",
      category: "Meeting Point",
      latitude: 37.87012556380415,
      longitude: -122.25939623015228,
      state: "New York",
      country: "United States",
      level: "Intermediate",
      obstacles: ["Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644d50dff1695374b1f4f69b_The%20MIT%20Stata%20Center.png"
    },
    {
      location: "The UC Berkeley Campus",
      address: "Berkeley, CA 94720, United States",
      category: "Meeting Point",
      latitude: 39.965533,
      longitude: -75.180773,
      state: "California",
      country: "United States",
      level: "Intermediate",
      obstacles: ["Grassy Ground", "Low Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644d50e8fb83a7a1ee77ee32_UC%20Berkeley%20Campus.webp"
    },
    {
      location: "Santorini Rooftops",
      address: "Oia, Santorini 847 02, Greece",
      category: "Meeting Point",
      latitude: 36.461289,
      longitude: 25.37417,
      state: "Santorini",
      country: "Greece",
      level: "Advanced",
      obstacles: ["Parallel Walls", "High Wall"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644d50f1a698ca5c780559e1_Santorini.webp"
    },
    {
      location: "The Canary Wharf State",
      address: "Canary Wharf, London E14 5AB, United Kingdom",
      category: "Meeting Point",
      latitude: 51.503085,
      longitude: -0.020313,
      state: "Canary Wharf",
      country: "United Kingdom",
      level: "Advanced",
      obstacles: ["High Wall", "Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644d50fb1c91162ca23e1e38_Canary%20Wharf%20State.webp"
    },
    {
      location: "The National Mall",
      address: "Washington, DC, Estados Unidos",
      category: "Meeting Point",
      latitude: 38.887480967279124,
      longitude: -77.0362110129293,
      state: "Washington",
      country: "United States",
      level: "Intermediate",
      obstacles: ["Stairs"],
      image:
        "https://uploads-ssl.webflow.com/64387ae1cbdf317b8055dc4f/644d5101a527d5c86109d85b_National%20Mall.webp"
    }
  ];
  
  console.log("Spots Loaded");
  