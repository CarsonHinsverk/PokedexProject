import type { JSXElement } from 'solid-js'
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';

import Pokedex from './closed';

let acceptedChoice = false;

export default function openPokedex(): JSXElement {
    return (
        /* Pokedex Container */
        <div id="pokedex" class="relative h-[800px] w-[1000px] flex

            before:content-[''] before:fixed before:h-[100%] before:w-[100%] before:left-0 before:top-0 
            before:bg-[radial-gradient(circle_at_center,_#00000000_0%,_#000000cc_80%)] before:pointer-events-none before:z-[100]">

            {/* Left Side of Pokedex */}
            <div id="left-side" class="relative h-[100%] w-[50%] left-[0%] top-[0%] border-[2.5px] border-solid border-[var(--black)] rounded-tl-[20px] 
                rounded-bl-[20px] bg-[var(--dark-red)]

                before:absolute before:h-[18%] before:w-[27%] before:left-[1.5%] before:top-[1.5%] before:rounded-[50%] before:z-[2] before:content-['']
                before:bg-[var(--white)] before:shadow-[0_3px_6px_2px_var(--dark-red)] before:border-[2.5px] before:border-solid before:border-[var(--black)]">

                {/* Hinge */} 
                <div id="hinge" onClick={closeDex} class="absolute h-[84.5%] w-[15%] right-[-0.5%] top-[16%] border-[2.5px] border-[var(--black)] 
                    border-solid cursor-pointer z-[3]"/>

                {/* Big Blue Light */}
                <div id="blue-light" class="absolute h-[16%] w-[24%] left-[3%] top-[2.5%] rounded-[50%] bg-[var(--screen-black)] 
                    hover:before:animate-[blue-light-flicker_1s_steps(1)_infinite_alternate] hover:shadow-none transition duration-200 ease-in-out z-[3]

                    before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                    before:transition-opacity before:duration-100 before:opacity-0"/>

                {/* Red, Yellow, and Green Lights */}
                <div id="lights" class="relative h-[3.5%] w-[20%] top-[2.5%] left-[35%]">

                    <div id="red-light" class="absolute h-[100%] w-[25%] left-[0%] top-[0%] rounded-[50%] bg-[var(--black)] 
                        hover:before:animate-[red-light-flicker_1s_steps(1)_infinite_alternate] hover:shadow-none transition duration-200 ease-in-out z-[3]
                        
                        before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                        before:transition-opacity before:duration-100 before:opacity-0"/>
                    
                    <div id="yellow-light" class="absolute h-[100%] w-[25%] left-[50%] top-[0%] rounded-[50%] bg-[var(--black)] 
                        hover:before:animate-[yellow-light-flicker_1s_steps(1)_infinite_alternate] hover:shadow-none transition duration-200 ease-in-out z-[3]
                        
                        before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                        before:transition-opacity before:duration-100 before:opacity-0"/>

                    <div id="green-light" class="absolute h-[100%] w-[25%] left-[100%] top-[0%] rounded-[50%] bg-[var(--black)] 
                        hover:before:animate-[green-light-flicker_1s_steps(1)_infinite_alternate] hover:shadow-none transition duration-200 ease-in-out z-[3]
                        
                        before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                        before:transition-opacity before:duration-100 before:opacity-0"/> 

                </div>

                {/* Separator Lines */}
                <div id="line1" class="absolute w-[50%] left-[0] top-[21%] border-b-[2.5px] border-b-[solid] border-b-[var(--black)]
                    shadow-[0_3px_6px_2px_var(--dark-red)] z-[2]"/>

                <div id="line2" class="absolute w-[12%] left-[48.3%] top-[18.5%] border-b-[2.5px] border-b-[solid] border-b-[var(--black)] rotate-[135deg]
                    shadow-[0_-3px_6px_2px_var(--dark-red)] z-[2]"/>

                <div id="line3" class="absolute w-[28%] right-[14%] top-[16%] border-b-[2.5px] border-b-[solid] border-b-[var(--black)]
                    shadow-[0_3px_6px_2px_var(--dark-red)] z-[2]"/>

                {/* Left-Side Screen */}
                <div id="screen-border" class="absolute w-[65%] h-[42%] left-[10%] top-[25%] border-[2.5px] border-[solid] border-[var(--black)]
                    rounded-[15px] rounded-bl-[50px] bg-[var(--grey)] shadow-[0px_3px_6px_2px_var(--dark-red)]">

                    <div id="red-dot1" class="absolute w-[4%] h-[4%] left-[45%] top-[3%] border-[2.5px] border-[solid] border-[var(--black)] rounded-[50%] 
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"/>

                    <div id="red-dot2" class="absolute w-[4%] h-[4%] right-[45%] top-[3%] border-[2.5px] border-[solid] border-[var(--black)] rounded-[50%] 
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"/>

                    <div id="main-screen" class="absolute relative w-[80%] h-[70%] left-[10%] top-[10%] bg-[var(--screen-black)] rounded-[5px] transition 
                        duration-250 ease-in overflow-hidden z-[200]
                        
                        after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:z-[400] after:opacity-0
                        after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25)_1px,rgba(0,0,0,0)_1px)] after:bg-[length:100%_3px]
                        after:animate-[screen-flicker_0.10s_infinite]">

                        <img id="sprite" src="../../images/emptysquare.png" class="absolute w-full h-full inset-0 object-contain z-[300]"/>

                    </div>

                    <div id="red-dot3" class="absolute w-[10%] h-[10%] left-[10%] bottom-[5%] border-[2.5px] border-[solid] border-[var(--black)] rounded-[50%]
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"/>

                    <div id="speakerbars" class="absolute h-[15%] w-[12%] right-[10%] top-[82.5%] z-[3]">

                        <div id="speakerbar1" class="absolute h-[0] w-[100%] left-[0] top-[15%] border-[2.5px] border-[solid] border-[var(--black)]
                            rounded-[5px] z-[4]"/>

                        <div id="speakerbar2" class="absolute h-[0] w-[100%] left-[0] top-[45%] border-[2.5px] border-[solid] border-[var(--black)]
                            rounded-[5px] z-[4]"/>

                        <div id="speakerbar3" class="absolute h-[0] w-[100%] left-[0] bottom-[15%] border-[2.5px] border-[solid] border-[var(--black)]
                            rounded-[5px] z-[4]"/>

                    </div>
                    
                </div>

                {/* Buttons */}
                <button id="black-button" class="absolute h-[7%] w-[11%] left-[9%] top-[70%] bg-[var(--black)] rounded-[50%] shadow-[0_3px_6px_2px_var(--dark-red)]
                    cursor-pointer hover:bg-[var(--dark-grey)] transition ease-in-out duration-200 z-[2]" onClick={powerToggle}></button>

                <div id="wide-red-button" class="absolute h-[1.5%] w-[13%] left-[23%] top-[70%] bg-[var(--red-light)] border-[2.5px] border-[solid]
                    border-[var(--black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] cursor-pointer hover:bg-[var(--light-red)] transition ease-in-out 
                    duration-200 z-[2]" onClick={spriteGrab}/>

                <div id="wide-blue-button" class="absolute h-[1.5%] w-[13%] left-[42%] top-[70%] bg-[var(--blue)] border-[2.5px] border-[solid]
                    border-[var(--black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] cursor-pointer hover:bg-[var(--light-blue)] transition ease-in-out 
                    duration-200 z-[2]" onClick={shinySpriteGrab}/>

                <input id="name-input" placeholder="NAME" class="absolute h-[12%] w-[30%] left-[22%] top-[79%] rounded-[5px] text-base text-center 
                    text-[var(--screen-green)] bg-[var(--screen-black)] z-[200]"/>

                <div id="d-pad-h" class="absolute w-[15%] h-[3%] right-[25%] top-[75%] rounded-[8px] bg-[var(--black)] shadow-[0_1px_3px_0_var(--dark-red)] z-[2]"/>

                <div id="d-pad-v" class="absolute w-[15%] h-[3%] right-[25%] top-[75%] rounded-[8px] bg-[var(--black)] rotate-90 z-[2]">

                    <div id="circle" class="absolute w-[25%] h-[75%] right-[37%] top-[15%] rounded-[50%] bg-[radial-gradient(circle_at_center,_var(--black)_30%,_var(--screen-black)_70%)] 
                        z-[3]"/>

                </div>
                    
            </div>

            <div id="right-side" class="absolute h-[75.8%] w-[50.2%] right-0 bottom-0 border-[2.5px] border-solid border-[var(--black)] rounded-tr-[20px] 
                rounded-br-[20px] bg-[var(--dark-red)] transition duration-500 ease-in
                
                before:absolute before:w-[44%] before:h-[11%] before:left-[-0.1%] before:top-[-11%] before:bg-[var(--dark-red)] before:border-t-[2.5px] before:border-t-[solid] 
                before:border-t-[var(--black)] before:z-[0]
                
                after:absolute after:w-[18.3%] after:h-[13%] after:left-[35.7%] after:top-[-7.5%] after:bg-[var(--dark-red)] after:border-t-[2.5px] after:border-t-[solid] 
                after:border-t-[var(--black)] after:rotate-[45deg] after:z-[1]">

                <div id="side-screen" class="relative w-[85%] h-[20%] left-[7.5%] top-[10%] bg-[var(--screen-black)] rounded-[5px] text-base text-[var(--screen-green)] break-normal 
                    p-[10px] z-[200]"/>

                <div id="blue-buttons" class="absolute grid grid-rows-2 grid-cols-5 w-[85%] h-[20%] left-[7.5%] top-[35%] bg-[var(--black)]
                    shadow-[0_3px_6px_2px_var(--dark-red)] z-[3]">

                    <div id="blue-button1" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getCategory}/>

                    <div id="blue-button2" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getHeight}/>

                    <div id="blue-button3" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getWeight}/>

                    <div id="blue-button4" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getHp}/>

                    <div id="blue-button5" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getAttack}/>

                    <div id="blue-button6" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getDefense}/>

                    <div id="blue-button7" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getSpecialAttack}/>

                    <div id="blue-button8" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getSpecialDefense}/>

                    <div id="blue-button9" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={getSpeed}/>

                    <div id="blue-button10" class="relative w-[100%] h-[100%] bg-[var(--dark-blue)] border-[2.5px] border-[solid] border-[var(--black)] 
                            cursor-pointer hover:bg-[var(--blue)] transition ease-in-out duration-200 z-[4]" onClick={playCry}/>

                </div>

                <div id="wide-black-buttons" class="absolute flex justify-between w-[34%] h-[3%] right-[7.5%] top-[57.5%] z-[3]">

                    <div id="wide-black-button" class="relative w-[45%] h-[100%] bg-[var(--black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[4]"/>
                    <div id="wide-black-button" class="relative w-[45%] h-[100%] bg-[var(--black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[4]"/>

                </div>

                <div id="white-buttons" class="absolute flex grid-justify-between w-[33%] h-[10%] left-[7.5%] top-[63%] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] 
                    z-[3]">

                    <div id="white-button" class="relative h-[100%] w-[50%] bg-[var(--grey)] border-[2.5px] border-[solid] border-[var(--black)] 
                        rounded-tl-[5px] rounded-bl-[5px] z-[4]"></div>

                    <div id="white-button" class="relative h-[100%] w-[50%] bg-[var(--grey)] border-[2.5px] border-[solid] border-[var(--black)] 
                        rounded-tr-[5px] rounded-br-[5px] z-[4]"></div>

                </div>

                <div id="right-yellow-light" class="absolute h-[8%] w-[9%] right-[8%] top-[68%] rounded-[50%] bg-[var(--black)] 
                    hover:before:animate-[yellow-light-flicker_1s_steps(1)_infinite_alternate] hover:shadow-none transition duration-200 ease-in-out z-[3]
                    
                    before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                    before:transition-opacity before:duration-100 before:opacity-0"/>

                <div id="small-screens" class="absolute flex justify-between w-[85%] h-[12%] left-[7.5%] top-[81%]">

                    <div id="small-screen-l-container" class="relative flex items-center justify-center w-[45%] h-[100%] bg-[var(--screen-black)] rounded-[5px] z-[200]">
                        <p id="small-screen-l" class="text-base text-center text-[var(--screen-green)] break-normal inline-block align-middle"></p>
                    </div>

                    <div id="small-screen-r-container" class="relative flex items-center justify-center w-[45%] h-[100%] bg-[var(--screen-black)] rounded-[5px] z-[200]">
                        <p id="small-screen-r" class="text-base text-center text-[var(--screen-green)] break-normal inline-block align-middle"></p>
                    </div>

                </div>

            </div>

        </div>
    );
};

function closeDex(): void {
        const root: HTMLElement | null = document.getElementById('root');
    
        if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
            throw new Error(
                'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
            );
        }
    
        const dispose = render(() => <Pokedex />, document.getElementById("root") as HTMLElement);
        dispose();
    
        render(() => <Pokedex />, document.getElementById("root") as HTMLElement);
}

async function powerToggle(): Promise<void> {
    document.addEventListener('keydown', async (event) => {
        if(event.key === 'Enter') {
            setTypes();
            try {
                const pokemonData: any = await fetchPokemon();

                const sprite: any = pokemonData.sprites.front_default;
                spriteScreen.src = sprite;

                const response: Response = await fetch(pokemonData.species.url);
                const speciesData: any = await response.json();

                let category: string = "";
                let num = 0;
                while(category == "") {
                    if(speciesData.genera[num].language.name == "en") {
                        category = speciesData.genera[num].genus;
                    }
                    num += 1
                }
                sideScreen.textContent = `The ${category}`
            }
            catch {
                spriteScreen.src = "../../images/emptysquare.png";
                sideScreen.textContent = "";
            }
            
            if(spriteScreen.src !== "../../images/emptysquare.png") {
                acceptedChoice = true;
            }
        }
    });

    const mainScreen = document.getElementById(`main-screen`) as HTMLElement;
    const spriteScreen = document.getElementById(`sprite`) as HTMLImageElement;
    const blueLight = document.getElementById(`blue-light`) as HTMLElement;
    const redLight = document.getElementById(`red-light`) as HTMLElement;
    const yellowLight = document.getElementById(`yellow-light`) as HTMLElement;
    const greenLight = document.getElementById(`green-light`) as HTMLElement;
    const rightYellowLight = document.getElementById(`right-yellow-light`) as HTMLElement;
    const leftSide = document.getElementById(`left-side`) as HTMLElement;
    const rightSide = document.getElementById(`right-side`) as HTMLElement;
    const hinge = document.getElementById(`hinge`) as HTMLElement;

    if(mainScreen.classList.contains('bg-[var(--screen-black)]')) {
        mainScreen.classList.remove('bg-[var(--screen-black)]', 'after:opacity-0', 'before:opacity-0')
        mainScreen.classList.add('bg-[var(--white)]', 'shadow-[0_0_60px_20px_var(--white)]')

        blueLight.classList.add('shadow-[0_0_80px_20px_var(--blue-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--blue)_40%,_var(--blue-gradient)_50%)]')

        redLight.classList.add('shadow-[0_0_60px_20px_var(--red-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--red-light)_40%,_var(--red-light-gradient)_50%)]')

        yellowLight.classList.add('shadow-[0_0_60px_20px_var(--yellow-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]')

        greenLight.classList.add('shadow-[0_0_60px_20px_var(--green-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--green-light)_40%,_var(--green-light-gradient)_50%)]')
        
        rightYellowLight.classList.add('shadow-[0_0_60px_20px_var(--yellow-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]')

        leftSide.classList.add('bg-[radial-gradient(circle_at_top_left,_var(--light-red)_30%,_var(--red)_50%,_var(--dark-red)_70%)]')
        rightSide.classList.add('bg-[radial-gradient(circle_at_bottom_right,_var(--light-red)_30%,_var(--red)_50%,_var(--dark-red)_70%)]')

        hinge.classList.add('bg-gradient-to-r', 'from-[var(--red)]', 'via-[var(--light-red)]', 'via-[var(--red)]', 'to-[var(--dark-red)]')
    }
    else {
        mainScreen.classList.remove('bg-[var(--white)]', 'shadow-[0_0_60px_20px_var(--white)]')
        mainScreen.classList.add('bg-[var(--screen-black)]', 'after:opacity-0', 'before:opacity-0')
        spriteScreen.src = "../../images/emptysquare.png" 

        blueLight.classList.remove('shadow-[0_0_80px_20px_var(--blue-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--blue)_40%,_var(--blue-gradient)_50%)]')

        redLight.classList.remove('shadow-[0_0_60px_20px_var(--red-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--red-light)_40%,_var(--red-light-gradient)_50%)]')

        yellowLight.classList.remove('shadow-[0_0_60px_20px_var(--yellow-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]')

        greenLight.classList.remove('shadow-[0_0_60px_20px_var(--green-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--green-light)_40%,_var(--green-light-gradient)_50%)]')

        rightYellowLight.classList.remove('shadow-[0_0_60px_20px_var(--yellow-light-gradient)]', 'z-[200]', 'before:opacity-100',
            'before:bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]')

        leftSide.classList.remove('bg-[radial-gradient(circle_at_top_left,_var(--light-red)_30%,_var(--red)_50%,_var(--dark-red)_70%)]')
        rightSide.classList.remove('bg-[radial-gradient(circle_at_bottom_right,_var(--light-red)_30%,_var(--red)_50%,_var(--dark-red)_70%)]')

        hinge.classList.remove('bg-gradient-to-r', 'from-[var(--red)]', 'via-[var(--light-red)]', 'via-[var(--red)]', 'to-[var(--dark-red)]')
    }

    const nameInput = document.getElementById(`name-input`) as HTMLInputElement;
    const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
    const smallScreenLeft = document.getElementById(`small-screen-l`) as HTMLElement;
    const smallScreenRight = document.getElementById(`small-screen-r`) as HTMLElement;

    nameInput.value = "";
    sideScreen.textContent = "";
    smallScreenLeft.textContent = "";
    smallScreenRight.textContent = "";
}

function isOn(): Boolean {
    const mainScreen = document.getElementById(`main-screen`) as HTMLElement;
    if(mainScreen.classList.contains('bg-[var(--white)]')) {
        return true;
    } else { return false }
}

async function fetchPokemon(): Promise<any> {
    if(isOn()) {
        const nameInput = document.getElementById(`name-input`) as HTMLInputElement;
        const pokemonName: string = nameInput.value.toLowerCase();

        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data: any = await response.json();

        return data;
    }
}

async function spriteGrab(): Promise<void> {
    if(acceptedChoice === true) {
        const spriteScreen = document.getElementById(`sprite`) as HTMLImageElement;
        try {
            const pokemonData: any = await fetchPokemon();

            const sprite: any = pokemonData.sprites.front_default;
            spriteScreen.src = sprite;
        }
        catch {
            spriteScreen.src = "../../images/emptysquare.png";
        }
    }
}

async function shinySpriteGrab(): Promise<void> {
    if(acceptedChoice === true) {
        const spriteScreen = document.getElementById(`sprite`) as HTMLImageElement;
        try {
            const pokemonData: any = await fetchPokemon();

            const shinySprite: any = pokemonData.sprites.front_shiny;
            spriteScreen.src = shinySprite;
        }
        catch {
            spriteScreen.src = "../../images/emptysquare.png";
        }
    }
}

function capitalize(word: string): string {
    const firstChar = word[0].toUpperCase();
    return firstChar + word.slice(1);
}

async function setTypes(): Promise<void> {
    const leftSmallScreen = document.getElementById(`small-screen-l`) as HTMLElement;
    const rightSmallScreen = document.getElementById(`small-screen-r`) as HTMLElement;
    try {
        const pokemonData: any = await fetchPokemon();

        const type1: string = pokemonData.types[0].type.name;
        leftSmallScreen.textContent = capitalize(type1);

        if(pokemonData.types[1]) {
            const type2: string = pokemonData.types[1].type.name;
            rightSmallScreen.textContent = capitalize(type2);
        } else { rightSmallScreen.textContent = ""; }
    }
    catch {
        leftSmallScreen.textContent = "";
        rightSmallScreen.textContent = "";
    }
}

async function getCategory(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try {
            const pokemonData: any = await fetchPokemon();
            const response: Response = await fetch(pokemonData.species.url);
            const speciesData: any = await response.json();

            let category: string = "";
            let num = 0;
            while(category == "") {
                if(speciesData.genera[num].language.name == "en") {
                    category = speciesData.genera[num].genus;
                }
                num += 1
            }
            sideScreen.textContent = `The ${category}`
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getHeight(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const height: number = (pokemonData.height) / 10;
            sideScreen.textContent = `Height: ${height} m`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getWeight(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const weight: number = (pokemonData.weight) / 10;
            sideScreen.textContent = `Weight: ${weight} kg`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getHp(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const health: number = pokemonData.stats[0].base_stat;
            sideScreen.textContent = `Base HP: ${health} points`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getAttack(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const attack: number = pokemonData.stats[1].base_stat;
            sideScreen.textContent = `Base Attack: ${attack} points`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getDefense(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const defense: number = pokemonData.stats[2].base_stat;
            sideScreen.textContent = `Base Defense: ${defense} points`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getSpecialAttack(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const specialAttack: number = pokemonData.stats[3].base_stat;
            sideScreen.textContent = `Base Special Attack: ${specialAttack} points`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getSpecialDefense(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const specialDefense: number = pokemonData.stats[4].base_stat;
            sideScreen.textContent = `Base Special Defense: ${specialDefense} points`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function getSpeed(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon() ;

            const speed: number = pokemonData.stats[5].base_stat;
            sideScreen.textContent = `Base Speed: ${speed} points`;
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}

async function playCry(): Promise<void> {
    if(acceptedChoice === true) {
        const sideScreen = document.getElementById(`side-screen`) as HTMLElement;
        try{
            const pokemonData: any = await fetchPokemon();

            const cry = new Audio(pokemonData.cries.latest);
            sideScreen.textContent = 'Playing cry...'
            cry.play()
        }
        catch {
            sideScreen.textContent = "";
        }
    }
}


