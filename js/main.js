(() => {
	console.log("My Js is working")

	const teamButton = document.querySelectorAll('.info'),
		bannerImages = document.querySelector('#houseImages'),
		teamName= document.querySelector("#team-name"),
		teamInfo= document.querySelector('.team-info');
		

	
		const teamData =[//// houseData[0]
		["Inderjit Singh", `Hi my name is Inderjit Singh.
I am from Punjab India. Currently 
I am studying Media Design 
at Fanshawe College. I have very 
much interest in web-designing
and developing`],

		["Spiderman", `Hi i am Spiderman.
						I live in New York
						I try to protect my neighbourhood from outside dangers.
						I really love Gwen Stacy.
						Tony Stark is my Idol.`],
];



	function pictureChange()
    {
    document.getElementById('theImage').src="images/spiderman.jpg";
    }


	function animateBanners(){
			
			multiplier = this.dataset.offset;
			
			teamName.textContent = `${teamData[multiplier][0]}`;
			teamInfo.textContent = teamData[multiplier][1];
		}
		teamButton.forEach(info => info.addEventListener("click", animateBanners));
		teamButton.forEach(houseImages => houseImages.addEventListener("click", pictureChange))
	})();