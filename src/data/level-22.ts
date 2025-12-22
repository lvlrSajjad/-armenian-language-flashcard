import type { Word } from '../types';

export const level22Data: Word[] = [

    // Type 1: Word ends in consonant, next word starts with consonant (use ը)
    {
        word: "Սեղան__ գեղեցիկ է",
        meaning: "The table is beautiful → ը (consonant + consonant)",
        pronunciation: "Seghanə geghetsik e"
    },
    {
        word: "Անտառ__ մեծ է",
        meaning: "The forest is big → ը (consonant + consonant)",
        pronunciation: "Antarrə mets e"
    },
    {
        word: "Աթոռ__ փոքր է",
        meaning: "The chair is small → ը (consonant + consonant)",
        pronunciation: "At'orrə p'okr e"
    },
    {
        word: "Գիրք__ հին է",
        meaning: "The book is old → ը (consonant + consonant)",
        pronunciation: "Girkə hin e"
    },
    {
        word: "Տուն__ սպիտակ է",
        meaning: "The house is white → ը (consonant + consonant)",
        pronunciation: "Tunə spitak e"
    },

    // Type 2: Word ends in consonant, next word starts with vowel (use ն)
    {
        word: "Սեղան__ ու աթոռը",
        meaning: "The table and the chair → ն (before ու)",
        pronunciation: "Seghann u at'orrə"
    },
    {
        word: "Գիրք__ ու գրիչը",
        meaning: "The book and the pen → ն (before ու)",
        pronunciation: "Girkn u grichə"
    },
    {
        word: "Տուն__ ու այգին",
        meaning: "The house and the garden → ն (before ու)",
        pronunciation: "Tunn u aygin"
    },
    {
        word: "Աղջիկ__ ասաց",
        meaning: "The girl said → ն (before ասաց)",
        pronunciation: "Aghjikn asats"
    },
    {
        word: "Տղա__ ասաց",
        meaning: "The boy said → ն (before ասաց)",
        pronunciation: "Tghan asats"
    },
    {
        word: "Մարդ__ ասաց",
        meaning: "The man said → ն (before ասաց)",
        pronunciation: "Mardn asats"
    },
    {
        word: "Գիրք__ այստեղ է",
        meaning: "The book is here → ն (before այստեղ)",
        pronunciation: "Girkn aystegh e"
    },
    {
        word: "Տուն__ այնտեղ է",
        meaning: "The house is there → ն (before այնտեղ)",
        pronunciation: "Tunn ayntegh e"
    },
    {
        word: "Մարդ__ եկավ",
        meaning: "The man came → ն (before եկավ)",
        pronunciation: "Mardn yekav"
    },
    {
        word: "Ձուկ__ ուտեցի",
        meaning: "I ate the fish → ն (before ուտեցի)",
        pronunciation: "Dzukn utetsi"
    },

    // Type 3: Word ends in vowel (use ն)
    {
        word: "Մեքենա__ գնում է",
        meaning: "The car is going → ն (after vowel)",
        pronunciation: "Mek'enan gnum e"
    },
    {
        word: "Աղջիկներ__ խաղում են",
        meaning: "The girls are playing → ը (after consonant)",
        pronunciation: "Aghjiknerə khagum en"
    },
    {
        word: "Երեխա__ քնած է",
        meaning: "The child is sleeping → ն (after vowel)",
        pronunciation: "Yerekhan knatse"
    },
    {
        word: "Ծառ__ բարձր է",
        meaning: "The tree is tall → ը (consonant + consonant)",
        pronunciation: "Tsarrə bardzr e"
    },

    // Mix of challenging examples
    {
        word: "Ադոնց__ ինձ դուր է եկել",
        meaning: "I liked Adonts → ն (before ինձ)",
        pronunciation: "Adontsn indz dur e ekel"
    },
    {
        word: "Կապույտ__ լավն է",
        meaning: "The blue one is good → ը (consonant + consonant)",
        pronunciation: "Kapuytə lavn e"
    },
    {
        word: "Ինչ__ է շատ լավ",
        meaning: "What is very good? → ն (before է)",
        pronunciation: "Inchn e shat lav"
    },
    {
        word: "Ո՞վ__ է",
        meaning: "Who is it? → ն (before է)",
        pronunciation: "Ovn e"
    },
    {
        word: "Ջուր__ սառն է",
        meaning: "The water is cold → ը (consonant + consonant)",
        pronunciation: "Jurə sarrn e"
    },
    {
        word: "Սրճանոց__ փակ է",
        meaning: "The café is closed → ը (consonant + consonant)",
        pronunciation: "Srchanots'ə p'ak e"
    },
    {
        word: "Դաս__ սկսվում է",
        meaning: "The class is starting → ը (consonant + consonant)",
        pronunciation: "Dasə sksvum e"
    },
    {
        word: "Ֆիլմ__ հետաքրքիր է",
        meaning: "The movie is interesting → ը (consonant + consonant)",
        pronunciation: "Filmə hetakrkir e"
    },

    // More practice with ու (and)
    {
        word: "Մայր__ ու հայրը",
        meaning: "The mother and the father → ն (before ու)",
        pronunciation: "Mayrn u hayrə"
    },
    {
        word: "Եղբայր__ ու քույրը",
        meaning: "The brother and the sister → ն (before ու)",
        pronunciation: "Yeghbayrn u k'uyrə"
    },
    {
        word: "Քաղաք__ ու գյուղը",
        meaning: "The city and the village → ն (before ու)",
        pronunciation: "K'aghak'n u gyughə"
    },

    // Practice with vowel-starting verbs
    {
        word: "Կատու__ ուտում է",
        meaning: "The cat is eating → ն (before ուտում)",
        pronunciation: "Katun utum e"
    },
    {
        word: "Շուն__ ըմպում է",
        meaning: "The dog is drinking → ն (before ըմպում)",
        pronunciation: "Shunn əmpum e"
    },
    {
        word: "Թռչուն__ օդում է",
        meaning: "The bird is flying → ն (before օդում)",
        pronunciation: "T'rrchunn odum e"
    },

    // More mixed practice
    {
        word: "Երգ__ գեղեցիկ է",
        meaning: "The song is beautiful → ը (consonant + consonant)",
        pronunciation: "Yergə geghetsik e"
    },
    {
        word: "Երգ__ ավարտվեց",
        meaning: "The song ended → ն (before ավարտվեց)",
        pronunciation: "Yergn avartvets"
    },
    {
        word: "Աշխատանք__ դժվար է",
        meaning: "The work is difficult → ը (consonant + consonant)",
        pronunciation: "Ashkhatank'ə dzhvar e"
    },
    {
        word: "Աշխատանք__ ավարտված է",
        meaning: "The work is finished → ն (before ավարտված)",
        pronunciation: "Ashkhatank'n avartvats e"
    },
    {
        word: "Ճանապարհ__ երկար է",
        meaning: "The road is long → ը (consonant + consonant)",
        pronunciation: "Chanaparh ə yerkar e"
    },
    {
        word: "Ճանապարհ__ ուղիղ է",
        meaning: "The road is straight → ն (before ուղիղ)",
        pronunciation: "Chanaparhն ughigh e"
    },

    // Final challenging examples
    {
        word: "Բանալի__ կորել է",
        meaning: "The key is lost → ն (after vowel)",
        pronunciation: "Banalin korel e"
    },
    {
        word: "Պատուհան__ բաց է",
        meaning: "The window is open → ը (consonant + consonant)",
        pronunciation: "Patuhanə bats e"
    },
    {
        word: "Դուռ__ փակ է",
        meaning: "The door is closed → ը (consonant + consonant)",
        pronunciation: "Durrə p'ak e"
    },
    {
        word: "Լույս__ անջատված է",
        meaning: "The light is off → ն (before անջատված)",
        pronunciation: "Luysn anjatvatse"
    },
    {
        word: "Համակարգիչ__ աշխատում է",
        meaning: "The computer is working → ը (consonant + consonant)",
        pronunciation: "Hamakargichə ashkhatum e"
    }
];

