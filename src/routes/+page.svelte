<script lang="ts">
  import { drawEnemy } from "./entities/enemy";
  import { drawPlayer, playerConstants } from "./entities/player";

  let mainCanvas: HTMLCanvasElement | null = null;
  let context: CanvasRenderingContext2D | null = null;
  let mapSize = [100, 200];
  const player = {
    x: 100,
    vx: 0,
    y: 100,
    vy: 0,
  };
  const pressedKeys = { w: false, a: false, s: false, d: false };

  $: if (mainCanvas) {
    context = mainCanvas.getContext("2d");
  }

  $: if (context) {
    drawPlayer(player.x, player.y, context);
  }

  const clearGame = () => {
    context?.clearRect(0, 0, context.canvas.width, context.canvas.width);
  };

  const updatePlayerPosition = () => {
    const { w, a, s, d } = pressedKeys;
    if ((!a && !d) || (a && d)) {
      player.vx = 0;
    } else if (d) {
      player.vx = playerConstants.maxSpeed;
    } else {
      player.vx = -playerConstants.maxSpeed;
    }

    player.x = player.x + player.vx;

    if ((!w && !s) || (w && s)) {
      player.vy = 0;
    } else if (s) {
      player.vy = playerConstants.maxSpeed;
    } else {
      player.vy = -playerConstants.maxSpeed;
    }

    player.y = player.y + player.vy;
  };

  const updateGame = () => {
    // checkEnemyCollision();
    // checkWallCollision();
    // checkCoinCollision();
    // checkCheckpointCollision();
    // checkGoalCollision();
    clearGame();
    if (context) {
      updatePlayerPosition();

      drawPlayer(player.x, player.y, context);
      drawEnemy(200, 200, context);
    }
  };

  $: console.log(pressedKeys);

  setInterval(updateGame, 20);

  let backgroundColor = "rgb(180, 181, 251)";

  const handleKey = (e: KeyboardEvent, isHeld: boolean) => {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        pressedKeys.w = isHeld;
        break;
      case "a":
      case "ArrowLeft":
        pressedKeys.a = isHeld;
        break;
      case "s":
      case "ArrowDown":
        pressedKeys.s = isHeld;
        break;
      case "d":
      case "ArrowRight":
        pressedKeys.d = isHeld;
        break;
    }
  };
</script>

<svelte:window
  on:keydown={(e) => handleKey(e, true)}
  on:keyup={(e) => handleKey(e, false)}
/>

<main style="--backgroundColor: {backgroundColor}">
  <canvas bind:this={mainCanvas} id="game-canvas" height={500} width={800} />
</main>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: var(--backgroundColor);
  }

  #game-canvas {
    background: var(--backgroundColor);
    border: 1px solid black;
    /* width: 100vw;
    height: 100vh; */
    display: block;
  }
</style>
