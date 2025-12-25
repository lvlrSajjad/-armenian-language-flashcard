import type {Deck, Category} from '../types';

import {level0Data} from "./level-0.ts";
import {level1Data} from "./level-1.ts";
import {level2Data} from "./level-2.ts";
import {level3Data} from "./level-3.ts";
import {level4Data} from "./level-4.ts";
import {level5Data} from "./level-5.ts";
import {level6Data} from "./level-6.ts";
import {level7Data} from "./level-7.ts";
import {level8Data} from "./level-8.ts";
import {level9Data} from "./level-9.ts";
import {level10AData} from "./level-10-a.ts";
import {level10BData} from "./level-10-b.ts";
import {level10CData} from "./level-10-c.ts";
import {level10DData} from "./level-10-d.ts";
import {level11AData} from "./level-11-a.ts";
import {level11BData} from "./level-11-b.ts";
import {level11CData} from "./level-11-c.ts";
import {level12AData} from "./level-12-a.ts";
import {level12BData} from "./level-12-b.ts";
import {level12CData} from "./level-12-c.ts";
import {level13Data} from "./level-13.ts";
import {level14Data} from "./level-14.ts";
import {level15Data} from "./level-15.ts";
import {level16Data} from "./level-16.ts";
import {level17Data} from "./level-17.ts";
import {level18Data} from "./level-18.ts";
import {level19Data} from "./level-19.ts";
import {level19AdvancedTimeData} from "./level-19-advanced-time.ts";
import {level20Data} from "./level-20.ts";
import {level20DatesOrdinalsData} from "./level-20-dates-ordinals.ts";
import {level21Data} from "./level-21.ts";
import {level22Data} from "./level-22.ts";
import {humanFaceAndBodyData} from "./human-face-and-body.ts";
import {commonAdjectivesData} from "./50-common-adjectives.ts";
import {commonPlaces} from "./50-common-places.ts";

export const essentialDecks: Deck[] = [
    {
        id: "level0-alphabet",
        name: "🔤Armenian Alphabet",
        description: "Start from the very beginning! Learn the Armenian letters",
        words: level0Data,
    },
    {
        id: "level1-numbers",
        name: "🔢Numbers",
        description: "Count in Armenian - from zero to thousands",
        words: level1Data
    },
    {
        id: "level7-colors",
        name: "🎨Colors",
        description: "Learn the full spectrum of colors in Armenian",
        words: level7Data
    },
    {
        id: "level8-question-words",
        name: "❓Question Words",
        description: "Essential question words to ask anything in Armenian",
        words: level8Data
    },
    {
        id: "level17-days-months",
        name: "📅 Days of the Week & Months",
        description: "Learn all weekdays, months, and time-related vocabulary",
        words: level17Data
    },
    {
        id: "level3-verbs",
        name: "🏃‍♂️Most Used Verbs (Present Tense)",
        description: "Master the most common Armenian verbs in present tense",
        words: level3Data
    },
    {
        id: "level4-jobs",
        name: "💼50 Most Used Jobs",
        description: "Common professions and occupations in Armenian",
        words: level4Data
    },
    {
        id: "50-common-adjectives",
        name: "50 Most Used Adjectives",
        description: "Descriptive words to enhance your Armenian vocabulary",
        words: commonAdjectivesData
    },
    {
        id: "level5-everyday-objects",
        name: "🏠50 Most Used Everyday Objects",
        description: "Essential items you use and see daily",
        words: level5Data
    },
    {
        id: "50-common-places",
        name: "50 Most Used Places",
        description: "Common locations and places in Armenian",
        words: commonPlaces
    },
    {
        id: "level2-bossfight",
        name: "Common Words",
        description: "Learn Basic Armenian Words!",
        words: level2Data,
    },
    {
        id: "human-face-and-body-parts",
        name: "Human Face and Body Parts",
        description: "Learn essential vocabulary for human face and body parts",
        words: humanFaceAndBodyData,
    },
    {
        id: "level16-imperatives",
        name: "👉Basic Imperatives - Commands",
        description: "Learn how to give commands and make requests in Armenian (simple present tense)",
        words: level16Data
    },
]

export const grammarDecks: Deck[] = [
    {
        id: "level9-question-examples",
        name: "💭 Level 9: Question Examples",
        description: "Practice question words with real-life examples",
        words: level9Data
    },
    {
        id: "level10a-grammar-to-be",
        name: "📖 Level 10A: Grammar - 'To Be' Conjugations",
        description: "Master 'to be' in positive and negative forms with all pronouns",
        words: level10AData
    },
    {
        id: "level10b-grammar-possessives",
        name: "📖 Level 10B: Grammar - Possessive Pronouns",
        description: "Master my, your, his/her, our, and their with practice",
        words: level10BData
    },
    {
        id: "level10c-grammar-whose",
        name: "📖 Level 10C: Grammar - Whose/Whom (ում)",
        description: "Master asking and answering 'whose' questions in Armenian",
        words: level10CData
    },
    {
        id: "level10d-advanced-posessives",
        name: "📖 Level 10D: Grammar - Advanced Posessives",
        description: "Master asking and answering 'whose' questions in Armenian",
        words: level10DData
    },

    {
        id: "level12a-plurals-consonants",
        name: "🔢 Level 12A: Plurals - Consonant Endings (-եր)",
        description: "Practice adding -եր to words ending with consonants",
        words: level12AData
    },
    {
        id: "level12b-plurals-vowels",
        name: "🔢 Level 12B: Plurals - Vowel Endings (-ներ)",
        description: "Practice adding -ներ to words ending with vowels",
        words: level12BData
    },
    {
        id: "level12c-plurals-special",
        name: "🔢 Level 12C: Plurals - Special Cases & Practice",
        description: "Master classical -ն words, modern -ն words, and irregular plurals",
        words: level12CData
    },
    {
        id: "level11a-prepositions-basics",
        name: "📍Prepositions - Basic Location Words",
        description: "Learn core Armenian prepositions and 'in' (մեջ) with -ում ending",
        words: level11AData
    },
    {
        id: "level11b-prepositions-spatial",
        name: "📍Prepositions - Spatial Relations",
        description: "Master on, under, near, behind, and in front of with examples",
        words: level11BData
    },
    {
        id: "level11c-prepositions-relations",
        name: "📍Prepositions - With, Without & Until",
        description: "Practice between, above, below, with, without, and until expressions",
        words: level11CData
    },
    {
        id: "level21-definite-articles",
        name: "📌Definite Articles - The (ը/ն)",
        description: "Master using ը and ն to say 'the' in Armenian with practical examples",
        words: level21Data,
    },

    {
        id: "level22-definite-articles-quiz",
        name: "🎯Definite Articles - Practice Quiz",
        description: "Test yourself! Choose the correct definite article (ը or ն) for each sentence",
        words: level22Data,
    },
    {
        id: "level20-how-much",
        name: "❓How Much/Many - Քանի (Qani)",
        description: "Learn to ask about age and quantities using Քանի with all pronouns",
        words: level20Data,
    },

]

export const timeAndDateDecks: Deck[] = [
    {
        id: "level17-days-months",
        name: "📅 Level 17: Days of the Week & Months",
        description: "Learn all weekdays, months, and time-related vocabulary",
        words: level17Data
    },
    {
        id: "level18-telling-time",
        name: "🕐 Level 18: Telling Time",
        description: "Master telling time, times of day, and time expressions in Armenian",
        words: level18Data,
    },
    {
        id: "level19-advanced-time",
        name: "⏰ Level 19: Advanced Time - Past & Before",
        description: "Master 'անց' (past) and 'պակաս' (before) patterns, plus the difference between 'ն է' and 'ին'",
        words: level19AdvancedTimeData,
    },
    {
        id: "level20-dates-ordinals",
        name: "📆 Level 20: Dates & Ordinal Numbers",
        description: "Learn to express dates, ask 'երբ' (when) questions, and use ordinal numbers with months",
        words: level20DatesOrdinalsData,
    },
]

export const decks: Deck[] = [
    {
        id: "level6-mixed-vocabulary",
        name: "📝 Level 6: Mixed Vocabulary",
        description: "Additional useful words for everyday conversation",
        words: level6Data
    },

    {
        id: "level13-story-vocabulary",
        name: "📖 Level 13: Story Vocabulary - The Rabbit & The Cloud",
        description: "Learn vocabulary from an Armenian children's story",
        words: level13Data
    },
    {
        id: "level14-daily-actions",
        name: "🔑 Level 14: Daily Actions - The Lost Key",
        description: "Learn common verbs and vocabulary for everyday situations",
        words: level14Data
    },
    {
        id: "level15-coffee-ordering",
        name: "☕ Level 15: Coffee Shop - Ordering at Victoria's Café",
        description: "Master coffee ordering vocabulary and full conversation phrases",
        words: level15Data
    },

    {
        id: "level19-advanced-vocabulary",
        name: "🌟 Level 19: Advanced Vocabulary & Expressions",
        description: "Expand your Armenian vocabulary with advanced words and phrases",
        words: level19Data,
    },

];

export const categories: Category[] = [
    {
        id: "essential",
        name: "🔥 Essential",
        description: "Alphabet, Numbers, and Basic Words",
        decks: essentialDecks,
    },
    {
        id: "grammar",
        name: "General Grammar",
        description: "Master Armenian grammar concepts and rules",
        decks: grammarDecks,
    },
    {
        id: "date-and-time",
        name: "Date & Time",
        description: "Talking about date and time in Armenian",
        decks: timeAndDateDecks,
    },
    {
        id: "all-levels",
        name: "📚 All Levels",
        description: "Complete Armenian learning path from alphabet to advanced grammar",
        decks: decks,
    }
];
