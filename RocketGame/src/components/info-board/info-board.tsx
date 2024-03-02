import { FC } from 'react';

import IInfoBoardProps from './interfaces/info-board-props';

import playerLeft from '../../images/rocket-up.png';
import playerRight from '../../images/rocket-up.png';

import './styles/info-board.scss';
	
const InfoBoard: FC<IInfoBoardProps> = (props: IInfoBoardProps) => {
	const styleInfoBoard = () => ({
		width: `100%`,
		maxWidth: `${ props.containerHeight }px`,
	})

	return <div className="info-board" style={ styleInfoBoard() }>
		<div className="info-board-header">
			<img src={ playerRight } alt="player" />
			<span className="header-text">Go-Rocket</span>
			<img src={playerLeft } alt="player" />
		</div>

		{ props.gameOver && <div className="game-over-area">
			<div className="game-over-title">Game Over</div>
			<div className="game-over-text">You scored { props.score }, better luck next time!</div>
		</div> }

		<div className="info-board-instructions">
    <ul>
        <li>Take control of your Rocket, navigating through the cosmos with precision and skill.</li>
        <li>Your mission: guide your Rocket to dock safely at each International Space Station scattered across the stars to progress to the next level.</li>
        <li>Begin your journey amongst a sea of stars, avoiding the perils of space debris and meteor showers.</li>
        <li>Successfully navigate through asteroid belts that divide the vastness of space.</li>
        <li>Watch out for the orbits of planets and moons, which can pull your Rocket off course with their gravitational force.</li>
        <li>Utilize space boosts and fuel orbs to keep your Rocket powered and on track.</li>
        <li>Collect space gems and rescue stranded astronauts to gain extra points.</li>
        <li>Remember, space is unforgiving. A collision with debris or a misstep in navigation could spell the end of your mission.</li>
        <li>Prepare for liftoff, and let's Go Rocket!</li>
    </ul>
</div>

		<div className="button-area">
			<button type="button" onClick={ props.startGame }>Play Game</button>
		</div>
	</div>
}

export default InfoBoard;
