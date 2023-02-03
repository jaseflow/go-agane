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

  const factionIndex = FACTIONS.findIndex(f => f.name.toLowerCase() === faction);

  function generate () {
    const randomFaction = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
    const randomRace = factionIndex >= 0 ? FACTIONS[factionIndex].races[Math.floor(Math.random() * randomFaction.races.length)] : randomFaction.races[Math.floor(Math.random() * randomFaction.races.length)];
    const randomClass = randomRace.classes[Math.floor(Math.random() * randomRace.classes.length)];
    const randomSpec = CLASSES.find(c => c.name === randomClass)!.specs[Math.floor(Math.random() * CLASSES.find(c => c.name === randomClass)!.specs.length)];

    setRace(randomRace.name);
    setToonClass(randomClass);
    setSpec(randomSpec.name);
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


  const sortedClasses = CLASSES.sort((a: any, b: any) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })

  const buildsList = sortedClasses.map((c, i) => {

    const className = c.name.toLowerCase();

    const classImageUrl = new URL(`./assets/${className}.jpg`, import.meta.url).href;

    const specList = c.specs.map((s) => {
      const specName = `${s.name.toLowerCase().replace(/ /g, "-")}-${c.name.toLowerCase()}`
      const url = getImageUrl(specName);

      return (
        <div className="spec">
          <div className="specCard" key={`spec-${specName}`}>
            <div className="specBg" style={{ backgroundImage: `url(${url})`}}></div>
            <div className="specWrapper">
              <h4 className="specTitle">{s.name}</h4>
              <p>Survability <strong className={s.survivability}>{s.survivability}</strong></p>
              <p>Damage <strong className={s.damage}>{s.damage}</strong></p>
              <p>Utility <strong className={s.utility}>{s.utility}</strong></p>
            </div>
          </div>
          <span className="specLink">Read guide</span>
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
      <header className="appHeader">
        <img src={logo} alt="Go Agane" className="logo" onClick={() => setRolled(false)}/>
      </header>
      <header className="buildsHeader">
        <h1>Find your Hardcore class</h1>
        <p className="disclaimer"><strong>Note:</strong> Tier ratings are intended for beginner to average players, subject to exceptions based on individual playstyles.</p>
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
