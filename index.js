const express = require('express')
    // ta đã cài rồi nên require được
const app = express()
    // là 1 func đã đc xây dựng sẵn trong express trả lại 1 đối tượng là đại diện cho cái ứng dụng nodejs cho chúng ta
const port = 3000
    // muốn run web ở port nào

// định nghĩa route cho web. vd /tin-tuc thì nó sẽ vô 
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('Hello World!');
})

// lắng nghe cái port mình cài rồi làm gì đó.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})