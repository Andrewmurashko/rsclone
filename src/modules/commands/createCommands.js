export default class CreateCommands {
  constructor() {
    this.main = document.querySelector('main');
  }

  init() {
    let template = '';
    const commandsContainer = document.createElement('div');
    commandsContainer.className = 'command-wrapper';
    template = `<h2>ALL TEAMS</h2>
    <ul class="teams">
      <li>Loading Teams...</li>
    </ul>
    <form class="add-teams">
      <input type="text" name="item" placeholder="Team name">
      <input type="submit" value="add Team">
    </form>
    <button class="button-startgame-play">start game</button>`;
    commandsContainer.innerHTML = template;
    this.main.appendChild(commandsContainer);
    return this.main;
  }
}
