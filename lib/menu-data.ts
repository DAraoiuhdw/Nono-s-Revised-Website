export interface MenuItem {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  bestSeller?: boolean;
}

export const categories = [
  "All","Best Sellers","Breakfast","Starters","Salads","Fried Chicken","Mains","Pasta","Pizza","Sandwiches","Kids","Afternoon",
] as const;

export type Category = (typeof categories)[number];

export const menuItems: MenuItem[] = [
  // BREAKFAST
  { name: "Waffles Benedict", category: "Breakfast", description: "Crispy Belgian waffles topped with poached eggs, Canadian bacon, and velvety hollandaise sauce.", price: 465, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80", bestSeller: true },
  { name: "Bacon Jam & Cheese Waffle", category: "Breakfast", description: "Golden waffles layered with house-made bacon jam and melted artisan cheese.", price: 525, image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=600&q=80" },
  { name: "Tinapa Rice", category: "Breakfast", description: "Smoky tinapa flakes tossed with garlic rice, topped with a sunny-side egg and tomato salsa.", price: 465, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80" },
  { name: "Steak & Eggs", category: "Breakfast", description: "Premium grilled steak served with eggs cooked your way and crispy hash browns.", price: 1195, image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80", bestSeller: true },
  { name: "Arroz Caldo with Bone Marrow", category: "Breakfast", description: "Rich Filipino rice porridge infused with ginger and topped with roasted bone marrow.", price: 495, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80" },
  { name: "Beef Tapa", category: "Breakfast", description: "Tender cured beef slices served with garlic rice, fried egg, and pickled atchara.", price: 585, image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&q=80" },
  { name: "Longganisa Recado", category: "Breakfast", description: "Sweet and savory Recado-style longganisa paired with garlic rice and a fried egg.", price: 485, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80" },
  { name: "Bacon & Eggs", category: "Breakfast", description: "Thick-cut smoked bacon with farm-fresh eggs, served with toasted sourdough and butter.", price: 375, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80" },
  { name: "Avocado & Egg Toast", category: "Breakfast", description: "Creamy smashed avocado on sourdough with soft-poached eggs and chili flakes.", price: 345, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80" },
  { name: "Nono's Homestyle Waffles", category: "Breakfast", description: "Fluffy homestyle waffles dusted with powdered sugar and served with maple syrup and butter.", price: 395, image: "https://images.unsplash.com/photo-1459789034005-ba29c5783491?w=600&q=80" },
  // STARTERS
  { name: "Fried Truffle Cheese Wontons", category: "Starters", description: "Crispy wontons filled with truffle-infused cream cheese, served with sweet chili dip.", price: 365, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80" },
  { name: "Grilled Cheese Panini", category: "Starters", description: "Three-cheese panini pressed on sourdough with tomato soup dipping sauce.", price: 345, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80" },
  { name: "Roasted Squash Soup", category: "Starters", description: "Velvety roasted squash soup finished with cream, toasted pumpkin seeds, and herbs.", price: 345, image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80" },
  { name: "Clam Chowder", category: "Starters", description: "New England-style creamy clam chowder loaded with tender clams and potatoes.", price: 385, image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=600&q=80" },
  { name: "French Onion Soup", category: "Starters", description: "Caramelized onion soup gratinéed with Gruyère cheese and crusty baguette croutons.", price: 385, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80" },
  { name: "Chicken Lettuce Wrap", category: "Starters", description: "Savory minced chicken in crisp lettuce cups with water chestnuts and hoisin glaze.", price: 345, image: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=600&q=80" },
  { name: "Salmon Croquettes", category: "Starters", description: "Pan-fried salmon croquettes with herb aioli and a side of mixed greens.", price: 345, image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6571?w=600&q=80" },
  { name: "Parmesan Truffle Fries", category: "Starters", description: "Hand-cut fries tossed in truffle oil, grated Parmesan, and fresh parsley.", price: 345, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", bestSeller: true },
  { name: "Onion Strings", category: "Starters", description: "Thinly sliced onions battered and fried to a golden crisp, served with spicy mayo.", price: 295, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80" },
  { name: "Bouillabaisse", category: "Starters", description: "Provençal-style seafood stew with fish, mussels, and shrimp in a saffron broth.", price: 395, image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80" },
  { name: "Mussels Beurre Blanc", category: "Starters", description: "Plump mussels steamed in white wine beurre blanc with crusty bread for dipping.", price: 465, image: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=600&q=80" },
  // SALADS
  { name: "Caesar Salad with Chicken Bites", category: "Salads", description: "Crisp romaine with house-made Caesar dressing, croutons, Parmesan, and golden chicken bites.", price: 585, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80" },
  { name: "Honey Barbecue Chicken Salad", category: "Salads", description: "Mixed greens topped with honey-barbecue glazed chicken, corn, black beans, and ranch.", price: 595, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  { name: "Oriental Shrimp Salad", category: "Salads", description: "Grilled shrimp over Asian greens with sesame-ginger dressing and crispy wonton strips.", price: 465, image: "https://images.unsplash.com/photo-1543339308-d595c4b0c3b3?w=600&q=80" },
  { name: "Nono's Salad", category: "Salads", description: "Our signature salad with mixed greens, dried cranberries, candied walnuts, and citrus vinaigrette.", price: 465, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80" },
  // FRIED CHICKEN
  { name: "Nono's Homestyle Fried Chicken", category: "Fried Chicken", description: "Our signature crispy fried chicken, seasoned with a treasured family blend of herbs and spices.", price: 555, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", bestSeller: true },
  { name: "Chicken Bites", category: "Fried Chicken", description: "Bite-sized pieces of our famous fried chicken, perfectly crispy and golden.", price: 395, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80" },
  { name: "Crispy Chicken Sandwich", category: "Fried Chicken", description: "Crunchy fried chicken breast on a brioche bun with pickles and spicy mayo.", price: 545, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80" },
  { name: "Crispy Chicken Sliders", category: "Fried Chicken", description: "Three mini fried chicken sliders with coleslaw and house sauce on soft buns.", price: 595, image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=600&q=80" },
  { name: "Nono's Homestyle Fried Chicken & Waffles", category: "Fried Chicken", description: "Our famous fried chicken paired with fluffy waffles, drizzled with maple butter.", price: 555, image: "https://images.unsplash.com/photo-1504308805006-0f7a5f1f0f71?w=600&q=80" },
  // MAINS
  { name: "Nono's Pork Belly Sisig", category: "Mains", description: "Sizzling crispy pork belly sisig with egg, calamansi, and chili on a hot plate.", price: 545, image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=600&q=80", bestSeller: true },
  { name: "Pinoy-style Beef Steak", category: "Mains", description: "Tender beef steak braised in soy-calamansi sauce with caramelized onions.", price: 795, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
  { name: "Grilled Pork Chop", category: "Mains", description: "Thick-cut pork chop grilled to perfection with herb butter and seasonal vegetables.", price: 745, image: "https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=600&q=80" },
  { name: "Loco Moco", category: "Mains", description: "Hawaiian-inspired rice bowl topped with a beef patty, fried egg, and rich gravy.", price: 445, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
  { name: "Satay Pork Skewers", category: "Mains", description: "Grilled pork skewers marinated in lemongrass and spices with peanut dipping sauce.", price: 495, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" },
  { name: "Truffle Roast Beef", category: "Mains", description: "Slow-roasted prime beef infused with black truffle, served with rich truffle jus.", price: 1195, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", bestSeller: true },
  { name: "Roasted Beef Belly", category: "Mains", description: "Tender slow-roasted beef belly with a caramelized crust and red wine reduction.", price: 995, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
  { name: "Baby Back Ribs", category: "Mains", description: "Fall-off-the-bone tender ribs glazed with our house-made smoky barbecue sauce.", price: 895, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80", bestSeller: true },
  { name: "Miso-Glazed Salmon", category: "Mains", description: "Fresh salmon fillet glazed with sweet white miso and broiled until caramelized.", price: 595, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
  { name: "Salmon with Hollandaise", category: "Mains", description: "Pan-seared salmon with golden crust, draped in hollandaise with asparagus.", price: 795, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80", bestSeller: true },
  { name: "Garlic Steak with Mushrooms", category: "Mains", description: "Prime cut steak seared with garlic butter and sautéed wild mushrooms.", price: 1295, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
  { name: "Tuna Belly Salpicao", category: "Mains", description: "Cubed tuna belly sautéed in olive oil with garlic, chili, and fresh herbs.", price: 595, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { name: "Fish Piccata", category: "Mains", description: "Lightly breaded fish fillet in a bright lemon-caper butter sauce with capers.", price: 695, image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600&q=80" },
  { name: "Parmesan-Crusted Fish", category: "Mains", description: "Golden Parmesan-crusted fish fillet served with tartar sauce and lemon wedge.", price: 745, image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=80" },
  // PASTA
  { name: "Truffle Cream", category: "Pasta", description: "Al dente pasta tossed in a luxurious black truffle cream sauce with Parmesan.", price: 445, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80" },
  { name: "Mac N Cheese", category: "Pasta", description: "Classic baked macaroni and cheese with a crispy breadcrumb and Gruyère crust.", price: 555, image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&q=80", bestSeller: true },
  { name: "My Mom's Baked Spaghetti", category: "Pasta", description: "Homestyle baked spaghetti with a rich meat sauce, topped with melted mozzarella.", price: 495, image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=600&q=80", bestSeller: true },
  { name: "Chicken Parmigiana", category: "Pasta", description: "Breaded chicken cutlet topped with marinara and melted mozzarella over spaghetti.", price: 585, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80" },
  { name: "Pesto Cream with Grilled Chicken", category: "Pasta", description: "Creamy basil pesto pasta with juicy grilled chicken breast and sun-dried tomatoes.", price: 595, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80" },
  { name: "Classic Bolognese", category: "Pasta", description: "Slow-simmered beef and pork ragù over al dente spaghetti with fresh Parmesan.", price: 355, image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=600&q=80" },
  { name: "Vodka Cream", category: "Pasta", description: "Penne in a silky vodka-infused tomato cream sauce with a hint of chili.", price: 695, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80" },
  { name: "Tomato & Basil Spaghetti", category: "Pasta", description: "Simple and classic spaghetti with San Marzano tomato sauce and fresh basil.", price: 355, image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&q=80" },
  { name: "Salmon and Lemon Cream", category: "Pasta", description: "Flaked salmon in a bright lemon cream sauce with dill and capers over linguine.", price: 655, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80" },
  { name: "Shrimp El Diablo", category: "Pasta", description: "Spicy sautéed shrimp in a fiery tomato-chili sauce over spaghetti.", price: 495, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80" },
  { name: "Mussels Aglio e Olio", category: "Pasta", description: "Plump mussels tossed with spaghetti in garlic-infused olive oil and chili flakes.", price: 595, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80" },
  // PIZZA
  { name: "Four Cheese", category: "Pizza", description: "Wood-fired pizza with mozzarella, Gorgonzola, fontina, and Parmesan on a thin crust.", price: 595, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
  { name: "Nono's Pizza", category: "Pizza", description: "Our signature pizza with Italian sausage, roasted peppers, onions, and artisanal cheeses.", price: 645, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", bestSeller: true },
  { name: "Pepperoni", category: "Pizza", description: "Classic pepperoni pizza with premium sliced pepperoni and stretchy mozzarella.", price: 595, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80" },
  { name: "Margherita", category: "Pizza", description: "Traditional Margherita with fresh mozzarella, San Marzano tomatoes, and basil.", price: 545, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80" },
  { name: "Sicilian", category: "Pizza", description: "Thick-crust Sicilian-style pizza with anchovies, olives, capers, and tomato sauce.", price: 695, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80" },
  { name: "Hawaiian", category: "Pizza", description: "Ham and caramelized pineapple on a mozzarella base with a hint of jalapeño.", price: 625, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80" },
  // SANDWICHES
  { name: "Nono's Burger", category: "Sandwiches", description: "House-ground beef patty with lettuce, tomato, special sauce on a toasted brioche bun.", price: 465, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", bestSeller: true },
  { name: "Burger Sliders", category: "Sandwiches", description: "Three mini burgers with cheddar, caramelized onions, and pickles on soft buns.", price: 625, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80" },
  { name: "Steak Sliders", category: "Sandwiches", description: "Three mini steak sandwiches with horseradish cream and arugula on brioche.", price: 795, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80" },
  { name: "Crispy Chicken Sandwich", category: "Sandwiches", description: "Crunchy fried chicken breast on brioche with coleslaw and honey mustard.", price: 545, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80" },
  // KIDS
  { name: "Kiddie Mac N Cheese", category: "Kids", description: "Creamy macaroni and cheese made with a gentle three-cheese blend kids love.", price: 375, image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&q=80" },
  { name: "Classic Bolognese", category: "Kids", description: "Kid-friendly portion of our slow-simmered meat sauce over soft spaghetti.", price: 245, image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=600&q=80" },
  { name: "Kiddie Four Cheese Pizza", category: "Kids", description: "A smaller four-cheese pizza with a crispy thin crust, perfect for little ones.", price: 345, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
  { name: "Kiddie Pepperoni Pizza", category: "Kids", description: "Mini pepperoni pizza with stretchy mozzarella on a kid-sized thin crust.", price: 345, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80" },
  { name: "Fried Chicken Nibblers", category: "Kids", description: "Bite-sized crispy chicken pieces served with ketchup and a side of fries.", price: 295, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80" },
  { name: "Butter & Parmesan Pasta", category: "Kids", description: "Simple buttered pasta tossed with Parmesan cheese — a kid-approved favorite.", price: 245, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80" },
  // AFTERNOON
  { name: "Grilled Cheese Panini", category: "Afternoon", description: "Warm three-cheese panini on sourdough, perfect with a cup of coffee or tea.", price: 345, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80" },
  { name: "Parmesan Ensaymada with Hot Chocolate", category: "Afternoon", description: "Fluffy Parmesan-topped ensaymada paired with rich Filipino-style hot chocolate.", price: 245, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80" },
  { name: "Arroz Caldo with Bone Marrow", category: "Afternoon", description: "Comforting ginger rice porridge with rich roasted bone marrow on top.", price: 495, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80" },
  { name: "Bacon Jam & Cheese Waffle", category: "Afternoon", description: "Golden waffles with savory bacon jam and melted cheese — sweet meets savory.", price: 525, image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=600&q=80" },
];

export const showcaseDishes = [
  { name: "Nono's Homestyle Fried Chicken", category: "Fried Chicken", description: "Our signature crispy fried chicken, prepared using a treasured family recipe passed down through generations. Golden, juicy, and perfectly seasoned with our secret blend of herbs and spices.", price: 555, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80" },
  { name: "Truffle Roast Beef", category: "Mains", description: "Slow-roasted prime beef infused with black truffle, served with a rich truffle jus and seasonal roasted vegetables. A luxurious centerpiece for any occasion.", price: 1195, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" },
  { name: "Baby Back Ribs", category: "Mains", description: "Fall-off-the-bone tender ribs glazed with our house-made smoky barbecue sauce. Slow-cooked for hours to achieve that perfect melt-in-your-mouth texture.", price: 895, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80" },
  { name: "Nono's Pizza", category: "Pizza", description: "Our signature wood-fired pizza topped with premium Italian sausage, roasted peppers, caramelized onions, and a blend of artisanal cheeses. A house favorite since day one.", price: 645, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
  { name: "Waffles Benedict", category: "Breakfast", description: "Crispy Belgian waffles crowned with perfectly poached eggs, Canadian bacon, and velvety hollandaise sauce. A decadent twist on the breakfast classic.", price: 465, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80" },
  { name: "Salmon with Hollandaise", category: "Mains", description: "Fresh Atlantic salmon fillet, pan-seared to perfection with a golden crust, draped in classic hollandaise and served with asparagus and herb-roasted potatoes.", price: 795, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80" },
];
