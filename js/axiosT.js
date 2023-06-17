import { createCards, search } from "./cards.js";

// ?imp LINK
// https://hp-api.onrender.com/

const SHOP_URL = `https://hp-api.onrender.com/api/characters`;

export const getAxiosData = async (cardsParent = null) => {
  try {
    const { data } = await axios(SHOP_URL);
    createCards(data, cardsParent);
    search(data,cardsParent)
  } catch (err) {
    console.error(err.message);
  }
};