export const scenarios = [
    {
        name: 'Rhino - The Break In!',
        img: 'images/scenarios/MC01en_97A.jpg',
        pack: "Core Set",
    },
    {
        name: 'Klaw - Underground Distribution',
        img: 'images/scenarios/MC01en_116A.jpg',
        pack: "Core Set",
    },
    {
        name: 'Ultron - The Crimson Cowl',
        img: 'images/scenarios/MC01en_137A.jpg',
        pack: "Core Set",
    },
    {
        name: 'Green Goblin - Risky Business',
        img: 'images/scenarios/02004.jpg',
        pack: "Green Goblin",
    },
    {
        name: 'Green Goblin - Mutagen Formula',
        img: 'images/scenarios/02017.jpg',
        pack: 'Green Goblin',
    },
    {
        name: 'Wrecking Crew - Breakout',
        img: 'images/scenarios/MC03en_1A.jpg',
        pack: 'Wrecking Crew',
        decks: [
            {
                name: "Bulldozer",
                minModules: 0,
            },
            {
                name: "Piledriver",
                minModules: 0,
            },
            {
                name: "Thunderball",
                minModules: 0,
            },
            {
                name: "Wrecker",
                minModules: 0,
            },
        ],
        difficulties: [
            ["Standard", "Standard (All Villains A)"],
            ["Expert", "Bulldozer A, Piledriver A, Thunderball A, Wrecker B"],
            ["Expert", "Bulldozer A, Piledriver A, Thunderball B, Wrecker A"],
            ["Expert", "Bulldozer A, Piledriver B, Thunderball A, Wrecker A"],
            ["Expert", "Bulldozer B, Piledriver A, Thunderball A, Wrecker A"],
            ["Expert", "Bulldozer A, Piledriver A, Thunderball B, Wrecker B"],
            ["Expert", "Bulldozer A, Piledriver B, Thunderball A, Wrecker B"],
            ["Expert", "Bulldozer A, Piledriver B, Thunderball B, Wrecker A"],
            ["Expert", "Bulldozer B, Piledriver A, Thunderball A, Wrecker B"],
            ["Expert", "Bulldozer B, Piledriver A, Thunderball B, Wrecker A"],
            ["Expert", "Bulldozer B, Piledriver B, Thunderball A, Wrecker A"],
            ["Expert", "Bulldozer A, Piledriver B, Thunderball B, Wrecker B"],
            ["Expert", "Bulldozer B, Piledriver A, Thunderball B, Wrecker B"],
            ["Expert", "Bulldozer B, Piledriver B, Thunderball A, Wrecker B"],
            ["Expert", "Bulldozer B, Piledriver B, Thunderball B, Wrecker A"],
            ["Expert", "Expert (All Villains B)"],
            ["Nightmare", "Nightmare (All Villains A+B)"],
        ],
    },
];
