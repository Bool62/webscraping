const axios = require("axios");
const cheerio = require("cheerio");

async function scraper(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const titre = $("title").text();
    console.log("Titre de la page :", titre);

    const prixEntier = $("span.a-price-whole").first().text().trim();
    const prixFraction = $("span.a-price-fraction").first().text().trim();
    const symboleMonetaire = $("span.a-price-symbol").first().text().trim();

    const prixComplet = `${prixEntier}${prixFraction} ${symboleMonetaire}`;
    console.log("Prix complet :", prixComplet);
  } catch (error) {
    console.error("Erreur lors de la récupération de la page :", error);
  }
}

module.exports = scraper;
