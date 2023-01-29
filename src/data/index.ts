const CLASSES = [
  {
    name: 'Warrior',
    specs: ['Arms', 'Fury', 'Protection'],
  },
  {
    name: 'Paladin',
    specs: ['Holy', 'Protection', 'Retribution'],
  },
  {
    name: 'Hunter',
    specs: ['Beast Mastery', 'Marksmanship', 'Survival'],
  },
  {
    name: 'Rogue',
    specs: ['Assassination', 'Combat', 'Subtlety'],
  },
  {
    name: 'Priest',
    specs: ['Discipline', 'Holy', 'Shadow'],
  },
  {
    name: 'Shaman',
    specs: ['Elemental', 'Enhancement', 'Restoration'],
  },
  {
    name: 'Mage',
    specs: ['Arcane', 'Fire', 'Frost'],
  },
  {
    name: 'Warlock',
    specs: ['Affliction', 'Demonology', 'Destruction'],
  },
  {
    name: 'Druid',
    specs: ['Balance', 'Feral', 'Restoration'],
  }
]

const FACTIONS = [
  {
    name: 'Horde',
    races: [
      {
        name: 'Orc',
        classes: [
          'Warrior',
          'Hunter',
          'Rogue',
          'Warlock',
          'Shaman'
        ]
      },
      {
        name: 'Troll',
        classes: [
          'Warrior',
          'Hunter',
          'Rogue',
          'Shaman',
          'Priest'
        ]
      },
      {
        name: 'Tauren',
        classes: [
          'Warrior',
          'Hunter',
          'Shaman',
          'Druid',
        ]
      },
      {
        name: 'Undead',
        classes: [
          'Warrior',
          'Rogue',
          'Priest',
          'Warlock',
          'Mage'
        ]
      }
    ]
  },
  {
    name: 'Alliance',
    races: [
      {
        name: 'Human',
        classes: [
          'Warrior',
          'Rogue',
          'Priest',
          'Mage',
          'Paladin'
        ]
      },
      {
        name: 'Dwarf',
        classes: [
          'Warrior',
          'Rogue',
          'Priest',
          'Mage',
          'Paladin'
        ]
      },
      {
        name: 'Night Elf',
        classes: [
          'Warrior',
          'Hunter',
          'Rogue',
          'Druid',
          'Priest'
        ]
      },
      {
        name: 'Gnome',
        classes: [
          'Warrior',
          'Rogue',
          'Priest',
          'Mage',
          'Warlock'
        ]
      },
    ],
  }
];

export { FACTIONS, CLASSES };
