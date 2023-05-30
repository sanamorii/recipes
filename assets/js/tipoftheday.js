const MSG = [
    "i'm still waiting for nathan to eat an entire rotisserie chicken",
    "when in doubt, add more msg",
    "where is the lamb sauce???",
    ":^)",
    "fumo fact of the day: funky",
    "necoarc fact of the day: run",
    "quick and easy way to get an ec: eat raw chicken",
    "this isn't like minecraft 💀",
    "haiyaa, that not how you make fried rice",
    "a shrimp fried this rice???",
    "actual tip: tesco always has some eggs",
    "century eggs are good, you should try some!",
    "I Am Wanted for Larceny in 9 Countries",
    "pipebomb recipe coming soon 👀",
    "how's life? meaningless.",
    "chinese cooking made horrible",
    "life is absolute pain",
    "早上好中国，现在我有冰淇淋，我很喜欢冰淇淋！！！！"
]

function randomSplash(){
    const randomIndex = Math.floor(Math.random() * MSG.length);
    const randomText = MSG[randomIndex];
    const splashtext = document.getElementById("splashtext");
    splashtext.innerText = randomText;
}