const number_button = document.querySelector("#num-btn")

number_button.addEventListener("click", async () => {
  const participants = Number(document.querySelector("#n-user").value)
  const winners = Number(document.querySelector("#n-win").value)
  const win_data = await fetch(`https://www.random.org/integers/?num=${winners}&min=1&max=${participants}&col=2&base=10&format=plain&rnd=yes&quot`)
  const text = await win_data.text()
  const number_result = document.querySelector('#num-result')
  number_result.textContent(text)
});
