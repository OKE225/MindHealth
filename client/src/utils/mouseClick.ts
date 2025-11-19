import mouseClickSound from "../assets/mouse-click.mp3";

export const mouseClick = () => {
  const click = new Audio(mouseClickSound);

  click.volume = 0.1;
  click.play();
};
