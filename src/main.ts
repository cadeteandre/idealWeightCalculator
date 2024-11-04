import "./style.css";

const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;

const idealWeightCalc = (bodySize: string, age: string, bodyStructure: string) => {
    const bodySizeNum: number = Number(bodySize);
    const ageNum: number = Number(age);
    let result: number = 0;
    switch (true) {
        case bodyStructure === "narrow":
            result = (bodySizeNum - 100 + ageNum / 10) * 0.9 * 0.9;
            return Math.round(result);
        case bodyStructure === "wide":
            result = (bodySizeNum - 100 + ageNum / 10) * 0.9 * 1.1;
            return Math.round(result);
    }
};

submitBtn.addEventListener("click", () => {
    const bodySize = document.querySelector("#bodySize") as HTMLInputElement;
    const age = document.querySelector("#age") as HTMLInputElement;
    const bodyStructure = document.querySelectorAll(".bodyStructure") as NodeListOf<HTMLInputElement>;
    const showResults = document.querySelector("#showResults") as HTMLElement;

    bodyStructure.forEach((elt) => {
        if (elt.checked) {
            showResults.innerHTML = `<p>Dein Idealgewicht ist ${idealWeightCalc(bodySize.value, age.value, elt.value)} kg</p>`;
        }
    });
});
