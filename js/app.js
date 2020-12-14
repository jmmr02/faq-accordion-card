const questions = document.querySelectorAll(".js-questionWrapper");

for (let question of questions) {
	question.addEventListener("click", (e) => {
		const element = e.target;
		const answer = question.querySelector(".js-answer");
		const pointer = question.querySelector(".js-arrow");
		const cardQuestion = question.querySelector(".js-cardQuestion");

		if (element.nodeName !== "P") {
			question.classList.toggle("card--expanded");
			answer.classList.toggle("card--visible");
			pointer.classList.toggle("card--rotated");
			cardQuestion.classList.toggle("card--bold");
		}
	});
}
