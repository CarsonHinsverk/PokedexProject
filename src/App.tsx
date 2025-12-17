import type { Component, JSX } from 'solid-js';

export default function Pokedex(): JSX.Element {
    return (
        /* Pokedex Container */
        <div id="pokedex" class="relative h-[800px] w-[1000px] flex

            before:content-[''] before:fixed before:h-[100%] before:w-[100%] before:left-0 before:top-0 
            before:bg-[radial-gradient(circle_at_center,_#00000000_0%,_#000000cc_80%)] before:z-[9999]">

            {/* Left Side of Pokedex */}
            <div id="left-side" class="relative h-[100%] w-[50%] left-[0%] top-[0%] border-[2.5px] border-solid border-[var(--dark-red)] rounded-tl-[20px] 
                rounded-bl-[20px] bg-[radial-gradient(circle_at_top_left,_var(--red)_30%,_var(--dark-red)_70%)]

                before:absolute before:h-[18%] before:w-[27%] before:left-[1.5%] before:top-[1.5%] before:rounded-[50%] before:z-[2]
                before:bg-[var(--white)] before:shadow-[0_2px_2px_1px_var(--dark-red)] before:border-[2.5px] before:border-solid before:border-[var(--dark-red)]">

                {/* Hinge */} 
                <div id="hinge" class="absolute h-[84.5%] w-[15%] right-[-0.5%] top-[16%] border-[2.5px] border-[var(--dark-red)] border-solid 
                    bg-gradient-to-r from-[var(--dark-red)] via-[var(--red)] to-[var(--dark-red)]"></div>

                {/* Big Blue Light */}
                <div id="blue-light" class="absolute h-[16%] w-[24%] left-[3%] top-[2.5%] rounded-[50%] z-[9999]
                    bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--blue)_40%,_var(--blue-gradient)_50%)]
                    shadow-[0_0_80px_20px_var(--blue-gradient)] shadow-inner-[0_0_10px_5px_var(--blue)]" ></div>

                {/* Red, Yellow, and Green Lights */}
                <div id="lights" class="relative h-[3.5%] w-[20%] top-[2.5%] left-[35%] z-[9999]">
                    <div id="red-light" class="absolute h-[100%] w-[25%] left-[0%] top-[0%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--red-light)_40%,_var(--red-light-gradient)_50%)]
                        shadow-[0_0_60px_20px_var(--red-light-gradient)] shadow-inner-[0_0_10px_5px_var(--red-light)]"></div>
                    
                    <div id="yellow-light" class="absolute h-[100%] w-[25%] left-[50%] top-[0%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]
                        shadow-[0_0_60px_20px_var(--yellow-light-gradient)] shadow-inner-[0_0_10px_5px_var(--yellow-light)]"></div>

                    <div id="green-light" class="absolute h-[100%] w-[25%] left-[100%] top-[0%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--green-light)_40%,_var(--green-light-gradient)_50%)] 
                        shadow-[0_0_60px_20px_var(--green-light-gradient)] shadow-inner-[0_0_10px_5px_var(--green-light)]"></div> 
                </div>

                {/* Separator Lines */}
                <div id="line1" class="absolute w-[50%] left-[0] top-[21%] border-b-[2.5px] border-b-[solid] border-b-[var(--dark-red)]
                    shadow-[0_1.5px_5px_0_var(--dark-red)] z-[2]"></div>

                <div id="line2" class="absolute w-[12%] left-[48.3%] top-[18.5%] border-b-[2.5px] border-b-[solid] border-b-[var(--dark-red)] rotate-[135deg]
                    shadow-[0_-1.5px_5px_0_var(--dark-red)] z-[2]"></div>

                <div id="line3" class="absolute w-[28%] right-[14%] top-[16%] border-b-[2.5px] border-b-[solid] border-b-[var(--dark-red)]
                    shadow-[0_1.5px_5px_0_var(--dark-red)] z-[2]"></div>

                {/* Left-Side Screen */}
                <div id="screen-border" class="absolute w-[65%] h-[35%] left-[10%] top-[25%] border-[2.5px] border-[solid] border-[var(--dark-red)]\
                    rounded-[15px] rounded-bl-[50px] bg-[var(--white)] shadow-[5px_3px_2px_-2.5px_var(--dark-red)] z-[2]">

                    <div id="red-dot1" class="absolute w-[3.5%] h-[4%] left-[45%] top-[3%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[50%] 
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"></div>

                    <div id="red-dot2" class="absolute w-[3.5%] h-[4%] right-[45%] top-[3%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[50%] 
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"></div>

                    <div id="main-screen" class="absolute w-[80%] h-[70%] left-[10%] top-[10%] bg-[var(--screen-black)] rounded-[5px]
                        shadow-[0_1.5px_2.5px_0_var(--black)] z-[3]">
                        {/* Screen content goes here */}
                    </div>

                    <div id="red-dot3" class="absolute w-[9%] h-[10%] left-[10%] bottom-[5%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[50%]
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"></div>

                    <div id="speakerbars" class="absolute h-[15%] w-[12%] right-[10%] top-[82.5%] z-[3]">

                        <div id="speakerbar1" class="absolute h-[0] w-[100%] left-[0] top-[15%] border-[2.5px] border-[solid] border-[var(--black)]
                            rounded-[5px] z-[4]"></div>

                        <div id="speakerbar2" class="absolute h-[0] w-[100%] left-[0] top-[45%] border-[2.5px] border-[solid] border-[var(--black)]
                            rounded-[5px] z-[4]"></div>

                        <div id="speakerbar3" class="absolute h-[0] w-[100%] left-[0] bottom-[15%] border-[2.5px] border-[solid] border-[var(--black)]
                            rounded-[5px] z-[4]"></div>
                    </div>
                </div>

                {/* Buttons */}
                <div id="black-button" class="absolute h-[6.5%] w-[10%] left-[9%] top-[64%] bg-[var(--black)] rounded-[50%] shadow-[0_2px_2px_3px_var(--dark-red)]
                    z-[2]"></div>

                <div id="wide-red-button" class="absolute h-[1.5%] w-[12%] left-[25%] top-[64%] bg-[var(--red-light)] border-[2.5px] border-[solid]
                    border-[var(--dark-red)] rounded-[5px] shadow-[0_2px_2px_0.5px_var(--dark-red)] z-[2]"></div>

                <div id="wide-blue-button" class="absolute h-[1.5%] w-[12%] left-[42%] top-[64%] bg-[var(--blue)] border-[2.5px] border-[solid]
                    border-[var(--dark-red)] rounded-[5px] shadow-[0_2px_2px_0.5px_var(--dark-red)] z-[2]"></div>

                <input type="number" id="number-input" placeholder="0000" value="" maxlength="4" min="1" max="1025" class="relative h-[14%] w-[40%] left-[7.5%] 
                    top-[64%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[5px] bg-[var(--screen-green)] 
                    shadow-inner-[0_0_3px_3px_var(--screen-black)] z-[2]"></input>

                <div id="d-pad">
                    <div id="circle"></div>
                </div>
            </div>

            <div id="right-side" class="h-[100%] w-[50%] right-0 top-0 bg-[var(--red)] border-[2.5px] border-solid 
                border-[var(--dark-red)] rounded-tr-[20px] rounded-br-[20px]">

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
