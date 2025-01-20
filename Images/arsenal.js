// Sample data for demonstration purposes
const matchUpdates = [
    { time: "10'", event: "Goal by Saka" },
    { time: "25'", event: "Yellow Card to White" },
    { time: "45'", event: "Halftime" },
    { time: "60'", event: "Goal by Martinelli" },
    { time: "90'", event: "Fulltime" }
  ];
  
  const players = [
    { name: "Bukayo Saka", position: "Forward", number: 7 },
    { name: "Gabriel Martinelli", position: "Forward", number: 11 },
    { name: "Ben White", position: "Defender", number: 4 }
  ];
  
  // Display live match updates
  const matchUpdatesContainer = document.getElementById('match-updates');
  matchUpdates.forEach(update => {
    const updateElement = document.createElement('p');
    updateElement.textContent = `${update.time} - ${update.event}`;
    matchUpdatesContainer.appendChild(updateElement);
  });
  
  // Display player profiles
  const playerListContainer = document.getElementById('player-list');
  players.forEach(player => {
    const playerElement = document.createElement('div');
    playerElement.innerHTML = `
      <h3>${player.name}</h3>
      <p>Position: ${player.position}</p>
      <p>Number: ${player.number}</p>
    `;
    playerListContainer.appendChild(playerElement);
  });
  