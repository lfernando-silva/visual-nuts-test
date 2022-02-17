const data = [{
        country: "US",
        languages: ["en"]
    },
    {
        country: "BE",
        languages: ["nl", "fr", "de"]
    },
    {
        country: "NL",
        languages: ["nl", "fy"]
    },
    {
        country: "DE",
        languages: ["de"]
    },
    {
        country: "ES",
        languages: ["es"]
    }
]

// returns the number of countries in the world
function countCountries() {
    const countries = data.map(d => d.country)
    return [...new Set(countries)].length
}

// finds the country with the most official languages, where they officially speak German (de).
// to find the country with the highest number of official languages.
function getCountryByMustOfficialLanguages(someLanguage) {
    // Get all countries that "someLanguage" is spoken. If no "someLanguage" is passed, then returns the most official languages country at all
    const countries = someLanguage ? data.filter(d => d.languages.indexOf(someLanguage) !== -1) : data;
    const languageCounts = countries.map(e => e.languages.length);
    return countries[languageCounts.indexOf(Math.max(...languageCounts))]
}

// that counts all the official languages spoken in the listed countries.
function countLanguages() {
    return data.map(d => ({
        ...d,
        languageCount: d.languages.length
    }))
}

// to find the most common official language(s), of all countries.
function getMostCommonOficialLanguages() {
    const languagesCount = {};

    data.forEach(d => {
        d.languages.forEach(language => {
            if (!languagesCount[language]) {
                languagesCount[language] = 1
            } else {
                languagesCount[language] += 1;
            }
        })
    })

    const languageTotals = Object.keys(languagesCount).map(l => ({
        language: l,
        count: languagesCount[l]
    }));
    const max = Math.max(...languageTotals.map(e => e.count));

    return languageTotals.filter(l => l.count === max);
}

/*
Write a function in Javascript that:
- returns the number of countries in the world
- finds the country with the most official languages, where they officially speak German (de).
- that counts all the official languages spoken in the listed countries.
- to find the country with the highest number of official languages.
- to find the most common official language(s), of all countries.

*/

// The asked function
function getSummary() {
    return {
        numberOfCountries: countCountries(),
        countryWithMostOfficialLanguagesDE: getCountryByMustOfficialLanguages('de'),
        countryLanguagesCount: countLanguages(),
        countryWithMostOficialLanguages: getCountryByMustOfficialLanguages(),
        mostCommonLanguages: getMostCommonOficialLanguages()
    }
}
