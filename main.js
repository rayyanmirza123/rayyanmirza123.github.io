var funObjs = [
	
	{
		title:'CodeForces 944 Div. 4',
		link:'https://rayyanmirza123.github.io/codeforces/944.html',
		description:'How I faced 944',
		image:'assets/codeforces-seeklogo.svg'
	}
];

function createSections(){
	
	for(let i=0; i < funObjs.length; i++){
		var obj = funObjs[i];
		
		var section = '<section class="bg-indigo-600 text-white py-20 px-4">'+
						'<div class="container mx-auto flex flex-col md:flex-row justify-between items-center">'+
							'<div class="md:w-1/2 mb-10 md:mb-0">'+
								'<h2 class="text-4xl font-bold leading-tight mb-4">'+obj.title+'</h2>'+
									'<p class="text-xl mb-4">'+obj.description+'</p>'+
										'<button class="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white"><a href="'+obj.link+'">Read More...</a></button>'+
							'</div>'+
							'<div class="md:w-1/2">'+
								'<img src="'+obj.image+'" alt="Hero Image" class="w-full rounded-xl">'+
							'</div>'+
						'</div>'+
					'</section>';
					
		document.getElementById('funSections').insertAdjacentHTML('beforeend', section);
	}
}