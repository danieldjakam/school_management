const express = require('express');
const app = express();
const cors = require('cors');
const admZip = require('adm-zip');
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');
require('dotenv').config({path: '.env'})
const {env} = process;

const userRoutes = require('./routes/users.routes');
const classRoutes = require('./routes/class.routes');
const studentRoutes = require('./routes/student.routes');
const matiereRoutes = require('./routes/matiere.routes');
const teachersRoutes = require('./routes/teachers.routes');
const downloadRoutes = require('./routes/download.routes');
const seqRoutes = require('./routes/seq.routes');
const sendRoutes = require('./routes/send.routes');
const trimRoutes = require('./routes/trim.routes');
const comRoutes = require('./routes/com.routes');
const notesRoutes = require('./routes/notes.routes');

app.use(bodyparser.json());
app.use(cors({origin: 'http://localhost:3000'}))
app.get('/', (req, res) => {
    const zip = new admZip();
    zip.addLocalFile('docs/Testons.pdf');
    fs.writeFileSync('output.zip', zip.toBuffer());
    res.download('output.zip', (err, resp) => {
        if(err)console.log(err);
    });
})
app.use('/users', userRoutes)
app.use('/class', classRoutes)
app.use('/students', studentRoutes)
app.use('/teachers', teachersRoutes)
app.use('/matiere', matiereRoutes)
app.use('/download', downloadRoutes)
app.use('/seq', seqRoutes)
app.use('/trim', trimRoutes)
app.use('/com', comRoutes)
app.use('/notes', notesRoutes)
app.use('/send', sendRoutes)

app.listen(env.PORT, () => {
    console.log(`Listenning on ${env.PORT}`);
})