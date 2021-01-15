const game = () => {
  let pScore = 0;
  let cScore = 0;

  //   Starting The Game
  const start_game = () => {
    // Fuction Requirements
    const play_button = document.querySelector(".intro button");
    const intro_screen = document.querySelector(".intro");
    const match_screen = document.querySelector(".match");

    // Fade out Intro Screen and Fade In Start Screen
    play_button.addEventListener("click", () => {
      intro_screen.classList.add("fadeOut");
      match_screen.classList.add("fadeIn");
    });
  };

  // Play Game
  const play_game = () => {
    // Function Requirements
    const options = document.querySelectorAll(".options button");
    const player_hand = document.querySelector(".player_hand");
    const computer_hand = document.querySelector(".computer_hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computers Guess
    const computer_options = ["rock", "paper", "scissors"];

    // Add Event Listener To Each Button In The Query Selector
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Generate random number between 0 and 3, then round down to integer
        const computer_guess = Math.floor(Math.random() * 3);

        // The Guess In English
        const computer_result = computer_options[computer_guess];

        // Page Update Delay
        setTimeout(() => {
          // Compare Results Function
          compare_hands(this.textContent, computer_result);

          // Update Images
          player_hand.src = `assets/${this.textContent}.png`;
          computer_hand.src = `assets/${computer_result}.png`;
        }, 2000);

        // Hand Shake Animation
        player_hand.style.animation = "shake_player 2s ease";
        computer_hand.style.animation = "shake_computer 2s ease";
      });
    });
  };

  const update_score = () => {
    const player_score = document.querySelector(".player_score p");
    const computer_score = document.querySelector(".computer_score p");
    player_score.textContent = pScore;
    computer_score.textContent = cScore;
  };

  const compare_hands = (player_result, computer_result) => {
    const status = document.querySelector(".status");

    // Status is draw
    if (player_result === computer_result) {
      status.textContent = "DRAW";
      return;
    }
    // Check For Rock
    if (player_result === "rock") {
      if (computer_result === "scissors") {
        status.textContent = "PLAYER WINS";
        pScore++;
        update_score();
        return;
      } else {
        status.textContent = "COMPUTER WINS";
        cScore++;
        update_score();
        return;
      }
    }

    // Check For Paper
    if (player_result === "paper") {
      if (computer_result === "rock") {
        status.textContent = "PLAYER WINS";
        pScore++;
        update_score();
        return;
      } else {
        status.textContent = "COMPUTER WINS";
        cScore++;
        update_score();
        return;
      }
    }

    // Check For Scissors
    if (player_result === "scissors") {
      if (computer_result === "paper") {
        status.textContent = "PLAYER WINS";
        pScore++;
        update_score();
        return;
      } else {
        status.textContent = "COMPUTER WINS";
        cScore++;
        update_score();
        return;
      }
    }
  };

  //  Game Inner Functions
  start_game();
  play_game();
};

// Run Game
game();
