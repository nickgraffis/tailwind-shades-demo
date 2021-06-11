import React, { ChangeEvent, FC, useState } from 'react'
import { Logo } from './logo'
import { shade } from './logics'
import { Icon, InlineIcon } from '@iconify/react';
import instagramFill from '@iconify-icons/akar-icons/instagram-fill';
import dribbbleFill from '@iconify-icons/akar-icons/dribbble-fill';
import codepenFill from '@iconify-icons/akar-icons/codepen-fill';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import { ColorCircle } from './ColorCircle';

type Props = { }

export const App: FC<Props> = () => {
  const [customColors, setCustomColors] = useState<string[]>([])
  const [customColor, setCustomColor] = useState<string>('')
  const [color, setColor] = useState<string>('lavendar')
  const [input, setInput] = useState<string>('')
  
  const setInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const examples: { [key: string]: string } = {
    'lavendar': '#5245a8',
    'orange': '#f3a626',
    'cranberry': '#e45665',
    'navyBlue': '#0c2659',
    'jellyFish': '#f86d4a',
    'peacock': '#71bf78'
  }

  const hex = (): string => {
    return color === 'custom' ?
      input : examples[color]
  }

  const createCustomShades = () => {
    setCustomColors(shade(input, 1.771968374684816, 7.3903743315508015))
    setCustomColor(input)
    setColor('custom')
  }

  return (
    <div className="min-h-screen w-full bg-blueGray-100 flex flex-col items-center">
      <div className="md:w-[40rem] w-full px-6 md:px-0 flex flex-col items-center">
      <div className="w-full md:text-5xl text-4xl font-black py-6 px-6 flex justify-between items-center w-full text-center md:text-left">
        <div className="w-full">
          <p className="text-peacock-700">Peacock</p>
          <p className="md:text-lg text-sm font-semibold text-peacock-600">Designed for Tailwind & WindiCSS</p>
          <p className="md:text-lg text-sm font-semibold text-peacock-600">Turn one color into ten with one line in your config file...</p>
        </div>
      </div>
      <div className="pb-6 border-b border-blueGray-200 w-full flex items-center space-x-6"> 
        <div className="px-4 text-8xl hidden md:inline-flex">
          <Logo />
        </div>
        <div className="flex-grow">
          <input 
            className="apperance-none w-full ring-4 ring-peacock-400 focus:outline-none focus:ring-peacock-600 rounded-md md:text-xl text-base py-2 px-4" 
            placeholder="Try a color hex, rgb, or hsl code (⌘K)"
            value={input}
            onChange={setInputValue}
          />
        </div>
        <div onClick={createCustomShades} className="transform md:text-lg text-sm hover:-translate-y-0.5 px-3 py-2 font-semibold bg-peacock-700 text-peacock-50 rounded-md ring-4 ring-peacock-700 shadow-lg transition-all duration-150 hover:shadow-xl cursor-pointer">Search</div>
      </div>
      <div className="flex flex-col items-center py-12 space-y-6 w-full">
      <div className="w-full flex items-center justify-around pb-2">
          {
            [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((num, i) => {
              return <div key={i} className="flex flex-col space-y-2 items-center justify-center">
                { color !== 'custom' ? <><p className="text-xs font-semibold">{shade(examples[color], 1.771968374684816, 7.3903743315508015)[i]}</p> <div className={`w-6 h-6 md:w-10 md:h-10 rounded-lg bg-${color}-${num}`}></div><p className="font-semibold">{num}</p></>
                : <><p className="text-xs font-semibold">{customColors[i]}</p> <div style={{backgroundColor: customColors[i]}} key={i} className={`w-10 h-10 rounded-lg`}></div><p className="font-semibold">{num}</p></> }
              </div>
            })
          }
        </div>
        <div className="w-full text-left px-6 font-black text-2xl text-peacock-700">
          <p>Example Base Colors</p>
          <p className="text-base font-semibold text-peacock-600">Each basecolor outputs color variants from 50 - 900. You can see them in action below.</p>
        </div>
        <div className="w-full flex items-center justify-around pb-2">
          <ColorCircle name="lavendar" color="#5245a8" setColor={setColor} />
          <ColorCircle name="orange" color="#f3a626" setColor={setColor} />
          <ColorCircle name="cranberry" color="#e45665" setColor={setColor} />
          <ColorCircle name="navyBlue" color="#0c2659" setColor={setColor} />
          <ColorCircle name="jellyFish" color="#f86d4a" setColor={setColor} />
          <ColorCircle name="peacock" color="#71bf78" setColor={setColor} />
          { customColor ? <ColorCircle name="custom" color={customColor} setColor={setColor} />
          : <ColorCircle name="custom" setColor={setColor} placeholder={true}/>}
        </div>
        <div className="w-full px-3 my-6">
          <div className="relative">
            <div style={
              color === 'custom' ? {
                backgroundColor: customColors[7],
                borderColor: customColors[7]
              } : {}
              } className={`relative px-6 py-10 overflow-hidden bg-${color}-700 border-4 border-${color}-700 shadow-xl rounded-2xl sm:px-12`}>
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                  <path style={
                  color === 'custom' ? {
                    color: customColors[5]
                  } : {}
                  } className={`text-${color}-500 text-opacity-40`} fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                  <path style={
                  color === 'custom' ? {
                    color: customColors[7]
                  } : {}
                  } className={`text-${color}-700 text-opacity-40`} fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
                </svg>
              </div>
              <div className="relative">
                <div style={
                  color === 'custom' ? {
                    color: customColors[1]
                  } : {}
                  } className={`text-${color}-100 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl`}>
                  This is a colorful form.
                </div>
                <p style={
                  color === 'custom' ? {
                    color: customColors[0]
                  } : {}
                  } className={`max-w-2xl mx-auto mt-4 text-sm lg:text-base text-${color}-50`}>
                  You might have a form like this, in an application of yours?
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="mt-6 mx-auto sm:max-w-lg">
                  <div className="relative flex-1 min-w-0 space-y-3">
                    <label htmlFor="email" className="sr-only">Example Name</label><input
                      id="name"
                      name="name"
                      type="text"
                      style={
                        color === 'custom' ? {
                          backgroundColor: customColors[0],
                          color: customColors[9],
                        } : {}
                        } className={`block w-full bg-${color}-50 px-5 py-3 text-sm lg:text-base text-${color}-900 placeholder-${color}-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-4 focus:ring-${color}-400 focus:ring-offset-2`}
                      placeholder="Example Name"
                    />
                    <label htmlFor="email" className="sr-only">Email Address</label><input
                      id="email"
                      name="email"
                      type="text"
                      style={
                        color === 'custom' ? {
                          backgroundColor: customColors[0],
                          color: customColors[9],
                        } : {}
                        } className={`block w-full px-5 bg-${color}-50 py-3 text-sm lg:text-base text-${color}-900 placeholder-${color}-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-${color}-400 focus:ring-4 focus:ring-offset-2`}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    <button type="submit" style={
                        color === 'custom' ? {
                          backgroundColor: customColors[5],
                          color: customColors[0],
                        } : {}
                        }className={`inline-flex justify-center items-center w-full px-5 py-3 text-sm lg:text-base font-medium text-${color}-50 bg-${color}-500 border border-transparent rounded-md shadow hover:bg-${color}-400 focus:outline-none sm:px-10`}>
                      <span>Sign Up</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="py-6">
            <p className="w-full text-4xl font-black text-peacock-700 pt-4 pb-2 border-b border-blueGray-200">Installation</p>
            <p className="py-4 font-medium text-blueGray-700">First install the package</p>
            <pre className="bg-[#22212C] rounded-md text-[#F8F8F2] p-4 overflow-scroll">npm i tailwind-color-generator</pre>
            <p className="py-4 font-medium text-blueGray-700">Then the plugin is a super simple implementation. You pass the generator your 
            desired color name and the base for that color, and you'll have access to colors 50 - 900 with the base color name.</p>
            <pre className="bg-[#22212C] rounded-md text-[#F8F8F2] p-4 overflow-scroll">
              <span className="text-[#7970A9]">//tailwind.config.js</span>
              <br></br><span className="text-[#FF80BF]">const</span> gen <span className="text-[#FF80BF]">= </span><span className="text-[#8AFF80]">require</span>(<span className="text-[#FFFF80]">'tailwind-color-generator'</span>);
              <br></br>
              <br></br><span className="text-[#80FFEA]">module</span>.<span className="text-[#80FFEA]">exports</span> <span className="text-[#FF80BF]">= </span>&#123; 
              <br></br>&nbsp;&nbsp;...,
              <br></br>&nbsp;&nbsp;plugins<span className="text-[#FF80BF]">: </span> [
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;...,
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8AFF80]">gen</span>(<span className="text-[#FFFF80]">'{color}'</span>, <span className="text-[#FFFF80]">'{hex()}'</span>)
                <br></br>&nbsp;&nbsp;]
              <br></br>&#125;
            </pre>
            <pre className="bg-[#22212C] rounded-md text-[#F8F8F2] p-4 mt-4 overflow-scroll">
              <span className="text-[#7970A9]">//index.html</span>
              <br></br>&lt;<span className="text-[#FF80BF]">p</span> <span className="text-[#8AFF80]">class</span><span className="text-[#FF80BF]">=</span><span className="text-[#FFFF80]">"text-{color}-400"</span>&gt;
              <br></br>&nbsp;&nbsp;This is pretty cool!
              <br></br>&lt;/<span className="text-[#FF80BF]">p</span>&gt;
            </pre>
            <p className="py-4 font-medium text-blueGray-700">You can also optionall pass in the saturation factor, and lightness factor as the third and forth parameters.</p>
            <pre className="bg-[#22212C] rounded-md text-[#F8F8F2] p-4 overflow-scroll">
              &nbsp;&nbsp;...,
              <br></br>&nbsp;&nbsp;plugins<span className="text-[#FF80BF]">: </span> [
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;...,
                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8AFF80]">gen</span>(<span className="text-[#FFFF80]">'{color}'</span>, <span className="text-[#FFFF80]">'{hex()}'</span>, <span className="text-[#9580FF]">2</span>, <span className="text-[#9580FF]">5</span>)
                <br></br>&nbsp;&nbsp;]
            </pre>
            <p className="py-4 font-medium text-blueGray-700">This will allow you the change the difference in saturation and light between each shade of color. By default we use 
            &nbsp;<code className="px-2 py-1 bg-[#22212C] rounded-sm text-[#9580FF]">1.771968374684816</code>
            &nbsp; and <code className="px-2 py-1 bg-[#22212C] rounded-sm text-[#9580FF]">7.3903743315508015</code> because 
            these are the averages that steps change in tailwind's default colors.</p>
            <p className="py-4 font-medium text-blueGray-700">It should be noted here that tailwind's colors were picked by hand, and the difference is saturation and light between 
            colors varies. This is not perfect, but hopefully it will help get you started on something great!</p>
            <p className="py-4 font-medium text-blueGray-700">There is also a cool web app, <a className="hover:text-peacock-700 border-b border-blueGray-200 hover:border-peacock-700 transition-colors duration-150" href="https://javisperez.github.io/tailwindcolorshades/?persian-pink=F472B6&medium-purple=9580FF">Shades Generator</a>, that 
            takes a different aproach to lightening and darkening colors. Try them too!</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center md:flex-row justify-between px-4 md:space-y-0 space-y-4">
          <p className="font-semibold text-blueGray-500 hover:text-blueGray-700 cursor-pointer">Nick Graffis</p>
          <div className="flex items-center space-x-3 text-blueGray-500">
            <Icon className="h-5 w-5 hover:text-blueGray-700 cursor-pointer" icon={instagramFill} />
            <Icon className="h-5 w-5 hover:text-blueGray-700 cursor-pointer" icon={twitterFill} />
            <Icon className="h-5 w-5 hover:text-blueGray-700 cursor-pointer" icon={githubFill} />
            <Icon className="h-5 w-5 hover:text-blueGray-700 cursor-pointer" icon={codepenFill} />
            <Icon className="h-5 w-5 hover:text-blueGray-700 cursor-pointer" icon={dribbbleFill} />
            <Icon className="h-5 w-5 hover:text-blueGray-700 cursor-pointer" icon={linkedinFill} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}