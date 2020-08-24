// this is the data for holding which page we're on
let pageNumber = 0

// have the content for these pages
const pages = [
  {
    copy: 'Franz Ferdinand first album ',
    background: '#edc7a9',
    circle: '#f77101',
    color: '#2a2a2a',
  },
  {
    copy:
      'You Could Have It So Much Better album',
    background: '#d8e3ab',
    circle: '#cb1c2e',
    color: '#2a2a2a'
  },
  {
    copy: 'Tonight: Franz Ferdinand album',
    background: '#282a31',
    circle: '#bd9343',
    color: '#ffffff'
  },
  {
    copy:'Right Thoughts, Right Words, Right Action album',
    background: '#e3cbd3',
    circle: '#0F0E14',
    color: '#2a2a2a'
  },
  {
    copy: 'Always Ascending album',
    background: '#580f67',
    circle: '#aa5066',
    color: '#2a2a2a'
  }
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')
const textTag = document.querySelector('section div.text')

// make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
  textTag.style.color = pages[pageNumber].color
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, run this
randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  console.log(event)

  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }

  // if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})
