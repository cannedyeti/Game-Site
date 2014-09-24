
			function Character(name, damage, health, critChance, missChance) {
				this.name = name;
				this.damage = damage;
				this.health = health;
				this.critChance = critChance;
				this.missChance = missChance;
				this.hit = function() {
					return Math.floor(Math.random() * 100) > this.missChance;
				}
				this.crit = function() {
					return Math.floor(Math.random() * 100) <= this.critChance;
				}
		
				this.heal = function() {
					this.health += 5;
				}
				this.deal = function() {
					if (this.hit()) {
						this.attack(); 
					}
				}		
		}		
			//Characters
			var hName = $("#heroName").val();
			var eName = $("#enemyName").val();
			var villian = new Character(eName, 15, 100, 5, 10);
			var hero = new Character(hName, 10, 100, 20, 5);
		
			//Hero attacks
			hero.attack = function() {
					if (hero.crit()) {
						villian.health -= hero.damage * 2;
						villianAttack;
					}
					else {
						villian.health -= hero.damage;
						villianAttack;
					}
			}
			//Villian attacks
			villian.attack = function() {
				if (villian.crit()) {
						hero.health -= villian.damage * 2;
					}
					else {
						hero.health -= villian.damage;
					}
			}
 		 //villian choice
			villianAttack = function() {
				if	(Math.floor(Math.random() * 100) >= 60)
				{
					villian.deal();
				}
				else{
					villian.heal();
				}	
			}
		
		

			$("#hero").height(hero.health * 2);
			$("#villian").height(villian.health * 2);
			$("#hero").width(hero.health * 2);
			$("#villian").width(villian.health * 2);
			$("#status").text("<p id='status'>Hero " + hero.name + "'s health is at " + hero.health + ". Enemy " + villian.name + "'s is " + villian.health + "</p>");
		
			
			$(document).ready(function() {

				$("#heroN").on("submit", function(e){
					e.preventDefault();
					$("#heroName").replaceWith("<li>" + hName + "</li>");
				});

				$("#enemyN").on("submit", function(e){
					e.preventDefault();
					$("#enemyName").replaceWith("<li>" + eName + "</li>");
				});

				$("#attackB").click(function(){
					hero.deal();
					});
				$("#healB").click(function(){
					hero.heal();
					});

			});



		
 		 	if (hero.health <= 0) {
				$("#status").text("You lose!");
			}
		
			if (villian.health <= 0) {
				$("#status").text("You win!");
			}
		
		
		
		
		
	