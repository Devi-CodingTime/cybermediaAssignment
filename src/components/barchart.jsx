import React from 'react'

function Barchart({reaction}) {
    console.log(reaction);
  return (
    <div class="flex flex-col items-center m-auto mt-5 w-full min-h-[24rem] max-h-fit max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8 mb-0">
		<h2 class=" text-lg font-bold mb-2 text-sky-950 underline">Post Revenue</h2>
        <div class="flex items-end flex-grow w-full space-x-2 sm:space-x-3 mt-8">
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.angry_reactions?.summary?.total_count}</span>
				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.angry_reactions?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">angry</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.comments?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.comments?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">comments</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.haha_reactions?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.haha_reactions?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">haha</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.like_reactions?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`}  style={{ height: `${reaction?.like_reactions?.summary?.total_count}rem` }}></div>
				<span class="absolute bottom-0 text-xs font-bold">like</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.love_reactions?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.love_reactions?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">love</span>
			</div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.reactions_total?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.reactions_total?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">reactions</span>
			</div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.sad_reactions?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.sad_reactions?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">sad</span>
			</div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{reaction?.wow_reactions?.summary?.total_count}</span>

				<div class={`relative flex justify-center w-8 bg-cyan-300`} style={{height:`${reaction?.wow_reactions?.summary?.total_count}rem`}}></div>
				<span class="absolute bottom-0 text-xs font-bold">wow</span>
			</div>
			
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
