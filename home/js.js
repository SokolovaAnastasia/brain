
let width = window.screen.width


// константы для смены темы
const bodyFone = document.querySelectorAll('.body')[0]
const btnsHeader = document.querySelectorAll('.header__listitem')
const headerBtnone = document.querySelectorAll('.header__btnone')[0]
const headerBtntwo = document.querySelectorAll('.header__btntwo')[0]
const headerlogo = document.querySelectorAll('.header__picture')[0]
const sectionOneTitle = document.querySelectorAll('.sectionone__title')[0]
const groupTitle = document.querySelectorAll('.title')
const sectiontwoText = document.querySelectorAll('.sectiontwo__text')[0]
const sectionthreeListelement = document.querySelectorAll('.sectionthree__listelement')
const sectiontwoElementlist = document.querySelectorAll('.sectiontwo__elementlist')
const sectionfourListelement = document.querySelectorAll('.sectionfour__listelement')
const sectionfourText = document.querySelectorAll('.sectionfour__text')
const sectionfiveText = document.querySelectorAll('.sectionfive__text')[0]
const sectionfiveListelement = document.querySelectorAll('.sectionfive__listelement')
const lastCardList = document.querySelectorAll('.sectionfour__listelementordertwo')[0]
const footerSocialinsta = document.querySelectorAll('.footer__socialinsta')[0]
const footerSocialyou = document.querySelectorAll('.footer__socialyou')[0]
const footerSocialteleg = document.querySelectorAll('.footer__socialteleg')[0]
const footerSocialvk = document.querySelectorAll('.footer__socialvk')[0]
const sectiontwoPicture = document.querySelectorAll('.sectiontwo__picture')
let btnJobDarck = document.querySelectorAll('.header__btnstyleone')[0]
let examination = btnJobDarck.classList.contains('activ')
let lastElementList = document.querySelectorAll('.sectionfour__listelementordertwo')[0]
let activ = document.querySelectorAll('.activ')[0]
let footerPicture = document.querySelectorAll('.footer__picture')[0]
const modal = document.querySelectorAll('.modal')[0];

function clickOnDarck() {
    let errDarckImgsList = ['home/imgsWeb/111.webp', 'home/imgsWeb/222.webp', 'home/imgsWeb/333.webp']
    let i = 0;
    for (elementImgDarck of sectiontwoPicture) {
        elementImgDarck.children[0].srcset = errDarckImgsList[i]
        elementImgDarck.children[1].src = errDarckImgsList[i]
        i++;
    }
    const sectionthreeListelement2 = document.querySelectorAll('.sectionthree__listelement')
    for (let r = 0; r < sectionthreeListelement2.length; r++) {
        sectionthreeListelement2[r].classList.toggle('titleactive')
    }
}
// по клику меняем классы
const bleack = document.querySelectorAll('.header__btnone')[0]
bleack.addEventListener('click', function () {

    bodyFone.classList.toggle('bodyactive')

    btnsHeader[0].classList.toggle('header__listitemactive')
    btnsHeader[1].classList.toggle('header__listitemactive')
    headerBtnone.classList.toggle('header__btnoneactive')
    headerBtntwo.classList.toggle('header__btntwoactive')
    headerlogo.classList.toggle('header__pictureactive')
    sectionOneTitle.classList.toggle('sectionone__titleactive')
    sectiontwoText.classList.toggle('titleactive')
    sectionfiveText.classList.toggle('titleactive')
    footerSocialinsta.classList.toggle('footer__socialinstaactive')
    footerSocialyou.classList.toggle('footer__socialyouactive')
    footerSocialteleg.classList.toggle('footer__socialtelegactive')
    footerSocialvk.classList.toggle('footer__socialvkactive')
    lastElementList.classList.toggle('sectionfour__listelementordertwo')
    activ.classList.toggle('activActiv')


    footerPicture.style = 'background-image: url(home/imgs/4kbleack.png);'
    for (let i = 0; i < groupTitle.length; i++) {
        groupTitle[i].classList.toggle('titleactive')
    }
    for (let i = 0; i < sectionthreeListelement.length; i++) {
        sectionthreeListelement[i].classList.toggle('titleactive')
    }
    for (let i = 0; i < sectiontwoElementlist.length; i++) {
        sectiontwoElementlist[i].classList.toggle('header__listitemactive')
        sectiontwoElementlist[i].children[0].classList.toggle('header__listitemactive')
    }
    for (let i = 0; i < sectionfourListelement.length; i++) {
        sectionfourListelement[i].classList.toggle('header__listitemactive')
        sectionfourListelement[i].children[0].classList.toggle('header__listitemactive')
        sectionfourText[i].classList.toggle('titleactive')
    }
    for (let i = 0; i < sectionfiveListelement.length; i++) {
        sectionfiveListelement[i].classList.toggle('header__listitemactive')
    }

    btnsHeader[0].classList.toggle('activActiv2')

    // если меняем на тёмную у работодателей
    if (btnsHeader[0].classList.contains('activ') === true) {
        clickOnDarck()

    }




})


// смена на работодатели/кандидаты
const btnOne = document.querySelectorAll('.header__btnstyleone')[0]
const btnTwo = document.querySelectorAll('.header__btnstyletwo')[0]
const oneSectionPicture = document.querySelectorAll('.sectionone__picture')[0]
const sectiononeText = document.querySelectorAll('.sectionone__text')[0]
const sectiontwoList = document.querySelectorAll('.sectiontwo__list')
const sectionthreeTitlesubtitle = document.querySelectorAll('.sectionthree__titlesubtitle')
const elementListOne = document.querySelectorAll('.sectionthree__containerone')
const elementListTwo = document.querySelectorAll('.sectionthree__containertwo')
const elementListThree = document.querySelectorAll('.sectionthree__containerthree')
const lineNaberImg = document.querySelectorAll('.sectionthree')[0]
const oneNaberImg = document.querySelectorAll('.sectionthree__pictureone')[0]
const twoNaberImg = document.querySelectorAll('.sectionthree__picturetwo')[0]
const threeNaberImg = document.querySelectorAll('.sectionthree__picturethree')[0]
const sectiononeRight = document.querySelectorAll('.sectionone__right')[0]
const sectionthree = document.querySelectorAll('.sectionthree')
const sectionthreeTitle = document.querySelectorAll('.sectionthree__title')[0]
const sectionone = document.querySelectorAll('.sectionone')[0]




// при клике на работодателей
btnOne.addEventListener('click', function () {
    btnOne.classList.add('activ')
    btnTwo.classList.remove('activ')
    oneSectionPicture.parentElement.style = 'right: -61px;'

    oneSectionPicture.children[1].srcset = 'home/imgs/pngwing 1.png'
    oneSectionPicture.children[0].srcset = 'home/imgs/pngwing 1.png'
    oneSectionPicture.children[2].src = 'home/imgs/pngwing 1.png'



    sectiononeText.innerHTML = 'сервис по работе с сотрудниками'

    sectiontwoList[0].children[0].children[0].children[0].children[0].srcset = 'home/imgsWeb/onecard.webp'
    sectiontwoList[0].children[0].children[0].children[0].children[1].src = 'home/imgs/work2(3).png'

    sectiontwoList[0].children[1].children[0].children[0].children[0].srcset = 'home/imgsWeb/twocard.webp'
    sectiontwoList[0].children[1].children[0].children[0].children[1].src = 'home/imgs/team1(3).png'

    sectiontwoList[0].children[2].children[0].children[0].children[0].srcset = 'home/imgsWeb/work-time.webp'
    sectiontwoList[0].children[2].children[0].children[0].children[1].src = 'home/imgs/work-time1(2).png'

    sectionthreeTitlesubtitle[0].innerHTML = 'карточка компании'
    sectionthreeTitlesubtitle[1].innerHTML = 'контроль сотрудников'
    sectionthreeTitlesubtitle[2].innerHTML = 'подбор персонала'


    sectiontwoList[0].children[0].children[1].textContent = 'качественно организовать рабочий процесс'
    sectiontwoList[0].children[1].children[1].textContent = 'быстро находить нужных специалистов'
    sectiontwoList[0].children[2].children[1].textContent = 'своевременно контролировать показатели сотрудников'




    elementListOne[0].children[1].innerHTML = ''
    elementListTwo[0].children[1].innerHTML = ''
    elementListThree[0].children[1].innerHTML = ''
    let oneList = document.querySelectorAll('.sectionthree__list')[0]
    let twoList = document.querySelectorAll('.sectionthree__list')[1]
    let threeList = document.querySelectorAll('.sectionthree__list')[2]
    let arrOne = ['подключение нескольких юр.лиц/брендов в одном аккаунте', 'поддержка HR-отдела / бухгалтерии', 'roadmap (стратегия и этапы)', 'договоры', 'рекомендации при росте компании по отраслям', 'производственный календарь', 'кэш-флоу сайт+бухгалтерия', 'калькуляторы налогов', 'время и посещаемость + СКУД', 'облако для работы'];
    let arrTwo = ['инструменты асессмента/оценки сотрудников', 'оргструктура + построение ДИ + наборы компетенций', 'викторины и квесты', 'создание программ обучения и стандартизации', 'город профессий 3D - обучение по специальности', 'планирование отпусков', 'контроль здоровья сотрудников, медицинские страховки', 'контроль удаленных и офисных сотрудников', 'таск-менеджер (управление проектами)', 'анализ продуктивности работы сотрудников', 'рейтинги эффективности, вовлеченности, совместной работы']
    let errThree = ['таблица назначенных собеседований', 'собеседования и история', 'шаблоны для собеседований + тестовые задачи', 'психометрические тесты', 'стажировки', 'автоматизированный процесс найма сотрудников с доступом HR-отдела', 'биржа для фрилансеров + безопасная сделка']

    function togglList(arrOne, oneList) {
        for (let i of arrOne) {
            let newList = document.createElement('li')
            oneList.append(newList)
            newList.textContent = i
            newList.classList.add('sectionthree__listelement')
        }

    }
    togglList(arrOne, oneList)
    togglList(arrTwo, twoList)
    togglList(errThree, threeList)

    lineNaberImg.style = 'margin-bottom: 43px;'


    oneNaberImg.children[0].srcset = 'home/imgsWeb/AnyConv.com__jobListOne.webp'
    oneNaberImg.children[1].src = 'home/imgs/casual-life-3d-girl-with-tablet-and-working-process-on-desktop(2).png'


    twoNaberImg.children[0].srcset = 'home/imgsWeb/AnyConv.com__jobListTwo.webp'
    twoNaberImg.children[1].src = 'home/imgs/casual-life-3d-boy-and-girl-working-on-computer(3).png'


    threeNaberImg.children[0].srcset = 'home/imgsWeb/AnyConv.com__jobListThree.webp'
    threeNaberImg.children[1].src = 'home/imgs/casual-life-3d-young-woman-looking-at-laptop-and-taking-notes-in-notebook13.png'

    oneNaberImg.style = 'width: 46%; margin-top: 112px;';
    oneNaberImg.parentElement.style = 'padding-left: 0;'

    twoNaberImg.style = 'width: 43%; margin-top: 112px;';
    twoNaberImg.parentElement.style = 'padding-right: 20px; margin-bottom: -13px;'

    threeNaberImg.style = 'width: 42%; margin-top: 20px;';
    threeNaberImg.parentElement.style = 'padding-left: 30px;'


    for (const myArr of sectiontwoElementlist) {
        myArr.children[1].style = 'line-height: 25px;padding-bottom: 8px;'
    }

    sectiononeRight.style = 'right: -65px;'
    elementListOne[0].style = 'width: 42%; max-width: 42%;'
    elementListTwo[0].style = 'width: 42%; max-width: 42%;'
    elementListThree[0].style = 'width: 42%; max-width: 42%;'

    sectionthree[0].style = 'background-image: url(home/imgs/Groupjob.png);background-position-y: 52%; margin-bottom: 38px;'




    if (width <= 1390) {
        sectiononeRight.style = 'right: 0;'
    }





    if (width <= 1080) {
        oneSectionPicture.children[2].style = 'margin-top: -11px;'
        sectiononeRight.style = 'right: 0px;'
        sectiononeRight.parentElement.style = 'margin-bottom: 40px;'


        for (const myArr of sectiontwoElementlist) {
            myArr.children[1].style = 'max-width: 100%;'
        }
        sectionthree[0].style = 'background-image: url(home/imgs/Groupjob2.png);background-position-y: 84%;'
        sectionthreeTitle.style = 'padding-left: 27px;'
        oneNaberImg.style = 'width: 55%; margin-top: 117px;'
        elementListOne[0].style = 'width: 45%; max-width: 45%;'
        elementListTwo[0].parentElement.style = ''
        twoNaberImg.children[1].style = 'max-width: 100%;'
        twoNaberImg.style = 'width: 45%; margin-top: 148px;'
        threeNaberImg.parentElement.style = 'margin-top: -25px;     padding-left: 0;'
        elementListThree[0].style = 'width: 46%; max-width: 46%; padding-right: 16px;'
        elementListThree[0].children[1].children
        threeNaberImg.style = 'width: 45%; margin-top: 81px;'
        threeNaberImg.children[1].style = 'max-width: 100%;'

        sectiononeRight.style = 'right: -3px; top: 23px;'
        for (const myArr of elementListThree[0].children[1].children) {
            myArr.style = 'margin-bottom: 7px;'
        }
        for (let i = 0; i < oneList.children.length; i++) {
            oneList.children[i].style = 'margin-bottom: 6px;    line-height: 159%;'

        }
    }
    if (width <= 760) {
        sectiononeText.style = 'margin-bottom: 29px;'
        sectiononeRight.style = 'top: 42px;'
        sectionone.style = 'margin-bottom: 50px;'
        oneNaberImg.style = 'width: 100%; margin-top: 25px;'
        twoNaberImg.style = 'width: 100%; '
        threeNaberImg.style = 'width: 100%;'
        twoNaberImg.children[1].style = 'width: 64%;'
        threeNaberImg.children[1].style = 'width: 64%;'
        sectiontwoElementlist[0].children[1].style = 'max-width: 68%;'
        sectiontwoElementlist[1].children[1].style = 'max-width: 47%;'
        sectiontwoElementlist[1].children[1].style = 'max-width: 80%;'
        elementListOne[0].style = 'width: 100%; max-width: 100%;'
        elementListTwo[0].style = 'width: 100%; max-width: 100%;'
        elementListThree[0].style = 'width: 100%; max-width: 100%;'


        for (const myArr of elementListTwo[0].children[1].children) {
            myArr.style = 'letter-spacing: -0.2px;'
        }
        elementListTwo[0].children[1].children
        threeNaberImg.children[1].style = 'width: 95%;'
        elementListTwo[0].parentElement.style = 'margin-bottom: 36px;'
        sectionthree[0].style = 'background-image: none;'
    }

    if (headerBtnone.classList.contains('header__btnoneactive') === true) {
        clickOnDarck()

    }

})


// при клике на кандидатов
btnTwo.addEventListener('click', function () {
    btnOne.classList.remove('activ')
    btnTwo.classList.add('activ')
})

const headerBtnstyletwo = document.querySelectorAll('.header__btnstyletwo')[0]

headerBtnstyletwo.addEventListener('click', function () {
    window.location.reload()

})

// если внешние сайты скачать что-то то в новой вкладке должно если no index' no fallow
// 3 отдельных страницы





// смена языка
let arrLenght = ['?language=russian', '?language=english', '?language=chinese', '?language=deutsch', '?language=french', '?language=japanese', '?language=portuguese', '?language=spanish', '?language=malay']
let arrImgLenght = ['russian', 'english', 'chinese', 'deutsch', 'french', 'japanese', 'portuguese', 'spanish', 'malay']

const arrBtmModal = ['Русский', 'English', '中文', 'Deutsch', 'Français', '日本語', 'Português', 'Español', 'Melayu', 'العربية', 'עברית',]
const arrImgsModal = ['home/imgs/artwork.png', 'home/imgs/2img.png', 'home/imgs/3img.png', 'home/imgs/4img.png', 'home/imgs/5img.png', 'home/imgs/6img.png', 'home/imgs/7img.png', 'home/imgs/8img.png', 'home/imgs/9img.png', 'home/imgs/10img.png', 'home/imgs/11img.png']
const darkModal = document.querySelectorAll('.modal')[0]
const btnLengDarkActiv = document.querySelectorAll('.modalbtnActive')[0]
const btnLengDark = document.querySelectorAll('.modalbtn')



headerBtntwo.addEventListener('click', function () {

    modal.classList.add('modalactive')
    modal.children[0].innerHTML = ''
    const createBtnClose = document.createElement('button')
    createBtnClose.classList.add('modalcontainerclosebtn', 'btn')
    modal.children[0].append(createBtnClose)
    const searchBtnCloseModal = document.querySelectorAll('.modalcontainerclosebtn')[0]

    searchBtnCloseModal.addEventListener('click', function () {
        modal.classList.remove('modalactive')
    })
    for (let i = 0; i < 11; i++) {
        let createLenghtBtn = document.createElement('a')
        createLenghtBtn.href = arrLenght[i]
        modal.children[0].append(createLenghtBtn)
        createLenghtBtn.classList.add('modalbtn', 'link')

    }



    const btnsModal = document.querySelectorAll('.modalbtn')

    let i = 0
    for (modBtnElement of btnsModal) {
        modBtnElement.textContent = arrBtmModal[i]
        modBtnElement.style = `background-image: url(${arrImgsModal[i]})`
        i++

        // if (modBtnElement.href.indexOf(headerBtntwo.id) !== -1) {
        //     modBtnElement.classList.add('modalbtnActive')
        // }
    }








    if (bodyFone.classList.contains('bodyactive') === true) {

        // darkModal.classList.add('modalactivedark')

    }

})
const arrImgsModals = ['home/imgs/leng1.png', 'home/imgs/leng2.png', 'home/imgs/leng3.png', 'home/imgs/leng4.png', 'home/imgs/leng5.png', 'home/imgs/leng6.png', 'home/imgs/leng7.png', 'home/imgs/leng7.png', 'home/imgs/leng8.png', 'home/imgs/leng9.png', 'home/imgs/leng10.png', 'home/imgs/leng11.png']

const leng = document.querySelectorAll('.header__btntwo')[0]
const lengBtn = document.querySelectorAll('.modalbtn')


headerBtnone.addEventListener('click', function () {


    const btnLengDark = document.querySelectorAll('.modalbtn')



    const oneBtn = document.querySelectorAll('.modalbtn')
    modal.classList.toggle('modalactivedark')

    if (bodyFone.classList.contains('bodyactive') === true) {
        for (let i = 0; i < arrLenght.length; i++) {

            for (element of btnLengDark) {
                console.log(element);
                // element.classList.add('modalbtnActivedarkTwo')
            }
            if (window.location.search === arrLenght[i]) {
                headerBtntwo.style = `background-image: url(${arrImgsModals[i]})`

            }
        }
    }
    if (bodyFone.classList.contains('bodyactive') === false) {
        for (let i = 0; i < arrLenght.length; i++) {
            for (element of btnLengDark) {
                console.log(element);
                // element.classList.remove('modalbtnActivedarkTwo')
            }
            if (window.location.search === arrLenght[i]) {

                headerBtntwo.style = `background-image: url(home/imgs/${arrImgLenght[i]}.png)`
            }
        }

    }

})



for (let i = 0; i < arrLenght.length; i++) {
    if (document.location.search === arrLenght[i]) {
        leng.style = `background-image: url(home/imgs/${arrImgLenght[i]}.png);`
        leng.id = arrLenght[i]
    }
}

const upBtn = document.querySelectorAll('.sectionfive__btn')[0].addEventListener('click', function () {
    window.scrollTo(0, 0)
})


// и фон у языков темный и и кнопки с языками темные
// alt на английском

// шрифт подобрать другой либо roboto