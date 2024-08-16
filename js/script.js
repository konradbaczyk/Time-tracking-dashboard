const dailyBtn = document.querySelector("#daily-timeframe");
const weeklyBtn = document.querySelector("#weekly-timeframe");
const monthlyBtn = document.querySelector("#monthly-timeframe");
const timeframesBtns = [dailyBtn, weeklyBtn, monthlyBtn];

const workCurrentTime = document.querySelector("#work-current-time");
const playCurrentTime = document.querySelector("#play-current-time");
const studyCurrentTime = document.querySelector("#study-current-time");
const exerciseCurrentTime = document.querySelector("#exercise-current-time");
const socjalCurrentTime = document.querySelector("#socjal-current-time");
const selfCareCurrentTime = document.querySelector("#self-care-current-time");
const currentTimes = [workCurrentTime, playCurrentTime, studyCurrentTime, exerciseCurrentTime, socjalCurrentTime, selfCareCurrentTime];

const workPreviousTime = document.querySelector("#work-previous-time");
const playPreviousTime = document.querySelector("#play-previous-time");
const studyPreviousTime = document.querySelector("#study-previous-time");
const exercisePreviousTime = document.querySelector("#exercise-previous-time");
const socjalPreviousTime = document.querySelector("#socjal-previous-time");
const selfCarePreviousTime = document.querySelector("#self-care-previous-time");
const previousTimes = [workPreviousTime, playPreviousTime, studyPreviousTime, exercisePreviousTime, socjalPreviousTime, selfCarePreviousTime];

const lastTimes = document.querySelectorAll(".activity-box__range-time");
const hrsText = document.querySelectorAll(".hrs");

const changeTimeframe = (e) => {
	checkClickedTimeframe(e);

	const clickedBtn = e.target.closest("button");
	if (clickedBtn == dailyBtn) {
		fetch("./data.json")
			.then((res) => res.json())
			.then(
				(data) => (
					(workCurrentTime.textContent = data[0].timeframes.daily.current),
					(workPreviousTime.textContent = data[0].timeframes.daily.previous),
					(playCurrentTime.textContent = data[1].timeframes.daily.current),
					(playPreviousTime.textContent = data[1].timeframes.daily.previous),
					(studyCurrentTime.textContent = data[2].timeframes.daily.current),
					(studyPreviousTime.textContent = data[2].timeframes.daily.previous),
					(exerciseCurrentTime.textContent = data[3].timeframes.daily.current),
					(exercisePreviousTime.textContent = data[3].timeframes.daily.previous),
					(socjalCurrentTime.textContent = data[4].timeframes.daily.current),
					(socjalPreviousTime.textContent = data[4].timeframes.daily.previous),
					(selfCareCurrentTime.textContent = data[5].timeframes.daily.current),
					(selfCarePreviousTime.textContent = data[5].timeframes.daily.previous)
				)
			);

		lastTimes.forEach((lastTime) => {
			lastTime.textContent = "Yesterday -";
		});
	} else if (clickedBtn == weeklyBtn) {
		fetch("./data.json")
			.then((res) => res.json())
			.then(
				(data) => (
					(workCurrentTime.textContent = data[0].timeframes.weekly.current),
					(workPreviousTime.textContent = data[0].timeframes.weekly.previous),
					(playCurrentTime.textContent = data[1].timeframes.weekly.current),
					(playPreviousTime.textContent = data[1].timeframes.weekly.previous),
					(studyCurrentTime.textContent = data[2].timeframes.weekly.current),
					(studyPreviousTime.textContent = data[2].timeframes.weekly.previous),
					(exerciseCurrentTime.textContent = data[3].timeframes.weekly.current),
					(exercisePreviousTime.textContent = data[3].timeframes.weekly.previous),
					(socjalCurrentTime.textContent = data[4].timeframes.weekly.current),
					(socjalPreviousTime.textContent = data[4].timeframes.weekly.previous),
					(selfCareCurrentTime.textContent = data[5].timeframes.weekly.current),
					(selfCarePreviousTime.textContent = data[5].timeframes.weekly.previous)
				)
			);

		lastTimes.forEach((lastTime) => {
			lastTime.textContent = "Last week -";
		});
	} else if (clickedBtn == monthlyBtn) {
		fetch("./data.json")
			.then((res) => res.json())
			.then(
				(data) => (
					(workCurrentTime.textContent = data[0].timeframes.monthly.current),
					(workPreviousTime.textContent = data[0].timeframes.monthly.previous),
					(playCurrentTime.textContent = data[1].timeframes.monthly.current),
					(playPreviousTime.textContent = data[1].timeframes.monthly.previous),
					(studyCurrentTime.textContent = data[2].timeframes.monthly.current),
					(studyPreviousTime.textContent = data[2].timeframes.monthly.previous),
					(exerciseCurrentTime.textContent = data[3].timeframes.monthly.current),
					(exercisePreviousTime.textContent = data[3].timeframes.monthly.previous),
					(socjalCurrentTime.textContent = data[4].timeframes.monthly.current),
					(socjalPreviousTime.textContent = data[4].timeframes.monthly.previous),
					(selfCareCurrentTime.textContent = data[5].timeframes.monthly.current),
					(selfCarePreviousTime.textContent = data[5].timeframes.monthly.previous)
				)
			);

		lastTimes.forEach((lastTime) => {
			lastTime.textContent = "Last month -";
		});
	}

	setTimeout(() => {
		checkNumberOfHours();
	}, 10);
};

const checkNumberOfHours = () => {
	hrsText.forEach((hours) => {
		if (hours.previousElementSibling.textContent != 1) {
			hours.textContent = "hrs";
		} else {
			hours.textContent = "hr";
		}
	});
};

const checkClickedTimeframe = (e) => {
	const clickedBtn = e.target.closest("button");

	if (clickedBtn == dailyBtn) {
		dailyBtn.classList.add("active");
		weeklyBtn.classList.remove("active");
		monthlyBtn.classList.remove("active");
	} else if (clickedBtn == weeklyBtn) {
		weeklyBtn.classList.add("active");
		dailyBtn.classList.remove("active");
		monthlyBtn.classList.remove("active");
	} else if (clickedBtn == monthlyBtn) {
		monthlyBtn.classList.add("active");
		weeklyBtn.classList.remove("active");
		dailyBtn.classList.remove("active");
	}
};

timeframesBtns.forEach((btn) => {
	btn.addEventListener("click", changeTimeframe);
});
