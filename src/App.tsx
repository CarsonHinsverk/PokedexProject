import type { Component, JSX } from 'solid-js';

export default function Pokedex(): JSX.Element {
    return (
        /* Pokedex Container */
        <div id="pokedex" class="relative h-[800px] w-[1000px] flex

            before:content-[''] before:fixed before:h-[100%] before:w-[100%] before:left-0 before:top-0 
            before:bg-[radial-gradient(circle_at_center,_#00000000_0%,_#000000cc_80%)] before:z-[9999]">

            {/* Left Side of Pokedex */}
            <div id="left-side" class="relative h-[100%] w-[50%] left-[0%] top-[0%] border-[2.5px] border-solid border-[var(--dark-red)] rounded-tl-[20px] 
                rounded-bl-[20px] bg-[radial-gradient(circle_at_top_left,_var(--light-red)_30%,_var(--red)_50%,_var(--dark-red)_70%)]

                before:absolute before:h-[18%] before:w-[27%] before:left-[1.5%] before:top-[1.5%] before:rounded-[50%] before:z-[2] before:content-['']
                before:bg-[var(--white)] before:shadow-[0_3px_6px_2px_var(--dark-red)] before:border-[2.5px] before:border-solid before:border-[var(--dark-red)]

                after:absolute after:content-[''] after:h-[13%] after:w-[31%] after:left-[21.5%] after:top-[78.5%] after:rounded-[5px] after:border-[5px] 
                after:border-[solid] after:border-[var(--screen-black)] after:z-[2]">

                {/* Hinge */} 
                <div id="hinge" class="absolute h-[84.5%] w-[15%] right-[0%] top-[16%] border-[2.5px] border-[var(--dark-red)] border-solid 
                    bg-gradient-to-r from-[var(--red)] via-[var(--light-red)] via-[var(--red)] to-[var(--dark-red)]"/>

                {/* Big Blue Light */}
                <div id="blue-light" class="absolute h-[16%] w-[24%] left-[3%] top-[2.5%] rounded-[50%] z-[9999]
                    bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--blue)_40%,_var(--blue-gradient)_50%)]
                    shadow-[0_0_80px_20px_var(--blue-gradient)] shadow-inner-[0_0_10px_5px_var(--blue)]"/>

                {/* Red, Yellow, and Green Lights */}
                <div id="lights" class="relative h-[3.5%] w-[20%] top-[2.5%] left-[35%] z-[9999]">
                    <div id="red-light" class="absolute h-[100%] w-[25%] left-[0%] top-[0%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--red-light)_40%,_var(--red-light-gradient)_50%)]
                        shadow-[0_0_60px_20px_var(--red-light-gradient)] shadow-inner-[0_0_10px_5px_var(--red-light)]"/>
                    
                    <div id="yellow-light" class="absolute h-[100%] w-[25%] left-[50%] top-[0%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]
                        shadow-[0_0_60px_20px_var(--yellow-light-gradient)] shadow-inner-[0_0_10px_5px_var(--yellow-light)]"/>

                    <div id="green-light" class="absolute h-[100%] w-[25%] left-[100%] top-[0%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_10%,_var(--green-light)_40%,_var(--green-light-gradient)_50%)] 
                        shadow-[0_0_60px_20px_var(--green-light-gradient)] shadow-inner-[0_0_10px_5px_var(--green-light)]"/> 
                </div>

                {/* Separator Lines */}
                <div id="line1" class="absolute w-[50%] left-[0] top-[21%] border-b-[2.5px] border-b-[solid] border-b-[var(--dark-red)]
                    shadow-[0_3px_6px_2px_var(--dark-red)] z-[2]"/>

                <div id="line2" class="absolute w-[12%] left-[48.3%] top-[18.5%] border-b-[2.5px] border-b-[solid] border-b-[var(--dark-red)] rotate-[135deg]
                    shadow-[0_-3px_6px_2px_var(--dark-red)] z-[2]"/>

                <div id="line3" class="absolute w-[28%] right-[14%] top-[16%] border-b-[2.5px] border-b-[solid] border-b-[var(--dark-red)]
                    shadow-[0_3px_6px_2px_var(--dark-red)] z-[2]"/>

                {/* Left-Side Screen */}
                <div id="screen-border" class="absolute w-[65%] h-[42%] left-[10%] top-[25%] border-[2.5px] border-[solid] border-[var(--dark-red)]
                    rounded-[15px] rounded-bl-[50px] bg-[var(--white)] shadow-[0px_3px_6px_2px_var(--dark-red)] z-[2]">

                    <div id="red-dot1" class="absolute w-[4%] h-[4%] left-[45%] top-[3%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[50%] 
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"/>

                    <div id="red-dot2" class="absolute w-[4%] h-[4%] right-[45%] top-[3%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[50%] 
                        bg-[radial-gradient(circle_at_center,_var(--red)_30%,_var(--dark-red)_70%)] z-[3]"/>

                    <div id="main-screen" class="absolute w-[80%] h-[70%] left-[10%] top-[10%] bg-[var(--screen-black)] rounded-[5px]
                        shadow-[0_1.5px_2.5px_0_var(--black)] z-[3]">
                        {/* Screen content goes here */}
                    </div>

                    <div id="red-dot3" class="absolute w-[10%] h-[10%] left-[10%] bottom-[5%] border-[2.5px] border-[solid] border-[var(--dark-red)] rounded-[50%]
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
                <div id="black-button" class="absolute h-[7%] w-[11%] left-[9%] top-[70%] bg-[var(--black)] rounded-[50%] shadow-[0_3px_6px_2px_var(--dark-red)]
                    z-[2]"></div>

                <div id="wide-red-button" class="absolute h-[1.5%] w-[13%] left-[23%] top-[70%] bg-[var(--red-light)] border-[2.5px] border-[solid]
                    border-[var(--dark-red)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[2]"/>

                <div id="wide-blue-button" class="absolute h-[1.5%] w-[13%] left-[42%] top-[70%] bg-[var(--blue)] border-[2.5px] border-[solid]
                    border-[var(--dark-red)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[2]"/>

                <input type="number" id="number-input" placeholder="0000" value="" maxlength="4" min="1" max="1025" class="absolute h-[12%] w-[30%] 
                    left-[22%] top-[79%] rounded-[5px] bg-[var(--screen-green)] text-center text-[var(--screen-black)] shadow-[0_0_60px_0_var(--screen-green)] 
                    text-[200%] z-[9999]"/>

                <div id="d-pad-h" class="absolute w-[15%] h-[3%] right-[25%] top-[75%] rounded-[8px] bg-[var(--black)] shadow-[0_1px_3px_0_var(--dark-red)] z-[2]"/>

                <div id="d-pad-v" class="absolute w-[15%] h-[3%] right-[25%] top-[75%] rounded-[8px] bg-[var(--black)] rotate-90 z-[2]">

                    <div id="circle" class="absolute w-[25%] h-[75%] right-[37%] top-[15%] rounded-[50%] bg-[radial-gradient(circle_at_center,_var(--black)_30%,_var(--screen-black)_70%)] 
                        z-[3]"/>

                </div>
                    
            </div>

            <div id="right-side" class="absolute h-[75.8%] w-[50.2%] right-0 bottom-0 border-[2.5px] border-solid border-[var(--dark-red)] rounded-tr-[20px] 
                rounded-br-[20px] bg-[radial-gradient(circle_at_bottom_right,_var(--light-red)_30%,_var(--red)_50%,_var(--dark-red)_70%)] 
                
                before:absolute before:w-[44%] before:h-[11%] before:left-[0] before:top-[-11%] before:bg-[var(--dark-red)] before:border-t-[2.5px] before:border-t-[solid] 
                before:border-t-[var(--dark-red)] before:z-[0]
                
                after:absolute after:w-[18.3%] after:h-[13%] after:left-[35.8%] after:top-[-7.5%] after:bg-[var(--dark-red)] after:border-t-[2.5px] after:border-t-[solid] 
                after:border-t-[var(--dark-red)] after:rotate-[45deg] after:z-[1]">

                <div id="side-screen" class="relative w-[85%] h-[20%] left-[7.5%] top-[10%] bg-[var(--screen-black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[3]">
                    {/* Side screen content goes here */}
                </div>

                <div id="blue-buttons" class="absolute grid grid-rows-2 grid-cols-5 w-[85%] h-[20%] left-[7.5%] top-[35%] bg-[var(--screen-black)]
                    shadow-[0_3px_6px_2px_var(--dark-red)] z-[3]">

                    {Array.from({ length: 10 }).map((_, i) => (
                        <div id="blue-button" class="relative w-[100%] h-[100%] bg-[var(--blue)] border-[2.5px] border-[solid] border-[var(--screen-black)] 
                            shadow-[inset_0_0_5px_7px_var(--dark-blue)] z-[4]"/>
                    ))}

                </div>

                <div id="wide-black-buttons" class="absolute flex justify-between w-[34%] h-[3%] right-[7.5%] top-[57.5%] z-[3]">

                    <div id="wide-black-button" class="relative w-[45%] h-[100%] bg-[var(--black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[4]"/>
                    <div id="wide-black-button" class="relative w-[45%] h-[100%] bg-[var(--black)] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] z-[4]"/>

                </div>

                <div id="white-buttons" class="absolute flex grid-justify-between w-[33%] h-[10%] left-[7.5%] top-[63%] rounded-[5px] shadow-[0_3px_6px_2px_var(--dark-red)] 
                    z-[3]">

                    <div id="white-button" class="relative h-[100%] w-[50%] bg-[var(--white)] border-[2.5px] border-[solid] border-[var(--screen-black)] 
                        rounded-tl-[5px] rounded-bl-[5px] z-[4]"></div>

                    <div id="white-button" class="relative h-[100%] w-[50%] bg-[var(--white)] border-[2.5px] border-[solid] border-[var(--screen-black)] 
                        rounded-tr-[5px] rounded-br-[5px] z-[4]"></div>

                </div>

                <div id="right-yellow-light" class="absolute h-[8%] w-[9%] right-[8%] top-[68%] rounded-[50%] z-[9999]
                        bg-[radial-gradient(circle_at_center,_var(--white)_-50%,_var(--yellow-light)_40%,_var(--yellow-light-gradient)_50%)]
                        shadow-[0_0_60px_20px_var(--yellow-light-gradient)] shadow-inner-[0_0_10px_5px_var(--yellow-light)] z-[3]"/>

                <div id="small-screens" class="absolute flex justify-between w-[85%] h-[12%] left-[7.5%] top-[81%] z-[3]">

                    <div id="small-screen-l" class="relative w-[45%] h-[100%] bg-[var(--screen-black)] rounded-[5px] z-[4]">
                        {/* Small screen content goes here */}
                    </div>

                    <div id="small-screen-r" class="relative w-[45%] h-[100%] bg-[var(--screen-black)] rounded-[5px] z-[4]">
                        {/* Small screen content goes here */}
                    </div>

                </div>

            </div>

        </div>
    );
};
