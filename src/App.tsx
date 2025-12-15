import type { Component, JSX } from 'solid-js';

export default function Pokedex(): JSX.Element {
  return (
    /* Pokedex Container */
    <div id="pokedex" class="relative h-[80vh] w-[80vw] 

      before:content-[''] before:fixed before:h-[100vh] before:w-[100vw] before:left-0 before:top-0 
      before:bg-[radial-gradient(circle_at_center,_#00000000_0%,_#000000cc_80%)] before:z-[9999]">

      {/* Left Side of Pokedex */}
      <div id="left-side" class="relative h-[100%] w-[50%] left-0 top-0 bg-[var(--red)] border-[2.5px] border-solid 
        border-[var(--dark-red)] rounded-tl rounded-bl
        
        before:content-[''] before:absolute before:h-[16%] before:w-[24%] before:left-[3%] before:top-[2.5%]
        before:bg-[var(--white)] before:border-[1.5px] before:border-solid before:border-[var(--dark-red)]
        before:rounded-[50%] box-shadow-[inset_0_2px_2px_1px_var(--dark-red)] before:z-[2]">

        {/* Hinge */} 
        <div id="hinge" class="h-[84.4%] w-[15%] right-[-0.5%] bottom-[-0.5%] bg-[linear-gradient(to_right,
          _var(--dark-red)_-25%,_var(--light-red),_var(--dark-red)_110%)] border-[2.5px] border-solid 
          border-[var(--dark-red)] z-[2] 
          
          before:content-[''] before:absolute before:h-[0%] before:w-[100%] before:left-[0%] before:bottom-[90%] 
          before:border-t-[2.5px] before:border-solid before:border-[var(--dark-red)] before:z-[2] 
          
          after:content-[''] after:absolute after:h-[0%] after:w-[100%] after:left-[0%] after:bottom-[90%] 
          after:border-t-[2.5px] after:border-solid after:border-[var(--dark-red)] after:z-[2]"></div>

        {/* Big Blue Light */}
        <div id="blue-light" class=""></div>
        <div id="lights">
            <div id="red-light"></div>
            <div id="yellow-light"></div>
            <div id="green-light"></div>                
        </div>
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>
        <div id="screen-border">
            <div id="corner"></div>
            <div id="red-dot1"></div>
            <div id="red-dot2"></div>
            <div id="main-screen">
                {/* Screen content goes here */}
            </div>
            <div id="red-dot3"></div>
            <div id="speakerbars">
                <div id="speakerbar1"></div>
                <div id="speakerbar2"></div>
                <div id="speakerbar3"></div>
            </div>
        </div>
        <div id="black-button"></div>
        <div id="wide-red-button"></div>
        <div id="wide-blue-button"></div>
        <input type="number" 
            class="number-input" 
            placeholder="0000" 
            value="" 
            maxlength="4" 
            min="1" 
            max="1025"></input>
        <div id="d-pad">
            <div id="circle"></div>
        </div>
      </div>

      <div id="right-side" class="h-[76.5%] w-[48.8%] right-0 top-23.5% bg-[var(--red)] border-[2.5px] border-solid 
        border-[var(--dark-red)] rounded-tr rounded-br">

        <div id="side-screen">
            {/* Side screen content goes here */}
        </div>
        <div id="blue-buttons">
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
            <div id="blue-button"></div>
        </div>
        <div id="wide-black-buttons">
            <div id="wide-black-button"></div>
            <div id="wide-black-button"></div>
        </div>
        <div id="white-buttons">
            <div id="white-button"></div>
            <div id="white-button"></div>
        </div>
        <div id="right-yellow-light"></div>
        <div id="small-screens">
            <div id="small-screen">
                {/* Small screen content goes here */}
            </div>
            <div id="small-screen">
                {/* Small screen content goes here */}
            </div>
        </div>
      </div>

    </div>
  );
};
