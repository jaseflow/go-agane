import { useParams } from 'react-router-dom';

import feralCover from '../assets/builds/feral-druid.png';

import { CLASSES } from '../data';

export default function FeralDruid() {

  const druid = CLASSES.find(c => c.name === 'Druid');
  const s = druid?.specs.find(s => s.name === 'Feral');

  return (
    <div className="container">
      <div className="guideGrid">
        <div>
          <div className="guideSidebar">
            <img src={feralCover} alt="" className="guideCover" />
            <div className="guideRatings">
              <h3 className="pressed">Feral Druid Hardcore</h3>
              <ul className="toc">
                <li className="active"><a href="#">Terms to know</a></li>
                <li><a href="#">Important skills / talents</a></li>
                <li><a href="#">Talent Builds</a></li>
                <li><a href="#">Professions</a></li>
                <li><a href="#">Class quests</a></li>
                <li><a href="#">Dealing with danger</a></li>
                <li><a href="#">Using your forms</a></li>
                <li><a href="#">Stat analysis</a></li>
                <li><a href="#">Important macros</a></li>
              </ul>
            </div>
            <div className="guideAuthor">
              <h3 className="pressed">About the author</h3>
              <p>Kat is a Classic Hardcore Community Lead as well being one of the top parsing Feral DPS druids while always exceeding Meows Per Hour (MPH).</p>
              <div className="guideAuthorFooter">
                <img className="guideAvatar" src="https://pbs.twimg.com/card_img/1619442645662662661/6gKQBOwM?format=png&name=360x360" />
                <div>
                  <h4 className="flat">Aprikitkat</h4>
                  <a href="http://twitch.tv/Aprikitkat" target="_blank" className="link"><small>Watch on Twitch</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="guideContent">
          <header className="guideHeader">
            <h1 className="pressed">Feral Druid Classic Hardcore</h1>
            <div className="stats stats--inline stats--large">
              <p>Survability <strong className={s?.survivability}>{s?.survivability}</strong></p>
              <p>Damage <strong className={s?.damage}>{s?.damage}</strong></p>
              <p>Utility <strong className={s?.utility}>{s?.utility}</strong></p>
            </div>
          </header>
          <section>
            <p className="guideIntro">Druid is a shapeshifter class that is fairly unique to World of Warcraft. Their versatility and ability to fill any role (tank, melee, caster, or healer) makes them the true jack of all trades. There are so many different ways to play a Druid that it can morph to a players desired role, that they feel most comfortable with. No matter what your playstyle for hardcore is, there is a build or style that will likely feel comfortable for you. Don't be overwhelmed by the sheer amount of skills and abilities! Druid is easy for beginners with a high skill cap, but there is lots of room in between.</p>
              <p className="guideIntro">This is our recommended talent and starter guide for someone new to the class or having trouble surviving in Hardcore.</p>
            </section>
          <section>
            <h2>Terms to know</h2>
            <ul className="unstyled">
              <li>
                <h4 className="flat">Powershifting</h4>
                <p>A macro used to exit and enter a shapeshifting form instantly to either use a pot, or remove a snare / movement impairing effect, or to regen energy or rage with Furor talent.</p>
              </li>
              <li>
                <h4 className="flat">Making Space</h4>
                <p>Druid is the master of escape. They cannot be polymorphed, rooted or snared, and have many outs in dangerous situations. They are also excellent kiters in the open world, using Bash, Hibernate, Entangling Roots, and Nature's Grasp. Focus on gear with highest stats overall because every stat is utilized by Druid.</p>
              </li>
              <li>
                <h4 className="flat">Kiting</h4>
                <p>Keeping dangerous enemies at a distance and killing them without taking damage or reducing damage taken.</p>

              </li>
            </ul>
          </section>
          <section>
            <h2>Important Skills, Talents, Debuffs</h2>
            <ul className="unstyled">
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=16864/omen-of-clarity" target="_blank" className="link">Omen of Clarity (Talent)</a></h4>
                <p>Enters the Druid into a Clearcasting state after a melee attack in any form (Proc). Clearcasting reduces mana, rage or energy by 100% for your next damage or healing spell. Can be learned as early as level 21. Third tier of balance tree.  MUST BE CLICKED LIKE A BUFF (10 minute duration)</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=16689/natures-grasp" target="_blank" className="link">Nature's Grasp (Talent)</a></h4>
                <p>An instant cast roots that procs after being hit in melee form. Can be anywhere from 35%-100% based on improved talents. One of the most important abilities to escape or control two mobs.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=16940/brutal-impact" target="_blank" className="link">Brutal Impact (Talent)</a></h4>
                <p>Gives Pounce (cat opener stun) and Bash (bear stun) 1 extra second duration.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=16979/feral-charge" target="_blank" className="link">Feral Charge (Talent)</a></h4>
                <p>Charges an enemy, rooting them and interrupting spellcasting school for 4 secs. (Bear). Can also be used to create space by charging another mob or critter.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=16833/natural-shapeshifter" target="_blank" className="link">Natural Shapeshifter</a></h4>
                <p>Reduces mana cost of all shapeshifting forms by up to 30%.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=16902/natural-weapons" target="_blank" className="link">Natural Weapons</a></h4>
                <p>Improves physical damage in <strong>all</strong> forms by up to 10%.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=2893/abolish-poison" target="_blank" className="link">Abolish Poison (Skill)</a></h4>
                <p>Attempts to cure 1 poison, and then 1 more every 2 seconds for 8 seconds.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=2782/remove-curse" target="_blank" className="link">Remove Curse (Skill)</a></h4>
                <p>Removes one curse from target.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=770/faerie-fire" target="_blank" className="link">Faerie Fire (Skill)</a></h4>
                <p>Decreases the armor of the enemy by a large percent based on rank.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=24894/heart-of-the-wild" target="_blank" className="link">Heart of the Wild (Talent)</a></h4>
                <p> Increases your Intellect by up to 20% - additionally while in bear form your Stamina is increased by up to 20% and cat form your Strength by up to 20%.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=17061/furor" target="_blank" className="link">Furor (Talent)</a></h4>
                <p>Provides instant 40 energy (cat) or 10 rage (bear) at 5/5 talents.</p>
              </li>
              <li>
                <h4 className="flat"><a href="https://www.wowhead.com/classic/spell=29166/innervate" target="_blank" className="link">Innervate (Skill)</a></h4>
                <p>Provides instant 40 energy (cat) or 10 rage (bear) at 5/5 talents.</p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Talent Builds</h2>
            <h4>10-24</h4>
            <div className="guideTalents">
              <a href="https://www.wowhead.com/classic/talent-calc/embed/druid/510005301">See 10-24 Feral Druid Talents</a>
            </div>
            <p>Your first point recommendation is Nature's Grasp. This would be followed by Improved Wrath, Natural Weapons and Omen of Clarity. If you are still dying at low level, an alternative is to max out Improved Nature’s Grasp. Between Levels 25-30 you will be respecing if you took Improved Wrath so make sure to save 1 gold.</p>
            <h4>25-60</h4>
            <div className="guideTalents">
              <a href="https://www.wowhead.com/classic/talent-calc/embed/druid/014005301-5302511303002151-05">See 24-60 Feral Druid Talents</a>
            </div>
            <p>Once you respec you will want to likely run a build similar to this. There are variables here in talent points that will be explained. Once you have your 14 points into the balance tree, you will want to max out Furor (5/5) in the tier 1 resto tree. The benefit of this is any time you enter bear form you will always have enough rage to Bash (stun)  or to Feral Charge (later on), which is incredibly important for making space in hardcore. </p>
            <p>You will want to take 5/5 Ferocity, 2/2 Brutal Impact, 5/5 Thick Hide, Feral Charge, 3/3 Predatory Strikes, 2/2 Savage Fury, Feral Faerie Fire (Quality of Life more than necessary talent) 5/5 Heart of the Wild for your Level 54-58 push when gear gets harder to come by, this will be your powerspike for the final levels. In this build I have 3 points in Feral Aggression but you can place them anywhere you'd prefer - Primal Fury or Blood Frenzy are great choices as well. Feline swiftness is not a necessary talent for this build.</p>
          </section>
          <section>
            <h2>Recommended Professions</h2>
            <h4 className="flat">Alchemy/Herbalism</h4>
            <p>Single handedly the most important / viable hardcore profession for Druid.  Druid utilizes every stat and elixirs provide INT AGI STR and STAM as well as regen, absorb potions of different schools of magic, elixir of mongoose and more. Mana potions are much more valuable to a druid than healing potions and alchemy allows you to craft them easily, as these are harder to find on vendors. Druids can pick herbs in form which makes it easy to run around and gather what you need.</p>
          </section>
          <section>
            <h2>Class quests</h2>
            <ul className="unstyled">
              <li>
                <h4 className="flat">Bear form (Level 10)</h4>
                <p>Speak to the Great Bear Spirit in Moonglade to take on the Trial of the Bear. These Moonkins HIT HARD - it's easier to be successful closer to 12. - Root and slowly kill to ensure defeat! Try not to go out of mana</p>
                <p><strong>Alliance -</strong> Defeat Lunaclaw and speak to her to gain the strength of heart (Darkshore, Moonkin caves outside Auberdine.) </p>
                <p><strong>Horde -</strong> Defeat Lunaclaw and speak to her to gain the strength of heart ((Barrens, just outside of Camp Taurajo)) </p>
              </li>
              <li>
                <h4 className="flat">Aquatic Form (Level 16)</h4>
                <p>Shiny bauble in Moonglade Lake.  Be careful not to drown!</p>
                <p><strong>Alliance -</strong>One piece is in north Darkshore (48,11) and one is in Westfall (21,36) Be careful of reef sharks!</p>
                <p><strong>Horde -</strong> First piece (29, 29), Silverpine Forest and second, (56,8) Sludgen Fen, Barrens
</p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Using your forms efficiently</h2>
            <ul className="unstyled">
              <li>
                <h4 className="flat">Cat</h4>
                <p>Due to the toolkit being subpar from level 20-36, Cat form should only be used in single target mobs at level or below that can be bled. Cat form surge of power comes after level 36 when you have the full range of abilities including: Pounce, Ravage, Rip, Rake, Tiger’s Fury and Ferocious Bite.</p>
                <ul>
                  <li><strong>Kittyweaving -</strong> Using cat form to fish for Omen procs with 1.0 attack speed as it only procs off auto attacks. You can then use your Clearcasting to cast a max rank heal,  Moonfire or any melee ability.</li>
                  <li><strong>Dash - </strong>
                    An incredibly important cooldown that should be saved for dire situations where you need to escape. Keep in mind if you need to shapeshift out of Kat once you use Dash, you lose the speed bonus.</li>
                </ul>
              </li>
              <li>
                <h4 className="flat">Bear</h4>
                <p>Due to Thick Hide, Frenzied Regeneration, Feral Charge, Demoralizing Roar and other talents bear is the form you’d be in when you feel unsafe or are fighting multiple adversaries. In a situation where you feel like you need to run, bear form is the default form to use (instead of cat) because of the added health and armor and the ability to create space with bash and feral charge.</p>
              </li>
              <li>
                <h4 className="flat">Caster</h4>
                <p>Young Druids (Level 1-25) have Improved Wrath, Moonfire and Roots available to help control situations until Bear form becomes stronger.  Due to the lack of abilities that create rage generation, you want to avoid face tanking mobs with full health.  Many people die at lower levels due to overpulling mobs and not having many outs due to the lack of abilities.</p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Stat Analysis</h2>
            <table>
              <thead>
                <th>Stat</th>
                <th>Weight (Normalized)</th>
              </thead>
              <tbody>
                <tr>
                  <td>1 Stamina</td>
                  <td>10 hp</td>
                </tr>
                <tr>
                  <td>1 Agility</td>
                  <td>1 AP + Crit (Cat)</td>
                </tr>
                <tr>
                  <td>
                    1 Strength
                  </td>
                  <td>2 AP</td>
                </tr>
              </tbody>
            </table>
            <p><small>* These stats are PRE Heart of the Wild</small></p>
            <p>Druid isn’t incredibly gear or weapon reliant but there is still value to keeping an arsenal of gear in your bags!</p>
            <ul>
              <li><strong>For Innervate - </strong>You will want a weapon with a lot of Spirit if you can find one (Spirit will increase the amount of mana your regenerate)</li>
              <li><strong>With Natural Weapons - </strong> Your melee weapon can actually do a lot of damage if your weapon skill is up to par for times you get stuck in caster form. You can also regen mana this way while rolling hots on yourself.
              </li>
              <li><strong>While in form - </strong> Druid in form uses maces and staves as "stat sticks" so you don’t have to worry about top end or speed when in forms. You can also use 1 handed daggers, maces and offhands but they are not recommended.
              </li>
            </ul>
            <p>Do not shy away from gear with intellect or spirit because of shapeshifting, spellcasting and health & mana regeneration!</p>
          </section>
        </div>
      </div>
    </div>
  )

}
