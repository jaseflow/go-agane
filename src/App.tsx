import { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import alliance from './assets/alliance.png';
import horde from './assets/horde.png';
import './App.css';

import { CLASSES, FACTIONS } from './data';

function App() {
  const [faction, setFaction] = useState('any');
  const [spec, setSpec] = useState<string>()
  const [race, setRace] = useState<string>()
  const [toonClass, setToonClass] = useState<string>()
  const [toonCoverUrl, setToonCoverUrl] = useState<string>();
  const [rolled, setRolled] = useState(false);
  const [builds, setBuilds] = useState<string[]>([]);

  const factionIndex = FACTIONS.findIndex(f => f.name.toLowerCase() === faction);

  function generate () {
    const randomFaction = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
    const randomRace = factionIndex >= 0 ? FACTIONS[factionIndex].races[Math.floor(Math.random() * randomFaction.races.length)] : randomFaction.races[Math.floor(Math.random() * randomFaction.races.length)];
    const randomClass = randomRace.classes[Math.floor(Math.random() * randomRace.classes.length)];
    const randomSpec = CLASSES.find(c => c.name === randomClass)!.specs[Math.floor(Math.random() * CLASSES.find(c => c.name === randomClass)!.specs.length)];

    setRace(randomRace.name);
    setToonClass(randomClass);
    setSpec(randomSpec);
    setRolled(true);
  }

  function getImageUrl(name: string) {
    return new URL(`./assets/builds/${name}.png`, import.meta.url).href
  }

  useEffect(() => {
    if (spec && race && toonClass) {
      const toon = `${race} ${spec} ${toonClass}`
      const formatted = `${toon?.toLowerCase().replace(/ /g, "-")}`;
      const url = getImageUrl(formatted);
      setToonCoverUrl(url);
    }
  }, [spec, race, toonClass])

  const buildsList = CLASSES.map((c, i) => {

    const className = c.name.toLowerCase();

    console.log(className);
    const classImageUrl = new URL(`./assets/${className}.jpg`, import.meta.url).href

    const specList = c.specs.map((s) => {
      const specName = `${s.toLowerCase().replace(/ /g, "-")}-${c.name.toLowerCase()}`
      const url = getImageUrl(specName);

      return (
        <div className="spec" key={`spec-${specName}`} style={{ backgroundImage: `url(${url})`}}>
          <div className="specWrapper">
            <h4 className="specTitle">{s}</h4>
            <p>Survability <strong>A</strong></p>
            <p>Damage <strong>B</strong></p>
            <p>Utility <strong>S</strong></p>
          </div>
        </div>
      )
    })

    return (
      <div key={`build-${i}`}>
        <header className="buildHeader">
          <img src={classImageUrl} alt="" />
          <h2 className="buildTitle">{c.name}</h2>
        </header>
        <div className="specs">{specList}</div>
      </div>
    )

  })

  return (
    <div>
      <header>
        <img src={logo} alt="Go Agane" className="logo" onClick={() => setRolled(false)}/>
      </header>
      <div className={`wrapper ${rolled ? 'wrapper--up' : ''}`} hidden>
        <h1>Find your Hardcore class</h1>
        <div>
          <div className="factions">
            <label htmlFor="factionAny" className={`label ${faction === 'any' ? 'label--checked' : ''}`}>
              <input type="radio" id="factionAny" value="any" onChange={() => setFaction('any')} checked={faction === 'any'} />
              Any faction
            </label>
            <label htmlFor="factionAlliance" className={`label ${faction === 'alliance' ? `label--checked ${faction}` : ''}`}>
              <img src={alliance} alt="" width={20} />
              <input type="radio" id="factionAlliance" value="alliance" onChange={() => setFaction('alliance')} checked={faction == 'alliance' }/>
              Alliance
            </label>
            <label htmlFor="factionHorde" className={`label ${faction === 'horde' ? `label--checked ${faction}` : ''}`}>
              <img src={horde} alt="" width={20} />
              <input type="radio" id="factionHorde" value="horde" onChange={() => setFaction('horde')} checked={faction === 'horde'} />
              Horde
            </label>
          </div>
          {!rolled && (
            <button onClick={generate} className={`roll ${faction}`}>{!rolled ? 'Start your adventure' : 'Go agane'}</button>
          )}
          {rolled &&  
            <div>
              <div className="toon" style={{ backgroundImage: `url(${toonCoverUrl})`}}>
                <div className="toonWrapper">
                  <h2 className="toonTitle">{race} {spec} {toonClass}</h2>
                  <span className="toonGuideLink">Hardcore {spec} {toonClass} Guide</span>
                </div>
              </div>
              <footer style={{ marginTop: '50px' }}>
                <button onClick={generate} className="roll secondary">Go agane</button>
              </footer>
            </div>
          }
        </div>
      </div>
      <div className="builds">
        {buildsList}
      </div>
    </div>
  )
}

export default App
