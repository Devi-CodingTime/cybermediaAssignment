import React from 'react'

function Barchart() {
  return (
    <div class="flex flex-col items-center m-auto w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		<h2 class="text-xl font-bold">Post Revenue</h2>
        <div class="flex items-end flex-grow w-full space-x-2 sm:space-x-3 mt-8">
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">100</span>
				<div class={`relative flex justify-center w-8 h-10 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">90</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">200</span>

				<div class={`relative flex justify-center w-8 h-10 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">300</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">200</span>

				<div class={`relative flex justify-center w-8 h-10 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">12</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">899</span>

				<div class={`relative flex justify-center w-8 h-10 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">765</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">776</span>

				<div class={`relative flex justify-center w-8 h-20 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">86</span>
			</div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">776</span>

				<div class={`relative flex justify-center w-8 h-20 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">86</span>
			</div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">776</span>

				<div class={`relative flex justify-center w-8 h-20 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">86</span>
			</div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">776</span>

				<div class={`relative flex justify-center w-8 h-20 bg-cyan-300`}></div>
				<span class="absolute bottom-0 text-xs font-bold">86</span>
			</div>
			
			{/* h-${barItems?.Under500?.ItemCount?barItems?.Under500?.ItemCount*20:0} */}
		</div> 
        <div class="flex w-full mt-3">
			<div class="flex items-center ml-auto">
				<span class="block w-4 h-4 bg-cyan-300"></span>
				<span class="ml-1 text-xs font-medium">Item Count</span>
			</div>
		</div> 
   </div>
  )
}

export default Barchart
