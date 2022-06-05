const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const ollieStuff = {
    'humans':{
        'speciesName' : 'Humans',
        'homeworld': 'Earth',
        'location': 'Alpha Quadrant',
        'features':'Rounded ears, hair on head and face (sometimes)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
        'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
    },
    'small dog':{
        'nickname': 'Xiao Gou Gou',
        'image': 'https://www.hartz.com/wp-content/uploads/2012/06/five_things_all_small_dog_owners_should_know_2000x786.jpg' 
    },
    'large dog':{
        'nickname': 'Da Gou Gou',
        'image': 'https://www.allthingsdogs.com/wp-content/uploads/2020/09/Large-Dog-Breeds-678x381.png' 
    },
    'bluey':{
        'nickname': 'Bluey!!',
        'image': 'https://www.allthingsdogs.com/wp-content/uploads/2020/09/Large-Dog-Breehttps://amp.firstfiveyears.org.au/kenticoimage.axd/3acf0773-42c3-4d79-b50f-f5109fbfc4f7.jpg?d=114203&width=1400&height=840&quality=70&mode=cropds-678x381.png' 
    },
    'bubbles':{
        'nickname': 'Bubblee!!',
        'image': 'https://www.allthingsdogs.com/wp-content/uploads/2020/09/Large-Dog-Breehttps://amp.firstfiveyears.org.au/kenticoimage.axd/3acf0773-42c3-4d79-b50f-f5109fbfc4f7.jpg?d=114203&width=1400&height=840&quality=70&mode=cropds-678x381.png' 
    },
    'blueberry':{
        'nickname': 'Bloo Bloo',
        'image': 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZWJlcnJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80' 
    },
    'moon':{
        'nickname': 'Moooon!!',
        'image': 'https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mediumSquareAt3X.jpg' 
    },
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:choiceItem',(request, response)=>{
    const itemList = request.params.choiceItem.toLowerCase()
    if(ollieStuff[itemList]){
        response.json(ollieStuff[itemList])
    }else{
        response.json(ollieStuff['bluey'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})
