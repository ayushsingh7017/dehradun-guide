export type Dish = { n: string; dv: string; g: string; bg: string; fg: string; d: string; tags: string[]; tr: string };

export const FOOD: Dish[] = [
    { n: "Kafuli", dv: "कफुली", g: "क", bg: "#134a37", fg: "#f1fff8", d: "A thick green gravy of spinach and fenugreek leaves, cooked slowly in an iron pot. Eaten with rice and best in winter.", tags: ["Earthy", "Green", "Winter"], tr: "Garhwali thalis" },
    { n: "Chainsoo", dv: "चैंसू", g: "च", bg: "#101a45", fg: "#eef2ff", d: "A dark gravy of roasted and ground black gram. It has a smoky, nutty taste and goes well with steamed rice.", tags: ["Smoky", "Nutty", "Protein"], tr: "Garhwali thalis" },
    { n: "Aloo ke gutke", dv: "आलू के गुटके", g: "आ", bg: "#ffffff", fg: "#1a1205", d: "Boiled potatoes tossed with whole spices and jakhya seeds. A common side dish and road snack.", tags: ["Spicy", "Crunchy", "Snack"], tr: "Roadside stalls" },
    { n: "Jhangora kheer", dv: "झंगोरे की खीर", g: "झ", bg: "#d6336c", fg: "#ffffff", d: "A pudding of barnyard millet, milk and sugar. Lighter than rice kheer and a traditional sweet of the hills.", tags: ["Sweet", "Millet", "Dessert"], tr: "Festival menus" },
    { n: "Mandua roti", dv: "मंडुए की रोटी", g: "म", bg: "#3b2f2a", fg: "#fdf1e0", d: "Dark flatbread made from finger millet, served with ghee or white butter. Warm and filling on cold days.", tags: ["Earthy", "Millet", "Winter"], tr: "Hill restaurants" },
    { n: "Momos and thukpa", dv: "मोमो और थुकपा", g: "म", bg: "#e8562f", fg: "#ffffff", d: "Tibetan families live around Mindrolling and Clement Town. Look for steamed momos and hot noodle soup.", tags: ["Steamed", "Hot soup", "Tibetan"], tr: "Clement Town" },
    { n: "Paltan chaat", dv: "पल्टन बाज़ार", g: "प", bg: "#1f6f7a", fg: "#ffffff", d: "Tikki, golgappe, kachori and fresh jalebi near the Clock Tower. Go in the evening when the lanes are busiest.", tags: ["Tangy", "Crispy", "Evening"], tr: "Paltan Bazaar" },
    { n: "Litchi and basmati", dv: "लीची और बासमती", g: "ल", bg: "#f9d6e0", fg: "#5a0f2c", d: "Litchi arrives in May and June. Dehradun basmati rice is sold in the bazaar and makes a good gift to take home.", tags: ["Seasonal", "Fruit", "Gift"], tr: "Markets, May to June" }
  ];
