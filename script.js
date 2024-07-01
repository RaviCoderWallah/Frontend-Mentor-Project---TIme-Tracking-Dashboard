const cardContainer = document.querySelector(".tt-dashboard__working-section");
const daily = document.querySelector("#daily");
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const timeTrackingContainer = document.querySelector('.tt-dashboard__profile-section__navigation');

timeTrackingContainer.addEventListener("click", (e) => {
    if (e.target !== timeTrackingContainer) {
        [...timeTrackingContainer.children].forEach(element => {
          element.classList.remove("active");
          e.target.classList.add("active");
        })
    };
});

daily.addEventListener("click", () => {
    let url = "data.json";
    fetch(url).then((res) => {
        return res.json();
    }).then((result) => {
        let dailyWorkCurrent = result[0].timeframes.daily.current;
        let dailyPlayCurrent = result[1].timeframes.daily.current;
        let dailyStudyCurrent = result[2].timeframes.daily.current;
        let dailyExerciseCurrent = result[3].timeframes.daily.current;
        let dailySocialCurrent = result[4].timeframes.daily.current;
        let dailySelfCareCurrent = result[5].timeframes.daily.current;

        let dailyWorkPrevious = result[0].timeframes.daily.previous;
        let dailyPlayPrevious = result[1].timeframes.daily.previous;
        let dailyStudyPrevious = result[2].timeframes.daily.previous;
        let dailyExercisePrevious = result[3].timeframes.daily.previous;
        let dailySocialPrevious = result[4].timeframes.daily.previous;
        let dailySelfCarePrevious = result[5].timeframes.daily.previous;

        const cardContent = `
                        <div class="tt-dashboard-cards" id="tt-dashboard-card-work">
                    <div class="tt-dashboard-cards__image">
                           <img src="icon-work.svg" alt="Icon work" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Work</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${dailyWorkCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${dailyWorkPrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-play">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-play.svg" alt="Icon play" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Play</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${dailyPlayCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${dailyPlayPrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-study">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-study.svg" alt="Icon study" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Study</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${dailyStudyCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${dailyStudyPrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-exercise">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-exercise.svg" alt="Icon Exercise" loading="lazy">
                     </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Exercise</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${dailyExerciseCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${dailyExercisePrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-social">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-social.svg" alt="Icon social" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Social</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${dailySocialCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${dailySocialPrevious} </span>hrs</p>
                        </div>
                    </div>
        
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-self-care">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-self-care.svg" alt="Icon self care" loading="lazy">
                   </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Self Care</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${dailySelfCareCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${dailySelfCarePrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
        `

        cardContainer.innerHTML = cardContent
    });
});


monthly.addEventListener("click", () => {
    let url = "data.json";
    fetch(url).then((res) => {
        return res.json();
    }).then((result) => {
        let monthlyWorkCurrent = result[0].timeframes.monthly.current;
        let monthlyPlayCurrent = result[1].timeframes.monthly.current;
        let monthlyStudyCurrent = result[2].timeframes.monthly.current;
        let monthlyExerciseCurrent = result[3].timeframes.monthly.current;
        let monthlySocialCurrent = result[4].timeframes.monthly.current;
        let monthlySelfCareCurrent = result[5].timeframes.monthly.current;

        let monthlyWorkPrevious = result[0].timeframes.monthly.previous;
        let monthlyPlayPrevious = result[1].timeframes.monthly.previous;
        let monthlyStudyPrevious = result[2].timeframes.monthly.previous;
        let monthlyExercisePrevious = result[3].timeframes.monthly.previous;
        let monthlySocialPrevious = result[4].timeframes.monthly.previous;
        let monthlySelfCarePrevious = result[5].timeframes.monthly.previous;

        const cardContent = `
                        <div class="tt-dashboard-cards" id="tt-dashboard-card-work">
                    <div class="tt-dashboard-cards__image">
                           <img src="icon-work.svg" alt="Icon work" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Work</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${monthlyWorkCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${monthlyWorkPrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-play">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-play.svg" alt="Icon play" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Play</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${monthlyPlayCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${monthlyPlayPrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-study">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-study.svg" alt="Icon study" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Study</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${monthlyStudyCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${monthlyStudyPrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-exercise">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-exercise.svg" alt="Icon Exercise" loading="lazy">
                     </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Exercise</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${monthlyExerciseCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${monthlyExercisePrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-social">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-social.svg" alt="Icon social" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Social</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${monthlySocialCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${monthlySocialPrevious} </span>hrs</p>
                        </div>
                    </div>
        
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-self-care">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-self-care.svg" alt="Icon self care" loading="lazy">
                   </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Self Care</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>${monthlySelfCareCurrent}</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>${monthlySelfCarePrevious} </span>hrs</p>
                        </div>
                    </div>
                </div>
        `

        cardContainer.innerHTML = cardContent
    });
});


weekly.addEventListener("click", () => {
    const cardContent = `
                       <div class="tt-dashboard-cards" id="tt-dashboard-card-work">
                    <div class="tt-dashboard-cards__image">
                           <img src="icon-work.svg" alt="Icon work" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Work</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>32</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>36 </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-play">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-play.svg" alt="Icon play" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Play</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>10</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>8 </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-study">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-study.svg" alt="Icon study" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Study</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>4</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>7 </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-exercise">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-exercise.svg" alt="Icon Exercise" loading="lazy">
                     </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Exercise</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>4</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>5 </span>hrs</p>
                        </div>
                    </div>
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-social">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-social.svg" alt="Icon social" loading="lazy">
                    </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Social</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>5</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>10 </span>hrs</p>
                        </div>
                    </div>
        
                </div>
                <div class="tt-dashboard-cards" id="tt-dashboard-card-self-care">
                    <div class="tt-dashboard-cards__image">
                        <img src="icon-self-care.svg" alt="Icon self care" loading="lazy">
                   </div>
                    <div class="tt-dashboard__inner-cards">
                        <div class="tt-dashboard-cards__header">
                            <h2 class="tt-dashboard-cards__header__title">Self Care</h2>
                            <div class="tt-dashboard-cards__header__img">
                                <img src="icon-ellipsis.svg" alt="three dots like a menu" loading="lazy">
                            </div>
                        </div>
                        <div class="tt-dashboard-cards__content">
                            <h1 class="tt-dashboard-cards__content__working-hours"><span>2</span>hrs</h1>
                        </div>
                        <div class="tt-dashboard-cards__footer">
                            <p class="tt-dashboard-cards__content__past-data">Last Week - <span>2 </span>hrs</p>
                        </div>
                    </div>
                </div>
    `

    cardContainer.innerHTML = cardContent
});