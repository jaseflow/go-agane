import { useState, useEffect } from 'react'
import hcLogo from './assets/hc-badge.png'
import './App.css'

import { CLASSES, FACTIONS } from './data';

function App() {
  const [faction, setFaction] = useState('any');
  const [toon, setToon] = useState<string>();

  const factionIndex = FACTIONS.findIndex(f => f.name.toLowerCase() === faction);
  console.log(factionIndex);

  function generate () {
    const randomFaction = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
    const randomRace = factionIndex >= 0 ? FACTIONS[factionIndex].races[Math.floor(Math.random() * randomFaction.races.length)] : randomFaction.races[Math.floor(Math.random() * randomFaction.races.length)];
    const randomClass = randomRace.classes[Math.floor(Math.random() * randomRace.classes.length)];
    const randomSpec = CLASSES.find(c => c.name === randomClass)!.specs[Math.floor(Math.random() * CLASSES.find(c => c.name === randomClass)!.specs.length)];

    setToon(`${randomRace.name} ${randomSpec} ${randomClass}`);
  }

  return (
    <div className="App">
      <div>
        <img src={hcLogo} alt="" width={250} style={{ marginRight: '-15px', marginBottom: '40px'}}/>
        <div className="factions">
          <label htmlFor="factionAny" className={`label ${faction === 'any' ? 'label--checked' : ''}`}>
            <input type="radio" id="factionAny" value="any" onChange={() => setFaction('any')} checked={faction === 'any'} />
            Any faction
          </label>
          <label htmlFor="factionAlliance" className={`label ${faction === 'alliance' ? 'label--checked' : ''}`}>
            <input type="radio" id="factionAlliance" value="alliance" onChange={() => setFaction('alliance')} checked={faction == 'alliance' }/>
            Alliance
          </label>
          <label htmlFor="factionHorde" className={`label ${faction === 'horde' ? 'label--checked' : ''}`}>
            <input type="radio" id="factionHorde" value="horde" onChange={() => setFaction('horde')} checked={faction === 'horde'} />
            Horde
          </label>
        </div>
        <button onClick={generate} className={faction}>Go agane</button>
        {toon &&  
          <div className="toon">
            <h2>{toon}</h2>
          </div>
        }
      </div>
    </div>
  )
}

export default App
