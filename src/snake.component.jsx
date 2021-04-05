import React from 'react';
import './snake.scss';

class Snake extends React.Component {
    
    componentDidMount() {
        const board_border = 'black';
        const board_background = "rgba(200, 100, 0, 0.5)";
        const snake_col = 'rgba(200, 200, 0, 0.8)';
        const snake_border = 'rgba(255,255,255,0)';

        // Framerate is the same as box size
        const framerate = 20;

        // How much score goes up per food
        let score_growth = 5;

        // Setting the speed. The lower, the faster (Make this LET when it's changeable)
        const initial_speed = 100;
        let speed = 0+initial_speed;
        let speed_increase = 5;

        const initial_snake = [
          {x: 200, y: 200},
          {x: 190, y: 200},
          {x: 180, y: 200},
          {x: 170, y: 200},
          {x: 160, y: 200}
        ]

        let snake = initial_snake;
    
        // Initial score
        let score = 0;
        
        // True if changing direction
        let changing_direction = false;
        // Horizontal velocity
        let food_x;
        let food_y;
        let dx = framerate;
        // Vertical velocity
        let dy = 0;
        
        
        // Get the canvas element
        let snakeboard = document.getElementById("snakeboard");
        // Return a two dimensional drawing context
        let snakeboard_ctx = snakeboard.getContext("2d");

        const initialize_game = () => {
            window.location.href = '/';
        }
        
        // main function called repeatedly to keep the game running
        const main = () => {
            
            if (has_game_ended()) return;
                
            changing_direction = false;
            setTimeout(function onTick() {
            clear_board();
            drawFood();
            move_snake();
            drawSnake();
            // Repeat
            main();
          }, speed)
        }
        
        // draw a border around the canvas
        const clear_board = () => {
          //  Select the colour to fill the drawing
          snakeboard_ctx.fillStyle = board_background;
          //  Select the colour for the border of the canvas
          snakeboard_ctx.strokestyle = board_border;
          // Draw a "filled" rectangle to cover the entire canvas
          snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
          // Draw a "border" around the entire canvas
          snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
        }
        
        // Draw the snake on the canvas
        const drawSnake = () => {
          // Draw each part
          snake.forEach(drawSnakePart)
        }
    
        const drawFood = () => {
          snakeboard_ctx.fillStyle = 'lightgreen';
          snakeboard_ctx.strokestyle = 'darkgreen';
          snakeboard_ctx.fillRect(food_x, food_y, framerate, framerate);
          snakeboard_ctx.strokeRect(food_x, food_y, framerate, framerate);
        }
        
        // Draw one snake part
        const drawSnakePart = (snakePart) => {
    
          // Set the colour of the snake part
          snakeboard_ctx.fillStyle = snake_col;
          // Set the border colour of the snake part
          snakeboard_ctx.strokestyle = snake_border;
          snakeboard_ctx.lineWidth = 0;
          // Draw a "filled" rectangle to represent the snake part at the coordinates
          // the part is located
          snakeboard_ctx.fillRect(snakePart.x, snakePart.y, framerate, framerate);
          // Draw a border around the snake part
          snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, framerate, framerate);
        }
    
        const has_game_ended = () => {
          for (let i = 4; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
          }
          const hitLeftWall = snake[0].x < 0;
          const hitRightWall = snake[0].x > snakeboard.width - framerate;
          const hitToptWall = snake[0].y < 0;
          const hitBottomWall = snake[0].y > snakeboard.height - framerate;
          return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
        }
    
        const random_food = (min, max) => {
          return Math.round((Math.random() * (max-min) + min) / framerate) * framerate;
        }
    
        const gen_food = () => {
          // Generate a random number the food x-coordinate
          food_x = random_food(0, snakeboard.width - framerate);
          // Generate a random number for the food y-coordinate
          food_y = random_food(0, snakeboard.height - framerate);
          // if the new food location is where the snake currently is, generate a new food location
          snake.forEach(function has_snake_eaten_food(part) {
            const has_eaten = part.x === food_x && part.y === food_y;
            if (has_eaten) gen_food();
          });
        }
    
        const change_direction = (event) => {
          const LEFT_KEY = 37;
          const RIGHT_KEY = 39;
          const UP_KEY = 38;
          const DOWN_KEY = 40;
          const ENTER_KEY = 13;
          
        // Prevent the snake from reversing
        
          if (changing_direction) return;
          changing_direction = true;
          const keyPressed = event.keyCode;
          const goingUp = dy === -framerate;
          const goingDown = dy === framerate;
          const goingRight = dx === framerate;
          const goingLeft = dx === -framerate;
          if (keyPressed === ENTER_KEY) {
              initialize_game();
          }
          if (keyPressed === LEFT_KEY && !goingRight) {
            dx = -framerate;
            dy = 0;
          }
          if (keyPressed === UP_KEY && !goingDown) {
            dx = 0;
            dy = -framerate;
          }
          if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = framerate;
            dy = 0;
          }
          if (keyPressed === DOWN_KEY && !goingUp) {
            dx = 0;
            dy = framerate;
          }
        }
    
        const move_snake = () => {
          // Create the new Snake's head
          const head = {x: snake[0].x + dx, y: snake[0].y + dy};
          // Add the new head to the beginning of snake body
          snake.unshift(head);
          const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
          if (has_eaten_food) {
            // Increase speed
            speed -= speed_increase;
            // Increase score
            score += score_growth;
            // Display score on screen
            document.getElementById('score').innerHTML = score;
            // Generate new food location
            gen_food();
          } else {
            // Remove the last part of snake body
            snake.pop();
          }
        }


        // Start game
        main();

        gen_food();
    
        document.addEventListener("keydown", change_direction);

    }

    render() {

        return (
            <div id="SnakeGame">
                <div id="score">0</div>
                <canvas id="snakeboard" width="800" height="800"></canvas>
            </div> 
        )

    }

}


export default Snake;