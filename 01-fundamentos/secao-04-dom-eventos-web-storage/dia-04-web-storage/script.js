window.onload = () => {
    const setBackgroundColor = (color) => {
        let content = document.querySelector('.content');
        content.style.backgroudColor = color
        localStorage.setItem('backgroundColor', color);
    }
    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.color = color;
        }
        localStorage.setItem('fontColor', color);
    }
    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontSize = size;
        }
        localStorage.setItem('lineHeight', height);
    }
    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.lineHeight = height
        }
        localStorage.setItem('lineHeight', height);
    }
    const setFontFamily = (family) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontFamily = setFontFamily
        }
        localStorage.setItem('fontFamily', family);
    }
    let backgroudColorButtons = document.querySelectorAll('#background-color>button');
    for (let index = 0; index < backgroudColorButtons.length; index += 1) {
        backgroudColorButtons[index].addEventListener('click', (event) => {
            setBackgroundColor(event.target.innerHTML)
        })
    }
    let fontSizeButtons = document.querySelectorAll('#font-size>button')
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
        fontSizeButtons[index].addEventListener('click', (event) => {
            setFontSize(event.target.innerHTML)
        })
    }
    let lineHeightButtons = document.querySelectorAll('#line-height>button')
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
        lineHeightButtons[index].addEventListener("click", (event) => {
            setLineHeight(event.target.innerHTML)
        })

    }
    let fontFamilyButtons = document.querySelectorAll('#font-family>button')
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
        fontFamilyButtons[index].addEventListener("click", (event) => {
            setFontFamily(event.target.innerHTML)
        })
    }
    const initialize = () => {
        let backgroundColor = localStorage.getItem('backgroundColor');
        setBackgroundColor(backgroundColor);
        let fontColor = localStorage.getItem('fontColor');
        setFontColor(fontColor);
        let fontSize = localStorage.getItem('fontSize');
        setFontSize(fontSize);
        let lineHeight = localStorage.getItem('lineHeight');
        setLineHeight(lineHeight);
        let fontFamily = localStorage.getItem('fontFamily');
        setFontFamily(fontFamily);
    }
    console.log(initialize());
}