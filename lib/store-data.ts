export interface Store {
  name: string;
  address: string;
  hours: string[];
  phone: string;
  features?: string[];
}

export const stores: Store[] = [
  { name: "UP Town Center", address: "Ground Level, Phase 1B, UP Town Center, Quezon City", hours: ["Mon-Sun", "7am-10pm"], phone: "09454336510", features: ["Mall Parking"] },
  { name: "The Podium", address: "2nd Level, The Podium Mall, Mandaluyong City", hours: ["11am-10pm (Mon-Fri)", "10am-10pm (Sat-Sun)"], phone: "09564125799", features: ["Mall Parking"] },
  { name: "Three Central Mall", address: "Ground Level, Three Central Mall, Valero St., Salcedo Village, Makati City", hours: ["8am-9pm (Mon-Fri)", "CLOSED (Sat-Sun)"], phone: "09543492489" },
  { name: "Festival Mall", address: "Upper Ground Floor, Expansion Wing, Festival Mall, Alabang, Muntinlupa City", hours: ["Mon-Sun", "6am-10pm"], phone: "09695355124", features: ["Mall Parking"] },
  { name: "Ayala Malls Solenad", address: "Ground Level, Solenad 3, Building E, Nuvali, Sta. Rosa, Laguna", hours: ["10am-9pm (Mon-Thurs)", "8am-9pm (Fri-Sun)"], phone: "09054876764", features: ["Mall Parking"] },
  { name: "Ayala Malls Manila Bay", address: "Ground Level, Phase 1, Abueva Entrance, Ayala Malls Manila Bay, Parañaque City", hours: ["11am-9pm (Mon-Fri)", "10am-9pm (Sat-Sun)"], phone: "09178147004", features: ["Function Room", "Mall Parking"] },
  { name: "Power Plant Mall", address: "P1 Level, Power Plant Mall, Makati City", hours: ["11am-9pm (Mon-Thurs)", "11am-10pm (Fri)", "10am-10pm (Sat)", "10am-9pm (Sun)"], phone: "09156496912", features: ["Mall Parking"] },
  { name: "S Maison", address: "Ground Level, S Maison, Mall of Asia Complex, Pasay City", hours: ["11am-10pm (Mon-Fri)", "10am-10pm (Sat-Sun)"], phone: "09854742049", features: ["Mall Parking"] },
  { name: "Uptown Mall", address: "Ground Level, Uptown Mall, BGC, Taguig City", hours: ["Mon-Sun", "7am-11pm"], phone: "09565268835", features: ["Mall Parking"] },
  { name: "High Street South", address: "Ground Level, 26th St., High Street South Tower 1, BGC, Taguig City", hours: ["Mon-Sun", "6:30am-11pm"], phone: "09668849807", features: ["Function Room"] },
  { name: "KL Tower", address: "G/F KL Tower, Gamboa Street, Legazpi Village, Makati City", hours: ["Mon-Sun", "6:30am-10pm"], phone: "09606151685" },
  { name: "Okada Manila", address: "Upper Ground Level, Crystal Corridor, Pearl Wing, Okada Manila, Parañaque City", hours: ["Mon-Sun", "6:30am-12am"], phone: "09603232860", features: ["Function Room", "Hotel Parking"] },
  { name: "SM City Santa Rosa", address: "Ground Level, Expansion Wing, SM City Sta. Rosa, Santa Rosa, Laguna", hours: ["11am-9pm (Mon-Fri)", "10am-10pm (Sat)", "10am-9pm (Sun)"], phone: "09565812886", features: ["Mall Parking"] },
  { name: "SM City Fairview", address: "Ground Level, SM City Fairview, Quezon City", hours: ["11am-9pm (Mon-Fri)", "10am-9pm (Sat-Sun)"], phone: "09928759270", features: ["Mall Parking"] },
  { name: "SM City Grand Central", address: "Ground Level, SM City Grand Central, Caloocan City", hours: ["11am-9pm (Mon-Fri)", "10am-9pm (Sat-Sun)"], phone: "09567654703", features: ["Mall Parking"] },
  { name: "Gateway Mall 2", address: "Ground Level, Gateway Mall 2, Gen. Aguinaldo Ave., Cubao, Quezon City", hours: ["Mon-Sun", "9am-11pm"], phone: "09566918332", features: ["Mall Parking"] },
  { name: "Robinsons Antipolo", address: "Lower Ground Floor, Robinsons Place Antipolo, Antipolo, Rizal", hours: ["11am-10pm (Mon-Fri)", "10am-10pm (Sat-Sun)"], phone: "09156172910", features: ["Mall Parking"] },
  { name: "Ayala Malls Vermosa", address: "Ground Level, Ayala Malls Vermosa, Imus, Cavite", hours: ["10am-9pm (Mon-Fri)", "9am-10pm (Sat-Sun)"], phone: "09065134057", features: ["Mall Parking"] },
  { name: "The Outlets at Lipa", address: "Block H, Units F01, R01–R02, The Outlets at Lipa, LIMA Estate, Lipa, Batangas", hours: ["11am-9pm (Mon-Fri)", "10am-9pm (Sat-Sun)"], phone: "09993962960" },
  { name: "Arcovia City", address: "Arcovia Parade, Arcovia City, E. Rodriguez Jr. Avenue, Pasig City", hours: ["8am-10pm (Mon-Thurs)", "8am-11pm (Fri-Sun)"], phone: "09660647155", features: ["Function Room"] },
  { name: "Laus Group Complex", address: "Laus Group Complex, Jose Abad Santos Ave., San Fernando, Pampanga", hours: ["Mon-Sun", "7am-10pm"], phone: "09685274560", features: ["Function Room"] },
  { name: "Greenfield", address: "Greenfield Tower, Mayflower Street, Greenfield District, Mandaluyong City", hours: ["Mon-Sun", "7am-10pm"], phone: "09162969749" },
  { name: "SM City Bicutan", address: "Upper Ground Level, New Wing Building B, SM City Bicutan, Parañaque City", hours: ["Mon-Sun", "10am-10pm"], phone: "09687602807", features: ["Mall Parking"] },
  { name: "Robinsons Galleria", address: "2nd Level, Robinsons Galleria, Quezon City", hours: ["11am-10pm (Mon-Fri)", "10am-10pm (Sat-Sun)"], phone: "09619359394", features: ["Mall Parking"] },
  { name: "Opus Mall", address: "3rd Level, Opus Mall, Bridgetowne, Quezon City", hours: ["11am-10pm (Mon-Fri)", "10am-10pm (Sat-Sun)"], phone: "09394825017", features: ["Mall Parking"] },
  { name: "Ayala Malls Circuit", address: "Lower Ground Level, Circuit Lane, Ayala Malls Circuit, Makati City", hours: ["11am-9pm (Mon-Fri)", "10am-9pm (Sat-Sun)"], phone: "09279478161", features: ["Mall Parking"] },
  { name: "Ayala Malls Evo City", address: "Bldg. B, Ayala Malls Evo City, Centennial Road, Kawit, Cavite", hours: ["10am-9pm (Mon-Thurs)", "8am-9pm (Fri-Sun)"], phone: "09911736569", features: ["Function Room", "Mall Parking"] },
  { name: "Lucky Chinatown", address: "Lower Ground Level, Imperial Wing, Lucky Chinatown Mall", hours: ["9am-9pm (Mon-Fri)", "9am-10pm (Sat-Sun)"], phone: "09606288722", features: ["Mall Parking"] },
  { name: "Robinsons Malolos", address: "Level 1, Robinsons Malolos, MacArthur Hwy, Malolos, Bulacan", hours: ["11am-9pm (Mon-Thurs)", "11am-10pm (Fri)", "10am-10pm (Sat-Sun)"], phone: "09683238732", features: ["Mall Parking"] },
  { name: "Evia Lifestyle Center", address: "Ground Floor, Bldg. E, EVIA Lifestyle Center, Daang Hari Road, Las Piñas", hours: ["Mon-Sun", "10am-9pm"], phone: "09661962491", features: ["Mall Parking"] },
  { name: "NAIA Terminal 1", address: "West Transit Lounge Departure Area, IPT NAIA Terminal 1", hours: ["Mon-Sun", "7am-12am"], phone: "09682399494" },
];
