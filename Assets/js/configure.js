console.log("configure.js run\n")
let uName = localStorage.getItem("User");
export class Character {
        constructor(race, cclass, spec, region, charName) {
            this.race = race;
            this.cclass = cclass;
            this.spec = spec;
            this.region = region;
            this.charName = charName;
        }

        toJSON() {
            return {
                race: this.race,
                cclass: this.cclass,
                spec: this.spec,
                region: this.region,
                charName: this.charName
            };
        }
        
        // race
        // class
        // specialization
        // region
    }
window.onload = () => {
    
    
    const onlyFormHTML = document.getElementById("onlyForm");
    const selectRace = document.getElementById("race-select");
    const selectClass = document.getElementById("class-select");
    const selectSpec = document.getElementById("spec-select");
    const selectRegion = document.getElementById("region-select");
    onlyFormHTML.addEventListener("submit", (event) => {
        event.preventDefault();
        let raceHTML = selectRace.value;
        console.log(raceHTML)
        let cclassHTML = selectClass.value;
        let specHTML = selectSpec.value;
        let regionHTML = selectRegion.value;
        let charNameHTML = uName;
        let uChar = new Character(raceHTML, cclassHTML, specHTML, regionHTML, charNameHTML);
        console.log(uChar)
        localStorage.setItem("Main", JSON.stringify(uChar.toJSON()));
        console.log(uChar.toJSON());
        alert("Your Character has been Created! Click 'View Character' to See Them!")
    })
}