export const scenarios = [
    {
        name: 'Rhino - The Break In!',
        img: 'images/scenarios/MC01en_97A.jpg',
        pack: "Core Set",
        starRating: {
            solo: 7,
            multiplayer: 0
        }
    },
    {
        name: 'Klaw - Underground Distribution',
        img: 'images/scenarios/MC01en_116A.jpg',
        pack: "Core Set",
        starRating: {
            solo: 10,
            multiplayer: 3
        }
    },
    {
        name: 'Ultron - The Crimson Cowl',
        img: 'images/scenarios/MC01en_137A.jpg',
        pack: "Core Set",
        starRating: {
            solo: 10,
            multiplayer: 12
        }
    },
    {
        name: 'Green Goblin - Risky Business',
        img: 'images/scenarios/02004.jpg',
        pack: "Green Goblin",
        starRating: {
            solo: 0,
            multiplayer: 0
        }
    },
    {
        name: 'Green Goblin - Mutagen Formula',
        img: 'images/scenarios/02017.jpg',
        pack: 'Green Goblin',
        starRating: {
            solo: 12,
            multiplayer: 10
        },
    },
    {
        name: 'Wrecking Crew - Breakout',
        img: 'images/scenarios/MC03en_1A.jpg',
        pack: 'Wrecking Crew',
        starRating: {
            solo: -1,
            multiplayer: 3
        },
        decks: [
            {
                name: "Bulldozer's Deck",
                minModules: 0,
            },
            {
                name: "Piledriver's Deck",
                minModules: 0,
            },
            {
                name: "Thunderball's Deck",
                minModules: 0,
            },
            {
                name: "Wrecker's Deck",
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
    {
        name: "Crossbones - Attack on Mount Athena",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_61A.jpg",
        starRating: {
            solo: 4,
            multiplayer: -1
        },
        decks: [
            {
                requiredModules: ["Experimental Weapons"],
                minModules: 3,
            },
        ],
    },
    {
        name: "Absorbing Man - None Shall Pass",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_79A.jpg",
        starRating: {
            solo: 2,
            multiplayer: -1
        },
    },
    {
        name: "Taskmaster - Hunting Down Heroes",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_96A.jpg",
        starRating: {
            solo: 5,
            multiplayer: 5
        },
        decks: [
            {
                requiredModules: ["Hydra Patrol"],
            },
        ],
    },
    {
        name: "Zola - The Island of Dr. Zola",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_112A.jpg",
        starRating: {
            solo: 14,
            multiplayer: 9
        },
    },
    {
        name: "Red Skull - The Rise of Red Skull",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_128A.jpg",
        starRating: {
            solo: 16,
            multiplayer: 17
        },
        decks: [
            {
                minModules: 2,
            },
        ],
    },
    {
        name: "Kang - Kang's Arrival",
        pack: "The Once and Future Kang",
        img: "images/scenarios/MC11en_7A.jpg",
        starRating: {
            solo: 10,
            multiplayer: 9
        },
    },
    {
        name: "Brotherhood of Badoon",
        pack: "Galaxy's Most Wanted",
        img: "images/scenarios/MC16en_61A.jpg",
        starRating: {
            solo: 2,
            multiplayer: 7
        },
        decks: [
            {
                requiredModules: ["Brotherhood of Badoon", "Ship Command"],
            },
        ],

    },
    {
        name: "Collector 1 - Infiltrate the Museum",
        pack: "Galaxy's Most Wanted",
        img: "images/scenarios/MC16en_73A.jpg",
        starRating: {
            solo: 14,
            multiplayer: 11
        },
        decks: [
            {
                requiredModules: ["Galactic Artifacts"],
            },
        ],
    },
    {
        name: "Collector 2 - Escape the Museum",
        pack: "Galaxy's Most Wanted",
        img: "images/scenarios/MC16en_82A.jpg",
        starRating: {
            solo: 12,
            multiplayer: 11
        },
        decks: [
            {
                requiredModules: ["Galactic Artifacts", "Ship Command"],
            },
        ],
    },
    {
        name: "Nebula",
        pack: "Galaxy's Most Wanted",
        img: "images/scenarios/MC16en_91A.jpg",
        starRating: {
            solo: 17,
            multiplayer: 19
        },
        decks: [
            {
                requiredModules: ["Power Stone", "Ship Command"],
            },
        ],
    },
    {
        name: "Ronan",
        pack: "Galaxy's Most Wanted",
        img: "images/scenarios/MC16en_106A.jpg",
        starRating: {
            solo: 24,
            multiplayer: 25
        },
        decks: [
            {
                requiredModules: ["Power Stone", "Ship Command"],
            },
        ],
    },
    {
        name: "Ebony Maw - Attack on Knowhere",
        pack: "The Mad Titan's Shadow",
        img: "images/scenarios/MC21en_74A.jpg",
        starRating: {
            solo: 6,
            multiplayer: 5
        },
        decks: [
            {
                minModules: 2,
            },
        ]
    },
    {
        name: "Proxima Midnight/Corvus Glaive - Under Siege",
        pack: "The Mad Titan's Shadow",
        img: "images/scenarios/MC21en_98A.jpg",
        starRating: {
            solo: -1,
            multiplayer: 0
        },
    },
    {
        name: "Thanos - The Infinity Stones",
        pack: "The Mad Titan's Shadow",
        img: "images/scenarios/MC21en_114A.jpg",
        starRating: {
            solo: 8,
            multiplayer: 8
        },
        decks: [
            {
                requiredModules: ["Infinity Gauntlet"],
                minModules: 2,
            },
        ]
    },
    {
        name: "Hela - Odin's Torment",
        pack: "The Mad Titan's Shadow",
        img: "images/scenarios/MC21en_138A.jpg",
        starRating: {
            solo: 10,
            multiplayer: 6
        },
        decks: [
            {
                minModules: 2,
            },
        ]
    },
    {
        name: "Loki - All Hail King Loki",
        pack: "The Mad Titan's Shadow",
        img: "images/scenarios/MC21en_165A.jpg",
        starRating: {
            solo: 18,
            multiplayer: 19
        },
        decks: [
            {
                requiredModules: ["Infinity Gauntlet"],
                minModules: 2,
            },
        ]
    },
    {
        name: "The Hood - Making Connections",
        pack: "The Hood",
        img: "images/scenarios/MC24en_4A.png",
        starRating: {
            solo: 5,
            multiplayer: 6
        },
        decks: [
            {
                name: "The Hood",
                minModules: 0,
            },
            {
                name: "Set aside modules",
                minModules: 7,
            },
        ]
    },
    {
        name: "Sandman",
        pack: "Sinister Motives",
        img: "images/scenarios/sandman.png",
        starRating: {
            solo: 5,
            multiplayer: 1
        },
        decks: [
            {
                requiredModules: ["City in Chaos"],
            }
        ]
    },
    {
        name: "Venom",
        pack: "Sinister Motives",
        img: "images/scenarios/venom.png",
        starRating: {
            solo: 10,
            multiplayer: 3
        },
        decks: [
            {
                requiredModules: ["Symbiotic Strength"],
            }
        ]
    },
    {
        name: "Mysterio",
        pack: "Sinister Motives",
        img: "images/scenarios/mysterio.png",
        starRating: {
            solo: 2,
            multiplayer: 0
        },
        decks: [
            {
                requiredModules: ["Personal Nightmare"],
            }
        ]
    },
    {
        name: "The Sinister Six",
        pack: "Sinister Motives",
        img: "images/scenarios/sinister-six.png",
        starRating: {
            solo: 9,
            multiplayer: 5
        },
        decks: [
            {
                minModules: 0,
                requiredModules: ["Guerrilla Tactics"],
            }
        ]
    },
    {
        name: "Venom Goblin",
        pack: "Sinister Motives",
        img: "images/scenarios/venom-goblin.png",
        starRating: {
            solo: 16,
            multiplayer: 21
        },
        decks: [
            {
                requiredModules: ["Symbiotic Strength"],
            }
        ]
    },
    {
        name: "Sabretooth",
        pack: "Mutant Genesis",
        img: "images/scenarios/mc32_sabretooth.png",
        starRating: {
            solo: 8,
            multiplayer: 10
        },
        decks: [
            {
                minModules: 2,
            },
        ]
    },
    {
        name: "Project Wideawake",
        pack: "Mutant Genesis",
        img: "images/scenarios/mc32_project_wideawake.png",
        starRating: {
            solo: 6,
            multiplayer: 8
        },
        decks: [
            {
                requiredModules: ["Zero Tolerance"],
            }
        ]
    },
    {
        name: "Master Mold",
        pack: "Mutant Genesis",
        img: "images/scenarios/mc32_master_mold.png",
        starRating: {
            solo: 3,
            multiplayer: 4
        },
        decks: [
            {
                name: "Into Play",
                requiredModules: ["Magneto (campaign cards)"],
                minModules: 0
            },
            {
                name: "Encounter Deck",
                requiredModules: ["Sentinels"],
            }
        ]
    },
    {
        name: "Mansion Attack",
        pack: "Mutant Genesis",
        img: "images/scenarios/mc32_mansion_attack.png",
        starRating: {
            solo: 7,
            multiplayer: 3
        },
        decks: [
            {
                requiredModules: ["Brotherhood"],
            }
        ]
    },
    {
        name: "Magneto",
        pack: "Mutant Genesis",
        img: "images/scenarios/mc32_magneto.png",
        starRating: {
            solo: 18,
            multiplayer: 23
        },
    },
    {
        name: "Magog",
        pack: "MojoMania",
        img: "images/scenarios/mc39_magog.png",
        starRating: {
            solo: 5,
            multiplayer: 3
        },
    },
    {
        name: "Spiral",
        pack: "MojoMania",
        img: "images/scenarios/mc39_spiral.png",
        starRating: {
            solo: 6,
            multiplayer: 12
        },
        decks: [
            {
                minModules: 3,
                moduleRequirements: {
                    pack: "MojoMania"
                }
            },
        ]
    },
    {
        name: "Mojo",
        pack: "MojoMania",
        img: "images/scenarios/mc39_mojo.png",
        starRating: {
            solo: 7,
            multiplayer: 10
        },
        decks: [
            {
                minModules: 0,
            },
            {
                name: "Set aside modules",
                minModules: 1,
                additionalModulesPerPlayer: 1,
                moduleRequirements: {
                    pack: "MojoMania"
                }
            }
        ]
    },
    {
        name: "Morlock Siege",
        pack: "NeXt Evolution",
        img: "images/scenarios/morlock-siege.jpg",
        starRating: {
            solo: -3,
            multiplayer: -5
        },
        decks: [
            {
                name: "Villains",
                requiredModules: ["Marauders"],
                minModules: 0
            },
            {
                name: "Encounter Deck",
                minModules: 2,
            }
        ]
    },
    {
        name: "On The Run",
        pack: "NeXt Evolution",
        img: "images/scenarios/on-the-run.jpg",
        starRating: {
            solo: 15,
            multiplayer: 8
        },
        decks: [
            {
                name: "Villains",
                requiredModules: ["Marauders"],
                minModules: 0,
            },
            {
                name: "Encounter Deck",
                minModules: 2,
                requiredModules: ["Mutant Slayers"],
            }
        ]
    },
    {
        name: "Juggernaut",
        pack: "NeXt Evolution",
        img: "images/scenarios/juggernaut.jpg",
        starRating: {
            solo: 12,
            multiplayer: 12
        },
        decks: [
            {
                requiredModules: ["Hope Summers"]
            }
        ]
    },
    {
        name: "Mister Sinister",
        pack: "NeXt Evolution",
        img: "images/scenarios/mister-sinister.jpg",
        starRating: {
            solo: 2,
            multiplayer: 9
        },
        decks: [
            {
                requiredModules: ["Flight", "Super Strength", "Telepathy", "Hope Summers"]
            }
        ]
    },
    {
        name: "Stryfe",
        pack: "NeXt Evolution",
        img: "images/scenarios/stryfe.jpg",
        starRating: {
            solo: 13,
            multiplayer: 14
        },
        decks: [
            {
                minModules: 2,
                requiredModules: ["Hope Summers"]
            }
        ]
    },
    {
        name: "Unus",
        pack: "Age of Apocalypse",
        img: "images/scenarios/unus.jpg",
        starRating: {
            solo: 1,
            multiplayer: -2
        },
        decks: [
            {
                requiredModules: ["Infinites"]
            }
        ]
    },
    {
        name: "Four Horsemen",
        pack: "Age of Apocalypse",
        img: "images/scenarios/four-horsemen.jpg",
        starRating: {
            solo: 11,
            multiplayer: 7
        },
        decks: [
            {
                minModules: 2
            }
        ]
    },
    {
        name: "Apocalypse",
        pack: "Age of Apocalypse",
        img: "images/scenarios/apocalypse.jpg",
        starRating: {
            solo: 12,
            multiplayer: 4
        },
        decks: [
            {
                requiredModules: ["Prelates"],
                minModules: 2
            }
        ]
    },
    {
        name: "Dark Beast",
        pack: "Age of Apocalypse",
        img: "images/scenarios/dark-beast.jpg",
        starRating: {
            solo: 8,
            multiplayer: 11
        },
        decks: [
            {
                requiredModules: ["Blue Moon", "Genosha", "Savage Land"]
            }
        ]
    },
    {
        name: "En Sabah Nur",
        pack: "Age of Apocalypse",
        img: "images/scenarios/en-sabah-nur.jpg",
        starRating: {
            solo: 9,
            multiplayer: 8
        },
        decks: [
            {
                minModules: 2
            }
        ]
    },
    {
        name: "Black Widow",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/black-widow.jpg",
        starRating: {
            solo: 13,
            multiplayer: 8
        },
        decks: [
            {
                minModules: 2
            }
        ]
    },
    {
        name: "Batroc",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/batroc.jpg",
        starRating: {
            solo: 8,
            multiplayer: 4
        },
        decks: [
            {
                minModules: 2
            }
        ]
    },
    {
        name: "M.O.D.O.K.",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/modok.jpg",
        starRating: {
            solo: -4,
            multiplayer: 4
        },
    },
    {
        name: "Thunderbolts",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/thunderbolts.jpg",
        starRating: {
            solo: 3,
            multiplayer: 11 
        },
        decks: [
            {
                minModules: 1,
                additionalModulesPerPlayer: 1,
                moduleRequirements: {
                    type: "Thunderbolt"
                }
            }
        ]
    },
    {
        name: "Baron Zemo",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/baron-zemo.jpg",
        starRating: {
            solo: 22,
            multiplayer: 7
        },
        decks: [
            {
                requiredModules: ["S.H.I.E.L.D. Executive Board", "Executive Board Evidence"],
                minModules: 2
            }
        ]
    }
];
