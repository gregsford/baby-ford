const countdown = () => {
    const countDate = new Date("May 1, 2023 23:08:00").getTime();
    const now = new Date().getTime();
    const timeGap = countDate - now;

    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayDisplay = Math.floor(timeGap / day);
    const hourDisplay = Math.floor((timeGap % day) / hour);
    const minuteDisplay = Math.floor((timeGap % hour) / minute);
    const secondsDisplay = Math.floor((timeGap % minute) / seconds);

    const finalReveal = document.querySelector('.final-reveal');
    const qMark = document.querySelector('.qmark');

    document.querySelector('.day').textContent = dayDisplay;
    document.querySelector('.hour').textContent = hourDisplay;
    document.querySelector('.minute').textContent = minuteDisplay;
    document.querySelector('.seconds').textContent = secondsDisplay;
    // console.log(secondsDisplay);

    if (now > countDate) {
        // console.log("done");
        document.querySelector('.day').textContent = "0";
        document.querySelector('.hour').textContent = "0";
        document.querySelector('.minute').textContent = "0";
        document.querySelector('.seconds').textContent = "0";

        finalReveal.classList.remove("hidden");
        qMark.classList.add("hidden");
    }
};

setInterval(() => {
    countdown()
}, 1000);

// class Poll {
//     constructor(root, title) {
//         this.root = root;
//         this.selected = sessionStorage.getItem("poll-selected");
//         this.endpoint = "http://localhost:3000/poll";

//         this.root.insertAdjacentHTML("afterbegin", `
//             <div class="poll__title">${title}</div>
//         `);

//         this._refresh();
//     }

//     async _refresh() {
//         const response = await fetch(this.endpoint);
//         const data = await response.json();

//         this.root.querySelectorAll(".poll_option").forEach(option => {
//             option.remove();
//         });

//         for (const option of data) {
//             const template = document.createElement("template");
//             const fragment = template.content;

//             template.innerHTML = `
//                 <div class="poll__option ${this.selected == option.label ? "poll__option--selected" : ""}">
//                     <div class="poll__option-fill"></div>
//                     <div class="poll__option-info">
//                         <span class="poll__label">${option.label}</span>
//                         <span class="poll__percentage">${option.percentage}%</span>
//                     </div>
//                 </div>
//             `;

//             if (!this.selected) {
//                 fragment.querySelector(".poll__option").addEventListener("click", () => {
//                     fetch(this.endpoint, {
//                         method: "post",
//                         body: `add=${option.label}`,
//                         headers: {
//                             "Content-Type": "application/x-www-form-urlencoded"
//                         }
//                     }).then(() => {
//                         this.selected = option.label;

//                         sessionStorage.setItem("poll-selected", option.label);
//                         this._refresh();
//                     })
//                 });
//             }

//             fragment.querySelector(".poll__option-fill").style.width = `${option.percentage}%`;

//             this.root.appendChild(fragment);
//         }
//     }
// }

// const p = new Poll(
//     document.querySelector(".poll"),
//     "Which gender do you think Baby Ford will be?"
// );

// console.log(p);
