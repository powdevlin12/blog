const path = require('path');
const express = require('express')
    // ta đã cài rồi nên require được
const app = express()
    // là 1 func đã đc xây dựng sẵn trong express trả lại 1 đối tượng là đại diện cho cái ứng dụng nodejs cho chúng ta

const handlebars = require('express-handlebars');
const { engine } = handlebars;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// set lai thu muc views ở trong resource 
app.set('views', path.join(__dirname, 'resource/views'));
const port = 3000 // muốn run web ở port nào

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
const morgan = require('morgan');
app.use(morgan('combined'))

// định nghĩa route cho web. vd /tin-tuc thì nó sẽ vô 
app.get('/', (req, res) => {
    res.render('home');
    // server trả về cái gì thì trong response sẽ nhận đc cái đó
})

// lắng nghe cái port mình cài rồi làm gì đó.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})