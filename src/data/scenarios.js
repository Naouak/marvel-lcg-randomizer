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
        img: "images/scenarios/MC10en_79A.jpg"
    },
    {
        name: "Taskmaster - Hunting Down Heroes",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_96A.jpg",
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
    },
    {
        name: "Red Skull - The Rise of Red Skull",
        pack: "The Rise of Red Skull",
        img: "images/scenarios/MC10en_128A.jpg",
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
    },
    {
        name: "Brotherhood of Badoon",
        pack: "Galaxy's Most Wanted",
        img: "images/scenarios/MC16en_61A.jpg",
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
    },
    {
        name: "Thanos - The Infinity Stones",
        pack: "The Mad Titan's Shadow",
        img: "images/scenarios/MC21en_114A.jpg",
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
        decks: [
            {
                requiredModules: ["Brotherhood"],
            }
        ]
    },
    {
        name: "Magneto",
        pack: "Mutant Genesis",
        img: "images/scenarios/mc32_magneto.png"
    },
    {
        name: "Magog",
        pack: "MojoMania",
        img: "images/scenarios/mc39_magog.png"
    },
    {
        name: "Spiral",
        pack: "MojoMania",
        img: "images/scenarios/mc39_spiral.png",
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
        decks: [
            {
                requiredModules:  ["Flight", "Super Strength", "Telepathy", "Hope Summers"]
            }
        ]
    },
    {
        name: "Stryfe",
        pack: "NeXt Evolution",
        img: "images/scenarios/stryfe.jpg",
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
        decks: [
            {
                minModules: 2
            }
        ]
    },
    {
        name: "M.O.D.O.K.",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/modok.jpg"
    },
    {
        name: "Thunderbolts",
        pack: "Agents of S.H.I.E.L.D.",
        img: "images/scenarios/thunderbolts.jpg",
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
        decks: [
            {
                requiredModules: ["S.H.I.E.L.D. Executive Board", "Executive Board Evidence"],
                minModules: 2
            }
        ]
    },
    {
        name: "Enchantress",
        pack: "Trickster Takeover",
        img: "images/scenarios/enchantress.jpg",
    },
    {
        name: "God of Lies",
        pack: "Trickster Takeover",
        img: "images/scenarios/god-of-lies.jpg",
    },
    {
        name: "Resistance",
        pack: "Civil War",
        img: "images/scenarios/resistance.jpg",
        decks: [
            {
                name: "Villains",
                requiredModules: ["Resistance Leader"],
                minModules: 0,
            },
            {
                name: "Encounter Deck",
                minModules: 3,
                maxModules: 4,
                excludedModules: ["Registration"],
            }
        ]
    },
    {
        name: "Registration",
        pack: "Civil War",
        img: "images/scenarios/registration.jpg",
                decks: [
            {
                name: "Villains",
                requiredModules: ["Registration Leader"],
                minModules: 0,
            },
            {
                name: "Encounter Deck",
                minModules: 3,
                maxModules: 4,
                excludedModules: ["Resistance"],
            }
        ]
    }
];
