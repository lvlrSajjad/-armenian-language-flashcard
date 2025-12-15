import type {Deck} from '../types';

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

export const decks: Deck[] = [
    {
        id: "level0-alphabet",
        name: "🔤 Level 0: Armenian Alphabet",
        description: "Start from the very beginning! Learn the Armenian letters",
        words: level0Data,
    },
    {
        id: "level1-numbers",
        name: "🔢 Level 1: Numbers",
        description: "Count in Armenian - from zero to thousands",
        words: level1Data
    },
    {
        id: "level2-bossfight",
        name: "Level 2: Basic Words",
        description: "Learn Basic Armenian Words!",
        words: level2Data,
    },
    {
        id: "level3-verbs",
        name: "🏃‍♂️ Level 3: 50 Most Used Verbs (Present Tense)",
        description: "Master the most common Armenian verbs in present tense",
        words: level3Data
    },
    {
        id: "level4-jobs",
        name: "💼 Level 4: 50 Most Used Jobs",
        description: "Common professions and occupations in Armenian",
        words: level4Data
    },
    {
        id: "level5-everyday-objects",
        name: "🏠 Level 5: 50 Most Used Everyday Objects",
        description: "Essential items you use and see daily",
        words: level5Data
    },
    {
        id: "level6-mixed-vocabulary",
        name: "📝 Level 6: Mixed Vocabulary",
        description: "Additional useful words for everyday conversation",
        words: level6Data
    },
    {
        id: "level7-colors",
        name: "🎨 Level 7: Colors",
        description: "Learn the full spectrum of colors in Armenian",
        words: level7Data
    },
    {
        id: "level8-question-words",
        name: "❓ Level 8: Question Words",
        description: "Essential question words to ask anything in Armenian",
        words: level8Data
    },
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
        id: "level11a-prepositions-basics",
        name: "📍 Level 11A: Prepositions - Basic Location Words",
        description: "Learn core Armenian prepositions and 'in' (մեջ) with -ում ending",
        words: level11AData
    },
    {
        id: "level11b-prepositions-spatial",
        name: "📍 Level 11B: Prepositions - Spatial Relations",
        description: "Master on, under, near, behind, and in front of with examples",
        words: level11BData
    },
    {
        id: "level11c-prepositions-relations",
        name: "📍 Level 11C: Prepositions - With, Without & Until",
        description: "Practice between, above, below, with, without, and until expressions",
        words: level11CData
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
        id: "level16-imperatives",
        name: "👉 Level 16: Basic Imperatives - Commands",
        description: "Learn how to give commands and make requests in Armenian (simple present tense)",
        words: level16Data
    }
];
