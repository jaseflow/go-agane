const CLASSES = [
  {
    name: 'Warrior',
    specs: [
      { name: 'Arms', survivability: 'C', damage: 'A', utility: 'C' },
      { name: 'Fury', survivability: 'B', damage: 'S', utility: 'C' },
      { name: 'Protection', survivability: 'B', damage: 'C', utility: 'C' },
    ],
  },
  {
    name: 'Paladin',
    specs: [
      { name: 'Holy', survivability: 'S', damage: 'C', utility: 'S' },
      { name: 'Protection', survivability: 'S', damage: 'C', utility: 'S' },
      { name: 'Retribution', survivability: 'A', damage: 'B', utility: 'S' },
    ],
  },
  {
    name: 'Hunter',
    specs: [
      { name: 'Beast Mastery', survivability: 'S', damage: 'A', utility: 'A' },
      { name: 'Marksmanship', survivability: 'B', damage: 'A', utility: 'B' },
      { name: 'Survival', survivability: 'A', damage: 'A', utility: 'B' },
    ],
  },
  {
    name: 'Rogue',
    specs: [
      { name: 'Assassination', survivability: 'B', damage: 'A', utility: 'C' },
      { name: 'Combat', survivability: 'B', damage: 'A', utility: 'C' },
      { name: 'Subtlety', survivability: 'B', damage: 'A', utility: 'C' },
    ],
  },
  {
    name: 'Priest',
    specs: [
      { name: 'Discipline', survivability: 'A', damage: 'C', utility: 'A' },
      { name: 'Holy', survivability: 'A', damage: 'C', utility: 'A' },
      { name: 'Shadow', survivability: 'A', damage: 'A', utility: 'A' },
    ],
  },
  {
    name: 'Shaman',
    specs: [
      { name: 'Elemental', survivability: 'B', damage: 'A', utility: 'C' },
      { name: 'Enhancement', survivability: 'C', damage: 'S', utility: 'C' },
      { name: 'Restoration', survivability: 'A', damage: 'C', utility: 'A' },
    ],
  },
  {
    name: 'Mage',
    specs: [
      { name: 'Arcane', survivability: 'C', damage: 'A', utility: 'S' },
      { name: 'Fire', survivability: 'B', damage: 'S', utility: 'S' },
      { name: 'Frost', survivability: 'S', damage: 'B', utility: 'S' },
    ],
  },
  {
    name: 'Warlock',
    specs: [
      { name: 'Affliction', survivability: 'A', damage: 'A', utility: 'A' },
      { name: 'Demonology', survivability: 'S', damage: 'B', utility: 'A' },
      { name: 'Destruction', survivability: 'B', damage: 'A', utility: 'A' },
    ],
  },
  {
    name: 'Druid',
    specs: [
      { name: 'Feral', survivability: 'A', damage: 'A', utility: 'B' },
      { name: 'Balance', survivability: 'C', damage: 'B', utility: 'B' },
      { name: 'Restoration', survivability: 'C', damage: 'C', utility: 'B' },
    ],
  }
]

export default CLASSES;
