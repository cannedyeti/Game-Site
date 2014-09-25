	
	//Characters
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

	var hName = "Bill";
	var eName = "Tom";
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
		
$(document).ready(function() {
		
		
			
		//hero name change
		$("#h1").click(function() {
			var hName = $("input[name=heroText]").val();
			$("#heroName").replaceWith("<li>" + hName + "</li>");
		});

		//villian name change
		$("#e1").click(function() {
			var eName = $("input[name=enemyText]").val();
			$("#enemyName").replaceWith("<li>" + eName + "</li>");
		});

		//Status message
		$("p#status").replaceWith("<p id='status'>Hero " + hName + "'s health is at " + hero.health + ". Enemy " + eName + "'s is " + villian.health + "</p>");

		//box size changes
			



		$("#attackB").click(function(){
			hero.deal();
			villianAttack();
			$("p#status").replaceWith("<p id='status'>Hero " + hName + "'s health is at " + hero.health + ". Enemy " + eName + "'s is " + villian.health + "</p>");
			if (hero.health <= 0) {
				$("p#status").replaceWith("You lose!");
			}
		
			if (villian.health <= 0) {
				$("p#status").replaceWith("You win!");
			}
		});

		$("#healB").click(function(){
			hero.heal();
			villianAttack();
			$("p#status").replaceWith("<p id='status'>Hero " + hName + "'s health is at " + hero.health + ". Enemy " + eName + "'s is " + villian.health + "</p>");
			if (hero.health <= 0) {
				$("#status").replaceWith("You lose!");
			}
		
			if (villian.health <= 0) {
				$("p#status").replaceWith("You win!");
			}
		});

		
		$("#heroBl").height(hero.health * 2);
		$("#villianBl").height(villian.health * 2);
		$("#heroBl").width(hero.health * 2);
		$("#villianBl").width(villian.health * 2);
		
		});
		
		
		
		
