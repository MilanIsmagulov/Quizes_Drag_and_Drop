
function checkArrLen(arr1, arr2) {
    return (arr1 === arr2 ? true : false)
}

function checkAnwser1() {

    const anwserArr = ['some1', 'some2', 'some3', 'some4']
    const listItems = document.querySelectorAll('.item1')

    listItems.forEach((item, index) => {
        if (item.innerText !== anwserArr[index]) {
            item.classList.add('incorrect')
        } else {
            item.classList.remove('incorrect')
            item.classList.add('correct')
        }
    });
}

function checkAnwser2() {

    const correctAnwser1 = ['some1', 'some3']
    const correctAnwser2 = ['some2', 'some4']
    const correctAnwsers = [correctAnwser1, correctAnwser2]

    const colms = document.querySelectorAll('.col-ul')

    colms.forEach((item, indx) => {
        for (let index = 0; index < item.children.length; index++) {
            const element = item.children[index];
            
            if (!checkArrLen(correctAnwsers[indx].length, colms[indx].children.length) || !correctAnwsers[indx].includes(element.innerText)) {
                colms[indx].classList.add('incorrect')
            } else {
                colms[indx].classList.remove('incorrect')
                colms[indx].classList.add('correct')
            }
        }
    });
}

function checkAnwser3() {

    const leftColAnwser = ['some1', 'some2', 'some3', 'some4']
    const righrColAnwser = ['some5', 'some7', 'some6']
    const correctAnwsers = [leftColAnwser, righrColAnwser]

    const colms = document.querySelectorAll('.drag3-col')

    colms.forEach((item, indx) => {
        for (let index = 0; index < item.children.length; index++) {
            const element = item.children[index];

            if (element.innerText !== correctAnwsers[indx][index]) {
                item.children[index].classList.add('incorrect')
            } else {
                item.children[index].classList.remove('incorrect')
                item.children[index].classList.add('correct')
            }
        }
    })

    // console.log(fields)

    // fields.forEach((item, indx) => {
    //     for (let index = 0; index < item.children.length; index++) {
    //         const element = item.children[index];

    //         // console.log(indx, index)


    //         // console.log(correctAnwsers[indx][index], element.innerText)


    //         if (element.innerText !== correctAnwsers[index][indx]) {
    //             fields[indx].classList.add('incorrect')
    //         } else {
    //             fields[indx].classList.remove('incorrect')
    //             fields[indx].classList.add('correct')
    //         }
    //     }
    // });
}

function checkAnwser4() {

    const anwserArr = ['some1', 'some2', 'some3', 'some4']

    const fields = document.querySelectorAll('.field-col .field')

    fields.forEach((item, index) => {
        if (item.innerText !== anwserArr[index]) {
            item.classList.add('incorrect')
        } else {
            item.classList.remove('incorrect')
            item.classList.add('correct')
        }
    });
}

function checkAnwser5() {

    const anwserArr = [['some1', 'some2'], ['some3'], ['some4']]

    const items = document.querySelectorAll('.list-item')

    items.forEach((item, indx) => {
        for (let index = 0; index < item.children.length; index++) {
            const element = item.children[index];

            if (element.innerText !== anwserArr[indx][index]) {
                element.classList.add('incorrect')
            } else {
                element.classList.remove('incorrect')
                element.classList.add('correct')
            }
        }
    });
}