import type { JSXElement } from 'solid-js'
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';

import Pokedex from './open';

export default function closedPokedex(): JSXElement {
    return (
        /* Pokedex Container */
        <button id="pokedex" onClick={openDex} class="relative h-[800px] w-[500px] flex cursor-pointer

            before:content-[''] before:fixed before:h-[100%] before:w-[100%] before:left-0 before:top-0 
            before:bg-[radial-gradient(circle_at_center,_#00000000_0%,_#000000cc_80%)] before:pointer-events-none before:z-[100]">

            {/* Left Side of Pokedex */}
            <div id="left-side" class="relative h-[100%] w-[100%] left-0 top-0 border-[2.5px] border-solid border-[var(--black)] rounded-tl-[20px] 
                rounded-bl-[20px] bg-[var(--dark-red)]

                before:absolute before:h-[18%] before:w-[27%] before:left-[1.5%] before:top-[1.5%] before:rounded-[50%] before:z-[2] before:content-['']
                before:bg-[var(--white)] before:shadow-[0_3px_6px_2px_var(--dark-red)] before:border-[2.5px] before:border-solid before:border-[var(--black)]">

                {/* Hinge */} 
                <div id="hinge" class="absolute h-[84.5%] w-[15%] right-[-0.5%] top-[16%] border-[2.5px] border-[var(--black)] border-solid z-[3]"/>

                {/* Big Blue Light */}
                <div id="blue-light" class="absolute h-[16%] w-[24%] left-[3%] top-[2.5%] rounded-[50%] bg-[var(--screen-black)] 
                    transition duration-200 ease-in z-[3]

                    before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                    before:transition-opacity before:duration-100 before:opacity-0"/>

                {/* Red, Yellow, and Green Lights */}
                <div id="lights" class="relative h-[3.5%] w-[20%] top-[2.5%] left-[35%]">

                    <div id="red-light" class="absolute h-[100%] w-[25%] left-[0%] top-[0%] rounded-[50%] bg-[var(--black)] z-[3]
                        
                        before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                        before:transition-opacity before:duration-100 before:opacity-0"/>
                    
                    <div id="yellow-light" class="absolute h-[100%] w-[25%] left-[50%] top-[0%] rounded-[50%] bg-[var(--black)] z-[3]
                        
                        before:absolute before:h-[100%] before:w-[100%] before:left-[0] before:top-[0] before:rounded-[50%]
                        before:transition-opacity before:duration-100 before:opacity-0"/>

                    <div id="green-light" class="absolute h-[100%] w-[25%] left-[100%] top-[0%] rounded-[50%] bg-[var(--black)] z-[3]
                        
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
                    
            </div>

        </button>
    );
};

function openDex(): void {
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