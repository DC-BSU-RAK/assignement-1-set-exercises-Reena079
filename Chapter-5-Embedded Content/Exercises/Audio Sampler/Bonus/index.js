//Audio Samples
const samples = [
    { name: "Ah-Ha", duration: "1.4", file: "ah-ha.mp3" },
    { name: "Dan", duration: "0.5", file: "dan.mp3" },
    { name: "Back of the net", duration: "1.02", file: "back-of-the-net.mp3" },
    { name: "Bang out of order", duration: "1.38", file: "bangoutoforder.mp3" },
    { name: "Email Of the evening", duration: "1.49", file: "emailoftheevening.mp3" },
    { name: "I ate a scotch egg", duration: "1.91", file: "iateascotchegg.mp3" },
    { name: "I'm Confused", duration: "1.49", file: "imconfused.mp3" },
    { name: "Not Assigned", duration: "1.07" },
    { name: "Hello Partridge", duration: "2.25", file: "hellopartridge.mp3" },
  ];
  //Soundboard Container
  const container = document.getElementById("soundboard");
  
  //Samples for each element
  samples.forEach((sample, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="index">${10 + i}.</div>
      <div class="title">${sample.name}</div>
      <div class="duration">${sample.duration}</div>
    `;
  
    card.addEventListener("click", () => {
      const audio = new Audio(`Audio Samples/${sample.file}`);
      audio.play();
    });
  
    container.appendChild(card);
  });
  