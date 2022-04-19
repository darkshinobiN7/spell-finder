
document.querySelector('button').addEventListener('click', getSpell)


function getSpell(){

  const spellCorrect = document.querySelector('input').value.toLowerCase()
  const spellInput = spellCorrect.replace(/\s/g, '-')

  fetch(`https://www.dnd5eapi.co/api/spells/${spellInput}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.spell-name').innerText = data.name
        document.querySelector('.level-school').innerText = `Level ${data.level} ${data.school.name}`
        document.querySelector('.description').innerText = data.desc
        document.querySelector('.higher-level').innerText = `At Higher Levels: ${data.higher_level}`
        document.querySelector('.components').innerText = `Components: ${data.components} `
        document.querySelector('.range').innerText = `Range: ${data.range}`
        document.querySelector('.duration').innerText = `Duration: ${data.duration}`

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}