const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח הפרסי — מתכונים כשרים',
                description: 'המטבח הפרסי — 50 מתכונים פרסיים אותנטיים, כולם כשרים, בעברית.'
            },
            header: {
                logo: 'המטבח הפרסי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח הפרסי',
                subtitle: 'מתכונים כשרים מהמטבח היהודי-פרסי',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                'אורז ותהדיג': 'אורז ותהדיג',
                'חורשת ותבשילים': 'חורשת ותבשילים',
                'קבאב וגריל': 'קבאב וגריל',
                'מרקים, קוקו וגונדי': 'מרקים, קוקו וגונדי',
                'סלטים, חמוצים וקינוחים': 'סלטים, חמוצים וקינוחים'
            },
            difficulty: {
                'קל': 'קל',
                'בינוני': 'בינוני',
                'מאתגר': 'מאתגר'
            },
            kosher: {
                'בשרי': 'בשרי',
                'חלבי': 'חלבי',
                'פרווה': 'פרווה'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                kosher: 'כשרות',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח הפרסי — מתכונים פרסיים כשרים, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Persian Kitchen — Kosher Recipes',
                description: 'Persian Kitchen — 50 authentic Persian recipes, all kosher, in English.'
            },
            header: {
                logo: 'Persian Kitchen',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Persian Kitchen',
                subtitle: 'Kosher recipes from the Persian-Jewish kitchen',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                'אורז ותהדיג': 'Rice & Tahdig',
                'חורשת ותבשילים': 'Khoresht & Stews',
                'קבאב וגריל': 'Kabab & Grill',
                'מרקים, קוקו וגונדי': 'Soups, Kuku & Gondi',
                'סלטים, חמוצים וקינוחים': 'Salads, Pickles & Sweets',
                'Rice & Tahdig': 'Rice & Tahdig',
                'Khoresht & Stews': 'Khoresht & Stews',
                'Kabab & Grill': 'Kabab & Grill',
                'Soups, Kuku & Gondi': 'Soups, Kuku & Gondi',
                'Salads, Pickles & Sweets': 'Salads, Pickles & Sweets'
            },
            difficulty: {
                'קל': 'Easy',
                'בינוני': 'Medium',
                'מאתגר': 'Hard',
                'Easy': 'Easy',
                'Medium': 'Medium',
                'Hard': 'Hard'
            },
            kosher: {
                'בשרי': 'Meat',
                'חלבי': 'Dairy',
                'פרווה': 'Parve',
                'Meat': 'Meat',
                'Dairy': 'Dairy',
                'Parve': 'Parve'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                kosher: 'Kosher',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Persian Kitchen — Authentic kosher Persian recipes',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
